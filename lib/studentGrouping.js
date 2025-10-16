/**
 * Student Grouping and Differentiation Tools
 * Automatically groups students based on performance, learning styles, and needs
 */

class StudentGroupingSystem {
    constructor() {
        this.groupingStrategies = this.initializeGroupingStrategies();
        this.differentiationTemplates = this.initializeDifferentiationTemplates();
        this.groupHistory = new Map();
    }

    initializeGroupingStrategies() {
        return {
            // Performance-based grouping
            performance: {
                name: 'Performance-Based Groups',
                description: 'Groups students by mastery levels for targeted instruction',
                criteria: ['standardsMastery', 'assignmentCompletion', 'participation'],
                groupTypes: ['advanced', 'proficient', 'developing', 'needs_support'],
                maxGroupSize: 6,
                minGroupSize: 3
            },
            // Mixed-ability grouping
            mixed_ability: {
                name: 'Mixed-Ability Groups',
                description: 'Balances groups with students of different skill levels',
                criteria: ['standardsMastery', 'learningStyle', 'socialPreference'],
                groupTypes: ['balanced'],
                maxGroupSize: 5,
                minGroupSize: 4
            },
            // Learning style grouping
            learning_style: {
                name: 'Learning Style Groups',
                description: 'Groups students with similar learning preferences',
                criteria: ['learningStyle', 'attentionSpan', 'socialPreference'],
                groupTypes: ['visual', 'auditory', 'kinesthetic', 'mixed'],
                maxGroupSize: 6,
                minGroupSize: 3
            },
            // Interest-based grouping
            interest: {
                name: 'Interest-Based Groups',
                description: 'Groups students by shared interests and motivations',
                criteria: ['interests', 'motivation', 'engagement'],
                groupTypes: ['literature', 'science', 'history', 'creative'],
                maxGroupSize: 5,
                minGroupSize: 3
            },
            // Intervention grouping
            intervention: {
                name: 'Intervention Groups',
                description: 'Groups students with similar intervention needs',
                criteria: ['strugglingStandards', 'interventionType', 'riskLevel'],
                groupTypes: ['reading_support', 'writing_support', 'math_support', 'behavior_support'],
                maxGroupSize: 4,
                minGroupSize: 2
            }
        };
    }

    initializeDifferentiationTemplates() {
        return {
            // Reading Literature differentiation
            'RL.9-10.1': {
                advanced: {
                    activities: [
                        'Analyze complex texts independently',
                        'Create original textual evidence arguments',
                        'Peer-teach evidence analysis techniques',
                        'Design evidence-based discussion protocols'
                    ],
                    resources: ['Advanced texts', 'Research databases', 'Peer teaching guides'],
                    assessment: 'Create evidence-based argument essays'
                },
                proficient: {
                    activities: [
                        'Practice identifying textual evidence',
                        'Analyze evidence quality and relevance',
                        'Participate in evidence-based discussions',
                        'Complete guided evidence analysis'
                    ],
                    resources: ['Practice passages', 'Evidence analysis templates', 'Discussion guides'],
                    assessment: 'Evidence identification and analysis quizzes'
                },
                developing: {
                    activities: [
                        'Guided evidence identification',
                        'Practice with highlighted passages',
                        'Small group evidence discussions',
                        'Scaffolded evidence analysis'
                    ],
                    resources: ['Highlighted texts', 'Evidence cards', 'Guided worksheets'],
                    assessment: 'Multiple choice evidence identification'
                },
                needs_support: {
                    activities: [
                        'One-on-one evidence practice',
                        'Visual evidence identification',
                        'Simplified text analysis',
                        'Peer tutoring with evidence'
                    ],
                    resources: ['Simplified texts', 'Visual aids', 'Peer tutor guides'],
                    assessment: 'Oral evidence identification with support'
                }
            },
            'RL.9-10.2': {
                advanced: {
                    activities: [
                        'Analyze theme development across multiple texts',
                        'Compare themes across different genres',
                        'Create theme analysis presentations',
                        'Write theme comparison essays'
                    ],
                    resources: ['Multiple texts', 'Theme comparison charts', 'Presentation tools'],
                    assessment: 'Theme analysis portfolio'
                },
                proficient: {
                    activities: [
                        'Identify themes in assigned texts',
                        'Analyze theme development',
                        'Participate in theme discussions',
                        'Complete theme analysis worksheets'
                    ],
                    resources: ['Theme identification guides', 'Discussion protocols', 'Analysis templates'],
                    assessment: 'Theme identification and analysis tests'
                },
                developing: {
                    activities: [
                        'Guided theme identification',
                        'Practice with familiar themes',
                        'Small group theme discussions',
                        'Scaffolded theme analysis'
                    ],
                    resources: ['Theme cards', 'Guided reading sheets', 'Discussion starters'],
                    assessment: 'Theme identification with support'
                },
                needs_support: {
                    activities: [
                        'Visual theme identification',
                        'One-on-one theme practice',
                        'Simplified theme activities',
                        'Peer support for theme work'
                    ],
                    resources: ['Visual theme charts', 'Simplified texts', 'Peer tutor materials'],
                    assessment: 'Oral theme identification'
                }
            },
            // Writing differentiation
            'W.9-10.1': {
                advanced: {
                    activities: [
                        'Write complex argumentative essays',
                        'Research and integrate multiple sources',
                        'Peer review and editing',
                        'Create argumentative presentations'
                    ],
                    resources: ['Research databases', 'Advanced writing guides', 'Peer review protocols'],
                    assessment: 'Multi-source argumentative essay'
                },
                proficient: {
                    activities: [
                        'Write structured argumentative essays',
                        'Practice evidence integration',
                        'Participate in peer review',
                        'Complete writing workshops'
                    ],
                    resources: ['Writing templates', 'Evidence integration guides', 'Peer review sheets'],
                    assessment: 'Structured argumentative essay'
                },
                developing: {
                    activities: [
                        'Guided argumentative writing',
                        'Practice with writing templates',
                        'Small group writing workshops',
                        'Scaffolded essay writing'
                    ],
                    resources: ['Writing templates', 'Guided prompts', 'Peer support materials'],
                    assessment: 'Template-based argumentative essay'
                },
                needs_support: {
                    activities: [
                        'One-on-one writing support',
                        'Visual writing organizers',
                        'Simplified writing tasks',
                        'Peer tutoring for writing'
                    ],
                    resources: ['Visual organizers', 'Simplified prompts', 'Peer tutor guides'],
                    assessment: 'Guided argumentative paragraph'
                }
            }
        };
    }

    /**
     * Generate student groups based on selected strategy
     */
    generateGroups(students, strategy, customCriteria = {}) {
        const strategyConfig = this.groupingStrategies[strategy];
        if (!strategyConfig) {
            throw new Error(`Unknown grouping strategy: ${strategy}`);
        }

        const studentProfiles = this.createStudentProfiles(students, strategyConfig.criteria);
        const groups = this.performGrouping(studentProfiles, strategyConfig);
        
        // Store group history
        this.groupHistory.set(Date.now(), {
            strategy,
            groups,
            students: students.length,
            timestamp: new Date().toISOString()
        });

        return {
            strategy: strategyConfig.name,
            description: strategyConfig.description,
            groups: groups,
            totalStudents: students.length,
            groupCount: groups.length,
            averageGroupSize: Math.round(students.length / groups.length),
            recommendations: this.generateGroupRecommendations(groups, strategyConfig)
        };
    }

    /**
     * Create student profiles for grouping
     */
    createStudentProfiles(students, criteria) {
        return students.map(student => {
            const profile = {
                id: student.id,
                name: student.name,
                scores: {},
                metadata: {}
            };

            // Calculate scores based on criteria
            criteria.forEach(criterion => {
                switch (criterion) {
                    case 'standardsMastery':
                        profile.scores.mastery = this.calculateAverageMastery(student.standardsMastery || {});
                        break;
                    case 'assignmentCompletion':
                        profile.scores.completion = student.assignmentCompletion || 85;
                        break;
                    case 'participation':
                        profile.scores.participation = student.participation || 70;
                        break;
                    case 'learningStyle':
                        profile.metadata.learningStyle = student.learningStyle || 'mixed';
                        break;
                    case 'socialPreference':
                        profile.metadata.socialPreference = student.socialPreference || 'mixed';
                        break;
                    case 'attentionSpan':
                        profile.metadata.attentionSpan = student.attentionSpan || 'medium';
                        break;
                    case 'interests':
                        profile.metadata.interests = student.interests || [];
                        break;
                    case 'motivation':
                        profile.scores.motivation = student.motivation || 75;
                        break;
                    case 'engagement':
                        profile.scores.engagement = student.engagement || 70;
                        break;
                    case 'strugglingStandards':
                        profile.metadata.strugglingStandards = this.identifyStrugglingStandards(student.standardsMastery || {});
                        break;
                    case 'interventionType':
                        profile.metadata.interventionType = student.interventionType || 'none';
                        break;
                    case 'riskLevel':
                        profile.metadata.riskLevel = this.assessRiskLevel(student);
                        break;
                }
            });

            return profile;
        });
    }

    /**
     * Perform the actual grouping based on strategy
     */
    performGrouping(studentProfiles, strategyConfig) {
        switch (strategyConfig.name) {
            case 'Performance-Based Groups':
                return this.groupByPerformance(studentProfiles, strategyConfig);
            case 'Mixed-Ability Groups':
                return this.groupByMixedAbility(studentProfiles, strategyConfig);
            case 'Learning Style Groups':
                return this.groupByLearningStyle(studentProfiles, strategyConfig);
            case 'Interest-Based Groups':
                return this.groupByInterest(studentProfiles, strategyConfig);
            case 'Intervention Groups':
                return this.groupByIntervention(studentProfiles, strategyConfig);
            default:
                return this.groupByPerformance(studentProfiles, strategyConfig);
        }
    }

    /**
     * Group students by performance levels
     */
    groupByPerformance(studentProfiles, config) {
        // Sort students by mastery level
        const sortedStudents = studentProfiles.sort((a, b) => b.scores.mastery - a.scores.mastery);
        
        // Define performance thresholds
        const thresholds = [85, 70, 55]; // Advanced, Proficient, Developing, Needs Support
        
        const groups = {
            advanced: [],
            proficient: [],
            developing: [],
            needs_support: []
        };

        sortedStudents.forEach(student => {
            if (student.scores.mastery >= thresholds[0]) {
                groups.advanced.push(student);
            } else if (student.scores.mastery >= thresholds[1]) {
                groups.proficient.push(student);
            } else if (student.scores.mastery >= thresholds[2]) {
                groups.developing.push(student);
            } else {
                groups.needs_support.push(student);
            }
        });

        // Split large groups and combine small ones
        return this.balanceGroups(groups, config);
    }

    /**
     * Group students with mixed abilities
     */
    groupByMixedAbility(studentProfiles, config) {
        // Sort by mastery level
        const sortedStudents = studentProfiles.sort((a, b) => b.scores.mastery - a.scores.mastery);
        
        const groups = [];
        const groupCount = Math.ceil(sortedStudents.length / config.maxGroupSize);
        
        // Distribute students across groups to balance ability levels
        for (let i = 0; i < groupCount; i++) {
            groups.push([]);
        }
        
        sortedStudents.forEach((student, index) => {
            const groupIndex = index % groupCount;
            groups[groupIndex].push(student);
        });

        return groups.map((group, index) => ({
            id: `mixed_group_${index + 1}`,
            name: `Mixed-Ability Group ${index + 1}`,
            students: group,
            averageMastery: this.calculateGroupAverageMastery(group),
            focus: 'Balanced instruction with peer support'
        }));
    }

    /**
     * Group students by learning style
     */
    groupByLearningStyle(studentProfiles, config) {
        const groups = {
            visual: [],
            auditory: [],
            kinesthetic: [],
            mixed: []
        };

        studentProfiles.forEach(student => {
            const learningStyle = student.metadata.learningStyle || 'mixed';
            if (groups[learningStyle]) {
                groups[learningStyle].push(student);
            } else {
                groups.mixed.push(student);
            }
        });

        return this.balanceGroups(groups, config);
    }

    /**
     * Group students by interests
     */
    groupByInterest(studentProfiles, config) {
        const groups = {
            literature: [],
            science: [],
            history: [],
            creative: []
        };

        studentProfiles.forEach(student => {
            const interests = student.metadata.interests || [];
            let assigned = false;
            
            interests.forEach(interest => {
                if (!assigned && groups[interest]) {
                    groups[interest].push(student);
                    assigned = true;
                }
            });
            
            if (!assigned) {
                groups.creative.push(student); // Default group
            }
        });

        return this.balanceGroups(groups, config);
    }

    /**
     * Group students by intervention needs
     */
    groupByIntervention(studentProfiles, config) {
        const groups = {
            reading_support: [],
            writing_support: [],
            math_support: [],
            behavior_support: []
        };

        studentProfiles.forEach(student => {
            const interventionType = student.metadata.interventionType || 'none';
            const strugglingStandards = student.metadata.strugglingStandards || [];
            
            if (interventionType !== 'none' && groups[interventionType]) {
                groups[interventionType].push(student);
            } else if (strugglingStandards.length > 0) {
                // Determine intervention type based on struggling standards
                const hasReading = strugglingStandards.some(s => s.startsWith('RL') || s.startsWith('RI'));
                const hasWriting = strugglingStandards.some(s => s.startsWith('W'));
                const hasMath = strugglingStandards.some(s => s.startsWith('M'));
                
                if (hasReading) groups.reading_support.push(student);
                else if (hasWriting) groups.writing_support.push(student);
                else if (hasMath) groups.math_support.push(student);
                else groups.reading_support.push(student); // Default
            }
        });

        return this.balanceGroups(groups, config);
    }

    /**
     * Balance groups to meet size requirements
     */
    balanceGroups(groups, config) {
        const balancedGroups = [];
        
        Object.entries(groups).forEach(([type, students]) => {
            if (students.length === 0) return;
            
            if (students.length <= config.maxGroupSize) {
                balancedGroups.push({
                    id: `${type}_group`,
                    name: this.formatGroupName(type),
                    students: students,
                    averageMastery: this.calculateGroupAverageMastery(students),
                    focus: this.getGroupFocus(type),
                    type: type
                });
            } else {
                // Split large groups
                const groupCount = Math.ceil(students.length / config.maxGroupSize);
                for (let i = 0; i < groupCount; i++) {
                    const startIndex = i * config.maxGroupSize;
                    const endIndex = Math.min(startIndex + config.maxGroupSize, students.length);
                    const groupStudents = students.slice(startIndex, endIndex);
                    
                    balancedGroups.push({
                        id: `${type}_group_${i + 1}`,
                        name: `${this.formatGroupName(type)} ${i + 1}`,
                        students: groupStudents,
                        averageMastery: this.calculateGroupAverageMastery(groupStudents),
                        focus: this.getGroupFocus(type),
                        type: type
                    });
                }
            }
        });

        // Combine small groups if needed
        return this.combineSmallGroups(balancedGroups, config);
    }

    /**
     * Combine groups that are too small
     */
    combineSmallGroups(groups, config) {
        const smallGroups = groups.filter(group => group.students.length < config.minGroupSize);
        const adequateGroups = groups.filter(group => group.students.length >= config.minGroupSize);
        
        if (smallGroups.length <= 1) {
            return groups;
        }
        
        // Combine small groups
        const combinedGroup = {
            id: 'combined_group',
            name: 'Combined Support Group',
            students: smallGroups.flatMap(group => group.students),
            averageMastery: this.calculateGroupAverageMastery(smallGroups.flatMap(group => group.students)),
            focus: 'Mixed support needs',
            type: 'combined'
        };
        
        return [...adequateGroups, combinedGroup];
    }

    /**
     * Calculate average mastery for a group
     */
    calculateGroupAverageMastery(students) {
        if (students.length === 0) return 0;
        const totalMastery = students.reduce((sum, student) => sum + (student.scores.mastery || 0), 0);
        return Math.round(totalMastery / students.length);
    }

    /**
     * Calculate average mastery for a student
     */
    calculateAverageMastery(standardsMastery) {
        const values = Object.values(standardsMastery);
        return values.length > 0 ? values.reduce((sum, val) => sum + val, 0) / values.length : 0;
    }

    /**
     * Identify struggling standards
     */
    identifyStrugglingStandards(standardsMastery) {
        return Object.entries(standardsMastery)
            .filter(([standard, mastery]) => mastery < 60)
            .map(([standard, mastery]) => ({ standard, mastery }));
    }

    /**
     * Assess student risk level
     */
    assessRiskLevel(student) {
        const mastery = this.calculateAverageMastery(student.standardsMastery || {});
        const attendance = student.attendance || 95;
        const completion = student.assignmentCompletion || 85;
        
        if (mastery < 50 || attendance < 85 || completion < 70) {
            return 'high';
        } else if (mastery < 65 || attendance < 90 || completion < 80) {
            return 'medium';
        } else {
            return 'low';
        }
    }

    /**
     * Format group name
     */
    formatGroupName(type) {
        const names = {
            advanced: 'Advanced Group',
            proficient: 'Proficient Group',
            developing: 'Developing Group',
            needs_support: 'Support Group',
            visual: 'Visual Learners',
            auditory: 'Auditory Learners',
            kinesthetic: 'Kinesthetic Learners',
            mixed: 'Mixed Learning Styles',
            literature: 'Literature Focus',
            science: 'Science Focus',
            history: 'History Focus',
            creative: 'Creative Focus',
            reading_support: 'Reading Support',
            writing_support: 'Writing Support',
            math_support: 'Math Support',
            behavior_support: 'Behavior Support'
        };
        return names[type] || type;
    }

    /**
     * Get group focus description
     */
    getGroupFocus(type) {
        const focuses = {
            advanced: 'Challenge with advanced materials and independent projects',
            proficient: 'Maintain proficiency with engaging activities',
            developing: 'Build skills with scaffolded support',
            needs_support: 'Provide intensive support and intervention',
            visual: 'Use visual aids, charts, and diagrams',
            auditory: 'Focus on discussions, lectures, and audio materials',
            kinesthetic: 'Incorporate hands-on activities and movement',
            mixed: 'Use varied instructional approaches',
            literature: 'Focus on reading comprehension and analysis',
            science: 'Emphasize scientific thinking and inquiry',
            history: 'Focus on historical analysis and context',
            creative: 'Encourage creative expression and innovation',
            reading_support: 'Intensive reading skill development',
            writing_support: 'Focused writing skill building',
            math_support: 'Targeted math concept reinforcement',
            behavior_support: 'Social-emotional learning and behavior management'
        };
        return focuses[type] || 'General instruction';
    }

    /**
     * Generate group recommendations
     */
    generateGroupRecommendations(groups, strategyConfig) {
        const recommendations = [];
        
        groups.forEach(group => {
            const recommendation = {
                groupId: group.id,
                groupName: group.name,
                studentCount: group.students.length,
                averageMastery: group.averageMastery,
                focus: group.focus,
                activities: this.generateGroupActivities(group, strategyConfig),
                resources: this.generateGroupResources(group, strategyConfig),
                assessment: this.generateGroupAssessment(group, strategyConfig),
                monitoring: this.generateGroupMonitoring(group, strategyConfig)
            };
            
            recommendations.push(recommendation);
        });
        
        return recommendations;
    }

    /**
     * Generate activities for a group
     */
    generateGroupActivities(group, strategyConfig) {
        const activities = [];
        
        if (group.type === 'advanced') {
            activities.push('Independent research projects', 'Peer teaching opportunities', 'Advanced problem-solving tasks');
        } else if (group.type === 'needs_support') {
            activities.push('Guided practice sessions', 'One-on-one support', 'Peer tutoring');
        } else if (group.type === 'visual') {
            activities.push('Visual organizers', 'Chart creation', 'Diagram analysis');
        } else if (group.type === 'auditory') {
            activities.push('Group discussions', 'Oral presentations', 'Audio-based learning');
        } else if (group.type === 'kinesthetic') {
            activities.push('Hands-on activities', 'Movement-based learning', 'Interactive projects');
        } else {
            activities.push('Collaborative projects', 'Group discussions', 'Peer review activities');
        }
        
        return activities;
    }

    /**
     * Generate resources for a group
     */
    generateGroupResources(group, strategyConfig) {
        const resources = [];
        
        if (group.type === 'advanced') {
            resources.push('Advanced texts', 'Research databases', 'Independent study materials');
        } else if (group.type === 'needs_support') {
            resources.push('Scaffolded materials', 'Visual aids', 'Peer tutor guides');
        } else if (group.type === 'visual') {
            resources.push('Charts and diagrams', 'Visual organizers', 'Graphic materials');
        } else if (group.type === 'auditory') {
            resources.push('Audio recordings', 'Discussion protocols', 'Oral presentation guides');
        } else if (group.type === 'kinesthetic') {
            resources.push('Manipulatives', 'Interactive materials', 'Movement-based resources');
        } else {
            resources.push('Standard materials', 'Group work tools', 'Collaborative resources');
        }
        
        return resources;
    }

    /**
     * Generate assessment for a group
     */
    generateGroupAssessment(group, strategyConfig) {
        if (group.type === 'advanced') {
            return 'Portfolio assessment with self-reflection';
        } else if (group.type === 'needs_support') {
            return 'Formative assessment with immediate feedback';
        } else if (group.type === 'visual') {
            return 'Visual presentations and graphic organizers';
        } else if (group.type === 'auditory') {
            return 'Oral presentations and discussions';
        } else if (group.type === 'kinesthetic') {
            return 'Performance-based assessments and projects';
        } else {
            return 'Mixed assessment methods';
        }
    }

    /**
     * Generate monitoring plan for a group
     */
    generateGroupMonitoring(group, strategyConfig) {
        return {
            frequency: group.type === 'needs_support' ? 'Daily' : 'Weekly',
            methods: ['Observation', 'Progress checks', 'Peer feedback'],
            dataPoints: ['Engagement', 'Progress', 'Collaboration'],
            adjustments: 'Modify activities based on group dynamics and progress'
        };
    }

    /**
     * Generate differentiation plans for groups
     */
    generateDifferentiationPlans(groups, standards) {
        const plans = [];
        
        groups.forEach(group => {
            const plan = {
                groupId: group.id,
                groupName: group.name,
                standards: {},
                overallStrategy: this.getDifferentiationStrategy(group.type)
            };
            
            standards.forEach(standard => {
                plan.standards[standard] = this.getDifferentiationForStandard(standard, group.type);
            });
            
            plans.push(plan);
        });
        
        return plans;
    }

    /**
     * Get differentiation strategy for group type
     */
    getDifferentiationStrategy(groupType) {
        const strategies = {
            advanced: 'Acceleration and enrichment with independent projects',
            proficient: 'Maintenance and extension with collaborative activities',
            developing: 'Scaffolded instruction with peer support',
            needs_support: 'Intensive intervention with individualized attention',
            visual: 'Visual learning approaches with graphic organizers',
            auditory: 'Auditory learning with discussions and presentations',
            kinesthetic: 'Hands-on learning with movement and interaction',
            mixed: 'Varied approaches to accommodate all learning styles'
        };
        return strategies[groupType] || 'Standard differentiated instruction';
    }

    /**
     * Get differentiation for specific standard
     */
    getDifferentiationForStandard(standard, groupType) {
        const template = this.differentiationTemplates[standard];
        if (!template) {
            return {
                activities: ['Standard activities'],
                resources: ['Standard resources'],
                assessment: 'Standard assessment'
            };
        }
        
        return template[groupType] || template.proficient || {
            activities: ['Standard activities'],
            resources: ['Standard resources'],
            assessment: 'Standard assessment'
        };
    }

    /**
     * Get group history
     */
    getGroupHistory() {
        return Array.from(this.groupHistory.values()).sort((a, b) => 
            new Date(b.timestamp) - new Date(a.timestamp)
        );
    }

    /**
     * Export group data
     */
    exportGroupData(groups) {
        return {
            timestamp: new Date().toISOString(),
            totalGroups: groups.length,
            totalStudents: groups.reduce((sum, group) => sum + group.students.length, 0),
            groups: groups.map(group => ({
                id: group.id,
                name: group.name,
                studentCount: group.students.length,
                studentNames: group.students.map(s => s.name),
                averageMastery: group.averageMastery,
                focus: group.focus,
                type: group.type
            }))
        };
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.StudentGroupingSystem = StudentGroupingSystem;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = StudentGroupingSystem;
}
