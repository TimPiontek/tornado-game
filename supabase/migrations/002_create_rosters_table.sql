-- Create rosters table for Tornado War
-- This table stores teacher rosters and game state data

CREATE TABLE IF NOT EXISTS rosters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    data JSONB NOT NULL DEFAULT '{}',
    last_modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policy for rosters table
ALTER TABLE rosters ENABLE ROW LEVEL SECURITY;

-- Policy: Teachers can only access their own rosters
CREATE POLICY "Teachers can manage their own rosters" ON rosters
    FOR ALL USING (auth.uid() = teacher_id);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_rosters_teacher_id ON rosters(teacher_id);
CREATE INDEX IF NOT EXISTS idx_rosters_last_modified ON rosters(last_modified);
