-- Battle Requests Table for Tornado War
-- Allows students/employees to send battle requests for territories

CREATE TABLE IF NOT EXISTS battle_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID, -- Can be NULL for localStorage-only games
    roster_id TEXT, -- For localStorage games, store roster ID
    attacker_game_student_id UUID REFERENCES game_students(id) ON DELETE CASCADE,
    attacker_student_name TEXT NOT NULL, -- For localStorage games
    defender_game_student_id UUID REFERENCES game_students(id) ON DELETE CASCADE,
    defender_student_name TEXT NOT NULL, -- For localStorage games
    tile_id TEXT NOT NULL, -- Tile identifier (can be UUID or tile ID string)
    attacker_mercenaries INTEGER NOT NULL DEFAULT 0,
    attacker_weapons INTEGER NOT NULL DEFAULT 0,
    attacker_blind BOOLEAN NOT NULL DEFAULT FALSE, -- Blind option purchased
    defender_mercenaries INTEGER, -- Set when defender responds
    defender_weapons INTEGER, -- Set when defender responds
    defender_castles INTEGER, -- Set when defender responds
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'responded', 'completed', 'withdrawn')),
    result TEXT CHECK (result IN ('attacker_wins', 'defender_wins')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    responded_at TIMESTAMP WITH TIME ZONE,
    completed_at TIMESTAMP WITH TIME ZONE
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_battle_requests_attacker ON battle_requests(attacker_student_name, roster_id, status);
CREATE INDEX IF NOT EXISTS idx_battle_requests_defender ON battle_requests(defender_student_name, roster_id, status);
CREATE INDEX IF NOT EXISTS idx_battle_requests_status ON battle_requests(status, roster_id);

-- Enable RLS
ALTER TABLE battle_requests ENABLE ROW LEVEL SECURITY;

-- Policies (if using Supabase - for localStorage games, these won't matter)
CREATE POLICY "Users can view battle requests in own games" ON battle_requests FOR SELECT
    USING (
        game_id IN (
            SELECT id FROM games 
            WHERE class_id IN (
                SELECT id FROM classes WHERE user_id = auth.uid()
            )
        )
        OR roster_id IS NOT NULL -- Allow localStorage games
    );

CREATE POLICY "Users can insert battle requests in own games" ON battle_requests FOR INSERT
    WITH CHECK (
        game_id IN (
            SELECT id FROM games 
            WHERE class_id IN (
                SELECT id FROM classes WHERE user_id = auth.uid()
            )
        )
        OR roster_id IS NOT NULL -- Allow localStorage games
    );

CREATE POLICY "Users can update battle requests in own games" ON battle_requests FOR UPDATE
    USING (
        game_id IN (
            SELECT id FROM games 
            WHERE class_id IN (
                SELECT id FROM classes WHERE user_id = auth.uid()
            )
        )
        OR roster_id IS NOT NULL -- Allow localStorage games
    );

