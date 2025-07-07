import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if Supabase is configured
const isConfigured = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'https://your-project-id.supabase.co' && 
  supabaseAnonKey !== 'your-anon-key-here';

let supabaseClient;
let authClient;

if (isConfigured) {
  // Create real Supabase client
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  authClient = supabaseClient.auth;
} else {
  // Create mock client for development
  const mockClient = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: (callback: any) => {
        // Return a subscription object
        return {
          data: { subscription: { unsubscribe: () => {} } }
        };
      },
      signUp: (email: string, password: string, fullName?: string) => 
        Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signIn: (email: string, password: string) => 
        Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signInWithGoogle: () => 
        Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signInWithGitHub: () => 
        Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signOut: () => 
        Promise.resolve({ error: null })
    },
    from: (table: string) => ({
      select: () => ({
        eq: () => ({
          order: () => Promise.resolve({ data: [], error: null }),
          single: () => Promise.resolve({ data: null, error: null }),
          limit: () => Promise.resolve({ data: [], error: null })
        }),
        order: () => Promise.resolve({ data: [], error: null })
      }),
      insert: () => ({
        select: () => ({
          single: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } })
        })
      }),
      update: () => ({
        eq: () => ({
          select: () => ({
            single: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } })
          })
        })
      }),
      delete: () => ({
        eq: () => Promise.resolve({ error: { message: 'Supabase not configured' } })
      })
    })
  };

  supabaseClient = mockClient as any;
  authClient = mockClient.auth as any;
}

export const supabase = supabaseClient;
export const auth = authClient;