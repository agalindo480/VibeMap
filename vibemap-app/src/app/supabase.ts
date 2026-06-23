import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qdludadnoowldffuxnuj.supabase.co';
const supabaseAnonKey = 'sb_publishable_3b3d-O0QxZ_zLxS8PQTWdA_QFFLgNxA';

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);