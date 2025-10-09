# 🧪 Business Mode Testing Checklist

## ✅ Core Functionality Tests

### Mode Switching
- [ ] School Mode selected by default
- [ ] Business Mode button changes UI labels
- [ ] Mode indicator appears in header
- [ ] Business sidebar appears in Business Mode
- [ ] Business sidebar hidden in School Mode

### Business Sidebar
- [ ] Four tabs visible: Leaderboard, Metrics, Announcements, Rewards
- [ ] Tab switching works correctly
- [ ] Content loads for each tab
- [ ] Sidebar responsive on different screen sizes

## ✅ Metrics Tab Tests

### Add Metric
- [ ] "+ Add Metric" button opens modal
- [ ] Top 25 metrics dropdown populated
- [ ] Custom metric option available
- [ ] Weight input accepts decimal values
- [ ] Metric added to state successfully
- [ ] Modal closes after successful add

### CSV Import
- [ ] "📊 CSV Import" button opens modal
- [ ] File input accepts .csv files
- [ ] Column mapping dropdowns work
- [ ] Sample data format displayed
- [ ] Import process completes successfully
- [ ] Error handling for invalid files
- [ ] Success message shows import count

### Test with Sample Data
- [ ] Use `sample_performance_data.csv`
- [ ] Map columns correctly (email=0, team=1, metric=2, amount=3)
- [ ] Import completes without errors
- [ ] Data appears in game state

## ✅ Privacy Controls Tests

### Privacy Settings
- [ ] Privacy dropdown has three options
- [ ] "Save Privacy Settings" button works
- [ ] Settings saved to state
- [ ] Success message appears

### Leaderboard Privacy
- [ ] Team Public: Shows full names
- [ ] Individual Private: Shows "Employee 1", "Employee 2"
- [ ] Mixed: Shows "Alpha Member 1", "Beta Member 2"
- [ ] Team information always visible
- [ ] Privacy changes apply immediately

## ✅ Rewards Tab Tests

### Reward Input
- [ ] Team reward input accepts text
- [ ] Player reward input accepts text
- [ ] "Save Rewards" button works
- [ ] Rewards saved to state
- [ ] Success message appears

### Privacy Settings Integration
- [ ] Privacy controls visible in Rewards tab
- [ ] Privacy settings save correctly
- [ ] Leaderboard updates based on privacy

## ✅ Employee Portal Tests

### Employee Login
- [ ] Navigate to `employee-login.html`
- [ ] Manager code input works
- [ ] Employee name input works
- [ ] "Join Game" button works
- [ ] Demo mode available
- [ ] Redirects to employee dashboard

### Employee Dashboard
- [ ] Credits display shows current credits
- [ ] Points display shows current points
- [ ] Team information displayed
- [ ] Metrics table populated
- [ ] Quick actions work
- [ ] Notifications display

### Employee Actions
- [ ] "Play Tornado Quiz" opens modal
- [ ] Quiz completion awards credits/points
- [ ] "View Assignments" opens modal
- [ ] "Team Leaderboard" shows alert
- [ ] Notifications update after actions

## ✅ Integration Tests

### Game State
- [ ] Business Mode state preserved
- [ ] Metrics data persists
- [ ] Privacy settings persist
- [ ] Rewards data persists
- [ ] Employee data persists

### Navigation
- [ ] Employee Login link in main navigation
- [ ] Employee pages accessible
- [ ] Back navigation works
- [ ] Mode switching preserves state

## ✅ Error Handling Tests

### Invalid Input
- [ ] Empty metric name shows error
- [ ] Invalid CSV file shows error
- [ ] Missing required fields show errors
- [ ] Invalid privacy settings handled

### Edge Cases
- [ ] Very large CSV files
- [ ] Special characters in data
- [ ] Empty CSV files
- [ ] Malformed CSV data

## ✅ Performance Tests

### Large Data Sets
- [ ] Import 100+ records
- [ ] Multiple metrics added
- [ ] Privacy changes with large datasets
- [ ] Employee dashboard with many notifications

### UI Responsiveness
- [ ] Sidebar collapses on small screens
- [ ] Modals work on mobile
- [ ] Employee dashboard responsive
- [ ] Tab switching smooth

## ✅ Browser Compatibility

### Modern Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Mobile Firefox

## 🐛 Known Issues

### Current Limitations
- CSV import uses client-side parsing only
- Employee data stored in localStorage
- No real-time updates between manager/employee
- Privacy settings don't persist across sessions

### Workarounds
- Use demo mode for testing
- Refresh page after privacy changes
- Clear localStorage to reset state

## 📊 Test Data

### Sample CSV Format
```csv
email,team,metric,amount,date,note
john@company.com,Alpha,Features shipped,5,2024-01-15,Completed user login
jane@company.com,Beta,Bugs resolved,3,2024-01-15,Fixed payment bug
```

### Demo Manager Code
- Use "DEMO" for testing employee login
- Demo mode available for quick testing

## 🎯 Success Criteria

### Functional Requirements
- [ ] All core features work as expected
- [ ] No JavaScript errors in console
- [ ] UI updates correctly
- [ ] Data persists appropriately

### User Experience
- [ ] Intuitive navigation
- [ ] Clear error messages
- [ ] Responsive design
- [ ] Consistent styling

### Business Requirements
- [ ] Privacy controls functional
- [ ] CSV import works reliably
- [ ] Employee portal accessible
- [ ] Manager tools comprehensive

---

**Testing Complete?** All checkboxes should be marked when Business Mode is ready for production!
