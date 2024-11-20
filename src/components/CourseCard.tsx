import React from 'react';
import { BookOpen, Users, Clock } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  role?: 'student' | 'teacher';
}

export default function CourseCard({ course, role = 'student' }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img 
          src={course.thumbnail} 
          alt={course.name}
          className="w-full h-full object-cover"
        />
        {role === 'student' && course.progress && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2">
            <div className="flex justify-between items-center text-white text-sm">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="h-1 bg-gray-200 rounded-full mt-1">
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{course.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{course.description}</p>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{course.modules?.length || 0} Modules</span>
          </div>
          {role === 'teacher' ? (
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{course.enrolledStudents} Students</span>
            </div>
          ) : (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>8 weeks</span>
            </div>
          )}
        </div>
        
        <button className="w-full mt-4 btn btn-primary">
          {role === 'teacher' ? 'Manage Course' : 'Continue Learning'}
        </button>
      </div>
    </div>
  );
}