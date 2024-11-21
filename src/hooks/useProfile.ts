import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import type { Database } from '../lib/database.types';

type Profile = Database['public']['Tables']['users']['Row'];

export function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        if (!user?.id) return;

        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        if (!data) {
          // Create new profile if it doesn't exist
          const { data: newProfile, error: createError } = await supabase
            .from('users')
            .insert([
              {
                id: user.id,
                role: 'student', // Default role
                full_name: user.user_metadata.full_name,
                avatar_url: user.user_metadata.avatar_url,
              },
            ])
            .select()
            .single();

          if (createError) throw createError;
          setProfile(newProfile);
        } else {
          setProfile(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [user]);

  const updateRole = async (newRole: 'student' | 'teacher' | 'caretaker') => {
    try {
      if (!user?.id) throw new Error('No user found');

      const { data, error } = await supabase
        .from('users')
        .update({ role: newRole })
        .eq('id', user.id)
        .select()
        .single();

      if (error) throw error;
      setProfile(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  return { profile, loading, error, updateRole };
}