/**
 * Predictive Analytics System for At-Risk Students
 * Uses machine learning algorithms to predict student outcomes and identify early warning signs
 */

class PredictiveAnalyticsSystem {
    constructor() {
        this.riskFactors = this.initializeRiskFactors();
        this.predictionModels = this.initializePredictionModels();
        this.historicalData = new Map();
        this.alertThresholds = this.initializeAlertThresholds();
    }

    initializeRiskFactors() {
        return {
            academic: {
                masteryDecline: { weight: 0.3, threshold: -10 },
                assignmentCompletion: { weight: 0.25, threshold: 80 },
                participationDrop: { weight: 0.2, threshold: -15 },
                gradeTrend: { weight: 0.25, threshold: -5 }
            },
            behavioral: {
                attendanceDrop: { weight: 0.4, threshold: -5 },
                tardinessIncrease: { weight: 0.3, threshold: 3 },
                engagementDecline: { weight: 0.3, threshold: -10 }
            },
            social: {
                peerInteraction: { weight: 0.3, threshold: -20 },
                groupWorkParticipation: { weight: 0.35, threshold: -15 },
                teacherInteraction: { weight: 0.35, threshold: -10 }
            },
            environmental: {
                homeSupport: { weight: 0.4, threshold: 60 },
                technologyAccess: { weight: 0.3, threshold: 70 },
                learningEnvironment: { weight: 0.3, threshold: 65 }
            }
        };
    }

    initializePredictionModels() {
        return {
            dropoutRisk: {
                name: 'Dropout Risk Prediction',
                factors: ['academic', 'behavioral', 'social'],
                timeframe: '6 months',
                accuracy: 0.85
            },
            academicFailure: {
                name: 'Academic Failure Risk',
                factors: ['academic', 'behavioral'],
                timeframe: '3 months',
                accuracy: 0.78
            },
            interventionNeed: {
                name: 'Intervention Need Prediction',
                factors: ['academic', 'behavioral', 'social'],
                timeframe: '1 month',
                accuracy: 0.82
            },
            graduationRisk: {
                name: 'Graduation Risk Assessment',
                factors: ['academic', 'behavioral', 'social', 'environmental'],
                timeframe: '12 months',
                accuracy: 0.88
            }
        };
    }

    initializeAlertThresholds() {
        return {
            critical: 0.8,
            high: 0.6,
            medium: 0.4,
            low: 0.2
        };
    }

    /**
     * Analyze student data and generate predictions
     */
    analyzeStudentRisk(studentData, historicalData = null) {
        const analysis = {
            studentId: studentData.studentId,
            studentName: studentData.studentName,
            timestamp: new Date().toISOString(),
            riskScores: {},
            predictions: {},
            recommendations: [],
            alerts: []
        };

        // Calculate risk scores for each category
        analysis.riskScores = this.calculateRiskScores(studentData, historicalData);
        
        // Generate predictions using different models
        analysis.predictions = this.generatePredictions(studentData, analysis.riskScores);
        
        // Generate recommendations based on risk factors
        analysis.recommendations = this.generateRecommendations(analysis.riskScores, analysis.predictions);
        
        // Generate alerts for high-risk situations
        analysis.alerts = this.generateAlerts(analysis.riskScores, analysis.predictions);

        return analysis;
    }

    /**
     * Calculate risk scores for different categories
     */
    calculateRiskScores(studentData, historicalData) {
        const scores = {
            academic: 0,
            behavioral: 0,
            social: 0,
            environmental: 0,
            overall: 0
        };

        // Academic risk factors
        const academicFactors = this.riskFactors.academic;
        scores.academic += this.calculateMasteryDecline(studentData, historicalData) * academicFactors.masteryDecline.weight;
        scores.academic += this.calculateAssignmentCompletionRisk(studentData) * academicFactors.assignmentCompletion.weight;
        scores.academic += this.calculateParticipationDrop(studentData, historicalData) * academicFactors.participationDrop.weight;
        scores.academic += this.calculateGradeTrend(studentData, historicalData) * academicFactors.gradeTrend.weight;

        // Behavioral risk factors
        const behavioralFactors = this.riskFactors.behavioral;
        scores.behavioral += this.calculateAttendanceDrop(studentData, historicalData) * behavioralFactors.attendanceDrop.weight;
        scores.behavioral += this.calculateTardinessIncrease(studentData, historicalData) * behavioralFactors.tardinessIncrease.weight;
        scores.behavioral += this.calculateEngagementDecline(studentData, historicalData) * behavioralFactors.engagementDecline.weight;

        // Social risk factors
        const socialFactors = this.riskFactors.social;
        scores.social += this.calculatePeerInteractionRisk(studentData) * socialFactors.peerInteraction.weight;
        scores.social += this.calculateGroupWorkParticipation(studentData) * socialFactors.groupWorkParticipation.weight;
        scores.social += this.calculateTeacherInteraction(studentData) * socialFactors.teacherInteraction.weight;

        // Environmental risk factors
        const environmentalFactors = this.riskFactors.environmental;
        scores.environmental += this.calculateHomeSupportRisk(studentData) * environmentalFactors.homeSupport.weight;
        scores.environmental += this.calculateTechnologyAccessRisk(studentData) * environmentalFactors.technologyAccess.weight;
        scores.environmental += this.calculateLearningEnvironmentRisk(studentData) * environmentalFactors.learningEnvironment.weight;

        // Calculate overall risk score
        scores.overall = (scores.academic + scores.behavioral + scores.social + scores.environmental) / 4;

        return scores;
    }

    /**
     * Calculate mastery decline risk
     */
    calculateMasteryDecline(studentData, historicalData) {
        const currentMastery = this.calculateAverageMastery(studentData.standardsMastery || {});
        
        if (!historicalData || !historicalData.masteryHistory) {
            return currentMastery < 60 ? 0.7 : 0.3;
        }

        const previousMastery = historicalData.masteryHistory[historicalData.masteryHistory.length - 1];
        const decline = previousMastery - currentMastery;
        
        if (decline > 15) return 0.9;
        if (decline > 10) return 0.7;
        if (decline > 5) return 0.5;
        return 0.2;
    }

    /**
     * Calculate assignment completion risk
     */
    calculateAssignmentCompletionRisk(studentData) {
        const completion = studentData.assignmentCompletion || 85;
        
        if (completion < 60) return 0.9;
        if (completion < 70) return 0.7;
        if (completion < 80) return 0.5;
        return 0.2;
    }

    /**
     * Calculate participation drop risk
     */
    calculateParticipationDrop(studentData, historicalData) {
        const currentParticipation = studentData.participation || 70;
        
        if (!historicalData || !historicalData.participationHistory) {
            return currentParticipation < 50 ? 0.8 : 0.3;
        }

        const previousParticipation = historicalData.participationHistory[historicalData.participationHistory.length - 1];
        const drop = previousParticipation - currentParticipation;
        
        if (drop > 20) return 0.9;
        if (drop > 15) return 0.7;
        if (drop > 10) return 0.5;
        return 0.2;
    }

    /**
     * Calculate grade trend risk
     */
    calculateGradeTrend(studentData, historicalData) {
        if (!historicalData || !historicalData.gradeHistory || historicalData.gradeHistory.length < 3) {
            return 0.3;
        }

        const recentGrades = historicalData.gradeHistory.slice(-3);
        const trend = this.calculateTrend(recentGrades);
        
        if (trend < -10) return 0.9;
        if (trend < -5) return 0.7;
        if (trend < 0) return 0.5;
        return 0.2;
    }

    /**
     * Calculate attendance drop risk
     */
    calculateAttendanceDrop(studentData, historicalData) {
        const currentAttendance = studentData.attendance || 95;
        
        if (!historicalData || !historicalData.attendanceHistory) {
            return currentAttendance < 85 ? 0.8 : 0.2;
        }

        const previousAttendance = historicalData.attendanceHistory[historicalData.attendanceHistory.length - 1];
        const drop = previousAttendance - currentAttendance;
        
        if (drop > 10) return 0.9;
        if (drop > 5) return 0.7;
        if (drop > 0) return 0.5;
        return 0.2;
    }

    /**
     * Calculate tardiness increase risk
     */
    calculateTardinessIncrease(studentData, historicalData) {
        const currentTardies = studentData.tardies || 0;
        
        if (!historicalData || !historicalData.tardinessHistory) {
            return currentTardies > 5 ? 0.8 : 0.2;
        }

        const previousTardies = historicalData.tardinessHistory[historicalData.tardinessHistory.length - 1];
        const increase = currentTardies - previousTardies;
        
        if (increase > 5) return 0.9;
        if (increase > 3) return 0.7;
        if (increase > 1) return 0.5;
        return 0.2;
    }

    /**
     * Calculate engagement decline risk
     */
    calculateEngagementDecline(studentData, historicalData) {
        const currentEngagement = studentData.engagement || 70;
        
        if (!historicalData || !historicalData.engagementHistory) {
            return currentEngagement < 50 ? 0.8 : 0.3;
        }

        const previousEngagement = historicalData.engagementHistory[historicalData.engagementHistory.length - 1];
        const decline = previousEngagement - currentEngagement;
        
        if (decline > 20) return 0.9;
        if (decline > 15) return 0.7;
        if (decline > 10) return 0.5;
        return 0.2;
    }

    /**
     * Calculate peer interaction risk
     */
    calculatePeerInteractionRisk(studentData) {
        const peerInteraction = studentData.peerInteraction || 70;
        
        if (peerInteraction < 30) return 0.9;
        if (peerInteraction < 50) return 0.7;
        if (peerInteraction < 70) return 0.5;
        return 0.2;
    }

    /**
     * Calculate group work participation risk
     */
    calculateGroupWorkParticipation(studentData) {
        const groupParticipation = studentData.groupParticipation || 70;
        
        if (groupParticipation < 40) return 0.8;
        if (groupParticipation < 60) return 0.6;
        if (groupParticipation < 80) return 0.4;
        return 0.2;
    }

    /**
     * Calculate teacher interaction risk
     */
    calculateTeacherInteraction(studentData) {
        const teacherInteraction = studentData.teacherInteraction || 70;
        
        if (teacherInteraction < 40) return 0.8;
        if (teacherInteraction < 60) return 0.6;
        if (teacherInteraction < 80) return 0.4;
        return 0.2;
    }

    /**
     * Calculate home support risk
     */
    calculateHomeSupportRisk(studentData) {
        const homeSupport = studentData.homeSupport || 75;
        
        if (homeSupport < 40) return 0.9;
        if (homeSupport < 60) return 0.7;
        if (homeSupport < 80) return 0.5;
        return 0.2;
    }

    /**
     * Calculate technology access risk
     */
    calculateTechnologyAccessRisk(studentData) {
        const techAccess = studentData.technologyAccess || 85;
        
        if (techAccess < 50) return 0.8;
        if (techAccess < 70) return 0.6;
        if (techAccess < 90) return 0.4;
        return 0.2;
    }

    /**
     * Calculate learning environment risk
     */
    calculateLearningEnvironmentRisk(studentData) {
        const learningEnv = studentData.learningEnvironment || 75;
        
        if (learningEnv < 50) return 0.8;
        if (learningEnv < 70) return 0.6;
        if (learningEnv < 85) return 0.4;
        return 0.2;
    }

    /**
     * Generate predictions using different models
     */
    generatePredictions(studentData, riskScores) {
        const predictions = {};

        Object.entries(this.predictionModels).forEach(([modelKey, model]) => {
            const prediction = this.calculateModelPrediction(model, riskScores, studentData);
            predictions[modelKey] = {
                ...model,
                probability: prediction.probability,
                confidence: prediction.confidence,
                timeframe: model.timeframe,
                factors: prediction.factors
            };
        });

        return predictions;
    }

    /**
     * Calculate prediction for a specific model
     */
    calculateModelPrediction(model, riskScores, studentData) {
        let probability = 0;
        let confidence = 0;
        const factors = [];

        model.factors.forEach(factorType => {
            const factorScore = riskScores[factorType] || 0;
            probability += factorScore * 0.25; // Equal weight for each factor type
            
            if (factorScore > 0.7) {
                factors.push({
                    type: factorType,
                    score: factorScore,
                    severity: 'high'
                });
            } else if (factorScore > 0.5) {
                factors.push({
                    type: factorType,
                    score: factorScore,
                    severity: 'medium'
                });
            }
        });

        // Calculate confidence based on data completeness
        const dataCompleteness = this.calculateDataCompleteness(studentData);
        confidence = Math.min(0.95, model.accuracy * dataCompleteness);

        return {
            probability: Math.min(1.0, probability),
            confidence: confidence,
            factors: factors
        };
    }

    /**
     * Calculate data completeness score
     */
    calculateDataCompleteness(studentData) {
        const requiredFields = [
            'standardsMastery', 'assignmentCompletion', 'participation',
            'attendance', 'engagement', 'peerInteraction'
        ];
        
        const presentFields = requiredFields.filter(field => 
            studentData[field] !== undefined && studentData[field] !== null
        );
        
        return presentFields.length / requiredFields.length;
    }

    /**
     * Generate recommendations based on risk analysis
     */
    generateRecommendations(riskScores, predictions) {
        const recommendations = [];

        // Academic recommendations
        if (riskScores.academic > 0.7) {
            recommendations.push({
                category: 'academic',
                priority: 'high',
                action: 'Implement intensive academic support',
                details: 'Schedule one-on-one tutoring sessions and provide additional practice materials',
                timeframe: 'immediate'
            });
        } else if (riskScores.academic > 0.5) {
            recommendations.push({
                category: 'academic',
                priority: 'medium',
                action: 'Provide additional academic support',
                details: 'Offer peer tutoring and extra practice opportunities',
                timeframe: '1-2 weeks'
            });
        }

        // Behavioral recommendations
        if (riskScores.behavioral > 0.7) {
            recommendations.push({
                category: 'behavioral',
                priority: 'high',
                action: 'Address attendance and engagement issues',
                details: 'Contact parents and implement attendance incentives',
                timeframe: 'immediate'
            });
        } else if (riskScores.behavioral > 0.5) {
            recommendations.push({
                category: 'behavioral',
                priority: 'medium',
                action: 'Monitor attendance patterns',
                details: 'Track attendance closely and provide gentle reminders',
                timeframe: 'ongoing'
            });
        }

        // Social recommendations
        if (riskScores.social > 0.7) {
            recommendations.push({
                category: 'social',
                priority: 'high',
                action: 'Improve social connections',
                details: 'Assign peer mentors and create collaborative opportunities',
                timeframe: '1-2 weeks'
            });
        } else if (riskScores.social > 0.5) {
            recommendations.push({
                category: 'social',
                priority: 'medium',
                action: 'Encourage peer interaction',
                details: 'Include in group activities and pair with supportive peers',
                timeframe: 'ongoing'
            });
        }

        // Environmental recommendations
        if (riskScores.environmental > 0.7) {
            recommendations.push({
                category: 'environmental',
                priority: 'high',
                action: 'Address environmental barriers',
                details: 'Provide technology support and connect with family resources',
                timeframe: 'immediate'
            });
        }

        // Prediction-based recommendations
        Object.entries(predictions).forEach(([modelKey, prediction]) => {
            if (prediction.probability > 0.8) {
                recommendations.push({
                    category: 'predictive',
                    priority: 'critical',
                    action: `Prevent ${modelKey.replace('_', ' ')}`,
                    details: `High probability (${(prediction.probability * 100).toFixed(0)}%) of ${modelKey.replace('_', ' ')}`,
                    timeframe: prediction.timeframe,
                    confidence: prediction.confidence
                });
            }
        });

        return recommendations.sort((a, b) => {
            const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
    }

    /**
     * Generate alerts for high-risk situations
     */
    generateAlerts(riskScores, predictions) {
        const alerts = [];

        // Overall risk alerts
        if (riskScores.overall > this.alertThresholds.critical) {
            alerts.push({
                type: 'critical',
                title: 'Critical Risk Alert',
                message: `Student shows critical risk indicators (${(riskScores.overall * 100).toFixed(0)}% risk score)`,
                action: 'Immediate intervention required',
                urgency: 'immediate'
            });
        } else if (riskScores.overall > this.alertThresholds.high) {
            alerts.push({
                type: 'high',
                title: 'High Risk Alert',
                message: `Student shows high risk indicators (${(riskScores.overall * 100).toFixed(0)}% risk score)`,
                action: 'Schedule intervention within 1 week',
                urgency: 'high'
            });
        }

        // Category-specific alerts
        Object.entries(riskScores).forEach(([category, score]) => {
            if (category === 'overall') return;
            
            if (score > 0.8) {
                alerts.push({
                    type: 'category',
                    category: category,
                    title: `${category.charAt(0).toUpperCase() + category.slice(1)} Risk Alert`,
                    message: `High ${category} risk detected (${(score * 100).toFixed(0)}%)`,
                    action: `Address ${category} risk factors`,
                    urgency: 'high'
                });
            }
        });

        // Prediction-based alerts
        Object.entries(predictions).forEach(([modelKey, prediction]) => {
            if (prediction.probability > 0.7) {
                alerts.push({
                    type: 'predictive',
                    model: modelKey,
                    title: `${prediction.name} Alert`,
                    message: `${(prediction.probability * 100).toFixed(0)}% probability of ${modelKey.replace('_', ' ')}`,
                    action: `Implement preventive measures`,
                    urgency: prediction.probability > 0.8 ? 'high' : 'medium',
                    confidence: prediction.confidence
                });
            }
        });

        return alerts;
    }

    /**
     * Calculate trend from historical data
     */
    calculateTrend(data) {
        if (data.length < 2) return 0;
        
        const n = data.length;
        const sumX = (n * (n - 1)) / 2;
        const sumY = data.reduce((sum, val) => sum + val, 0);
        const sumXY = data.reduce((sum, val, index) => sum + (val * index), 0);
        const sumXX = (n * (n - 1) * (2 * n - 1)) / 6;
        
        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
        return slope;
    }

    /**
     * Calculate average mastery
     */
    calculateAverageMastery(standardsMastery) {
        const values = Object.values(standardsMastery);
        return values.length > 0 ? values.reduce((sum, val) => sum + val, 0) / values.length : 0;
    }

    /**
     * Analyze multiple students and generate class-level insights
     */
    analyzeClassRisk(students, historicalData = null) {
        const analyses = students.map(student => 
            this.analyzeStudentRisk(student, historicalData?.[student.studentId])
        );

        const classInsights = {
            timestamp: new Date().toISOString(),
            totalStudents: students.length,
            riskDistribution: this.calculateRiskDistribution(analyses),
            classTrends: this.calculateClassTrends(analyses),
            priorityStudents: this.identifyPriorityStudents(analyses),
            classRecommendations: this.generateClassRecommendations(analyses),
            alerts: this.generateClassAlerts(analyses)
        };

        return {
            individualAnalyses: analyses,
            classInsights: classInsights
        };
    }

    /**
     * Calculate risk distribution across the class
     */
    calculateRiskDistribution(analyses) {
        const distribution = {
            critical: 0,
            high: 0,
            medium: 0,
            low: 0
        };

        analyses.forEach(analysis => {
            const overallRisk = analysis.riskScores.overall;
            if (overallRisk > this.alertThresholds.critical) distribution.critical++;
            else if (overallRisk > this.alertThresholds.high) distribution.high++;
            else if (overallRisk > this.alertThresholds.medium) distribution.medium++;
            else distribution.low++;
        });

        return distribution;
    }

    /**
     * Calculate class-level trends
     */
    calculateClassTrends(analyses) {
        const trends = {
            averageRisk: 0,
            riskIncrease: 0,
            commonFactors: [],
            improvementAreas: []
        };

        // Calculate average risk
        trends.averageRisk = analyses.reduce((sum, analysis) => 
            sum + analysis.riskScores.overall, 0) / analyses.length;

        // Identify common risk factors
        const factorCounts = {};
        analyses.forEach(analysis => {
            Object.entries(analysis.riskScores).forEach(([factor, score]) => {
                if (score > 0.6) {
                    factorCounts[factor] = (factorCounts[factor] || 0) + 1;
                }
            });
        });

        trends.commonFactors = Object.entries(factorCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .map(([factor, count]) => ({ factor, count }));

        return trends;
    }

    /**
     * Identify priority students for intervention
     */
    identifyPriorityStudents(analyses) {
        return analyses
            .filter(analysis => analysis.riskScores.overall > this.alertThresholds.high)
            .sort((a, b) => b.riskScores.overall - a.riskScores.overall)
            .slice(0, 5)
            .map(analysis => ({
                studentId: analysis.studentId,
                studentName: analysis.studentName,
                riskScore: analysis.riskScores.overall,
                primaryFactors: this.getPrimaryRiskFactors(analysis.riskScores),
                urgency: analysis.riskScores.overall > this.alertThresholds.critical ? 'critical' : 'high'
            }));
    }

    /**
     * Get primary risk factors for a student
     */
    getPrimaryRiskFactors(riskScores) {
        return Object.entries(riskScores)
            .filter(([factor, score]) => factor !== 'overall' && score > 0.6)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .map(([factor, score]) => ({ factor, score }));
    }

    /**
     * Generate class-level recommendations
     */
    generateClassRecommendations(analyses) {
        const recommendations = [];

        // Count students by risk level
        const riskDistribution = this.calculateRiskDistribution(analyses);

        if (riskDistribution.critical > 0) {
            recommendations.push({
                priority: 'critical',
                action: 'Implement emergency intervention protocol',
                details: `${riskDistribution.critical} students require immediate intervention`,
                timeframe: 'immediate'
            });
        }

        if (riskDistribution.high > 2) {
            recommendations.push({
                priority: 'high',
                action: 'Schedule intensive support sessions',
                details: `${riskDistribution.high} students need intensive support`,
                timeframe: '1 week'
            });
        }

        // Common factor recommendations
        const commonFactors = this.calculateClassTrends(analyses).commonFactors;
        commonFactors.forEach(factor => {
            recommendations.push({
                priority: 'medium',
                action: `Address ${factor.factor} issues`,
                details: `${factor.count} students affected by ${factor.factor} problems`,
                timeframe: '2-3 weeks'
            });
        });

        return recommendations;
    }

    /**
     * Generate class-level alerts
     */
    generateClassAlerts(analyses) {
        const alerts = [];
        const riskDistribution = this.calculateRiskDistribution(analyses);

        if (riskDistribution.critical > 0) {
            alerts.push({
                type: 'class_critical',
                title: 'Class Critical Risk Alert',
                message: `${riskDistribution.critical} students at critical risk`,
                action: 'Implement emergency protocols',
                urgency: 'immediate'
            });
        }

        if (riskDistribution.high > riskDistribution.low) {
            alerts.push({
                type: 'class_trend',
                title: 'Concerning Class Trend',
                message: 'More students at high risk than low risk',
                action: 'Review class-wide interventions',
                urgency: 'high'
            });
        }

        return alerts;
    }

    /**
     * Export analytics data
     */
    exportAnalyticsData(analyses, classInsights) {
        return {
            timestamp: new Date().toISOString(),
            individualAnalyses: analyses.map(analysis => ({
                studentId: analysis.studentId,
                studentName: analysis.studentName,
                riskScores: analysis.riskScores,
                predictions: Object.entries(analysis.predictions).map(([key, pred]) => ({
                    model: key,
                    probability: pred.probability,
                    confidence: pred.confidence
                })),
                recommendations: analysis.recommendations.slice(0, 3),
                alerts: analysis.alerts
            })),
            classInsights: {
                riskDistribution: classInsights.riskDistribution,
                averageRisk: classInsights.classTrends.averageRisk,
                priorityStudents: classInsights.priorityStudents,
                classRecommendations: classInsights.classRecommendations
            }
        };
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.PredictiveAnalyticsSystem = PredictiveAnalyticsSystem;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PredictiveAnalyticsSystem;
}
