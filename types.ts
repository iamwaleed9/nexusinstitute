
export enum UserRole {
  STUDENT = 'STUDENT',
  INSTRUCTOR = 'INSTRUCTOR',
  ADMIN = 'ADMIN'
}

export type ViewState = 'welcome' | 'login' | 'signup' | 'dashboard' | 'courses_public';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  instructorAvatar?: string;
  progress?: number;
  studentsCount: number;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  status: 'Active' | 'Upcoming' | 'Completed';
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: 'Pending' | 'Submitted' | 'Graded';
  grade?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning';
}
