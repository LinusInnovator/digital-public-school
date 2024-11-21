import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import StudentDashboard from './StudentDashboard';
import CaretakerDashboard from './CaretakerDashboard';
import TimelineView from './TimelineView';
import { useAuth } from '../contexts/AuthContext';
import { useProfile } from '../hooks/useProfile';

export default function Layout() {
  const { signOut } = useAuth();
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const getDashboardComponent = () => {
    switch (profile?.role) {
      case 'student':
        return <StudentDashboard />;
      case 'caretaker':
        return <CaretakerDashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar 
        currentRole={profile?.role || 'student'}
        onSignOut={signOut}
      />
      <main className="flex-1 md:ml-64 pb-16 md:pb-0">
        <Routes>
          <Route path="/dashboard" element={getDashboardComponent()} />
          <Route path="/timeline" element={<TimelineView />} />
        </Routes>
      </main>
    </div>
  );
}