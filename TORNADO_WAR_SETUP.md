# Tornado War Setup Guide

## Overview
Tornado War is a teacher-controlled, classroom strategy game built on top of the existing Tornado Quiz platform. Teachers can create games, manage student rosters, and control all game actions while students strategize and collaborate.

## Current Status ✅

### Completed
1. **Database Schema Created** - Complete SQL migration with all tables and RPC functions
2. **Homepage Updated** - New game selection page with Quiz and War options
3. **War Admin Interface** - Complete UI for game management
4. **Issue Identified** - The "Create Game" hang was due to missing RPC functions

### Files Created/Modified
- `supabase/migrations/001_create_tornado_war_schema.sql` - Complete database schema
- `create-rpc-functions.html` - Helper page with SQL commands to run manually
- `apply-migration.html` - Migration helper (for reference)
- `index.html` - Updated with game selection homepage
- `war-admin.html` - Teacher admin interface (already existed)

## Next Steps 🚧

### Immediate (Required for basic functionality)
1. **Apply Database Migration**
   - Go to Supabase Dashboard: https://supabase.com/dashboard
   - Navigate to project: `dmbbsrcwqpmdxqtzvtqj`
   - Go to SQL Editor
   - Run the SQL from `create-rpc-functions.html` in this order:
     - Core Tables SQL
     - RLS Policies SQL  
     - RPC Functions SQL

2. **Test Basic Functionality**
   - Visit http://localhost:8080 (or your domain)
   - Click "Tornado War" to go to `/war-admin.html`
   - Sign in with Google
   - Try creating a test game

### Secondary (Polish and features)
3. **Wire UI Actions** - Connect all buttons to RPC functions with validation
4. **Implement Victory Check** - Add victory detection and winner display
5. **Add Audit Logging** - Ensure all actions are logged properly
6. **Test RLS Security** - Verify teachers can't access each other's data

## Database Schema

### Core Tables
- `users` - Extends Supabase auth.users
- `classes` - Teacher's classes
- `students` - Students within classes
- `games` - Game instances
- `game_students` - Students participating in games
- `tiles` - Game board tiles

### Economy & Actions
- `transactions` - Point earning/spending
- `truces` - Student alliances
- `audit_log` - Action history

### RPC Functions
- `ensure_user()` - Creates user record
- `create_game_from_roster()` - Creates game with students and tiles
- `resolve_battle()` - Handles attacks
- `apply_tornado()` - Random tile changes
- `propose_truce()`, `respond_truce()`, `revoke_truce()` - Truce management
- `get_victory_snapshot()` - Victory checking

## Game Rules

### Setup
- Teacher pastes student names (one per line)
- Default starting points: 5 (configurable)
- Board auto-sizes or accepts custom dimensions
- Victory target: 25%, 33%, 50%, 66%, or 75% of tiles

### Economy
- Points = start_points + earned - spent
- Land costs: 10 points
- Castle upgrades: L1=30, L2=60, L3=120 points
- Mercenaries: 10 points each
- Weapons: L1=20, L2=50, L3=100 points

### Actions
- **Buy Land**: Click empty tile → spend points → own tile
- **Upgrade Castle**: Click own tile → upgrade defense
- **Attack**: Select attacker → click enemy tile → choose mercs/weapons → resolve
- **Truces**: Students can have max 2 active truces
- **Tornado**: Random ±0-2 tiles per team

### Victory
- Solo: Own target % of tiles
- Coalition: Combined tiles ≥ (target % × coalition size)

## Testing

### Local Development
```bash
cd /Users/timpiontek/Dev/tornado-game
python3 -m http.server 8080
# Visit http://localhost:8080
```

### Production
- Domain: https://playtornado.com
- Deploys automatically from GitHub via Netlify
- Supabase project: `dmbbsrcwqpmdxqtzvtqj`

## Security Notes
- All tables have Row Level Security (RLS) enabled
- Teachers can only access their own classes/games
- RPC functions use SECURITY DEFINER to bypass RLS when needed
- Google OAuth required for teacher access
- No student logins required

## Troubleshooting

### "Create Game" Hangs
- **Cause**: Missing RPC functions in database
- **Solution**: Run the SQL migration from `create-rpc-functions.html`

### Permission Errors
- **Cause**: RLS policies not applied
- **Solution**: Ensure RLS policies SQL was executed

### Authentication Issues
- **Cause**: Google OAuth not configured
- **Solution**: Check Supabase Auth settings for Google provider

## Future Enhancements
- Tornado cooldown system
- Per-game economy configuration
- Pretty board rendering with animations
- Export/import game states
- Student mobile interface (optional)
