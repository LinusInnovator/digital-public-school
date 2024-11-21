import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StudentDashboard from './components/StudentDashboard';
import CaretakerDashboard from './components/CaretakerDashboard';
import TimelineView from './components/TimelineView';
import RoleSwitcher from './components/RoleSwitcher';
import { UserRole } from './types';

function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('teacher');
  const [currentView, setCurrentView] = useState<'dashboard' | 'timeline'>('dashboard');

  const getDashboardComponent = () => {
    if (currentView === 'timeline') {
      return <TimelineView />;
    }

    switch (currentRole) {
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
        onViewChange={setCurrentView} 
        currentView={currentView}
        currentRole={currentRole}
      />
      <main className="flex-1 md:ml-64 pb-16 md:pb-0">
        <RoleSwitcher currentRole={currentRole} onRoleChange={setCurrentRole} />
        {getDashboardComponent()}
      </main>
    </div>
  );
}

export default App;