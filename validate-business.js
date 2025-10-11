#!/usr/bin/env node

/**
 * Business Mode Validation Script
 * Checks all business files for consistency and cloud persistence
 */

const fs = require('fs');
const path = require('path');

// Business files to validate
const businessFiles = [
  'business.html',
  'business-roster.html', 
  'employee-war.html',
  'business-home.html',
  'business-integrations.html',
  'business-analytics.html',
  'business-attribution.html',
  'business-schema-check.html',
  'rules.html'
];

// Required patterns for cloud persistence
const requiredPatterns = {
  supabase: {
    client: 'supabase.createClient',
    url: 'SUPABASE_URL',
    anon: 'SUPABASE_ANON'
  },
  cloudOperations: [
    'supabase.from(',
    'await supabase',
    'saveCloud',
    'loadGameData'
  ],
  dataConsistency: [
    'owner_game_student_id',
    'owner_employee_id',
    'generateUUID',
    'tilesOwned',
    'balance'
  ]
};

console.log('🌪️ Tornado Business Mode Validation\n');

let totalIssues = 0;
let filesChecked = 0;

businessFiles.forEach(file => {
  console.log(`📄 Checking ${file}...`);
  
  if (!fs.existsSync(file)) {
    console.log(`   ❌ File not found: ${file}`);
    totalIssues++;
    return;
  }
  
  filesChecked++;
  const content = fs.readFileSync(file, 'utf8');
  const issues = [];
  
  // Check for Supabase integration
  if (!content.includes('supabase.createClient')) {
    issues.push('Missing Supabase client initialization');
  }
  
  if (!content.includes('SUPABASE_URL')) {
    issues.push('Missing SUPABASE_URL constant');
  }
  
  if (!content.includes('SUPABASE_ANON')) {
    issues.push('Missing SUPABASE_ANON constant');
  }
  
  // Check for cloud operations
  const hasCloudOps = requiredPatterns.cloudOperations.some(pattern => 
    content.includes(pattern)
  );
  
  if (!hasCloudOps) {
    issues.push('Missing cloud persistence operations');
  }
  
  // Check for data consistency patterns
  const hasDataConsistency = requiredPatterns.dataConsistency.some(pattern =>
    content.includes(pattern)
  );
  
  if (!hasDataConsistency) {
    issues.push('Missing data consistency patterns');
  }
  
  // Check for async/await usage (modern JavaScript)
  if (content.includes('supabase.from(') && !content.includes('async ')) {
    issues.push('Supabase operations should use async/await');
  }
  
  // Check for error handling
  if (content.includes('supabase.from(') && !content.includes('try {')) {
    issues.push('Missing error handling for Supabase operations');
  }
  
  if (issues.length === 0) {
    console.log(`   ✅ All checks passed`);
  } else {
    console.log(`   ⚠️  Issues found:`);
    issues.forEach(issue => {
      console.log(`      - ${issue}`);
      totalIssues++;
    });
  }
});

console.log(`\n📊 Validation Summary:`);
console.log(`   Files checked: ${filesChecked}`);
console.log(`   Total issues: ${totalIssues}`);

if (totalIssues === 0) {
  console.log(`\n🎉 All business files are properly configured for cloud persistence!`);
  console.log(`   Ready for production deployment.`);
} else {
  console.log(`\n⚠️  ${totalIssues} issues found. Please address before deployment.`);
}

// Check for test files
console.log(`\n🧪 Test Files:`);
const testFiles = [
  'business-cloud-test.html',
  'BUSINESS_CLOUD_TEST_GUIDE.md'
];

testFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`   ✅ ${file} - Available for testing`);
  } else {
    console.log(`   ❌ ${file} - Missing test file`);
    totalIssues++;
  }
});

// Check for schema file
console.log(`\n🗄️  Database Schema:`);
if (fs.existsSync('supabase_schema_business.sql')) {
  console.log(`   ✅ supabase_schema_business.sql - Schema file available`);
} else {
  console.log(`   ❌ supabase_schema_business.sql - Missing schema file`);
  totalIssues++;
}

console.log(`\n📋 Next Steps:`);
if (totalIssues === 0) {
  console.log(`   1. Run business-cloud-test.html to verify cloud persistence`);
  console.log(`   2. Test all business interfaces in browser`);
  console.log(`   3. Verify real-time updates work between manager and employee views`);
  console.log(`   4. Deploy to production when ready`);
} else {
  console.log(`   1. Fix the ${totalIssues} issues identified above`);
  console.log(`   2. Re-run this validation script`);
  console.log(`   3. Then proceed with testing and deployment`);
}

console.log(`\n🔗 Test Suite: business-cloud-test.html`);
console.log(`📖 Documentation: BUSINESS_CLOUD_TEST_GUIDE.md`);
