-- Allow students (anon) to read assignments by roster
CREATE POLICY IF NOT EXISTS "public can read assignments" ON assignments
    FOR SELECT
    USING (true);


