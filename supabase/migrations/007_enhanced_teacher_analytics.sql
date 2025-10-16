-- Enhanced database schema for comprehensive teacher analytics and cloud storage
-- This migration adds tables for standards mastery tracking, interventions, and analytics

-- Create standards mastery tracking table
CREATE TABLE IF NOT EXISTS standards_mastery (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id TEXT NOT NULL,
    roster_id UUID NOT NULL,
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    standard_code TEXT NOT NULL,
    mastery_percentage DECIMAL(5,2) NOT NULL,
    total_points DECIMAL(8,2) NOT NULL DEFAULT 0,
    earned_points DECIMAL(8,2) NOT NULL DEFAULT 0,
    assignments_count INTEGER NOT NULL DEFAULT 0,
    trend_direction TEXT CHECK (trend_direction IN ('up', 'down', 'stable')) DEFAULT 'stable',
    last_assessment_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(student_id, roster_id, standard_code, teacher_id)
);

-- Create intervention tracking table
CREATE TABLE IF NOT EXISTS interventions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id TEXT NOT NULL,
    roster_id UUID NOT NULL,
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    standard_code TEXT,
    intervention_type TEXT NOT NULL,
    intervention_title TEXT NOT NULL,
    description TEXT,
    start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    end_date TIMESTAMP WITH TIME ZONE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused', 'cancelled')),
    effectiveness_score DECIMAL(5,2),
    progress_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create analytics snapshots table for historical tracking
CREATE TABLE IF NOT EXISTS analytics_snapshots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    roster_id UUID NOT NULL,
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    snapshot_type TEXT NOT NULL CHECK (snapshot_type IN ('daily', 'weekly', 'monthly', 'assignment')),
    snapshot_data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create teacher dashboard preferences table
CREATE TABLE IF NOT EXISTS teacher_dashboard_preferences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    roster_id UUID,
    preferences JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(teacher_id, roster_id)
);

-- Create parent communication log table
CREATE TABLE IF NOT EXISTS parent_communications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id TEXT NOT NULL,
    roster_id UUID NOT NULL,
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    communication_type TEXT NOT NULL CHECK (communication_type IN ('progress_report', 'intervention_update', 'achievement', 'concern')),
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    sent_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    parent_email TEXT,
    status TEXT DEFAULT 'sent' CHECK (status IN ('sent', 'delivered', 'read', 'replied')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create student grouping table for differentiation
CREATE TABLE IF NOT EXISTS student_groups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    roster_id UUID NOT NULL,
    teacher_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    group_name TEXT NOT NULL,
    group_type TEXT NOT NULL CHECK (group_type IN ('mastery_level', 'skill_based', 'peer_tutoring', 'intervention', 'extension')),
    student_ids TEXT[] NOT NULL,
    group_criteria JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies for all new tables
ALTER TABLE standards_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE interventions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_dashboard_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE parent_communications ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_groups ENABLE ROW LEVEL SECURITY;

-- Policies for standards_mastery
CREATE POLICY "Teachers can manage their own standards mastery data" ON standards_mastery
    FOR ALL USING (auth.uid() = teacher_id);

-- Policies for interventions
CREATE POLICY "Teachers can manage their own interventions" ON interventions
    FOR ALL USING (auth.uid() = teacher_id);

-- Policies for analytics_snapshots
CREATE POLICY "Teachers can manage their own analytics snapshots" ON analytics_snapshots
    FOR ALL USING (auth.uid() = teacher_id);

-- Policies for teacher_dashboard_preferences
CREATE POLICY "Teachers can manage their own dashboard preferences" ON teacher_dashboard_preferences
    FOR ALL USING (auth.uid() = teacher_id);

-- Policies for parent_communications
CREATE POLICY "Teachers can manage their own parent communications" ON parent_communications
    FOR ALL USING (auth.uid() = teacher_id);

-- Policies for student_groups
CREATE POLICY "Teachers can manage their own student groups" ON student_groups
    FOR ALL USING (auth.uid() = teacher_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_standards_mastery_teacher_id ON standards_mastery(teacher_id);
CREATE INDEX IF NOT EXISTS idx_standards_mastery_roster_id ON standards_mastery(roster_id);
CREATE INDEX IF NOT EXISTS idx_standards_mastery_student_id ON standards_mastery(student_id);
CREATE INDEX IF NOT EXISTS idx_standards_mastery_standard_code ON standards_mastery(standard_code);
CREATE INDEX IF NOT EXISTS idx_standards_mastery_mastery_percentage ON standards_mastery(mastery_percentage);

CREATE INDEX IF NOT EXISTS idx_interventions_teacher_id ON interventions(teacher_id);
CREATE INDEX IF NOT EXISTS idx_interventions_roster_id ON interventions(roster_id);
CREATE INDEX IF NOT EXISTS idx_interventions_student_id ON interventions(student_id);
CREATE INDEX IF NOT EXISTS idx_interventions_status ON interventions(status);

CREATE INDEX IF NOT EXISTS idx_analytics_snapshots_teacher_id ON analytics_snapshots(teacher_id);
CREATE INDEX IF NOT EXISTS idx_analytics_snapshots_roster_id ON analytics_snapshots(roster_id);
CREATE INDEX IF NOT EXISTS idx_analytics_snapshots_type ON analytics_snapshots(snapshot_type);
CREATE INDEX IF NOT EXISTS idx_analytics_snapshots_created_at ON analytics_snapshots(created_at);

CREATE INDEX IF NOT EXISTS idx_parent_communications_teacher_id ON parent_communications(teacher_id);
CREATE INDEX IF NOT EXISTS idx_parent_communications_student_id ON parent_communications(student_id);
CREATE INDEX IF NOT EXISTS idx_parent_communications_sent_date ON parent_communications(sent_date);

CREATE INDEX IF NOT EXISTS idx_student_groups_teacher_id ON student_groups(teacher_id);
CREATE INDEX IF NOT EXISTS idx_student_groups_roster_id ON student_groups(roster_id);
CREATE INDEX IF NOT EXISTS idx_student_groups_type ON student_groups(group_type);

-- Create functions for automatic updates
CREATE OR REPLACE FUNCTION update_standards_mastery_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_interventions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_teacher_preferences_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION update_student_groups_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER trigger_standards_mastery_updated_at
    BEFORE UPDATE ON standards_mastery
    FOR EACH ROW
    EXECUTE FUNCTION update_standards_mastery_updated_at();

CREATE TRIGGER trigger_interventions_updated_at
    BEFORE UPDATE ON interventions
    FOR EACH ROW
    EXECUTE FUNCTION update_interventions_updated_at();

CREATE TRIGGER trigger_teacher_preferences_updated_at
    BEFORE UPDATE ON teacher_dashboard_preferences
    FOR EACH ROW
    EXECUTE FUNCTION update_teacher_preferences_updated_at();

CREATE TRIGGER trigger_student_groups_updated_at
    BEFORE UPDATE ON student_groups
    FOR EACH ROW
    EXECUTE FUNCTION update_student_groups_updated_at();

-- Create RPC functions for common operations
CREATE OR REPLACE FUNCTION sync_standards_mastery(
    p_student_id TEXT,
    p_roster_id UUID,
    p_teacher_id UUID,
    p_standard_code TEXT,
    p_mastery_percentage DECIMAL,
    p_total_points DECIMAL,
    p_earned_points DECIMAL,
    p_assignments_count INTEGER
)
RETURNS UUID AS $$
DECLARE
    result_id UUID;
BEGIN
    INSERT INTO standards_mastery (
        student_id, roster_id, teacher_id, standard_code,
        mastery_percentage, total_points, earned_points, assignments_count
    ) VALUES (
        p_student_id, p_roster_id, p_teacher_id, p_standard_code,
        p_mastery_percentage, p_total_points, p_earned_points, p_assignments_count
    )
    ON CONFLICT (student_id, roster_id, standard_code, teacher_id)
    DO UPDATE SET
        mastery_percentage = EXCLUDED.mastery_percentage,
        total_points = EXCLUDED.total_points,
        earned_points = EXCLUDED.earned_points,
        assignments_count = EXCLUDED.assignments_count,
        updated_at = NOW()
    RETURNING id INTO result_id;
    
    RETURN result_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION create_intervention(
    p_student_id TEXT,
    p_roster_id UUID,
    p_teacher_id UUID,
    p_standard_code TEXT,
    p_intervention_type TEXT,
    p_intervention_title TEXT,
    p_description TEXT
)
RETURNS UUID AS $$
DECLARE
    result_id UUID;
BEGIN
    INSERT INTO interventions (
        student_id, roster_id, teacher_id, standard_code,
        intervention_type, intervention_title, description
    ) VALUES (
        p_student_id, p_roster_id, p_teacher_id, p_standard_code,
        p_intervention_type, p_intervention_title, p_description
    )
    RETURNING id INTO result_id;
    
    RETURN result_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION save_analytics_snapshot(
    p_roster_id UUID,
    p_teacher_id UUID,
    p_snapshot_type TEXT,
    p_snapshot_data JSONB
)
RETURNS UUID AS $$
DECLARE
    result_id UUID;
BEGIN
    INSERT INTO analytics_snapshots (
        roster_id, teacher_id, snapshot_type, snapshot_data
    ) VALUES (
        p_roster_id, p_teacher_id, p_snapshot_type, p_snapshot_data
    )
    RETURNING id INTO result_id;
    
    RETURN result_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
