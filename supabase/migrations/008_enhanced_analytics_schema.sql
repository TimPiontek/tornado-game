-- Enhanced Database Schema for Comprehensive Teacher Analytics
-- This migration adds advanced tables for detailed standards mastery tracking,
-- student performance analytics, and comprehensive reporting capabilities

-- Create enhanced standards mastery tracking table
CREATE TABLE IF NOT EXISTS enhanced_standards_mastery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id TEXT NOT NULL,
    roster_id TEXT NOT NULL,
    teacher_id TEXT NOT NULL,
    standard_code TEXT NOT NULL,
    mastery_percentage DECIMAL(5,2) NOT NULL,
    attempts_count INTEGER DEFAULT 1,
    last_attempt_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    trend_direction TEXT CHECK (trend_direction IN ('improving', 'declining', 'stable')),
    trend_percentage DECIMAL(5,2),
    confidence_level DECIMAL(3,2) DEFAULT 0.8,
    assessment_type TEXT CHECK (assessment_type IN ('quiz', 'assignment', 'test', 'project', 'observation')),
    assessment_id TEXT,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create student performance analytics table
CREATE TABLE IF NOT EXISTS student_performance_analytics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id TEXT NOT NULL,
    roster_id TEXT NOT NULL,
    teacher_id TEXT NOT NULL,
    analysis_date DATE NOT NULL,
    overall_mastery DECIMAL(5,2) NOT NULL,
    academic_risk_score DECIMAL(3,2) NOT NULL,
    behavioral_risk_score DECIMAL(3,2) NOT NULL,
    social_risk_score DECIMAL(3,2) NOT NULL,
    environmental_risk_score DECIMAL(3,2) NOT NULL,
    overall_risk_score DECIMAL(3,2) NOT NULL,
    attendance_percentage DECIMAL(5,2),
    assignment_completion_percentage DECIMAL(5,2),
    participation_score DECIMAL(5,2),
    engagement_score DECIMAL(5,2),
    peer_interaction_score DECIMAL(5,2),
    teacher_interaction_score DECIMAL(5,2),
    home_support_score DECIMAL(5,2),
    technology_access_score DECIMAL(5,2),
    learning_environment_score DECIMAL(5,2),
    risk_factors JSONB,
    strengths JSONB,
    recommendations JSONB,
    alerts JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create predictive analytics predictions table
CREATE TABLE IF NOT EXISTS predictive_predictions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id TEXT NOT NULL,
    roster_id TEXT NOT NULL,
    teacher_id TEXT NOT NULL,
    prediction_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    model_name TEXT NOT NULL,
    prediction_type TEXT NOT NULL CHECK (prediction_type IN ('dropout_risk', 'academic_failure', 'intervention_need', 'graduation_risk')),
    probability DECIMAL(3,2) NOT NULL,
    confidence DECIMAL(3,2) NOT NULL,
    timeframe TEXT NOT NULL,
    contributing_factors JSONB,
    risk_level TEXT CHECK (risk_level IN ('low', 'medium', 'high', 'critical')),
    recommendations JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create student grouping history table
CREATE TABLE IF NOT EXISTS student_grouping_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    roster_id TEXT NOT NULL,
    teacher_id TEXT NOT NULL,
    grouping_strategy TEXT NOT NULL,
    group_data JSONB NOT NULL,
    total_students INTEGER NOT NULL,
    group_count INTEGER NOT NULL,
    average_group_size DECIMAL(4,2) NOT NULL,
    effectiveness_score DECIMAL(3,2),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create parent communication history table
CREATE TABLE IF NOT EXISTS parent_communication_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id TEXT NOT NULL,
    roster_id TEXT NOT NULL,
    teacher_id TEXT NOT NULL,
    communication_type TEXT NOT NULL,
    subject TEXT NOT NULL,
    content TEXT NOT NULL,
    parent_name TEXT,
    parent_email TEXT,
    communication_method TEXT CHECK (communication_method IN ('email', 'sms', 'phone', 'in_person', 'letter')),
    priority TEXT CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    status TEXT CHECK (status IN ('draft', 'scheduled', 'sent', 'delivered', 'failed', 'read')),
    scheduled_date TIMESTAMP WITH TIME ZONE,
    sent_date TIMESTAMP WITH TIME ZONE,
    delivered_date TIMESTAMP WITH TIME ZONE,
    read_date TIMESTAMP WITH TIME ZONE,
    response_received BOOLEAN DEFAULT FALSE,
    response_content TEXT,
    response_date TIMESTAMP WITH TIME ZONE,
    effectiveness_rating INTEGER CHECK (effectiveness_rating BETWEEN 1 AND 5),
    follow_up_required BOOLEAN DEFAULT FALSE,
    follow_up_date TIMESTAMP WITH TIME ZONE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create intervention tracking table
CREATE TABLE IF NOT EXISTS intervention_tracking (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id TEXT NOT NULL,
    roster_id TEXT NOT NULL,
    teacher_id TEXT NOT NULL,
    intervention_type TEXT NOT NULL,
    intervention_title TEXT NOT NULL,
    description TEXT NOT NULL,
    start_date DATE NOT NULL,
    planned_end_date DATE,
    actual_end_date DATE,
    status TEXT CHECK (status IN ('planned', 'active', 'completed', 'paused', 'cancelled')) DEFAULT 'planned',
    priority TEXT CHECK (priority IN ('low', 'medium', 'high', 'critical')) DEFAULT 'medium',
    effectiveness_score DECIMAL(3,2),
    progress_notes JSONB,
    milestones JSONB,
    resources_used JSONB,
    cost_estimate TEXT,
    success_criteria JSONB,
    outcomes JSONB,
    lessons_learned TEXT,
    recommended_for_others BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create class analytics snapshots table
CREATE TABLE IF NOT EXISTS class_analytics_snapshots (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    roster_id TEXT NOT NULL,
    teacher_id TEXT NOT NULL,
    snapshot_date DATE NOT NULL,
    snapshot_type TEXT CHECK (snapshot_type IN ('daily', 'weekly', 'monthly', 'quarterly', 'custom')),
    total_students INTEGER NOT NULL,
    average_mastery DECIMAL(5,2) NOT NULL,
    risk_distribution JSONB NOT NULL,
    class_trends JSONB NOT NULL,
    priority_students JSONB NOT NULL,
    class_recommendations JSONB NOT NULL,
    active_alerts JSONB NOT NULL,
    standards_performance JSONB NOT NULL,
    intervention_summary JSONB NOT NULL,
    communication_summary JSONB NOT NULL,
    grouping_summary JSONB NOT NULL,
    predictive_insights JSONB NOT NULL,
    teacher_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create standards performance tracking table
CREATE TABLE IF NOT EXISTS standards_performance_tracking (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    roster_id TEXT NOT NULL,
    teacher_id TEXT NOT NULL,
    standard_code TEXT NOT NULL,
    tracking_date DATE NOT NULL,
    class_average DECIMAL(5,2) NOT NULL,
    mastery_distribution JSONB NOT NULL,
    struggling_students JSONB NOT NULL,
    proficient_students JSONB NOT NULL,
    advanced_students JSONB NOT NULL,
    trend_analysis JSONB NOT NULL,
    common_misconceptions JSONB,
    recommended_actions JSONB NOT NULL,
    intervention_needed BOOLEAN DEFAULT FALSE,
    priority_level TEXT CHECK (priority_level IN ('low', 'medium', 'high', 'critical')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create teacher professional development tracking table
CREATE TABLE IF NOT EXISTS teacher_professional_development (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    teacher_id TEXT NOT NULL,
    development_area TEXT NOT NULL,
    activity_type TEXT CHECK (activity_type IN ('training', 'workshop', 'conference', 'online_course', 'peer_observation', 'self_study')),
    activity_title TEXT NOT NULL,
    description TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    hours_completed DECIMAL(4,2),
    provider TEXT,
    cost DECIMAL(8,2),
    certificate_url TEXT,
    skills_developed JSONB,
    application_notes TEXT,
    effectiveness_rating INTEGER CHECK (effectiveness_rating BETWEEN 1 AND 5),
    follow_up_actions TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_enhanced_standards_mastery_student ON enhanced_standards_mastery(student_id);
CREATE INDEX IF NOT EXISTS idx_enhanced_standards_mastery_roster ON enhanced_standards_mastery(roster_id);
CREATE INDEX IF NOT EXISTS idx_enhanced_standards_mastery_standard ON enhanced_standards_mastery(standard_code);
CREATE INDEX IF NOT EXISTS idx_enhanced_standards_mastery_date ON enhanced_standards_mastery(last_attempt_date);

CREATE INDEX IF NOT EXISTS idx_student_performance_analytics_student ON student_performance_analytics(student_id);
CREATE INDEX IF NOT EXISTS idx_student_performance_analytics_roster ON student_performance_analytics(roster_id);
CREATE INDEX IF NOT EXISTS idx_student_performance_analytics_date ON student_performance_analytics(analysis_date);

CREATE INDEX IF NOT EXISTS idx_predictive_predictions_student ON predictive_predictions(student_id);
CREATE INDEX IF NOT EXISTS idx_predictive_predictions_roster ON predictive_predictions(roster_id);
CREATE INDEX IF NOT EXISTS idx_predictive_predictions_date ON predictive_predictions(prediction_date);
CREATE INDEX IF NOT EXISTS idx_predictive_predictions_active ON predictive_predictions(is_active);

CREATE INDEX IF NOT EXISTS idx_student_grouping_history_roster ON student_grouping_history(roster_id);
CREATE INDEX IF NOT EXISTS idx_student_grouping_history_date ON student_grouping_history(created_at);

CREATE INDEX IF NOT EXISTS idx_parent_communication_history_student ON parent_communication_history(student_id);
CREATE INDEX IF NOT EXISTS idx_parent_communication_history_roster ON parent_communication_history(roster_id);
CREATE INDEX IF NOT EXISTS idx_parent_communication_history_status ON parent_communication_history(status);
CREATE INDEX IF NOT EXISTS idx_parent_communication_history_date ON parent_communication_history(created_at);

CREATE INDEX IF NOT EXISTS idx_intervention_tracking_student ON intervention_tracking(student_id);
CREATE INDEX IF NOT EXISTS idx_intervention_tracking_roster ON intervention_tracking(roster_id);
CREATE INDEX IF NOT EXISTS idx_intervention_tracking_status ON intervention_tracking(status);

CREATE INDEX IF NOT EXISTS idx_class_analytics_snapshots_roster ON class_analytics_snapshots(roster_id);
CREATE INDEX IF NOT EXISTS idx_class_analytics_snapshots_date ON class_analytics_snapshots(snapshot_date);

CREATE INDEX IF NOT EXISTS idx_standards_performance_tracking_roster ON standards_performance_tracking(roster_id);
CREATE INDEX IF NOT EXISTS idx_standards_performance_tracking_standard ON standards_performance_tracking(standard_code);
CREATE INDEX IF NOT EXISTS idx_standards_performance_tracking_date ON standards_performance_tracking(tracking_date);

CREATE INDEX IF NOT EXISTS idx_teacher_professional_development_teacher ON teacher_professional_development(teacher_id);
CREATE INDEX IF NOT EXISTS idx_teacher_professional_development_date ON teacher_professional_development(start_date);

-- Create RLS (Row Level Security) policies
ALTER TABLE enhanced_standards_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_performance_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE predictive_predictions ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_grouping_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE parent_communication_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE intervention_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE class_analytics_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE standards_performance_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_professional_development ENABLE ROW LEVEL SECURITY;

-- Create policies for teacher access
CREATE POLICY "Teachers can access their own enhanced standards mastery data" ON enhanced_standards_mastery
    FOR ALL USING (teacher_id = current_setting('app.current_user_id'));

CREATE POLICY "Teachers can access their own student performance analytics" ON student_performance_analytics
    FOR ALL USING (teacher_id = current_setting('app.current_user_id'));

CREATE POLICY "Teachers can access their own predictive predictions" ON predictive_predictions
    FOR ALL USING (teacher_id = current_setting('app.current_user_id'));

CREATE POLICY "Teachers can access their own grouping history" ON student_grouping_history
    FOR ALL USING (teacher_id = current_setting('app.current_user_id'));

CREATE POLICY "Teachers can access their own parent communications" ON parent_communication_history
    FOR ALL USING (teacher_id = current_setting('app.current_user_id'));

CREATE POLICY "Teachers can access their own intervention tracking" ON intervention_tracking
    FOR ALL USING (teacher_id = current_setting('app.current_user_id'));

CREATE POLICY "Teachers can access their own class analytics snapshots" ON class_analytics_snapshots
    FOR ALL USING (teacher_id = current_setting('app.current_user_id'));

CREATE POLICY "Teachers can access their own standards performance tracking" ON standards_performance_tracking
    FOR ALL USING (teacher_id = current_setting('app.current_user_id'));

CREATE POLICY "Teachers can access their own professional development" ON teacher_professional_development
    FOR ALL USING (teacher_id = current_setting('app.current_user_id'));

-- Create functions for automated data processing
CREATE OR REPLACE FUNCTION calculate_mastery_trend(
    student_id_param TEXT,
    standard_code_param TEXT,
    days_back INTEGER DEFAULT 30
) RETURNS TABLE (
    trend_direction TEXT,
    trend_percentage DECIMAL(5,2),
    confidence_level DECIMAL(3,2)
) AS $$
BEGIN
    RETURN QUERY
    WITH recent_data AS (
        SELECT mastery_percentage, last_attempt_date
        FROM enhanced_standards_mastery
        WHERE student_id = student_id_param
        AND standard_code = standard_code_param
        AND last_attempt_date >= NOW() - INTERVAL '%s days' % days_back
        ORDER BY last_attempt_date DESC
        LIMIT 5
    ),
    trend_calc AS (
        SELECT 
            CASE 
                WHEN COUNT(*) < 2 THEN 'stable'
                WHEN AVG(mastery_percentage) - LAG(AVG(mastery_percentage)) OVER (ORDER BY last_attempt_date) > 5 THEN 'improving'
                WHEN AVG(mastery_percentage) - LAG(AVG(mastery_percentage)) OVER (ORDER BY last_attempt_date) < -5 THEN 'declining'
                ELSE 'stable'
            END as trend_dir,
            CASE 
                WHEN COUNT(*) < 2 THEN 0
                ELSE ABS(AVG(mastery_percentage) - LAG(AVG(mastery_percentage)) OVER (ORDER BY last_attempt_date))
            END as trend_pct,
            CASE 
                WHEN COUNT(*) >= 3 THEN 0.9
                WHEN COUNT(*) = 2 THEN 0.7
                ELSE 0.5
            END as conf_level
        FROM recent_data
    )
    SELECT trend_dir, trend_pct, conf_level FROM trend_calc;
END;
$$ LANGUAGE plpgsql;

-- Create function to update mastery trends
CREATE OR REPLACE FUNCTION update_mastery_trends() RETURNS VOID AS $$
BEGIN
    UPDATE enhanced_standards_mastery
    SET 
        trend_direction = trend_data.trend_direction,
        trend_percentage = trend_data.trend_percentage,
        confidence_level = trend_data.confidence_level,
        updated_at = NOW()
    FROM (
        SELECT 
            esm.id,
            td.trend_direction,
            td.trend_percentage,
            td.confidence_level
        FROM enhanced_standards_mastery esm
        CROSS JOIN LATERAL calculate_mastery_trend(esm.student_id, esm.standard_code) td
        WHERE esm.last_attempt_date >= NOW() - INTERVAL '7 days'
    ) trend_data
    WHERE enhanced_standards_mastery.id = trend_data.id;
END;
$$ LANGUAGE plpgsql;

-- Create function to generate class analytics snapshot
CREATE OR REPLACE FUNCTION generate_class_analytics_snapshot(
    roster_id_param TEXT,
    teacher_id_param TEXT,
    snapshot_type_param TEXT DEFAULT 'weekly'
) RETURNS UUID AS $$
DECLARE
    snapshot_id UUID;
    total_students_count INTEGER;
    avg_mastery DECIMAL(5,2);
    risk_dist JSONB;
    class_trends JSONB;
    priority_students JSONB;
    class_recommendations JSONB;
    active_alerts JSONB;
    standards_perf JSONB;
    intervention_sum JSONB;
    communication_sum JSONB;
    grouping_sum JSONB;
    predictive_insights JSONB;
BEGIN
    -- Calculate basic metrics
    SELECT COUNT(DISTINCT student_id) INTO total_students_count
    FROM enhanced_standards_mastery
    WHERE roster_id = roster_id_param;
    
    SELECT AVG(mastery_percentage) INTO avg_mastery
    FROM enhanced_standards_mastery
    WHERE roster_id = roster_id_param
    AND last_attempt_date >= NOW() - INTERVAL '7 days';
    
    -- Calculate risk distribution
    SELECT jsonb_build_object(
        'critical', COUNT(*) FILTER (WHERE overall_risk_score > 0.8),
        'high', COUNT(*) FILTER (WHERE overall_risk_score > 0.6 AND overall_risk_score <= 0.8),
        'medium', COUNT(*) FILTER (WHERE overall_risk_score > 0.4 AND overall_risk_score <= 0.6),
        'low', COUNT(*) FILTER (WHERE overall_risk_score <= 0.4)
    ) INTO risk_dist
    FROM student_performance_analytics
    WHERE roster_id = roster_id_param
    AND analysis_date >= CURRENT_DATE - INTERVAL '7 days';
    
    -- Insert snapshot
    INSERT INTO class_analytics_snapshots (
        roster_id, teacher_id, snapshot_date, snapshot_type,
        total_students, average_mastery, risk_distribution,
        class_trends, priority_students, class_recommendations,
        active_alerts, standards_performance, intervention_summary,
        communication_summary, grouping_summary, predictive_insights
    ) VALUES (
        roster_id_param, teacher_id_param, CURRENT_DATE, snapshot_type_param,
        total_students_count, avg_mastery, risk_dist,
        '{}', '[]', '[]',
        '[]', '{}', '{}',
        '{}', '{}', '{}'
    ) RETURNING id INTO snapshot_id;
    
    RETURN snapshot_id;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_enhanced_standards_mastery_updated_at
    BEFORE UPDATE ON enhanced_standards_mastery
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_parent_communication_history_updated_at
    BEFORE UPDATE ON parent_communication_history
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_intervention_tracking_updated_at
    BEFORE UPDATE ON intervention_tracking
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create view for comprehensive student analytics
CREATE OR REPLACE VIEW comprehensive_student_analytics AS
SELECT 
    spa.student_id,
    spa.roster_id,
    spa.teacher_id,
    spa.analysis_date,
    spa.overall_mastery,
    spa.overall_risk_score,
    spa.academic_risk_score,
    spa.behavioral_risk_score,
    spa.social_risk_score,
    spa.environmental_risk_score,
    spa.attendance_percentage,
    spa.assignment_completion_percentage,
    spa.participation_score,
    spa.engagement_score,
    spa.risk_factors,
    spa.strengths,
    spa.recommendations,
    spa.alerts,
    -- Add latest predictions
    pp.prediction_type,
    pp.probability as prediction_probability,
    pp.confidence as prediction_confidence,
    pp.risk_level as prediction_risk_level,
    -- Add latest intervention
    it.intervention_type,
    it.intervention_title,
    it.status as intervention_status,
    it.effectiveness_score as intervention_effectiveness,
    -- Add latest communication
    pch.communication_type as latest_communication_type,
    pch.status as latest_communication_status,
    pch.sent_date as latest_communication_date
FROM student_performance_analytics spa
LEFT JOIN LATERAL (
    SELECT * FROM predictive_predictions pp2
    WHERE pp2.student_id = spa.student_id
    AND pp2.is_active = TRUE
    ORDER BY pp2.prediction_date DESC
    LIMIT 1
) pp ON TRUE
LEFT JOIN LATERAL (
    SELECT * FROM intervention_tracking it2
    WHERE it2.student_id = spa.student_id
    AND it2.status IN ('active', 'planned')
    ORDER BY it2.start_date DESC
    LIMIT 1
) it ON TRUE
LEFT JOIN LATERAL (
    SELECT * FROM parent_communication_history pch2
    WHERE pch2.student_id = spa.student_id
    ORDER BY pch2.created_at DESC
    LIMIT 1
) pch ON TRUE;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;
