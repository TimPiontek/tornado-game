// Centralized Supabase client to prevent multiple instances
// This ensures only one GoTrueClient instance exists across the entire application

let supabaseClient = null;

function getSupabaseClient() {
    if (!supabaseClient) {
        if (typeof window !== 'undefined' && window.supabase) {
            supabaseClient = window.supabase.createClient(
                "https://dmbbsrcwqpmdxqtzvtqj.supabase.co",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYmJzcmN3cXBtZHhxdHp2dHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NDg1OTYsImV4cCI6MjA2MjMyNDU5Nn0.E7EYSLCFXMYw5f4Wv7EXXj7-5yAT__BoYXklDB4uE2w",
                {
                    auth: {
                        persistSession: true,
                        autoRefreshToken: true,
                        detectSessionInUrl: true
                    }
                }
            );
            console.log('✅ Supabase client created (centralized)');
        } else {
            console.warn('⚠️ Supabase not available - running in offline mode');
        }
    }
    return supabaseClient;
}

// Make function available globally
if (typeof window !== 'undefined') {
    window.getSupabaseClient = getSupabaseClient;
}
