-- RPC to increment a student's career_points atomically
create or replace function increment_career_points(p_student_id uuid, p_delta integer)
returns void
language plpgsql
security definer
as $$
begin
  update students
     set career_points = greatest(0, coalesce(career_points,0) + coalesce(p_delta,0))
   where id = p_student_id;
end;
$$;

revoke all on function increment_career_points(uuid, integer) from public;
grant execute on function increment_career_points(uuid, integer) to anon, authenticated;

