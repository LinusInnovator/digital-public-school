import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function SupabaseTest() {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    async function checkConnection() {
      try {
        const { data, error } = await supabase.from('users').select('count').single();
        
        if (error) throw error;
        setStatus('connected');
      } catch (error) {
        setStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'Unknown error occurred');
      }
    }

    checkConnection();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 p-4 rounded-lg shadow-lg bg-white">
      <h3 className="font-semibold mb-2">Supabase Connection Status:</h3>
      {status === 'checking' && (
        <p className="text-yellow-600">Checking connection...</p>
      )}
      {status === 'connected' && (
        <p className="text-green-600">✓ Connected to Supabase</p>
      )}
      {status === 'error' && (
        <div>
          <p className="text-red-600">✗ Connection Error</p>
          <p className="text-sm text-gray-600 mt-1">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}