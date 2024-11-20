import React from 'react';
import { BookOpen, Users, Target, TrendingUp, Bell } from 'lucide-react';
import LMSContent from './LMSContent';

const stats = [
  { label: 'Subjects', value: '12', icon: BookOpen, color: 'bg-blue-500' },
  { label: 'Students', value: '156', icon: Users, color: 'bg-green-500' },
  { label: 'Goals', value: '48', icon: Target, color: 'bg-purple-500' },
  { label: 'Progress', value: '78%', icon: TrendingUp, color: 'bg-orange-500' },
];

const notifications = [
  {
    title: 'New Mathematics Module',
    description: 'Grade 6 algebra module has been updated with new content.',
    time: '2 hours ago',
  },
  {
    title: 'Parent Meeting Reminder',
    description: 'Upcoming curriculum overview session next week.',
    time: '1 day ago',
  },
  {
    title: 'Science Project Goals',
    description: 'New environmental science objectives added for Grade 8.',
    time: '2 days ago',
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className="p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Teacher</h1>
            <p className="text-gray-600 mt-2">Here's what's happening with your classes today.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Progress</h2>
                <div className="space-y-4">
                  {['Mathematics', 'Science', 'Language'].map((subject) => (
                    <div key={subject} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">{subject}</span>
                        <span className="text-gray-600">75%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Notifications</h2>
                <Bell className="h-5 w-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.title} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <h3 className="font-medium text-gray-900">{notification.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                    <span className="text-xs text-gray-400 mt-2 block">{notification.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <LMSContent role="teacher" />
    </div>
  );
}