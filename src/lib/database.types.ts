export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          role: 'student' | 'teacher' | 'caretaker'
          full_name: string | null
          avatar_url: string | null
        }
        Insert: {
          id: string
          role: 'student' | 'teacher' | 'caretaker'
          full_name?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          role?: 'student' | 'teacher' | 'caretaker'
          full_name?: string | null
          avatar_url?: string | null
        }
      }
      courses: {
        Row: {
          id: string
          name: string
          description: string
          instructor_id: string
          thumbnail: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          instructor_id: string
          thumbnail: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          instructor_id?: string
          thumbnail?: string
          created_at?: string
        }
      }
      modules: {
        Row: {
          id: string
          course_id: string
          title: string
          position: number
        }
        Insert: {
          id?: string
          course_id: string
          title: string
          position: number
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          position?: number
        }
      }
      lessons: {
        Row: {
          id: string
          module_id: string
          title: string
          type: 'video' | 'document' | 'quiz' | 'assignment'
          content: Json
          position: number
        }
        Insert: {
          id?: string
          module_id: string
          title: string
          type: 'video' | 'document' | 'quiz' | 'assignment'
          content: Json
          position: number
        }
        Update: {
          id?: string
          module_id?: string
          title?: string
          type?: 'video' | 'document' | 'quiz' | 'assignment'
          content?: Json
          position?: number
        }
      }
      enrollments: {
        Row: {
          user_id: string
          course_id: string
          progress: number
          enrolled_at: string
        }
        Insert: {
          user_id: string
          course_id: string
          progress?: number
          enrolled_at?: string
        }
        Update: {
          user_id?: string
          course_id?: string
          progress?: number
          enrolled_at?: string
        }
      }
      timeline_events: {
        Row: {
          id: string
          title: string
          description: string
          date: string
          type: 'assignment' | 'exam' | 'milestone' | 'activity'
          course_id: string | null
          created_by: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          date: string
          type: 'assignment' | 'exam' | 'milestone' | 'activity'
          course_id?: string | null
          created_by: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          date?: string
          type?: 'assignment' | 'exam' | 'milestone' | 'activity'
          course_id?: string | null
          created_by?: string
        }
      }
    }
  }
}