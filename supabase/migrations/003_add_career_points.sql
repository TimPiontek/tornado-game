-- Add career_points to students for lifetime earned points
ALTER TABLE students ADD COLUMN IF NOT EXISTS career_points INTEGER NOT NULL DEFAULT 0;

-- Optional: index for leaderboard queries
CREATE INDEX IF NOT EXISTS idx_students_career_points ON students(career_points DESC);


