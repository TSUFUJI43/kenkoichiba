const SUPABASE_URL = "https://bvlmukmabwubdfaebzbo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_CeYH12uKYMe07tYxd_flsA_cxdI922_";

window.mySupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);