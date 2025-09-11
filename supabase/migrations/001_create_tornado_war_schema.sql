-- Tornado War Database Schema
-- This migration creates all tables and RPC functions for the Tornado War game

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================
-- CORE TABLES
-- ==============================================

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Classes table
CREATE TABLE IF NOT EXISTS classes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Students table
CREATE TABLE IF NOT EXISTS students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
    display_name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Games table
CREATE TABLE IF NOT EXISTS games (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    board_w INTEGER NOT NULL DEFAULT 8,
    board_h INTEGER NOT NULL DEFAULT 8,
    victory_target_pct NUMERIC(3,2) NOT NULL DEFAULT 0.50,
    turn_based BOOLEAN NOT NULL DEFAULT FALSE,
    status TEXT NOT NULL DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Game students table (junction table)
CREATE TABLE IF NOT EXISTS game_students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID NOT NULL REFERENCES games(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    start_points INTEGER NOT NULL DEFAULT 5,
    tiles_owned INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(game_id, student_id)
);

-- Tiles table
CREATE TABLE IF NOT EXISTS tiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID NOT NULL REFERENCES games(id) ON DELETE CASCADE,
    x INTEGER NOT NULL,
    y INTEGER NOT NULL,
    owner_game_student_id UUID REFERENCES game_students(id) ON DELETE SET NULL,
    castle_level INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(game_id, x, y)
);

-- ==============================================
-- ECONOMY & ACTIONS TABLES
-- ==============================================

-- Transactions table
CREATE TABLE IF NOT EXISTS transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_student_id UUID NOT NULL REFERENCES game_students(id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('earn', 'spend')),
    amount INTEGER NOT NULL,
    meta JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Truces table
CREATE TABLE IF NOT EXISTS truces (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID NOT NULL REFERENCES games(id) ON DELETE CASCADE,
    a_game_student_id UUID NOT NULL REFERENCES game_students(id) ON DELETE CASCADE,
    b_game_student_id UUID NOT NULL REFERENCES game_students(id) ON DELETE CASCADE,
    proposer_game_student_id UUID NOT NULL REFERENCES game_students(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'proposed' CHECK (status IN ('proposed', 'active', 'declined', 'revoked')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(game_id, a_game_student_id, b_game_student_id)
);

-- Audit log table
CREATE TABLE IF NOT EXISTS audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    game_id UUID NOT NULL REFERENCES games(id) ON DELETE CASCADE,
    actor TEXT NOT NULL,
    action TEXT NOT NULL,
    meta JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_students ENABLE ROW LEVEL SECURITY;
ALTER TABLE tiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE truces ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON users FOR INSERT WITH CHECK (auth.uid() = id);

-- Classes policies
CREATE POLICY "Users can view own classes" ON classes FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own classes" ON classes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own classes" ON classes FOR UPDATE USING (auth.uid() = user_id);

-- Students policies
CREATE POLICY "Users can view students in own classes" ON students FOR SELECT 
    USING (class_id IN (SELECT id FROM classes WHERE user_id = auth.uid()));
CREATE POLICY "Users can insert students in own classes" ON students FOR INSERT 
    WITH CHECK (class_id IN (SELECT id FROM classes WHERE user_id = auth.uid()));
CREATE POLICY "Users can update students in own classes" ON students FOR UPDATE 
    USING (class_id IN (SELECT id FROM classes WHERE user_id = auth.uid()));

-- Games policies
CREATE POLICY "Users can view games in own classes" ON games FOR SELECT 
    USING (class_id IN (SELECT id FROM classes WHERE user_id = auth.uid()));
CREATE POLICY "Users can insert games in own classes" ON games FOR INSERT 
    WITH CHECK (class_id IN (SELECT id FROM classes WHERE user_id = auth.uid()));
CREATE POLICY "Users can update games in own classes" ON games FOR UPDATE 
    USING (class_id IN (SELECT id FROM classes WHERE user_id = auth.uid()));

-- Game students policies
CREATE POLICY "Users can view game students in own games" ON game_students FOR SELECT 
    USING (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));
CREATE POLICY "Users can insert game students in own games" ON game_students FOR INSERT 
    WITH CHECK (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));
CREATE POLICY "Users can update game students in own games" ON game_students FOR UPDATE 
    USING (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));

-- Tiles policies
CREATE POLICY "Users can view tiles in own games" ON tiles FOR SELECT 
    USING (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));
CREATE POLICY "Users can insert tiles in own games" ON tiles FOR INSERT 
    WITH CHECK (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));
CREATE POLICY "Users can update tiles in own games" ON tiles FOR UPDATE 
    USING (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));

-- Transactions policies
CREATE POLICY "Users can view transactions in own games" ON transactions FOR SELECT 
    USING (game_student_id IN (SELECT id FROM game_students WHERE game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid()))));
CREATE POLICY "Users can insert transactions in own games" ON transactions FOR INSERT 
    WITH CHECK (game_student_id IN (SELECT id FROM game_students WHERE game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid()))));

-- Truces policies
CREATE POLICY "Users can view truces in own games" ON truces FOR SELECT 
    USING (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));
CREATE POLICY "Users can insert truces in own games" ON truces FOR INSERT 
    WITH CHECK (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));
CREATE POLICY "Users can update truces in own games" ON truces FOR UPDATE 
    USING (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));

-- Audit log policies
CREATE POLICY "Users can view audit logs in own games" ON audit_log FOR SELECT 
    USING (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));
CREATE POLICY "Users can insert audit logs in own games" ON audit_log FOR INSERT 
    WITH CHECK (game_id IN (SELECT id FROM games WHERE class_id IN (SELECT id FROM classes WHERE user_id = auth.uid())));

-- ==============================================
-- RPC FUNCTIONS
-- ==============================================

-- Function to ensure user exists
CREATE OR REPLACE FUNCTION ensure_user()
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    INSERT INTO users (id, email)
    VALUES (auth.uid(), auth.jwt() ->> 'email')
    ON CONFLICT (id) DO NOTHING;
END;
$$;

-- Function to create game from roster
CREATE OR REPLACE FUNCTION create_game_from_roster(
    p_class_name TEXT,
    p_game_name TEXT,
    p_student_names TEXT,
    p_board_w INTEGER DEFAULT NULL,
    p_board_h INTEGER DEFAULT NULL,
    p_start_points INTEGER DEFAULT 5
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_user_id UUID;
    v_class_id UUID;
    v_game_id UUID;
    v_student_names TEXT[];
    v_student_name TEXT;
    v_student_id UUID;
    v_game_student_id UUID;
    v_board_w INTEGER;
    v_board_h INTEGER;
    v_x INTEGER;
    v_y INTEGER;
    v_tile_id UUID;
    v_total_tiles INTEGER;
    v_target_tiles_per_student INTEGER;
    v_victory_pct NUMERIC;
    v_max_start_tiles INTEGER;
    v_assigned_tiles INTEGER;
    v_random_tile_id UUID;
    v_game_student_ids UUID[];
    v_current_student_index INTEGER;
BEGIN
    -- Get current user
    v_user_id := auth.uid();
    IF v_user_id IS NULL THEN
        RAISE EXCEPTION 'User not authenticated';
    END IF;

    -- Ensure user exists
    INSERT INTO users (id, email)
    VALUES (v_user_id, auth.jwt() ->> 'email')
    ON CONFLICT (id) DO NOTHING;

    -- Create or get class
    INSERT INTO classes (user_id, name)
    VALUES (v_user_id, p_class_name)
    ON CONFLICT (user_id, name) DO NOTHING
    RETURNING id INTO v_class_id;
    
    IF v_class_id IS NULL THEN
        SELECT id INTO v_class_id FROM classes WHERE user_id = v_user_id AND name = p_class_name;
    END IF;

    -- Parse student names (split by newlines, trim, filter empty)
    v_student_names := ARRAY(
        SELECT TRIM(name) 
        FROM unnest(string_to_array(p_student_names, E'\n')) AS name 
        WHERE TRIM(name) != ''
    );

    -- Calculate board size if not provided
    v_board_w := COALESCE(p_board_w, GREATEST(8, CEIL(SQRT(array_length(v_student_names, 1) * 2))));
    v_board_h := COALESCE(p_board_h, GREATEST(8, CEIL(SQRT(array_length(v_student_names, 1) * 2))));

    -- Create game
    INSERT INTO games (class_id, name, board_w, board_h)
    VALUES (v_class_id, p_game_name, v_board_w, v_board_h)
    RETURNING id INTO v_game_id;

    -- Create students and game_students
    FOREACH v_student_name IN ARRAY v_student_names
    LOOP
        -- Create student
        INSERT INTO students (class_id, display_name)
        VALUES (v_class_id, v_student_name)
        RETURNING id INTO v_student_id;

        -- Create game_student
        INSERT INTO game_students (game_id, student_id, start_points, tiles_owned)
        VALUES (v_game_id, v_student_id, p_start_points, 0)
        RETURNING id INTO v_game_student_id;
    END LOOP;

    -- Create tiles grid
    FOR v_y IN 0..(v_board_h - 1)
    LOOP
        FOR v_x IN 0..(v_board_w - 1)
        LOOP
            INSERT INTO tiles (game_id, x, y, owner_game_student_id, castle_level)
            VALUES (v_game_id, v_x, v_y, NULL, 0)
            RETURNING id INTO v_tile_id;
        END LOOP;
    END LOOP;

    -- Pre-assign starting territories to students
    -- Calculate how many tiles each student should start with
    -- Target: ~1/4 of total board, but capped at victory percentage
    -- Get total tiles and victory percentage
    v_total_tiles := v_board_w * v_board_h;
    SELECT victory_target_pct INTO v_victory_pct FROM games WHERE id = v_game_id;
    
    -- Calculate target tiles per student (1/4 of board divided by students)
    v_target_tiles_per_student := GREATEST(1, CEIL(v_total_tiles * 0.25 / array_length(v_student_names, 1)));
    
    -- Cap at victory percentage (convert to absolute number)
    v_max_start_tiles := CEIL(v_total_tiles * v_victory_pct);
    v_target_tiles_per_student := LEAST(v_target_tiles_per_student, v_max_start_tiles);
    
    -- Get all game_student_ids
    SELECT ARRAY_AGG(id) INTO v_game_student_ids FROM game_students WHERE game_id = v_game_id;
    
    -- Assign tiles to each student
    FOREACH v_student_name IN ARRAY v_student_names
    LOOP
        v_current_student_index := array_position(v_student_names, v_student_name);
        v_assigned_tiles := 0;
        
        -- Assign tiles for this student
        WHILE v_assigned_tiles < v_target_tiles_per_student
        LOOP
            -- Get a random unassigned tile
            SELECT id INTO v_random_tile_id 
            FROM tiles 
            WHERE game_id = v_game_id 
              AND owner_game_student_id IS NULL 
            ORDER BY RANDOM() 
            LIMIT 1;
            
            -- If no unassigned tiles left, break
            IF v_random_tile_id IS NULL THEN
                EXIT;
            END IF;
            
            -- Assign this tile to the current student
            UPDATE tiles 
            SET owner_game_student_id = v_game_student_ids[v_current_student_index]
            WHERE id = v_random_tile_id;
            
            v_assigned_tiles := v_assigned_tiles + 1;
        END LOOP;
        
        -- Update tiles_owned count for this student
        UPDATE game_students 
        SET tiles_owned = v_assigned_tiles
        WHERE id = v_game_student_ids[v_current_student_index];
    END LOOP;

    -- Log the creation
    INSERT INTO audit_log (game_id, actor, action, meta)
    VALUES (v_game_id, 'system', 'game_created', jsonb_build_object(
        'class_name', p_class_name,
        'game_name', p_game_name,
        'student_count', array_length(v_student_names, 1),
        'board_size', jsonb_build_object('w', v_board_w, 'h', v_board_h),
        'start_points', p_start_points
    ));

    -- Return game info
    RETURN jsonb_build_object(
        'game_id', v_game_id,
        'class_id', v_class_id,
        'board_w', v_board_w,
        'board_h', v_board_h,
        'student_count', array_length(v_student_names, 1)
    );
END;
$$;

-- Function to resolve battle
CREATE OR REPLACE FUNCTION resolve_battle(
    p_game_id UUID,
    p_tile_id UUID,
    p_attacker UUID,
    p_defender UUID,
    p_att_mercs INTEGER,
    p_weapon_level INTEGER,
    p_def_mercs INTEGER
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_tile RECORD;
    v_attacker_gs RECORD;
    v_defender_gs RECORD;
    v_attacker_balance INTEGER;
    v_defender_balance INTEGER;
    v_mercs_cost INTEGER;
    v_weapon_cost INTEGER;
    v_total_cost INTEGER;
    v_odds NUMERIC;
    v_roll NUMERIC;
    v_result TEXT;
    v_defender_castle_level INTEGER;
BEGIN
    -- Get tile info
    SELECT * INTO v_tile FROM tiles WHERE id = p_tile_id AND game_id = p_game_id;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Tile not found';
    END IF;

    -- Get attacker and defender info
    SELECT * INTO v_attacker_gs FROM game_students WHERE id = p_attacker AND game_id = p_game_id;
    SELECT * INTO v_defender_gs FROM game_students WHERE id = p_defender AND game_id = p_game_id;
    
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Game student not found';
    END IF;

    -- Calculate balances
    SELECT COALESCE(SUM(CASE WHEN type = 'earn' THEN amount ELSE -amount END), 0) + v_attacker_gs.start_points
    INTO v_attacker_balance
    FROM transactions WHERE game_student_id = p_attacker;

    SELECT COALESCE(SUM(CASE WHEN type = 'earn' THEN amount ELSE -amount END), 0) + v_defender_gs.start_points
    INTO v_defender_balance
    FROM transactions WHERE game_student_id = p_defender;

    -- Calculate costs
    v_mercs_cost := p_att_mercs * 10;
    v_weapon_cost := CASE p_weapon_level
        WHEN 1 THEN 20
        WHEN 2 THEN 50
        WHEN 3 THEN 100
        ELSE 0
    END;
    v_total_cost := v_mercs_cost + v_weapon_cost;

    -- Check if attacker has enough points
    IF v_attacker_balance < v_total_cost THEN
        RAISE EXCEPTION 'Insufficient points for attack';
    END IF;

    -- Get defender's castle level
    v_defender_castle_level := COALESCE(v_tile.castle_level, 0);

    -- Calculate odds (attacker advantage with mercs and weapons, defender advantage with castle)
    v_odds := 0.5 + (p_att_mercs * 0.05) + (p_weapon_level * 0.1) - (v_defender_castle_level * 0.1) - (p_def_mercs * 0.05);
    v_odds := GREATEST(0.1, LEAST(0.9, v_odds)); -- Clamp between 10% and 90%

    -- Roll for result
    v_roll := random();
    v_result := CASE WHEN v_roll < v_odds THEN 'attacker_wins' ELSE 'defender_wins' END;

    -- Spend attacker's points
    INSERT INTO transactions (game_student_id, type, amount, meta)
    VALUES (p_attacker, 'spend', v_total_cost, jsonb_build_object(
        'kind', 'attack',
        'tile_id', p_tile_id,
        'mercs', p_att_mercs,
        'weapon_level', p_weapon_level
    ));

    -- Spend defender's mercs if any
    IF p_def_mercs > 0 THEN
        INSERT INTO transactions (game_student_id, type, amount, meta)
        VALUES (p_defender, 'spend', p_def_mercs * 10, jsonb_build_object(
            'kind', 'defense',
            'tile_id', p_tile_id,
            'mercs', p_def_mercs
        ));
    END IF;

    -- Update tile ownership if attacker wins
    IF v_result = 'attacker_wins' THEN
        UPDATE tiles 
        SET owner_game_student_id = p_attacker, castle_level = 0
        WHERE id = p_tile_id;

        -- Update tile counts
        UPDATE game_students SET tiles_owned = tiles_owned + 1 WHERE id = p_attacker;
        UPDATE game_students SET tiles_owned = tiles_owned - 1 WHERE id = p_defender;
    END IF;

    -- Log the battle
    INSERT INTO audit_log (game_id, actor, action, meta)
    VALUES (p_game_id, 'battle', 'battle_resolved', jsonb_build_object(
        'tile_id', p_tile_id,
        'attacker', p_attacker,
        'defender', p_defender,
        'att_mercs', p_att_mercs,
        'weapon_level', p_weapon_level,
        'def_mercs', p_def_mercs,
        'odds', v_odds,
        'roll', v_roll,
        'result', v_result
    ));

    -- Return battle result
    RETURN jsonb_build_object(
        'odds', v_odds,
        'roll', v_roll,
        'result', v_result,
        'cost', v_total_cost
    );
END;
$$;

-- Function to apply tornado
CREATE OR REPLACE FUNCTION apply_tornado(p_game_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_game_student RECORD;
    v_tile_count INTEGER;
    v_change INTEGER;
    v_tiles_to_change INTEGER;
    v_tile RECORD;
    v_affected_students INTEGER := 0;
BEGIN
    -- Get all game students
    FOR v_game_student IN 
        SELECT * FROM game_students WHERE game_id = p_game_id
    LOOP
        v_tile_count := v_game_student.tiles_owned;
        
        -- Random change: -2 to +2 tiles
        v_change := floor(random() * 5) - 2; -- -2, -1, 0, 1, 2
        v_tiles_to_change := ABS(v_change);
        
        IF v_tiles_to_change > 0 THEN
            v_affected_students := v_affected_students + 1;
            
            IF v_change > 0 THEN
                -- Give tiles (convert empty tiles)
                UPDATE tiles 
                SET owner_game_student_id = v_game_student.id, castle_level = 0
                WHERE game_id = p_game_id 
                  AND owner_game_student_id IS NULL 
                  AND id IN (
                      SELECT id FROM tiles 
                      WHERE game_id = p_game_id AND owner_game_student_id IS NULL 
                      ORDER BY random() 
                      LIMIT v_tiles_to_change
                  );
                
                -- Update tile count
                UPDATE game_students 
                SET tiles_owned = tiles_owned + v_change
                WHERE id = v_game_student.id;
                
            ELSIF v_change < 0 AND v_tile_count > 0 THEN
                -- Take tiles (make them empty)
                UPDATE tiles 
                SET owner_game_student_id = NULL, castle_level = 0
                WHERE game_id = p_game_id 
                  AND owner_game_student_id = v_game_student.id
                  AND id IN (
                      SELECT id FROM tiles 
                      WHERE game_id = p_game_id AND owner_game_student_id = v_game_student.id 
                      ORDER BY random() 
                      LIMIT v_tiles_to_change
                  );
                
                -- Update tile count
                UPDATE game_students 
                SET tiles_owned = GREATEST(0, tiles_owned + v_change)
                WHERE id = v_game_student.id;
            END IF;
        END IF;
    END LOOP;

    -- Log the tornado
    INSERT INTO audit_log (game_id, actor, action, meta)
    VALUES (p_game_id, 'system', 'tornado_cast', jsonb_build_object(
        'affected_students', v_affected_students
    ));

    RETURN jsonb_build_object(
        'affected_students', v_affected_students,
        'message', 'Tornado has swept across the land!'
    );
END;
$$;

-- Function to propose truce
CREATE OR REPLACE FUNCTION propose_truce(
    p_game_id UUID,
    p_a UUID,
    p_b UUID,
    p_proposer UUID
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_existing_truce RECORD;
    v_active_truces INTEGER;
BEGIN
    -- Check if truce already exists
    SELECT * INTO v_existing_truce 
    FROM truces 
    WHERE game_id = p_game_id 
      AND ((a_game_student_id = p_a AND b_game_student_id = p_b) 
           OR (a_game_student_id = p_b AND b_game_student_id = p_a));

    IF FOUND THEN
        RAISE EXCEPTION 'Truce already exists between these students';
    END IF;

    -- Check if proposer already has 2 active truces
    SELECT COUNT(*) INTO v_active_truces
    FROM truces 
    WHERE game_id = p_game_id 
      AND (a_game_student_id = p_proposer OR b_game_student_id = p_proposer)
      AND status = 'active';

    IF v_active_truces >= 2 THEN
        RAISE EXCEPTION 'Student already has maximum number of active truces (2)';
    END IF;

    -- Create truce
    INSERT INTO truces (game_id, a_game_student_id, b_game_student_id, proposer_game_student_id, status)
    VALUES (p_game_id, p_a, p_b, p_proposer, 'proposed');

    -- Log the proposal
    INSERT INTO audit_log (game_id, actor, action, meta)
    VALUES (p_game_id, 'truce', 'truce_proposed', jsonb_build_object(
        'proposer', p_proposer,
        'a', p_a,
        'b', p_b
    ));

    RETURN jsonb_build_object('status', 'proposed');
END;
$$;

-- Function to respond to truce
CREATE OR REPLACE FUNCTION respond_truce(p_truce_id UUID, p_accept BOOLEAN)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_truce RECORD;
    v_active_truces INTEGER;
BEGIN
    -- Get truce info
    SELECT * INTO v_truce FROM truces WHERE id = p_truce_id;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Truce not found';
    END IF;

    IF v_truce.status != 'proposed' THEN
        RAISE EXCEPTION 'Truce is not in proposed status';
    END IF;

    -- If accepting, check if responder already has 2 active truces
    IF p_accept THEN
        SELECT COUNT(*) INTO v_active_truces
        FROM truces 
        WHERE game_id = v_truce.game_id 
          AND (a_game_student_id = v_truce.b_game_student_id OR b_game_student_id = v_truce.b_game_student_id)
          AND status = 'active';

        IF v_active_truces >= 2 THEN
            RAISE EXCEPTION 'Student already has maximum number of active truces (2)';
        END IF;
    END IF;

    -- Update truce status
    UPDATE truces 
    SET status = CASE WHEN p_accept THEN 'active' ELSE 'declined' END
    WHERE id = p_truce_id;

    -- Log the response
    INSERT INTO audit_log (game_id, actor, action, meta)
    VALUES (v_truce.game_id, 'truce', 'truce_responded', jsonb_build_object(
        'truce_id', p_truce_id,
        'accepted', p_accept
    ));

    RETURN jsonb_build_object(
        'status', CASE WHEN p_accept THEN 'active' ELSE 'declined' END
    );
END;
$$;

-- Function to revoke truce
CREATE OR REPLACE FUNCTION revoke_truce(p_truce_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_truce RECORD;
BEGIN
    -- Get truce info
    SELECT * INTO v_truce FROM truces WHERE id = p_truce_id;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Truce not found';
    END IF;

    IF v_truce.status != 'active' THEN
        RAISE EXCEPTION 'Truce is not active';
    END IF;

    -- Update truce status
    UPDATE truces SET status = 'revoked' WHERE id = p_truce_id;

    -- Log the revocation
    INSERT INTO audit_log (game_id, actor, action, meta)
    VALUES (v_truce.game_id, 'truce', 'truce_revoked', jsonb_build_object(
        'truce_id', p_truce_id
    ));

    RETURN jsonb_build_object('status', 'revoked');
END;
$$;

-- Function to get victory snapshot
CREATE OR REPLACE FUNCTION get_victory_snapshot(p_game_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_game RECORD;
    v_total_tiles INTEGER;
    v_target_pct NUMERIC;
    v_students JSONB;
    v_truces JSONB;
BEGIN
    -- Get game info
    SELECT * INTO v_game FROM games WHERE id = p_game_id;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Game not found';
    END IF;

    -- Calculate total tiles
    SELECT COUNT(*) INTO v_total_tiles FROM tiles WHERE game_id = p_game_id;
    v_target_pct := v_game.victory_target_pct;

    -- Get student tile counts
    SELECT jsonb_agg(
        jsonb_build_object(
            'gs', gs.id,
            'name', s.display_name,
            'tiles', gs.tiles_owned
        )
    ) INTO v_students
    FROM game_students gs
    JOIN students s ON s.id = gs.student_id
    WHERE gs.game_id = p_game_id;

    -- Get active truces
    SELECT jsonb_agg(
        jsonb_build_object(
            'a', a_game_student_id,
            'b', b_game_student_id
        )
    ) INTO v_truces
    FROM truces
    WHERE game_id = p_game_id AND status = 'active';

    RETURN jsonb_build_object(
        'total_tiles', v_total_tiles,
        'target_pct', v_target_pct,
        'students', COALESCE(v_students, '[]'::jsonb),
        'truces', COALESCE(v_truces, '[]'::jsonb)
    );
END;
$$;

-- ==============================================
-- GRANT PERMISSIONS
-- ==============================================

-- Grant execute permissions on RPC functions
GRANT EXECUTE ON FUNCTION ensure_user() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION create_game_from_roster(TEXT, TEXT, TEXT, INTEGER, INTEGER, INTEGER) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION resolve_battle(UUID, UUID, UUID, UUID, INTEGER, INTEGER, INTEGER) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION apply_tornado(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION propose_truce(UUID, UUID, UUID, UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION respond_truce(UUID, BOOLEAN) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION revoke_truce(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION get_victory_snapshot(UUID) TO anon, authenticated;
