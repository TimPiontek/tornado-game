/**
 * Cloud Data Synchronization Service
 * Handles syncing teacher analytics, student data, and standards mastery to Supabase
 */

class CloudDataSync {
    constructor() {
        this.supabase = null;
        this.isOnline = navigator.onLine;
        this.syncQueue = [];
        this.syncInProgress = false;
        
        this.initializeSupabase();
        this.setupEventListeners();
    }

    initializeSupabase() {
        // Use centralized Supabase client to prevent multiple instances
        if (typeof window.getSupabaseClient === 'function') {
            this.supabase = window.getSupabaseClient();
        } else if (typeof window.supabase !== 'undefined') {
            this.supabase = window.supabase.createClient(
                "https://dmbbsrcwqpmdxqtzvtqj.supabase.co",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYmJzcmN3cXBtZHhxdHp2dHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NDg1OTYsImV4cCI6MjA2MjMyNDU5Nn0.E7EYSLCFXMYw5f4Wv7EXXj7-5yAT__BoYXklDB4uE2w"
            );
        }
    }

    setupEventListeners() {
        // Listen for online/offline status
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.processSyncQueue();
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
        });

        // Listen for authentication changes
        if (this.supabase) {
            this.supabase.auth.onAuthStateChange((event, session) => {
                if (event === 'SIGNED_IN' && session) {
                    this.processSyncQueue();
                }
            });
        }
    }

    /**
     * Sync standards mastery data to cloud
     */
    async syncStandardsMastery(rosterId, teacherId, standardsData) {
        if (!this.isOnline || !this.supabase) {
            this.queueSyncOperation('standards_mastery', { rosterId, teacherId, standardsData });
            return;
        }

        try {
            const promises = [];
            
            Object.keys(standardsData.standardsByCode).forEach(standardCode => {
                const standard = standardsData.standardsByCode[standardCode];
                
                Object.keys(standard.byStudent).forEach(studentName => {
                    const studentData = standard.byStudent[studentName];
                    
                    if (studentData.total > 0) {
                        const promise = this.supabase.rpc('sync_standards_mastery', {
                            p_student_id: studentName,
                            p_roster_id: rosterId,
                            p_teacher_id: teacherId,
                            p_standard_code: standardCode,
                            p_mastery_percentage: studentData.mastery,
                            p_total_points: studentData.total,
                            p_earned_points: studentData.earned,
                            p_assignments_count: studentData.assignments
                        });
                        
                        promises.push(promise);
                    }
                });
            });

            await Promise.all(promises);
            console.log('✅ Standards mastery data synced to cloud');
            
        } catch (error) {
            console.error('❌ Error syncing standards mastery:', error);
            this.queueSyncOperation('standards_mastery', { rosterId, teacherId, standardsData });
        }
    }

    /**
     * Sync intervention data to cloud
     */
    async syncInterventions(rosterId, teacherId, interventions) {
        if (!this.isOnline || !this.supabase) {
            this.queueSyncOperation('interventions', { rosterId, teacherId, interventions });
            return;
        }

        try {
            const promises = interventions.map(intervention => {
                return this.supabase.rpc('create_intervention', {
                    p_student_id: intervention.student,
                    p_roster_id: rosterId,
                    p_teacher_id: teacherId,
                    p_standard_code: intervention.standards?.join(',') || null,
                    p_intervention_type: intervention.type,
                    p_intervention_title: `${intervention.student} - ${intervention.type}`,
                    p_description: intervention.message
                });
            });

            await Promise.all(promises);
            console.log('✅ Intervention data synced to cloud');
            
        } catch (error) {
            console.error('❌ Error syncing interventions:', error);
            this.queueSyncOperation('interventions', { rosterId, teacherId, interventions });
        }
    }

    /**
     * Save analytics snapshot to cloud
     */
    async saveAnalyticsSnapshot(rosterId, teacherId, snapshotType, snapshotData) {
        if (!this.isOnline || !this.supabase) {
            this.queueSyncOperation('analytics_snapshot', { rosterId, teacherId, snapshotType, snapshotData });
            return;
        }

        try {
            await this.supabase.rpc('save_analytics_snapshot', {
                p_roster_id: rosterId,
                p_teacher_id: teacherId,
                p_snapshot_type: snapshotType,
                p_snapshot_data: snapshotData
            });
            
            console.log('✅ Analytics snapshot saved to cloud');
            
        } catch (error) {
            console.error('❌ Error saving analytics snapshot:', error);
            this.queueSyncOperation('analytics_snapshot', { rosterId, teacherId, snapshotType, snapshotData });
        }
    }

    /**
     * Sync student groups to cloud
     */
    async syncStudentGroups(rosterId, teacherId, groups) {
        if (!this.isOnline || !this.supabase) {
            this.queueSyncOperation('student_groups', { rosterId, teacherId, groups });
            return;
        }

        try {
            // First, delete existing groups for this roster
            await this.supabase
                .from('student_groups')
                .delete()
                .eq('roster_id', rosterId)
                .eq('teacher_id', teacherId);

            // Then insert new groups
            if (groups.length > 0) {
                const groupData = groups.map(group => ({
                    roster_id: rosterId,
                    teacher_id: teacherId,
                    group_name: group.name,
                    group_type: group.type,
                    student_ids: group.students,
                    group_criteria: group.criteria || {}
                }));

                await this.supabase
                    .from('student_groups')
                    .insert(groupData);
            }
            
            console.log('✅ Student groups synced to cloud');
            
        } catch (error) {
            console.error('❌ Error syncing student groups:', error);
            this.queueSyncOperation('student_groups', { rosterId, teacherId, groups });
        }
    }

    /**
     * Sync parent communications to cloud
     */
    async syncParentCommunications(rosterId, teacherId, communications) {
        if (!this.isOnline || !this.supabase) {
            this.queueSyncOperation('parent_communications', { rosterId, teacherId, communications });
            return;
        }

        try {
            if (communications.length > 0) {
                await this.supabase
                    .from('parent_communications')
                    .insert(communications.map(comm => ({
                        ...comm,
                        roster_id: rosterId,
                        teacher_id: teacherId
                    })));
            }
            
            console.log('✅ Parent communications synced to cloud');
            
        } catch (error) {
            console.error('❌ Error syncing parent communications:', error);
            this.queueSyncOperation('parent_communications', { rosterId, teacherId, communications });
        }
    }

    /**
     * Load analytics data from cloud
     */
    async loadAnalyticsData(rosterId, teacherId) {
        if (!this.isOnline || !this.supabase) {
            console.warn('⚠️ Offline - cannot load analytics data from cloud');
            return null;
        }

        try {
            const [standardsData, interventionsData, groupsData, snapshotsData] = await Promise.all([
                this.supabase
                    .from('standards_mastery')
                    .select('*')
                    .eq('roster_id', rosterId)
                    .eq('teacher_id', teacherId),
                
                this.supabase
                    .from('interventions')
                    .select('*')
                    .eq('roster_id', rosterId)
                    .eq('teacher_id', teacherId)
                    .eq('status', 'active'),
                
                this.supabase
                    .from('student_groups')
                    .select('*')
                    .eq('roster_id', rosterId)
                    .eq('teacher_id', teacherId),
                
                this.supabase
                    .from('analytics_snapshots')
                    .select('*')
                    .eq('roster_id', rosterId)
                    .eq('teacher_id', teacherId)
                    .order('created_at', { ascending: false })
                    .limit(10)
            ]);

            return {
                standards: standardsData.data || [],
                interventions: interventionsData.data || [],
                groups: groupsData.data || [],
                snapshots: snapshotsData.data || []
            };
            
        } catch (error) {
            console.error('❌ Error loading analytics data:', error);
            return null;
        }
    }

    /**
     * Queue sync operation for when online
     */
    queueSyncOperation(operation, data) {
        this.syncQueue.push({
            operation,
            data,
            timestamp: new Date().toISOString()
        });
        
        // Store in localStorage as backup
        localStorage.setItem('syncQueue', JSON.stringify(this.syncQueue));
        
        console.log(`📝 Queued sync operation: ${operation}`);
    }

    /**
     * Process queued sync operations
     */
    async processSyncQueue() {
        if (this.syncInProgress || !this.isOnline || !this.supabase) {
            return;
        }

        this.syncInProgress = true;
        
        try {
            // Load queue from localStorage
            const storedQueue = localStorage.getItem('syncQueue');
            if (storedQueue) {
                this.syncQueue = JSON.parse(storedQueue);
            }

            while (this.syncQueue.length > 0) {
                const operation = this.syncQueue.shift();
                
                try {
                    switch (operation.operation) {
                        case 'standards_mastery':
                            await this.syncStandardsMastery(
                                operation.data.rosterId,
                                operation.data.teacherId,
                                operation.data.standardsData
                            );
                            break;
                        case 'interventions':
                            await this.syncInterventions(
                                operation.data.rosterId,
                                operation.data.teacherId,
                                operation.data.interventions
                            );
                            break;
                        case 'analytics_snapshot':
                            await this.saveAnalyticsSnapshot(
                                operation.data.rosterId,
                                operation.data.teacherId,
                                operation.data.snapshotType,
                                operation.data.snapshotData
                            );
                            break;
                        case 'student_groups':
                            await this.syncStudentGroups(
                                operation.data.rosterId,
                                operation.data.teacherId,
                                operation.data.groups
                            );
                            break;
                        case 'parent_communications':
                            await this.syncParentCommunications(
                                operation.data.rosterId,
                                operation.data.teacherId,
                                operation.data.communications
                            );
                            break;
                    }
                    
                    console.log(`✅ Processed queued operation: ${operation.operation}`);
                    
                } catch (error) {
                    console.error(`❌ Error processing queued operation ${operation.operation}:`, error);
                    // Re-queue failed operation
                    this.syncQueue.push(operation);
                }
            }
            
            // Clear localStorage queue
            localStorage.removeItem('syncQueue');
            
        } finally {
            this.syncInProgress = false;
        }
    }

    /**
     * Get sync status
     */
    getSyncStatus() {
        return {
            isOnline: this.isOnline,
            queueLength: this.syncQueue.length,
            syncInProgress: this.syncInProgress,
            hasSupabase: !!this.supabase
        };
    }

    /**
     * Force sync all data
     */
    async forceSyncAll(rosterId, teacherId) {
        if (!this.isOnline || !this.supabase) {
            throw new Error('Cannot sync - offline or Supabase not available');
        }

        // Load all local data and sync
        const rosters = JSON.parse(localStorage.getItem('tornadoRosters') || '[]');
        const assignments = JSON.parse(localStorage.getItem('tornadoAssignments') || '[]');
        
        const roster = rosters.find(r => r.id === rosterId);
        const rosterAssignments = assignments.filter(a => a.rosterId === rosterId);
        
        if (!roster) {
            throw new Error('Roster not found');
        }

        // Analyze and sync standards data
        const standardsData = this.analyzeStandardsData(roster, rosterAssignments);
        await this.syncStandardsMastery(rosterId, teacherId, standardsData);
        
        // Sync other data as needed
        console.log('✅ Force sync completed');
    }

    /**
     * Analyze standards data from local assignments
     */
    analyzeStandardsData(roster, assignments) {
        const standardsByCode = {};
        
        assignments.forEach(assignment => {
            const submissions = assignment.submissions || {};
            (assignment.questions || []).forEach(question => {
                const codes = Array.isArray(question.standards) ? question.standards : [];
                if (codes.length === 0) return;
                
                const questionType = question.type;
                const questionTotal = questionType === 'multiple_choice' ? 
                    Number(question.points || 0) : Number(question.maxPoints || 0);
                
                roster.roster.forEach(student => {
                    codes.forEach(code => {
                        if (!standardsByCode[code]) {
                            standardsByCode[code] = {
                                totalPoints: 0,
                                byStudent: {},
                                description: this.getStandardDescription(code),
                                category: this.getStandardCategory(code),
                                assignments: 0
                            };
                        }
                        
                        standardsByCode[code].totalPoints += questionTotal;
                        standardsByCode[code].assignments++;
                        
                        if (!standardsByCode[code].byStudent[student.name]) {
                            standardsByCode[code].byStudent[student.name] = {
                                earned: 0,
                                total: 0,
                                trend: 'stable',
                                lastScore: 0,
                                assignments: 0
                            };
                        }
                        
                        standardsByCode[code].byStudent[student.name].total += questionTotal;
                        standardsByCode[code].byStudent[student.name].assignments++;

                        const submission = submissions[student.name];
                        if (submission) {
                            if (questionType === 'multiple_choice') {
                                if (submission.answers && submission.answers[question.id] && 
                                    submission.answers[question.id] === question.correctAnswer) {
                                    standardsByCode[code].byStudent[student.name].earned += questionTotal;
                                }
                            } else if (questionType === 'short_answer') {
                                if (submission.grades && typeof submission.grades[question.id] === 'number') {
                                    const earned = Math.max(0, Math.min(questionTotal, submission.grades[question.id]));
                                    standardsByCode[code].byStudent[student.name].earned += earned;
                                }
                            }
                        }
                    });
                });
            });
        });

        // Calculate mastery percentages
        Object.keys(standardsByCode).forEach(code => {
            const standard = standardsByCode[code];
            Object.keys(standard.byStudent).forEach(studentName => {
                const studentData = standard.byStudent[studentName];
                const mastery = studentData.total > 0 ? Math.round((studentData.earned / studentData.total) * 100) : 0;
                studentData.mastery = mastery;
            });
        });

        return { standardsByCode };
    }

    getStandardDescription(code) {
        const descriptions = {
            'RL.9-10.1': 'Cite strong and thorough textual evidence to support analysis',
            'RL.9-10.2': 'Determine a theme or central idea and analyze its development',
            'RL.9-10.4': 'Determine meaning of words and phrases, including figurative language',
            'W.9-10.1': 'Write arguments to support claims with valid reasoning',
            'W.9-10.2': 'Write informative/explanatory texts to examine complex ideas',
            'L.9-10.1': 'Demonstrate command of standard English grammar and usage'
        };
        return descriptions[code] || 'Standard description not available';
    }

    getStandardCategory(code) {
        if (code.startsWith('RL')) return 'Reading Literature';
        if (code.startsWith('W')) return 'Writing';
        if (code.startsWith('L')) return 'Language';
        return 'Other';
    }
}

// Initialize global cloud sync instance
window.cloudDataSync = new CloudDataSync();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CloudDataSync;
}
