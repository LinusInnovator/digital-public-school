export type UserRole = 'student' | 'caretaker' | 'teacher';

export interface Subject {
  name: string;
  progress: number;
  nextAssignment?: string;
  grade?: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  instructor: string;
  thumbnail: string;
  progress?: number;
  enrolledStudents?: number;
  modules?: Module[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'document' | 'quiz' | 'assignment';
  duration?: string;
  completed?: boolean;
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
  course: string;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'info' | 'warning' | 'success';
}