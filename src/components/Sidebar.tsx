import React from 'react';
import { BookOpen, Users, Target, Calendar, Search, Settings, GraduationCap, UserCircle, MessageCircle } from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  currentView: 'dashboard' | 'timeline';
  onViewChange: (view: 'dashboard' | 'timeline') => void;
  currentRole?: UserRole;
}

const menuItemsByRole = {
  teacher: [
    { icon: BookOpen, label: 'Curriculum', view: 'dashboard' as const },
    { icon: Calendar, label: 'Timeline', view: 'timeline' as const },
    { icon: Users, label: 'Students', view: 'dashboard' as const },
    { icon: Target, label: 'Goals', view: 'dashboard' as const },
  ],
  student: [
    { icon: GraduationCap, label: 'My Courses', view: 'dashboard' as const },
    { icon: Calendar, label: 'Timeline', view: 'timeline' as const },
    { icon: Target, label: 'My Goals', view: 'dashboard' as const },
    { icon: MessageCircle, label: 'Messages', view: 'dashboard' as const },
  ],
  caretaker: [
    { icon: UserCircle, label: 'Children', view: 'dashboard' as const },
    { icon: Calendar, label: 'Timeline', view: 'timeline' as const },
    { icon: MessageCircle, label: 'Messages', view: 'dashboard' as const },
    { icon: Target, label: 'Progress', view: 'dashboard' as const },
  ],
};

export default function Sidebar({ currentView, onViewChange, currentRole = 'teacher' }: SidebarProps) {
  const menuItems = menuItemsByRole[currentRole];

  return (
    <aside className="bg-white h-screen w-64 fixed left-0 top-0 border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">LäroPlatform</h1>
      </div>
      
      <div className="px-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <nav className="mt-6 flex-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onViewChange(item.view)}
            className={`w-full flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
              currentView === item.view ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center text-gray-700 hover:text-blue-600">
          <Settings className="h-5 w-5 mr-2" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}