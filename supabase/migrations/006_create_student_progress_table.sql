-- Create student progress table for tracking game scores and progress
-- This table stores individual student progress across all games and activities

CREATE TABLE IF NOT EXISTS student_progress (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id TEXT NOT NULL, -- Local student ID from rosters
    roster_id UUID NOT NULL, -- Reference to the roster
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    total_points INTEGER NOT NULL DEFAULT 0,
    quiz_games_played INTEGER NOT NULL DEFAULT 0,
    war_games_played INTEGER NOT NULL DEFAULT 0,
    questions_answered INTEGER NOT NULL DEFAULT 0,
    correct_answers INTEGER NOT NULL DEFAULT 0,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(student_id, roster_id, teacher_id)
);

-- Add RLS policy for student progress table
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;

-- Policy: Teachers can only access progress for their own students
CREATE POLICY "Teachers can manage their own student progress" ON student_progress
    FOR ALL USING (auth.uid() = teacher_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_student_progress_teacher_id ON student_progress(teacher_id);
CREATE INDEX IF NOT EXISTS idx_student_progress_roster_id ON student_progress(roster_id);
CREATE INDEX IF NOT EXISTS idx_student_progress_student_id ON student_progress(student_id);
CREATE INDEX IF NOT EXISTS idx_student_progress_total_points ON student_progress(total_points DESC);
