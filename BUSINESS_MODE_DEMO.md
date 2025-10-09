# 🏢 Tornado Business Mode - Demo Guide

## Overview
Tornado Business Mode extends the existing Tornado War app with workplace competition features for managers and employees.

## 🚀 Quick Start

### 1. Access Business Mode
- Navigate to `http://localhost:8001/war.html`
- Click "🔄 New Game"
- Select "🏢 Business Mode"
- Choose game type (Regular or Scenario)

### 2. Manager Features (Business Mode)

#### Metrics Tab
- **Add Metrics**: Click "+ Add Metric" to select from Top 25 business metrics
- **Custom Metrics**: Add your own performance indicators
- **Weighted Scoring**: Set importance weights (0.1-10)
- **CSV Import**: Bulk import performance data

#### Privacy Controls
- **Team Public**: Show team names and scores
- **Individual Private**: Hide individual employee names
- **Mixed**: Teams public, individuals anonymized

#### Rewards & Incentives
- Set winning team rewards (e.g., "Team dinner")
- Set top player rewards (e.g., "1 PTO day")
- Save rewards to game state

#### Announcements
- Post company updates
- Notify teams or individuals
- Email/Slack integration (stubs)

### 3. Employee Portal

#### Access Employee Portal
- Navigate to `http://localhost:8001/employee-login.html`
- Enter Manager Code (use "DEMO" for testing)
- Enter your name
- Click "Join Game"

#### Employee Dashboard Features
- **My Performance**: View credits earned and points
- **My Metrics**: Track assigned performance metrics
- **Quick Actions**: Play quizzes, view assignments, check leaderboard
- **Notifications**: Receive updates from manager

#### Employee Actions
- **Play Tornado Quiz**: Earn credits and points
- **View Assignments**: See assigned tasks
- **Team Leaderboard**: Check team rankings

## 🎯 Demo Scenarios

### Scenario 1: Q4 Performance Challenge
1. **Manager Setup**:
   - Create Business Mode game
   - Add metrics: "Features shipped", "Bugs resolved", "CSAT/NPS delta"
   - Set weights: 40, 30, 30
   - Set rewards: "Team dinner", "1 PTO day"

2. **Employee Participation**:
   - Employees join with manager code
   - Complete quizzes to earn credits
   - View performance metrics
   - Check team rankings

### Scenario 2: Privacy Testing
1. **Manager Setup**:
   - Set privacy to "Individual Private"
   - Import CSV data with employee names
   - Check leaderboard shows anonymized names

2. **Employee Experience**:
   - Employees see their own data
   - Public leaderboard shows "Employee 1", "Employee 2"
   - Team information remains visible

### Scenario 3: CSV Import
1. **Prepare CSV File**:
   ```
   email,team,metric,amount,date,note
   john@company.com,Alpha,Features shipped,5,2024-01-15,Completed user login
   jane@company.com,Beta,Bugs resolved,3,2024-01-15,Fixed payment bug
   ```

2. **Import Process**:
   - Go to Metrics tab
   - Click "📊 CSV Import"
   - Select file and map columns
   - Import data

## 🔧 Technical Features

### Mode Switching
- Dynamic UI labels (Roster → Employees)
- Sidebar appears only in Business Mode
- Grid layout adjusts for business tools

### Data Management
- Business metrics stored in `state.businessMetrics`
- Privacy settings in `state.privacyLevel`
- Rewards in `state.rewardTeam` and `state.rewardPlayer`

### CSV Import
- File upload with column mapping
- Validation and error reporting
- Bulk performance data import

### Privacy Engine
- Leaderboard filtering based on privacy settings
- Individual name anonymization
- Team information preservation

## 📊 Top 25 Business Metrics

1. Features shipped
2. Bugs resolved
3. Code quality score
4. Test coverage %
5. CSAT/NPS delta
6. Revenue influenced
7. Deals closed
8. Hours saved via automation
9. Knowledge shares hosted
10. Mentoring sessions
11. Delivery time delta
12. On-time task rate %
13. Escalations handled
14. Training hours
15. Certifications earned
16. New clients onboarded
17. Retention rate improvement
18. Innovation proposals
19. Security issues resolved
20. Downtime reduced
21. Documentation completed
22. Cross-team collaborations
23. Product demos delivered
24. Feedback surveys completed
25. Peer kudos / votes

## 🎮 Game Integration

### Existing Features Preserved
- All Tornado War gameplay intact
- Territory grid and capture logic
- Team/player rotation
- Quick awards (+1/+5/+10/-1/-10)
- Quiz integration

### Business Enhancements
- Credits system for employees
- Performance metrics tracking
- Privacy controls
- CSV data import
- Manager announcements

## 🔮 Future Enhancements

### Phase 2 Features
- Database integration (Supabase)
- Advanced scoring engine
- Email notifications
- Slack integration
- Advanced analytics dashboard

### Integration Stubs
- Jira integration
- Salesforce integration
- Google Sheets integration
- Slack webhook integration

## 🐛 Troubleshooting

### Common Issues
1. **Business sidebar not appearing**: Ensure Business Mode is selected
2. **CSV import fails**: Check file format and column mapping
3. **Privacy settings not working**: Refresh page after saving settings
4. **Employee login fails**: Use "DEMO" as manager code for testing

### Development Server
- Server running on `http://localhost:8001`
- All files served from project root
- Hot reload supported

## 📝 Notes

- Business Mode is fully backward compatible with School Mode
- All existing functionality preserved
- New features only appear in Business Mode
- Employee portal is separate from student portal
- Privacy controls affect leaderboard display only

---

**Ready to test?** Start with Scenario 1 and explore the Business Mode features!
