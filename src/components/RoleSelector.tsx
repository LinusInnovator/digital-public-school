import React from 'react';
import { useProfile } from '../hooks/useProfile';

export default function RoleSelector() {
  const { profile, updateRole, loading, error } = useProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4">
        Error loading profile: {error}
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Select Your Role</h2>
      <div className="space-y-3">
        {['student', 'teacher', 'caretaker'].map((role) => (
          <button
            key={role}
            onClick={() => updateRole(role as 'student' | 'teacher' | 'caretaker')}
            className={`w-full px-4 py-2 rounded-lg border transition-colors ${
              profile?.role === role
                ? 'bg-blue-50 border-blue-500 text-blue-700'
                : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
            }`}
          >
            <span className="capitalize">{role}</span>
          </button>
        ))}
      </div>
    </div>
  );
}