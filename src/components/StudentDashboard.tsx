import React from 'react';
import { Book, Calendar, Award, Clock } from 'lucide-react';
import { Subject } from '../types';
import LMSContent from './LMSContent';

const subjects: Subject[] = [
  { name: 'Mathematics', progress: 75, nextAssignment: 'Algebra Quiz', grade: 'B+' },
  { name: 'Science', progress: 82, nextAssignment: 'Lab Report', grade: 'A-' },
  { name: 'Swedish', progress: 68, nextAssignment: 'Essay Due', grade: 'B' },
];

const upcomingTasks = [
  { title: 'Math Quiz', date: 'Tomorrow, 10:00', subject: 'Mathematics' },
  { title: 'Science Lab', date: 'Wed, 13:15', subject: 'Science' },
  { title: 'Essay Submission', date: 'Fri, 15:00', subject: 'Swedish' },
];

export default function StudentDashboard() {
  return (
    <div>
      <div className="p-8 bg-gray-50">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Hello, Erik!</h1>
          <p className="text-gray-600 mt-2">Here's your learning progress for this week</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <Book className="h-5 w-5 mr-2 text-blue-500" />
                  My Subjects
                </h2>
                <select className="text-sm border rounded-lg px-3 py-2">
                  <option>This Semester</option>
                  <option>All Time</option>
                </select>
              </div>
              <div className="space-y-6">
                {subjects.map((subject) => (
                  <div key={subject.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-gray-900">{subject.name}</h3>
                        <p className="text-sm text-gray-500">Next: {subject.nextAssignment}</p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{subject.grade}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${subject.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold flex items-center mb-4">
                <Award className="h-5 w-5 mr-2 text-green-500" />
                Recent Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Perfect Attendance', 'Math Champion', 'Science Star'].map((achievement) => (
                  <div key={achievement} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Award className="h-8 w-8 text-yellow-500" />
                    <span className="ml-3 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2 text-purple-500" />
                Upcoming Tasks
              </h2>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.title} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <Calendar className="h-5 w-5 text-gray-400 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">{task.title}</h3>
                      <p className="text-sm text-gray-500">{task.date}</p>
                      <span className="text-xs font-medium text-blue-600 mt-1 block">{task.subject}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <LMSContent role="student" />
    </div>
  );
}