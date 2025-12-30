
import { UserRole, Course, Assignment, Notification } from './types';

export const INSTITUTE_INFO = {
  name: 'Nexus IT Institute',
  location: 'Block B, Blue Area, Islamabad, Pakistan',
  phone: '+92 51 123 4567',
  email: 'info@nexus-it.edu.pk',
  mission: 'To empower the youth of Pakistan with world-class technical skills, bridging the gap between Islamabad and the global tech stage.'
};

export const MOCK_USER = {
  id: 'u1',
  name: 'Ali Ahmed',
  email: 'ali.ahmed@nexus-it.edu',
  role: UserRole.STUDENT,
  avatar: 'https://i.pravatar.cc/150?u=33'
};

export const MOCK_TEACHER = {
  id: 't1',
  name: 'Tahir Khan',
  email: 'tahir.khan@nexus-it.edu',
  role: UserRole.INSTRUCTOR,
  avatar: 'https://i.pravatar.cc/150?u=11'
};

export const MOCK_FACULTY = [
  { name: 'Tahir Khan', role: 'Lead Web Developer', avatar: 'https://i.pravatar.cc/150?u=11', bio: 'Expert in React and Cloud Architecture.' },
  { name: 'Zaid Al-Farsi', role: 'AI & Data Scientist', avatar: 'https://i.pravatar.cc/150?u=12', bio: 'Former senior engineer specialized in Neural Networks.' },
  { name: 'Omar Hassan', role: 'Digital Marketing Strategist', avatar: 'https://i.pravatar.cc/150?u=14', bio: 'Helping brands scale with data-driven marketing.' },
  { name: 'Hamza Siddiqui', role: 'Cybersecurity Expert', avatar: 'https://i.pravatar.cc/150?u=15', bio: 'Security researcher and ethical hacker.' },
  { name: 'Yusuf Mansoor', role: 'Cloud Architect', avatar: 'https://i.pravatar.cc/150?u=16', bio: 'AWS/Azure certified solutions architect.' }
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Web Development Masterclass',
    category: 'Development',
    instructor: 'Tahir Khan',
    instructorAvatar: 'https://i.pravatar.cc/150?u=11',
    progress: 75,
    studentsCount: 1240,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    level: 'Intermediate',
    duration: '12 Weeks',
    status: 'Active'
  },
  {
    id: 'c2',
    title: 'Advanced AI & Neural Networks',
    category: 'AI & Data Science',
    instructor: 'Zaid Al-Farsi',
    instructorAvatar: 'https://i.pravatar.cc/150?u=12',
    progress: 0,
    studentsCount: 850,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
    level: 'Advanced',
    duration: '16 Weeks',
    status: 'Active'
  },
  {
    id: 'c3',
    title: 'Digital Marketing Mastery',
    category: 'Marketing',
    instructor: 'Omar Hassan',
    instructorAvatar: 'https://i.pravatar.cc/150?u=14',
    progress: 0,
    studentsCount: 2100,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    level: 'Beginner',
    duration: '8 Weeks',
    status: 'Active'
  },
  {
    id: 'c4',
    title: 'Professional Graphic Designing',
    category: 'Design',
    instructor: 'Yusuf Mansoor',
    instructorAvatar: 'https://i.pravatar.cc/150?u=16',
    progress: 40,
    studentsCount: 920,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
    level: 'Intermediate',
    duration: '10 Weeks',
    status: 'Active'
  },
  {
    id: 'c5',
    title: 'Cybersecurity Essentials',
    category: 'Security',
    instructor: 'Hamza Siddiqui',
    instructorAvatar: 'https://i.pravatar.cc/150?u=15',
    progress: 0,
    studentsCount: 560,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    level: 'Intermediate',
    duration: '14 Weeks',
    status: 'Upcoming'
  },
  {
    id: 'c6',
    title: 'Full-Stack React & Node',
    category: 'Development',
    instructor: 'Tahir Khan',
    instructorAvatar: 'https://i.pravatar.cc/150?u=11',
    progress: 0,
    studentsCount: 1100,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
    level: 'Advanced',
    duration: '20 Weeks',
    status: 'Active'
  }
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
  {
    id: 'a1',
    title: 'Responsive Portfolio Layout',
    course: 'Web Development Masterclass',
    dueDate: '2024-06-20',
    status: 'Pending'
  },
  {
    id: 'a2',
    title: 'AI Model Optimization Lab',
    course: 'Advanced AI & Neural Networks',
    dueDate: '2024-06-22',
    status: 'Pending'
  },
  {
    id: 'a3',
    title: 'Brand Identity Concept',
    course: 'Professional Graphic Designing',
    dueDate: '2024-06-18',
    status: 'Submitted'
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'n1',
    title: 'New Feedback',
    message: 'Tahir Khan left a comment on your Web Dev project.',
    time: '1h ago',
    type: 'success'
  },
  {
    id: 'n2',
    title: 'Course Update',
    message: 'Zaid Al-Farsi uploaded new lecture materials for AI Track.',
    time: '3h ago',
    type: 'info'
  }
];
