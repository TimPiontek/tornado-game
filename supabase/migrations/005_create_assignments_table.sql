-- Create assignments table for Tornado War
-- This table stores teacher assignments and student submissions

CREATE TABLE IF NOT EXISTS assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL CHECK (type IN ('multiple_choice', 'short_answer', 'mixed')),
    roster_id UUID NOT NULL,
    questions JSONB NOT NULL DEFAULT '[]',
    submissions JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_modified TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policy for assignments table
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;

-- Policy: Teachers can only access their own assignments
CREATE POLICY "Teachers can manage their own assignments" ON assignments
    FOR ALL USING (auth.uid() = teacher_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_assignments_teacher_id ON assignments(teacher_id);
CREATE INDEX IF NOT EXISTS idx_assignments_roster_id ON assignments(roster_id);
CREATE INDEX IF NOT EXISTS idx_assignments_created_at ON assignments(created_at);
