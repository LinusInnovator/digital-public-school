import React from 'react';
import CourseCard from './CourseCard';
import { Course } from '../types';

const sampleCourses: Course[] = [
  {
    id: '1',
    name: 'Mathematics Grade 8',
    description: 'Comprehensive mathematics course covering algebra, geometry, and statistics.',
    instructor: 'Dr. Smith',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    progress: 45,
    modules: [
      {
        id: 'm1',
        title: 'Algebra Basics',
        lessons: [
          { id: 'l1', title: 'Variables and Expressions', type: 'video', duration: '15:00' },
          { id: 'l2', title: 'Solving Equations', type: 'quiz' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Swedish Language',
    description: 'Learn Swedish grammar, vocabulary, and conversation skills.',
    instructor: 'Ms. Anderson',
    thumbnail: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800',
    progress: 72,
    modules: [
      {
        id: 'm1',
        title: 'Basic Grammar',
        lessons: [
          { id: 'l1', title: 'Pronouns', type: 'video', duration: '10:00' },
          { id: 'l2', title: 'Present Tense', type: 'assignment' },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Science - Biology',
    description: 'Explore the fundamentals of biology, from cells to ecosystems.',
    instructor: 'Dr. Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    progress: 28,
    modules: [
      {
        id: 'm1',
        title: 'Cell Biology',
        lessons: [
          { id: 'l1', title: 'Cell Structure', type: 'video', duration: '20:00' },
          { id: 'l2', title: 'Cell Functions', type: 'quiz' },
        ],
      },
    ],
  },
];

interface LMSContentProps {
  role: 'student' | 'teacher';
}

export default function LMSContent({ role }: LMSContentProps) {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {role === 'teacher' ? 'My Courses' : 'Enrolled Courses'}
          </h2>
          <p className="text-gray-600 mt-1">
            {role === 'teacher' 
              ? 'Manage and track your teaching courses'
              : 'Continue learning from where you left off'}
          </p>
        </div>
        {role === 'teacher' && (
          <button className="btn btn-primary">
            Create New Course
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCourses.map((course) => (
          <CourseCard key={course.id} course={course} role={role} />
        ))}
      </div>
    </div>
  );
}