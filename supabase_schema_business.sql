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


