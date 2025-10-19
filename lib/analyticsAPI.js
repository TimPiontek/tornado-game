/**
 * Real-time Analytics API Endpoints
 * Provides RESTful API endpoints for accessing teacher analytics data
 */

class AnalyticsAPI {
    constructor(supabaseClient) {
        this.supabase = supabaseClient;
        this.baseURL = '/api/analytics';
    }

    /**
     * Get comprehensive student analytics for a roster
     */
    async getStudentAnalytics(rosterId, teacherId, options = {}) {
        try {
            const { data, error } = await this.supabase
                .from('comprehensive_student_analytics')
                .select('*')
                .eq('roster_id', rosterId)
                .eq('teacher_id', teacherId)
                .order('analysis_date', { ascending: false })
                .limit(options.limit || 50);

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get standards mastery data for a specific student
     */
    async getStudentStandardsMastery(studentId, teacherId, options = {}) {
        try {
            const { data, error } = await this.supabase
                .from('enhanced_standards_mastery')
                .select('*')
                .eq('student_id', studentId)
                .eq('teacher_id', teacherId)
                .order('last_attempt_date', { ascending: false })
                .limit(options.limit || 100);

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get predictive analytics predictions for a student
     */
    async getStudentPredictions(studentId, teacherId, options = {}) {
        try {
            const { data, error } = await this.supabase
                .from('predictive_predictions')
                .select('*')
                .eq('student_id', studentId)
                .eq('teacher_id', teacherId)
                .eq('is_active', true)
                .order('prediction_date', { ascending: false })
                .limit(options.limit || 10);

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get intervention tracking data for a student
     */
    async getStudentInterventions(studentId, teacherId, options = {}) {
        try {
            const { data, error } = await this.supabase
                .from('intervention_tracking')
                .select('*')
                .eq('student_id', studentId)
                .eq('teacher_id', teacherId)
                .order('start_date', { ascending: false })
                .limit(options.limit || 20);

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get parent communication history for a student
     */
    async getStudentCommunications(studentId, teacherId, options = {}) {
        try {
            const { data, error } = await this.supabase
                .from('parent_communication_history')
                .select('*')
                .eq('student_id', studentId)
                .eq('teacher_id', teacherId)
                .order('created_at', { ascending: false })
                .limit(options.limit || 20);

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get class analytics snapshots
     */
    async getClassAnalyticsSnapshots(rosterId, teacherId, options = {}) {
        try {
            const { data, error } = await this.supabase
                .from('class_analytics_snapshots')
                .select('*')
                .eq('roster_id', rosterId)
                .eq('teacher_id', teacherId)
                .order('snapshot_date', { ascending: false })
                .limit(options.limit || 10);

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get standards performance tracking for a roster
     */
    async getStandardsPerformanceTracking(rosterId, teacherId, options = {}) {
        try {
            const { data, error } = await this.supabase
                .from('standards_performance_tracking')
                .select('*')
                .eq('roster_id', rosterId)
                .eq('teacher_id', teacherId)
                .order('tracking_date', { ascending: false })
                .limit(options.limit || 20);

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get student grouping history
     */
    async getStudentGroupingHistory(rosterId, teacherId, options = {}) {
        try {
            const { data, error } = await this.supabase
                .from('student_grouping_history')
                .select('*')
                .eq('roster_id', rosterId)
                .eq('teacher_id', teacherId)
                .order('created_at', { ascending: false })
                .limit(options.limit || 10);

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Create new standards mastery record
     */
    async createStandardsMastery(record) {
        try {
            const { data, error } = await this.supabase
                .from('enhanced_standards_mastery')
                .insert(record)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Update standards mastery record
     */
    async updateStandardsMastery(id, updates) {
        try {
            const { data, error } = await this.supabase
                .from('enhanced_standards_mastery')
                .update(updates)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Create new student performance analytics record
     */
    async createStudentPerformanceAnalytics(record) {
        try {
            const { data, error } = await this.supabase
                .from('student_performance_analytics')
                .insert(record)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Create new predictive prediction
     */
    async createPrediction(record) {
        try {
            const { data, error } = await this.supabase
                .from('predictive_predictions')
                .insert(record)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Create new intervention tracking record
     */
    async createInterventionTracking(record) {
        try {
            const { data, error } = await this.supabase
                .from('intervention_tracking')
                .insert(record)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Update intervention tracking record
     */
    async updateInterventionTracking(id, updates) {
        try {
            const { data, error } = await this.supabase
                .from('intervention_tracking')
                .update(updates)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Create new parent communication record
     */
    async createParentCommunication(record) {
        try {
            const { data, error } = await this.supabase
                .from('parent_communication_history')
                .insert(record)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Update parent communication record
     */
    async updateParentCommunication(id, updates) {
        try {
            const { data, error } = await this.supabase
                .from('parent_communication_history')
                .update(updates)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Create new student grouping history record
     */
    async createStudentGroupingHistory(record) {
        try {
            const { data, error } = await this.supabase
                .from('student_grouping_history')
                .insert(record)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Create new class analytics snapshot
     */
    async createClassAnalyticsSnapshot(record) {
        try {
            const { data, error } = await this.supabase
                .from('class_analytics_snapshots')
                .insert(record)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Create new standards performance tracking record
     */
    async createStandardsPerformanceTracking(record) {
        try {
            const { data, error } = await this.supabase
                .from('standards_performance_tracking')
                .insert(record)
                .select()
                .single();

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get real-time analytics dashboard data
     */
    async getDashboardData(rosterId, teacherId) {
        try {
            // Get all dashboard data in parallel
            const [
                studentAnalytics,
                classSnapshots,
                standardsTracking,
                groupingHistory,
                interventions,
                communications
            ] = await Promise.all([
                this.getStudentAnalytics(rosterId, teacherId, { limit: 25 }),
                this.getClassAnalyticsSnapshots(rosterId, teacherId, { limit: 5 }),
                this.getStandardsPerformanceTracking(rosterId, teacherId, { limit: 10 }),
                this.getStudentGroupingHistory(rosterId, teacherId, { limit: 5 }),
                this.supabase
                    .from('intervention_tracking')
                    .select('*')
                    .eq('roster_id', rosterId)
                    .eq('teacher_id', teacherId)
                    .in('status', ['active', 'planned'])
                    .order('start_date', { ascending: false })
                    .limit(10),
                this.supabase
                    .from('parent_communication_history')
                    .select('*')
                    .eq('roster_id', rosterId)
                    .eq('teacher_id', teacherId)
                    .in('status', ['sent', 'delivered'])
                    .order('sent_date', { ascending: false })
                    .limit(10)
            ]);

            return {
                success: true,
                data: {
                    studentAnalytics: studentAnalytics.data || [],
                    classSnapshots: classSnapshots.data || [],
                    standardsTracking: standardsTracking.data || [],
                    groupingHistory: groupingHistory.data || [],
                    activeInterventions: interventions.data || [],
                    recentCommunications: communications.data || []
                },
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get analytics summary for a roster
     */
    async getAnalyticsSummary(rosterId, teacherId) {
        try {
            const { data, error } = await this.supabase
                .rpc('get_analytics_summary', {
                    roster_id_param: rosterId,
                    teacher_id_param: teacherId
                });

            if (error) throw error;

            return {
                success: true,
                data: data,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Subscribe to real-time updates for a roster
     */
    subscribeToRosterUpdates(rosterId, teacherId, callback) {
        const subscription = this.supabase
            .channel(`roster_${rosterId}`)
            .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'enhanced_standards_mastery',
                filter: `roster_id=eq.${rosterId}`
            }, callback)
            .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'student_performance_analytics',
                filter: `roster_id=eq.${rosterId}`
            }, callback)
            .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'predictive_predictions',
                filter: `roster_id=eq.${rosterId}`
            }, callback)
            .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'intervention_tracking',
                filter: `roster_id=eq.${rosterId}`
            }, callback)
            .on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'parent_communication_history',
                filter: `roster_id=eq.${rosterId}`
            }, callback)
            .subscribe();

        return subscription;
    }

    /**
     * Unsubscribe from real-time updates
     */
    unsubscribeFromUpdates(subscription) {
        if (subscription) {
            this.supabase.removeChannel(subscription);
        }
    }

    /**
     * Batch update multiple records
     */
    async batchUpdate(tableName, records) {
        try {
            const { data, error } = await this.supabase
                .from(tableName)
                .upsert(records, { onConflict: 'id' })
                .select();

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Delete records with conditions
     */
    async deleteRecords(tableName, conditions) {
        try {
            let query = this.supabase.from(tableName).delete();

            // Apply conditions
            Object.entries(conditions).forEach(([key, value]) => {
                query = query.eq(key, value);
            });

            const { data, error } = await query.select();

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }

    /**
     * Get analytics data with custom filters
     */
    async getAnalyticsWithFilters(tableName, filters, options = {}) {
        try {
            let query = this.supabase.from(tableName).select('*');

            // Apply filters
            Object.entries(filters).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    query = query.in(key, value);
                } else if (typeof value === 'object' && value.operator) {
                    switch (value.operator) {
                        case 'gte':
                            query = query.gte(key, value.value);
                            break;
                        case 'lte':
                            query = query.lte(key, value.value);
                            break;
                        case 'gt':
                            query = query.gt(key, value.value);
                            break;
                        case 'lt':
                            query = query.lt(key, value.value);
                            break;
                        case 'like':
                            query = query.like(key, value.value);
                            break;
                        case 'ilike':
                            query = query.ilike(key, value.value);
                            break;
                        default:
                            query = query.eq(key, value.value);
                    }
                } else {
                    query = query.eq(key, value);
                }
            });

            // Apply ordering
            if (options.orderBy) {
                query = query.order(options.orderBy, { ascending: options.ascending !== false });
            }

            // Apply limit
            if (options.limit) {
                query = query.limit(options.limit);
            }

            // Apply offset
            if (options.offset) {
                query = query.range(options.offset, options.offset + (options.limit || 50) - 1);
            }

            const { data, error } = await query;

            if (error) throw error;

            return {
                success: true,
                data: data,
                count: data.length,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                error: error.message,
                timestamp: new Date().toISOString()
            };
        }
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.AnalyticsAPI = AnalyticsAPI;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnalyticsAPI;
}
