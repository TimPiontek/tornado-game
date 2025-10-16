-- Tornado Business Fixed Schema (run in Supabase SQL editor)
-- This fixes the schema mismatches identified by the test suite

create extension if not exists pgcrypto;

-- Drop existing tables if they exist (for clean reinstall)
drop table if exists quest_assignments cascade;
drop table if exists quests cascade;
drop table if exists rules cascade;
drop table if exists recognitions cascade;
drop table if exists assignment_submissions cascade;
drop table if exists assignments cascade;
drop table if exists integrations cascade;
drop table if exists notifications cascade;
drop table if exists announcements cascade;
drop table if exists activity_feed cascade;
drop table if exists metrics cascade;
drop table if exists tiles cascade;
drop table if exists employees cascade;
drop table if exists games cascade;

-- Games table with 'code' column (was missing)
create table games (
  id uuid primary key default gen_random_uuid(),
  code text unique,
  name text,
  mode text default 'business',
  scenario text,
  starting_points int,
  board_w int,
  board_h int,
  duration text,
  created_at timestamptz default now()
);

-- Employees table with proper foreign key
create table employees (
  id text,
  game_id uuid references games(id) on delete cascade,
  name text,
  team text,
  points int default 0,
  credits int default 0,
  balance int default 0,
  tiles_owned int default 0,
  primary key (id, game_id)
);

-- Tiles table with 'cost' column (was missing)
create table tiles (
  game_id uuid references games(id) on delete cascade,
  tile_id text,
  x int,
  y int,
  owner_employee_id text,
  headquarters_level int default 0,
  cost int default 20,
  primary key (game_id, tile_id)
);

-- Metrics table
create table metrics (
  game_id uuid references games(id) on delete cascade,
  key text,
  name text,
  unit text,
  target numeric,
  current numeric,
  weight numeric default 1,
  primary key (game_id, key)
);

-- Activity feed table with 'employee_id' column (was missing)
create table activity_feed (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  employee_id text,
  action text,
  detail jsonb,
  created_at timestamptz default now()
);

-- Announcements table
create table announcements (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  title text,
  body text,
  created_at timestamptz default now()
);

-- Notifications table
create table notifications (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  to_employee_id text,
  from_employee_id text,
  kind text,
  payload jsonb,
  read_at timestamptz,
  created_at timestamptz default now()
);

-- Integrations table
create table integrations (
  id uuid primary key default gen_random_uuid(),
  type text unique,
  status text,
  token text,
  settings jsonb,
  created_at timestamptz default now()
);

-- Assignments table
create table assignments (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  title text,
  body text,
  audience text,
  due_at timestamptz,
  created_at timestamptz default now()
);

-- Assignment submissions table
create table assignment_submissions (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid references assignments(id) on delete cascade,
  game_id uuid references games(id) on delete cascade,
  employee_id text,
  status text,
  completed_at timestamptz
);

-- Recognitions table
create table recognitions (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references games(id) on delete cascade,
  text text,
  reactions jsonb,
  created_at timestamptz default now()
);

-- Rules table
create table rules (
  id uuid primary key default gen_random_uuid(),
  metric_name text,
  condition text,
  badge_id text,
  points int,
  notify boolean default false,
  created_at timestamptz default now()
);

-- Quests table
create table quests (
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

-- Quest assignments table
create table quest_assignments (
  id uuid primary key default gen_random_uuid(),
  quest_id uuid references quests(id) on delete cascade,
  game_id uuid references games(id) on delete cascade,
  employee_id text,
  status text default 'pending',
  sent_at timestamptz,
  due_at timestamptz,
  completed_at timestamptz
);

-- Enable RLS policies
alter table games enable row level security;
alter table employees enable row level security;
alter table tiles enable row level security;
alter table metrics enable row level security;
alter table activity_feed enable row level security;
alter table announcements enable row level security;
alter table notifications enable row level security;
alter table integrations enable row level security;
alter table assignments enable row level security;
alter table assignment_submissions enable row level security;
alter table recognitions enable row level security;
alter table rules enable row level security;
alter table quests enable row level security;
alter table quest_assignments enable row level security;

-- Create RLS policies (permissive for demo - tighten for production)
create policy if not exists g_select on games for select using (true);
create policy if not exists g_insert on games for insert with check (true);
create policy if not exists g_update on games for update using (true);
create policy if not exists g_delete on games for delete using (true);

create policy if not exists e_select on employees for select using (true);
create policy if not exists e_insert on employees for insert with check (true);
create policy if not exists e_update on employees for update using (true);
create policy if not exists e_delete on employees for delete using (true);

create policy if not exists t_select on tiles for select using (true);
create policy if not exists t_insert on tiles for insert with check (true);
create policy if not exists t_update on tiles for update using (true);
create policy if not exists t_delete on tiles for delete using (true);

create policy if not exists m_select on metrics for select using (true);
create policy if not exists m_insert on metrics for insert with check (true);
create policy if not exists m_update on metrics for update using (true);
create policy if not exists m_delete on metrics for delete using (true);

create policy if not exists af_select on activity_feed for select using (true);
create policy if not exists af_insert on activity_feed for insert with check (true);
create policy if not exists af_update on activity_feed for update using (true);
create policy if not exists af_delete on activity_feed for delete using (true);

create policy if not exists a_select on announcements for select using (true);
create policy if not exists a_insert on announcements for insert with check (true);
create policy if not exists a_update on announcements for update using (true);
create policy if not exists a_delete on announcements for delete using (true);

create policy if not exists n_select on notifications for select using (true);
create policy if not exists n_insert on notifications for insert with check (true);
create policy if not exists n_update on notifications for update using (true);
create policy if not exists n_delete on notifications for delete using (true);

create policy if not exists i_select on integrations for select using (true);
create policy if not exists i_insert on integrations for insert with check (true);
create policy if not exists i_update on integrations for update using (true);
create policy if not exists i_delete on integrations for delete using (true);

create policy if not exists as_select on assignments for select using (true);
create policy if not exists as_insert on assignments for insert with check (true);
create policy if not exists as_update on assignments for update using (true);
create policy if not exists as_delete on assignments for delete using (true);

create policy if not exists ass_select on assignment_submissions for select using (true);
create policy if not exists ass_insert on assignment_submissions for insert with check (true);
create policy if not exists ass_update on assignment_submissions for update using (true);
create policy if not exists ass_delete on assignment_submissions for delete using (true);

create policy if not exists r_select on recognitions for select using (true);
create policy if not exists r_insert on recognitions for insert with check (true);
create policy if not exists r_update on recognitions for update using (true);
create policy if not exists r_delete on recognitions for delete using (true);

create policy if not exists ru_select on rules for select using (true);
create policy if not exists ru_insert on rules for insert with check (true);
create policy if not exists ru_update on rules for update using (true);
create policy if not exists ru_delete on rules for delete using (true);

create policy if not exists q_select on quests for select using (true);
create policy if not exists q_insert on quests for insert with check (true);
create policy if not exists q_update on quests for update using (true);
create policy if not exists q_delete on quests for delete using (true);

create policy if not exists qa_select on quest_assignments for select using (true);
create policy if not exists qa_insert on quest_assignments for insert with check (true);
create policy if not exists qa_update on quest_assignments for update using (true);
create policy if not exists qa_delete on quest_assignments for delete using (true);

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

