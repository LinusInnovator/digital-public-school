import React, { useState } from 'react';
import { Calendar, ChevronDown, BookOpen, Users, Target, Clock } from 'lucide-react';

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  type: 'assignment' | 'exam' | 'milestone' | 'activity';
  subject?: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Mathematics: Algebra Introduction',
    date: '2024-03-15',
    type: 'milestone',
    subject: 'Mathematics',
    description: 'Start of algebraic expressions and equations unit'
  },
  {
    id: '2',
    title: 'Swedish Literature Essay',
    date: '2024-03-20',
    type: 'assignment',
    subject: 'Swedish',
    description: 'Analysis of modern Swedish literature'
  },
  {
    id: '3',
    title: 'Science Fair Project',
    date: '2024-04-05',
    type: 'activity',
    subject: 'Science',
    description: 'Present research on renewable energy sources'
  },
  {
    id: '4',
    title: 'Mid-term Examinations',
    date: '2024-04-15',
    type: 'exam',
    description: 'Comprehensive assessment of term progress'
  }
];

const typeColors = {
  assignment: 'bg-blue-100 text-blue-800',
  exam: 'bg-red-100 text-red-800',
  milestone: 'bg-green-100 text-green-800',
  activity: 'bg-purple-100 text-purple-800'
};

const typeIcons = {
  assignment: BookOpen,
  exam: Target,
  milestone: Clock,
  activity: Users
};

export default function TimelineView() {
  const [selectedMonth, setSelectedMonth] = useState('March 2024');
  const [selectedView, setSelectedView] = useState<'list' | 'calendar'>('list');

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Academic Timeline</h1>
          <p className="text-gray-600 mt-2">Track curriculum progress and upcoming events</p>
        </div>
        
        <div className="flex space-x-4">
          <div className="relative">
            <button className="btn btn-secondary flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {selectedMonth}
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
          </div>
          
          <div className="flex rounded-lg border border-gray-200">
            <button
              className={`px-4 py-2 text-sm font-medium ${
                selectedView === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setSelectedView('list')}
            >
              List
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                selectedView === 'calendar' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setSelectedView('calendar')}
            >
              Calendar
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Timeline Events</h2>
                <button className="btn btn-primary">Add Event</button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="relative">
                {timelineEvents.map((event, index) => (
                  <div key={event.id} className="flex group">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full" />
                      {index < timelineEvents.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-200 group-hover:bg-blue-200 transition-colors" />
                      )}
                    </div>
                    
                    <div className="ml-6 pb-8">
                      <div className="flex items-center">
                        <time className="text-sm text-gray-500">{event.date}</time>
                        <span className={`ml-3 px-2 py-1 text-xs rounded-full ${typeColors[event.type]}`}>
                          {event.type}
                        </span>
                      </div>
                      
                      <div className="mt-3 bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <div className={`p-2 rounded-lg ${typeColors[event.type]} bg-opacity-20`}>
                            {React.createElement(typeIcons[event.type], { className: 'h-5 w-5' })}
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                            {event.subject && (
                              <span className="text-sm text-blue-600">{event.subject}</span>
                            )}
                            <p className="mt-1 text-gray-600">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Events</span>
                  <span className="text-2xl font-semibold">{timelineEvents.length}</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Upcoming</span>
                  <span className="text-2xl font-semibold">3</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Completed</span>
                  <span className="text-2xl font-semibold">12</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="space-y-3">
              {Object.entries(typeColors).map(([type]) => (
                <label key={type} className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-500" defaultChecked />
                  <span className="ml-2 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}