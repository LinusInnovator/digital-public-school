import React from 'react';
import { Users, Calendar, Bell, FileText, MessageCircle } from 'lucide-react';

const children = [
  { name: 'Erik Anderson', grade: '8th Grade', attendance: '96%', nextEvent: 'Parent-Teacher Meeting' },
  { name: 'Sofia Anderson', grade: '5th Grade', attendance: '98%', nextEvent: 'Science Fair' },
];

const upcomingEvents = [
  { title: 'Parent-Teacher Conference', date: 'March 15, 15:00', type: 'Meeting' },
  { title: 'Science Fair', date: 'March 20, 13:00', type: 'Event' },
  { title: 'End of Term Report', date: 'March 25', type: 'Document' },
];

export default function CaretakerDashboard() {
  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, Mr. Anderson</h1>
        <p className="text-gray-600 mt-2">Stay updated with your children's educational journey</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {children.map((child) => (
            <div key={child.name} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">{child.name}</h2>
                  <p className="text-gray-600">{child.grade}</p>
                </div>
                <button className="btn btn-primary">View Details</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="text-2xl font-semibold text-gray-900">{child.attendance}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Next Event</p>
                  <p className="text-lg font-medium text-gray-900">{child.nextEvent}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Messages</p>
                  <p className="text-2xl font-semibold text-gray-900">3</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-3">Recent Activities</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <FileText className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Math test score: 85/100</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MessageCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Teacher's note about project completion</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <Calendar className="h-5 w-5 mr-2 text-purple-500" />
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.title} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <Calendar className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <span className="text-xs font-medium text-blue-600 mt-1 block">{event.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <Bell className="h-5 w-5 mr-2 text-orange-500" />
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                <MessageCircle className="h-5 w-5 mr-3 text-blue-500" />
                Message Teachers
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-green-500" />
                Schedule Meeting
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                <FileText className="h-5 w-5 mr-3 text-purple-500" />
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}