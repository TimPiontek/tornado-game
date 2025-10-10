-- Tornado Business core schema (run in Supabase SQL editor)

create extension if not exists pgcrypto;

create table if not exists games (
  id uuid primary key default gen_random_uuid(),
  code text unique,
  name text,
  scenario text,
  starting_points int,
  board_w int,
  board_h int,
  duration text,
  created_at timestamptz default now()
);

create table if not exists employees (
  id text,
  game_id uuid references games(id) on delete cascade,
  name text,
  team text,
  points int default 0,
  credits int default 0,
  balance int default 0,
  primary key (id, game_id)
);

create table if not exists tiles (
  game_id uuid references games(id) on delete cascade,
  tile_id text,
  x int,
  y int,
  owner_employee_id text,
  is_headquarters boolean default false,
  cost int default 20,
  primary key (game_id, tile_id)
);

create table if not exists metrics (
  game_id uuid references games(id) on delete cascade,
  key text,
  name text,
  unit text,
  target numeric,
  current numeric,
  weight numeric default 1,
  primary key (game_id, key)
);

create table if not exists activity_feed (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  actor_id text,
  action text,
  detail jsonb,
  created_at timestamptz default now()
);

create table if not exists announcements (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  title text,
  body text,
  created_at timestamptz default now()
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  to_employee_id text,
  from_employee_id text,
  kind text,
  payload jsonb,
  read_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists integrations (
  id uuid primary key default gen_random_uuid(),
  type text unique,
  status text,
  token text,
  settings jsonb,
  created_at timestamptz default now()
);

create table if not exists assignments (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  title text,
  body text,
  audience text,
  due_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists assignment_submissions (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid references assignments(id) on delete cascade,
  game_id uuid references games(id) on delete cascade,
  employee_id text,
  status text,
  completed_at timestamptz
);

create table if not exists recognitions (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  text text,
  reactions jsonb,
  created_at timestamptz default now()
);

create table if not exists rules (
  id uuid primary key default gen_random_uuid(),
  metric_name text,
  condition text,
  badge_id text,
  points int,
  notify boolean default false,
  created_at timestamptz default now()
);

create table if not exists quests (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  title text,
  body text,
  points int,
  audience text,
  recurrence_type text,
  weekdays text[],
  time_of_day text,
  start_date date,
  end_date date,
  next_run_at timestamptz,
  last_run_at timestamptz,
  status text default 'active'
);

create table if not exists quest_assignments (
  id uuid primary key default gen_random_uuid(),
  quest_id uuid references quests(id) on delete cascade,
  game_id uuid references games(id) on delete cascade,
  employee_id text,
  status text default 'pending',
  sent_at timestamptz,
  due_at timestamptz,
  completed_at timestamptz
);

-- NOTE: Add RLS policies to match your security model.
-- Example (read for everyone, write by anon for demo only — tighten for prod):
alter table games enable row level security;
create policy if not exists g_select on games for select using (true);
create policy if not exists g_insert on games for insert with check (true);
-- Repeat similar simple policies for other tables, then harden later.

-- Optional: server-side Quest scheduler using Postgres function + pg_cron
-- Enable pg_cron in Database > Extensions (pg_cron) before running the block below.
do $$ begin
  perform 1 from pg_extension where extname='pg_cron';
  if found then
    -- Function to process due quests
    create or replace function public.process_due_quests()
    returns void
    language plpgsql
    as $$
    declare
      q record;
      now_ts timestamptz := now();
      next_ts timestamptz;
      e record;
    begin
      for q in select * from quests where status='active' and (next_run_at is not null and next_run_at <= now_ts) loop
        -- enqueue assignments for audience
        if q.audience is null or q.audience='all' then
          for e in select * from employees where game_id = q.game_id loop
            insert into quest_assignments(quest_id, game_id, employee_id, status, sent_at)
            values(q.id, q.game_id, e.id, 'pending', now_ts)
            on conflict do nothing;
          end loop;
        elsif position('team:' in q.audience)=1 then
          for e in select * from employees where game_id = q.game_id and team = split_part(q.audience,':',2) loop
            insert into quest_assignments(quest_id, game_id, employee_id, status, sent_at)
            values(q.id, q.game_id, e.id, 'pending', now_ts)
            on conflict do nothing;
          end loop;
        end if;
        -- compute next run (simple: add 1 day until within window & weekday)
        next_ts := q.next_run_at + interval '1 day';
        while next_ts is not null loop
          exit when (q.end_date is not null and next_ts::date > q.end_date);
          if q.recurrence_type='one_time' then
            next_ts := null; -- only once
            exit;
          end if;
          -- weekday check
          if q.weekdays is null or array_to_string(q.weekdays, ',')='' then
            -- default every day
            update quests set last_run_at = now_ts, next_run_at = next_ts where id=q.id;
            exit;
          elsif to_char(next_ts,'Dy') = any (q.weekdays) then
            update quests set last_run_at = now_ts, next_run_at = next_ts where id=q.id;
            exit;
          else
            next_ts := next_ts + interval '1 day';
          end if;
        end loop;
        if next_ts is null then
          update quests set last_run_at = now_ts, next_run_at = null where id=q.id; -- completed schedule
        end if;
      end loop;
    end $$;

    -- Schedule every 5 minutes
    perform cron.schedule('process_due_quests_5min', '*/5 * * * *', $$select public.process_due_quests();$$);
  end if;
end $$;


