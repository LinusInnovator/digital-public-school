-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types for roles and lesson types
CREATE TYPE user_role AS ENUM ('student', 'teacher', 'caretaker');
CREATE TYPE lesson_type AS ENUM ('video', 'document', 'quiz', 'assignment');
CREATE TYPE event_type AS ENUM ('assignment', 'exam', 'milestone', 'activity');

-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  role user_role NOT NULL,
  full_name TEXT,
  avatar_url TEXT
);

-- Create courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  instructor_id UUID NOT NULL REFERENCES users(id),
  thumbnail TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  CONSTRAINT fk_instructor FOREIGN KEY (instructor_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create modules table
CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID NOT NULL REFERENCES courses(id),
  title TEXT NOT NULL,
  position INTEGER NOT NULL,
  CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Create lessons table
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  module_id UUID NOT NULL REFERENCES modules(id),
  title TEXT NOT NULL,
  type lesson_type NOT NULL,
  content JSONB NOT NULL,
  position INTEGER NOT NULL,
  CONSTRAINT fk_module FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
);

-- Create enrollments table
CREATE TABLE enrollments (
  user_id UUID NOT NULL REFERENCES users(id),
  course_id UUID NOT NULL REFERENCES courses(id),
  progress INTEGER DEFAULT 0,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  PRIMARY KEY (user_id, course_id),
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  CONSTRAINT valid_progress CHECK (progress >= 0 AND progress <= 100)
);

-- Create timeline_events table
CREATE TABLE timeline_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  type event_type NOT NULL,
  course_id UUID REFERENCES courses(id),
  created_by UUID NOT NULL REFERENCES users(id),
  CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE SET NULL,
  CONSTRAINT fk_creator FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- Create indexes for better query performance
CREATE INDEX idx_courses_instructor ON courses(instructor_id);
CREATE INDEX idx_modules_course ON modules(course_id);
CREATE INDEX idx_lessons_module ON lessons(module_id);
CREATE INDEX idx_enrollments_user ON enrollments(user_id);
CREATE INDEX idx_enrollments_course ON enrollments(course_id);
CREATE INDEX idx_timeline_events_date ON timeline_events(date);
CREATE INDEX idx_timeline_events_course ON timeline_events(course_id);