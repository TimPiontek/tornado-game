/**
 * Intelligent Intervention Recommendation Engine
 * Analyzes student data and provides AI-powered intervention recommendations
 */

class InterventionRecommendationEngine {
    constructor() {
        this.interventionTemplates = this.initializeInterventionTemplates();
        this.effectivenessData = this.loadEffectivenessData();
        this.studentProfiles = new Map();
    }

    initializeInterventionTemplates() {
        return {
            // Reading Literature Interventions
            'RL.9-10.1': {
                critical: [
                    {
                        type: 'one_on_one',
                        title: 'Textual Evidence Analysis',
                        description: 'Individual sessions focusing on identifying and citing textual evidence',
                        duration: '4-6 weeks',
                        frequency: '2x per week',
                        resources: ['Textual Evidence Guide', 'Practice Passages', 'Graphic Organizers'],
                        successMetrics: ['Improved citation accuracy', 'Better text analysis']
                    },
                    {
                        type: 'small_group',
                        title: 'Evidence-Based Discussion',
                        description: 'Small group sessions practicing evidence-based discussions',
                        duration: '3-4 weeks',
                        frequency: '2x per week',
                        resources: ['Discussion Protocols', 'Evidence Cards', 'Peer Review Sheets'],
                        successMetrics: ['Increased participation', 'Better evidence usage']
                    }
                ],
                warning: [
                    {
                        type: 'peer_tutoring',
                        title: 'Peer Evidence Practice',
                        description: 'Pair struggling students with proficient peers for evidence practice',
                        duration: '2-3 weeks',
                        frequency: '1x per week',
                        resources: ['Peer Tutoring Guide', 'Practice Worksheets'],
                        successMetrics: ['Improved confidence', 'Better evidence identification']
                    }
                ]
            },
            'RL.9-10.2': {
                critical: [
                    {
                        type: 'one_on_one',
                        title: 'Theme Identification Workshop',
                        description: 'Individual sessions on identifying themes and central ideas',
                        duration: '4-6 weeks',
                        frequency: '2x per week',
                        resources: ['Theme Identification Chart', 'Practice Texts', 'Theme Tracking Sheet'],
                        successMetrics: ['Accurate theme identification', 'Better text analysis']
                    },
                    {
                        type: 'small_group',
                        title: 'Theme Development Analysis',
                        description: 'Group work analyzing how themes develop throughout texts',
                        duration: '3-4 weeks',
                        frequency: '2x per week',
                        resources: ['Theme Development Map', 'Text Analysis Tools'],
                        successMetrics: ['Improved theme analysis', 'Better text comprehension']
                    }
                ],
                warning: [
                    {
                        type: 'scaffolded_reading',
                        title: 'Guided Theme Practice',
                        description: 'Scaffolded reading activities with theme identification support',
                        duration: '2-3 weeks',
                        frequency: '1x per week',
                        resources: ['Guided Reading Sheets', 'Theme Practice Texts'],
                        successMetrics: ['Improved theme recognition', 'Better reading comprehension']
                    }
                ]
            },
            'RL.9-10.4': {
                critical: [
                    {
                        type: 'one_on_one',
                        title: 'Figurative Language Mastery',
                        description: 'Individual sessions on figurative language analysis',
                        duration: '4-6 weeks',
                        frequency: '2x per week',
                        resources: ['Figurative Language Guide', 'Practice Passages', 'Analysis Templates'],
                        successMetrics: ['Improved figurative language recognition', 'Better text analysis']
                    },
                    {
                        type: 'small_group',
                        title: 'Language Analysis Workshop',
                        description: 'Group sessions analyzing word meanings and connotations',
                        duration: '3-4 weeks',
                        frequency: '2x per week',
                        resources: ['Language Analysis Tools', 'Connotation Charts'],
                        successMetrics: ['Better word analysis', 'Improved comprehension']
                    }
                ],
                warning: [
                    {
                        type: 'vocabulary_building',
                        title: 'Context Clue Practice',
                        description: 'Vocabulary building with context clue strategies',
                        duration: '2-3 weeks',
                        frequency: '1x per week',
                        resources: ['Context Clue Guide', 'Vocabulary Cards'],
                        successMetrics: ['Improved vocabulary', 'Better context usage']
                    }
                ]
            },
            // Writing Interventions
            'W.9-10.1': {
                critical: [
                    {
                        type: 'one_on_one',
                        title: 'Argumentative Writing Bootcamp',
                        description: 'Intensive individual sessions on argumentative writing structure',
                        duration: '6-8 weeks',
                        frequency: '3x per week',
                        resources: ['Writing Templates', 'Argument Structure Guide', 'Peer Review Protocols'],
                        successMetrics: ['Improved essay structure', 'Better argumentation']
                    },
                    {
                        type: 'small_group',
                        title: 'Evidence Integration Workshop',
                        description: 'Group sessions on integrating evidence into arguments',
                        duration: '4-5 weeks',
                        frequency: '2x per week',
                        resources: ['Evidence Integration Guide', 'Practice Prompts'],
                        successMetrics: ['Better evidence usage', 'Improved argument quality']
                    }
                ],
                warning: [
                    {
                        type: 'writing_workshop',
                        title: 'Structured Writing Practice',
                        description: 'Guided writing practice with structured support',
                        duration: '3-4 weeks',
                        frequency: '2x per week',
                        resources: ['Writing Templates', 'Rubric Guides'],
                        successMetrics: ['Improved writing structure', 'Better organization']
                    }
                ]
            },
            'W.9-10.2': {
                critical: [
                    {
                        type: 'one_on_one',
                        title: 'Informative Writing Mastery',
                        description: 'Individual sessions on informative/explanatory writing',
                        duration: '5-6 weeks',
                        frequency: '2x per week',
                        resources: ['Informative Writing Guide', 'Research Templates', 'Citation Tools'],
                        successMetrics: ['Improved informative writing', 'Better research skills']
                    },
                    {
                        type: 'small_group',
                        title: 'Research and Writing',
                        description: 'Group sessions on research and writing integration',
                        duration: '4-5 weeks',
                        frequency: '2x per week',
                        resources: ['Research Guides', 'Writing Templates'],
                        successMetrics: ['Better research integration', 'Improved writing quality']
                    }
                ],
                warning: [
                    {
                        type: 'guided_writing',
                        title: 'Structured Writing Support',
                        description: 'Guided writing with structured templates and support',
                        duration: '3-4 weeks',
                        frequency: '1x per week',
                        resources: ['Writing Templates', 'Guided Prompts'],
                        successMetrics: ['Improved writing structure', 'Better organization']
                    }
                ]
            },
            // Language Interventions
            'L.9-10.1': {
                critical: [
                    {
                        type: 'one_on_one',
                        title: 'Grammar Fundamentals',
                        description: 'Individual sessions on grammar and usage fundamentals',
                        duration: '4-6 weeks',
                        frequency: '2x per week',
                        resources: ['Grammar Guide', 'Practice Exercises', 'Error Analysis Tools'],
                        successMetrics: ['Improved grammar accuracy', 'Better writing mechanics']
                    },
                    {
                        type: 'small_group',
                        title: 'Grammar Practice Workshop',
                        description: 'Group sessions practicing grammar and usage',
                        duration: '3-4 weeks',
                        frequency: '2x per week',
                        resources: ['Grammar Practice Sheets', 'Peer Review Tools'],
                        successMetrics: ['Improved grammar skills', 'Better peer collaboration']
                    }
                ],
                warning: [
                    {
                        type: 'grammar_review',
                        title: 'Targeted Grammar Practice',
                        description: 'Focused practice on specific grammar issues',
                        duration: '2-3 weeks',
                        frequency: '1x per week',
                        resources: ['Grammar Practice Sheets', 'Error Correction Guides'],
                        successMetrics: ['Improved grammar accuracy', 'Better writing mechanics']
                    }
                ]
            }
        };
    }

    loadEffectivenessData() {
        // This would typically load from a database
        return {
            'one_on_one': { effectiveness: 0.85, cost: 'high', time: 'high' },
            'small_group': { effectiveness: 0.75, cost: 'medium', time: 'medium' },
            'peer_tutoring': { effectiveness: 0.70, cost: 'low', time: 'low' },
            'scaffolded_reading': { effectiveness: 0.65, cost: 'low', time: 'low' },
            'vocabulary_building': { effectiveness: 0.60, cost: 'low', time: 'low' },
            'writing_workshop': { effectiveness: 0.70, cost: 'medium', time: 'medium' },
            'guided_writing': { effectiveness: 0.65, cost: 'low', time: 'low' },
            'grammar_review': { effectiveness: 0.60, cost: 'low', time: 'low' }
        };
    }

    /**
     * Analyze student data and generate intervention recommendations
     */
    generateRecommendations(studentData, standardsData, classContext) {
        const recommendations = [];
        const studentRiskLevel = this.assessStudentRisk(studentData, standardsData);
        
        // Generate recommendations for each struggling standard
        Object.keys(studentData.standardsMastery).forEach(standardCode => {
            const mastery = studentData.standardsMastery[standardCode];
            const trend = studentData.trends[standardCode] || 'stable';
            
            if (mastery < 60) {
                const interventionLevel = mastery < 40 ? 'critical' : 'warning';
                const standardRecommendations = this.getStandardRecommendations(
                    standardCode, 
                    interventionLevel, 
                    studentData, 
                    classContext
                );
                
                recommendations.push(...standardRecommendations);
            }
        });

        // Prioritize recommendations based on effectiveness and feasibility
        return this.prioritizeRecommendations(recommendations, studentData, classContext);
    }

    /**
     * Assess overall student risk level
     */
    assessStudentRisk(studentData, standardsData) {
        const masteryValues = Object.values(studentData.standardsMastery);
        const averageMastery = masteryValues.reduce((sum, val) => sum + val, 0) / masteryValues.length;
        const lowMasteryCount = masteryValues.filter(val => val < 60).length;
        const totalStandards = masteryValues.length;
        
        let riskLevel = 'low';
        
        if (averageMastery < 50 || lowMasteryCount > totalStandards * 0.6) {
            riskLevel = 'critical';
        } else if (averageMastery < 65 || lowMasteryCount > totalStandards * 0.4) {
            riskLevel = 'high';
        } else if (averageMastery < 75 || lowMasteryCount > totalStandards * 0.2) {
            riskLevel = 'medium';
        }
        
        return {
            level: riskLevel,
            averageMastery,
            lowMasteryCount,
            totalStandards,
            riskFactors: this.identifyRiskFactors(studentData)
        };
    }

    /**
     * Identify specific risk factors
     */
    identifyRiskFactors(studentData) {
        const riskFactors = [];
        
        if (studentData.attendance < 90) {
            riskFactors.push('Poor attendance');
        }
        
        if (studentData.assignmentCompletion < 80) {
            riskFactors.push('Low assignment completion');
        }
        
        if (studentData.participation < 60) {
            riskFactors.push('Low participation');
        }
        
        if (studentData.timeSpent < 30) {
            riskFactors.push('Insufficient time on task');
        }
        
        return riskFactors;
    }

    /**
     * Get recommendations for a specific standard
     */
    getStandardRecommendations(standardCode, interventionLevel, studentData, classContext) {
        const templates = this.interventionTemplates[standardCode];
        if (!templates || !templates[interventionLevel]) {
            return [];
        }

        return templates[interventionLevel].map(template => ({
            ...template,
            standardCode,
            interventionLevel,
            studentId: studentData.studentId,
            studentName: studentData.studentName,
            estimatedEffectiveness: this.calculateEffectiveness(template, studentData),
            resourceRequirements: this.assessResourceRequirements(template, classContext),
            timeline: this.generateTimeline(template, studentData),
            successCriteria: this.generateSuccessCriteria(template, standardCode),
            monitoringPlan: this.generateMonitoringPlan(template, standardCode)
        }));
    }

    /**
     * Calculate intervention effectiveness based on student profile
     */
    calculateEffectiveness(template, studentData) {
        const baseEffectiveness = this.effectivenessData[template.type].effectiveness;
        
        // Adjust based on student characteristics
        let adjustment = 0;
        
        if (studentData.learningStyle === 'visual' && template.resources.includes('Visual Aids')) {
            adjustment += 0.1;
        }
        
        if (studentData.socialPreference === 'group' && template.type === 'small_group') {
            adjustment += 0.1;
        }
        
        if (studentData.attentionSpan === 'short' && template.duration.includes('2-3 weeks')) {
            adjustment += 0.05;
        }
        
        return Math.min(1.0, baseEffectiveness + adjustment);
    }

    /**
     * Assess resource requirements
     */
    assessResourceRequirements(template, classContext) {
        return {
            teacherTime: this.effectivenessData[template.type].time,
            materials: template.resources,
            space: template.type === 'small_group' ? 'Small group area' : 'Individual workspace',
            technology: template.resources.some(r => r.includes('Digital')) ? 'Required' : 'Optional',
            cost: this.effectivenessData[template.type].cost
        };
    }

    /**
     * Generate implementation timeline
     */
    generateTimeline(template, studentData) {
        const startDate = new Date();
        const duration = parseInt(template.duration.split('-')[0]);
        const endDate = new Date(startDate.getTime() + (duration * 7 * 24 * 60 * 60 * 1000));
        
        return {
            startDate: startDate.toISOString().split('T')[0],
            endDate: endDate.toISOString().split('T')[0],
            duration: template.duration,
            frequency: template.frequency,
            milestones: this.generateMilestones(template, duration)
        };
    }

    /**
     * Generate implementation milestones
     */
    generateMilestones(template, duration) {
        const milestones = [];
        const weekInterval = Math.max(1, Math.floor(duration / 4));
        
        for (let week = weekInterval; week < duration; week += weekInterval) {
            milestones.push({
                week: week,
                description: `Week ${week} progress check`,
                successCriteria: `Student shows improvement in ${template.title.toLowerCase()}`
            });
        }
        
        milestones.push({
            week: duration,
            description: 'Final assessment',
            successCriteria: 'Student meets intervention goals'
        });
        
        return milestones;
    }

    /**
     * Generate success criteria
     */
    generateSuccessCriteria(template, standardCode) {
        const baseCriteria = template.successMetrics;
        const standardSpecificCriteria = this.getStandardSpecificCriteria(standardCode);
        
        return {
            primary: baseCriteria,
            secondary: standardSpecificCriteria,
            measurable: this.generateMeasurableCriteria(standardCode),
            timeline: '4-6 weeks'
        };
    }

    /**
     * Get standard-specific success criteria
     */
    getStandardSpecificCriteria(standardCode) {
        const criteria = {
            'RL.9-10.1': ['Accurately cites textual evidence', 'Supports analysis with evidence'],
            'RL.9-10.2': ['Identifies themes correctly', 'Analyzes theme development'],
            'RL.9-10.4': ['Recognizes figurative language', 'Explains word meanings'],
            'W.9-10.1': ['Writes clear arguments', 'Uses evidence effectively'],
            'W.9-10.2': ['Writes informative texts', 'Integrates research well'],
            'L.9-10.1': ['Uses grammar correctly', 'Improves writing mechanics']
        };
        
        return criteria[standardCode] || ['Shows improvement in standard'];
    }

    /**
     * Generate measurable criteria
     */
    generateMeasurableCriteria(standardCode) {
        return {
            masteryImprovement: 'Increase mastery by 20-30%',
            assignmentScores: 'Improve assignment scores by 15-25%',
            participation: 'Increase participation in class discussions',
            confidence: 'Show increased confidence in standard-related tasks'
        };
    }

    /**
     * Generate monitoring plan
     */
    generateMonitoringPlan(template, standardCode) {
        return {
            frequency: 'Weekly',
            methods: ['Assignment analysis', 'Observation notes', 'Student self-assessment'],
            dataPoints: ['Mastery scores', 'Assignment completion', 'Participation levels'],
            reporting: 'Weekly progress reports to teacher and student',
            adjustments: 'Modify approach based on weekly data'
        };
    }

    /**
     * Prioritize recommendations based on effectiveness and feasibility
     */
    prioritizeRecommendations(recommendations, studentData, classContext) {
        return recommendations
            .map(rec => ({
                ...rec,
                priorityScore: this.calculatePriorityScore(rec, studentData, classContext)
            }))
            .sort((a, b) => b.priorityScore - a.priorityScore)
            .slice(0, 5); // Return top 5 recommendations
    }

    /**
     * Calculate priority score for recommendations
     */
    calculatePriorityScore(recommendation, studentData, classContext) {
        let score = 0;
        
        // Effectiveness weight (40%)
        score += recommendation.estimatedEffectiveness * 40;
        
        // Feasibility weight (30%)
        const feasibility = this.calculateFeasibility(recommendation, classContext);
        score += feasibility * 30;
        
        // Urgency weight (20%)
        const urgency = this.calculateUrgency(recommendation, studentData);
        score += urgency * 20;
        
        // Impact weight (10%)
        const impact = this.calculateImpact(recommendation, studentData);
        score += impact * 10;
        
        return score;
    }

    /**
     * Calculate feasibility score
     */
    calculateFeasibility(recommendation, classContext) {
        let feasibility = 1.0;
        
        // Adjust based on available resources
        if (recommendation.resourceRequirements.cost === 'high' && classContext.budget === 'low') {
            feasibility -= 0.3;
        }
        
        if (recommendation.resourceRequirements.teacherTime === 'high' && classContext.teacherAvailability === 'low') {
            feasibility -= 0.2;
        }
        
        if (recommendation.resourceRequirements.technology === 'Required' && !classContext.hasTechnology) {
            feasibility -= 0.2;
        }
        
        return Math.max(0, feasibility);
    }

    /**
     * Calculate urgency score
     */
    calculateUrgency(recommendation, studentData) {
        const mastery = studentData.standardsMastery[recommendation.standardCode];
        
        if (mastery < 30) return 1.0;
        if (mastery < 50) return 0.8;
        if (mastery < 60) return 0.6;
        return 0.4;
    }

    /**
     * Calculate impact score
     */
    calculateImpact(recommendation, studentData) {
        // Higher impact for critical standards or students with multiple struggles
        const strugglingStandards = Object.values(studentData.standardsMastery)
            .filter(mastery => mastery < 60).length;
        
        let impact = 0.5;
        
        if (strugglingStandards > 3) impact += 0.3;
        if (strugglingStandards > 5) impact += 0.2;
        
        return Math.min(1.0, impact);
    }

    /**
     * Generate intervention summary for teacher
     */
    generateInterventionSummary(recommendations, studentData) {
        const riskAssessment = this.assessStudentRisk(studentData, {});
        
        return {
            studentName: studentData.studentName,
            riskLevel: riskAssessment.level,
            averageMastery: riskAssessment.averageMastery,
            riskFactors: riskAssessment.riskFactors,
            topRecommendations: recommendations.slice(0, 3),
            implementationPlan: this.generateImplementationPlan(recommendations),
            expectedOutcomes: this.generateExpectedOutcomes(recommendations, studentData),
            monitoringSchedule: this.generateMonitoringSchedule(recommendations)
        };
    }

    /**
     * Generate implementation plan
     */
    generateImplementationPlan(recommendations) {
        const plan = {
            phase1: recommendations.filter(r => r.interventionLevel === 'critical').slice(0, 2),
            phase2: recommendations.filter(r => r.interventionLevel === 'warning').slice(0, 2),
            timeline: '8-12 weeks total',
            resources: this.consolidateResources(recommendations),
            support: this.generateSupportPlan(recommendations)
        };
        
        return plan;
    }

    /**
     * Consolidate resource requirements
     */
    consolidateResources(recommendations) {
        const resources = {
            materials: new Set(),
            technology: new Set(),
            space: new Set(),
            personnel: new Set()
        };
        
        recommendations.forEach(rec => {
            rec.resourceRequirements.materials.forEach(m => resources.materials.add(m));
            if (rec.resourceRequirements.technology) resources.technology.add(rec.resourceRequirements.technology);
            if (rec.resourceRequirements.space) resources.space.add(rec.resourceRequirements.space);
        });
        
        return {
            materials: Array.from(resources.materials),
            technology: Array.from(resources.technology),
            space: Array.from(resources.space),
            estimatedCost: this.calculateTotalCost(recommendations)
        };
    }

    /**
     * Calculate total cost estimate
     */
    calculateTotalCost(recommendations) {
        const costMap = { low: 1, medium: 2, high: 3 };
        const totalCost = recommendations.reduce((sum, rec) => {
            return sum + costMap[rec.resourceRequirements.cost];
        }, 0);
        
        const avgCost = totalCost / recommendations.length;
        
        if (avgCost < 1.5) return 'Low';
        if (avgCost < 2.5) return 'Medium';
        return 'High';
    }

    /**
     * Generate support plan
     */
    generateSupportPlan(recommendations) {
        return {
            teacherSupport: 'Weekly check-ins and progress monitoring',
            peerSupport: recommendations.some(r => r.type === 'peer_tutoring') ? 'Peer tutoring pairs' : 'Optional peer collaboration',
            parentSupport: 'Monthly progress updates and home support strategies',
            administrativeSupport: 'Resource allocation and scheduling support'
        };
    }

    /**
     * Generate expected outcomes
     */
    generateExpectedOutcomes(recommendations, studentData) {
        const currentMastery = Object.values(studentData.standardsMastery)
            .reduce((sum, val) => sum + val, 0) / Object.keys(studentData.standardsMastery).length;
        
        return {
            shortTerm: {
                timeframe: '4-6 weeks',
                expectedImprovement: '15-25% mastery increase',
                confidence: 'Increased confidence in struggling areas'
            },
            longTerm: {
                timeframe: '8-12 weeks',
                expectedImprovement: '30-40% mastery increase',
                goal: 'Student reaches proficiency level (70%+ mastery)'
            },
            successIndicators: [
                'Improved assignment scores',
                'Increased class participation',
                'Better self-assessment scores',
                'Reduced need for additional support'
            ]
        };
    }

    /**
     * Generate monitoring schedule
     */
    generateMonitoringSchedule(recommendations) {
        return {
            weekly: [
                'Progress check with student',
                'Assignment analysis',
                'Observation notes',
                'Adjustment of strategies if needed'
            ],
            biweekly: [
                'Parent communication',
                'Peer feedback collection',
                'Resource effectiveness review'
            ],
            monthly: [
                'Comprehensive progress review',
                'Intervention effectiveness assessment',
                'Plan adjustments based on data'
            ]
        };
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.InterventionRecommendationEngine = InterventionRecommendationEngine;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = InterventionRecommendationEngine;
}
