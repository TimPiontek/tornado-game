-- Allow students to read rosters by class code
-- This enables students to join classes using the class code

-- Drop existing policy if it exists (we'll recreate it)
DROP POLICY IF EXISTS "Teachers can manage their own rosters" ON rosters;

-- Recreate policy for teachers to manage their own rosters
CREATE POLICY "Teachers can manage their own rosters" ON rosters
    FOR ALL USING (auth.uid() = teacher_id);

-- New policy: Allow anyone (including students) to SELECT rosters
-- This is safe because students can only see the roster data, not modify it
-- Teachers can still manage their own rosters via the policy above
CREATE POLICY "Anyone can read rosters for class joining" ON rosters
    FOR SELECT USING (true);

-- Alternative: If you want to be more restrictive, you could use this instead:
-- CREATE POLICY "Students can read rosters by class code" ON rosters
--     FOR SELECT USING (
--         (data->>'classCode') IS NOT NULL
--     );

