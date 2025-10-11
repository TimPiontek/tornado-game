# Tornado Business Cloud Persistence Test Suite

## Overview
This test suite verifies that all business mode data persistence is working correctly with Supabase cloud storage.

## Test File
- **File**: `business-cloud-test.html`
- **Purpose**: Comprehensive testing of all business cloud persistence functionality
- **Access**: Navigate to `/business-cloud-test.html` in your browser

## Test Categories

### 1. 🔌 Database Connection Test
**Purpose**: Verify Supabase connection is working
**Tests**:
- Basic connection to Supabase
- Authentication with anonymous key
- Query execution capability

**Expected Result**: ✅ Connection successful

### 2. 📋 Database Schema Test
**Purpose**: Verify all required tables exist
**Tests**:
- `games` table
- `employees` table  
- `tiles` table
- `activity_feed` table
- `notifications` table
- `metrics` table

**Expected Result**: ✅ All required tables exist

### 3. 🎮 Game Data Persistence Test
**Purpose**: Test game creation, reading, and updating
**Tests**:
- Create new business game
- Read game data back
- Update game properties
- Verify data integrity

**Expected Result**: ✅ Game data operations successful

### 4. 👥 Employee Data Test
**Purpose**: Test employee management operations
**Tests**:
- Create employee record
- Update employee points/balance
- Verify employee-game relationship
- Test data consistency

**Expected Result**: ✅ Employee data operations successful

### 5. 🏢 Tile Data Test
**Purpose**: Test tile/territory management
**Tests**:
- Create tile records
- Update tile ownership
- Test headquarters flags
- Verify tile costs

**Expected Result**: ✅ Tile data operations successful

### 6. 📊 Activity Feed Test
**Purpose**: Test activity logging
**Tests**:
- Create activity records
- Verify activity data structure
- Test activity-game relationship

**Expected Result**: ✅ Activity feed operations successful

### 7. ⚡ Realtime Subscription Test
**Purpose**: Test real-time updates
**Tests**:
- Subscribe to tile changes
- Trigger data change
- Verify subscription receives update
- Test subscription cleanup

**Expected Result**: ✅ Realtime subscription working

### 8. 🚀 Full Integration Test
**Purpose**: Run all tests in sequence
**Tests**:
- Execute all individual tests
- Verify end-to-end functionality
- Check data consistency across all operations

**Expected Result**: 🎉 All integration tests passed

## How to Run Tests

### Manual Testing
1. Open `business-cloud-test.html` in your browser
2. Click "Test Connection" to verify Supabase connection
3. Click "Test Schema" to verify database structure
4. Click individual test buttons to test specific functionality
5. Click "Run Full Test" to execute all tests in sequence
6. Review results and data display

### Automated Testing
1. Click "Run Full Test" button
2. Monitor progress through all test phases
3. Review final integration test result
4. Use "Cleanup Test Data" to remove test records

## Expected Test Results

### ✅ Success Indicators
- All connection tests pass
- All schema tables exist
- CRUD operations work correctly
- Data persists between operations
- Realtime subscriptions function
- No error messages in console

### ❌ Failure Indicators
- Connection timeouts
- Missing tables or columns
- Foreign key constraint errors
- Data inconsistency
- Realtime subscription failures
- JavaScript errors in console

## Test Data Management

### Test Data Created
- Test game with UUID
- Test employee records
- Test tile configurations
- Test activity records

### Cleanup Process
- Use "Cleanup Test Data" button
- Removes all test records
- Maintains database integrity
- Resets test state

## Troubleshooting

### Common Issues
1. **Connection Failed**: Check Supabase URL and API key
2. **Schema Missing**: Run `supabase_schema_business.sql` in Supabase
3. **Permission Denied**: Verify RLS policies are configured
4. **Realtime Not Working**: Check Supabase realtime settings

### Debug Steps
1. Check browser console for errors
2. Verify Supabase dashboard for data
3. Test individual operations
4. Check network requests in DevTools

## Integration with Business Files

### Files Tested
- `business.html` - Manager interface
- `business-roster.html` - Roster management  
- `employee-war.html` - Employee interface
- `business-home.html` - Manager hub

### Data Flow Verification
- Manager creates game → Supabase
- Manager adds employees → Supabase
- Employee joins game → Supabase
- Game actions → Supabase
- Realtime updates → All interfaces

## Success Criteria

### ✅ Cloud Persistence Working When:
- All tests pass without errors
- Data persists across browser sessions
- Real-time updates work between interfaces
- No data loss during operations
- Performance is acceptable (< 2s response times)

### 🎯 Production Ready When:
- 100% test pass rate
- No console errors
- Data consistency verified
- Realtime functionality confirmed
- Cleanup operations successful

## Next Steps After Testing

1. **If All Tests Pass**: Business mode is ready for production use
2. **If Tests Fail**: Address specific failures before deployment
3. **If Performance Issues**: Optimize queries and data structures
4. **If Realtime Issues**: Check Supabase configuration

## Maintenance

### Regular Testing
- Run full test suite weekly
- Test after any schema changes
- Verify after Supabase updates
- Test with different browsers

### Monitoring
- Check Supabase dashboard regularly
- Monitor error logs
- Track performance metrics
- Verify data integrity

---

**Note**: This test suite is designed to be comprehensive but non-destructive. It creates test data that can be easily cleaned up and doesn't affect production data.
