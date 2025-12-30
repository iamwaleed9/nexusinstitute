
import React, { useState } from 'react';
import { UserRole, ViewState } from './types';
import Layout from './components/Layout';
import StudentDashboard from './views/StudentDashboard';
import InstructorDashboard from './views/InstructorDashboard';
import AdminDashboard from './views/AdminDashboard';
import Login from './views/Login';
import Welcome from './views/Welcome';
import Signup from './views/Signup';
import PublicCourses from './views/PublicCourses';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('welcome');
  const [activeRole, setActiveRole] = useState<UserRole>(UserRole.STUDENT);

  const handleLogin = (role: UserRole) => {
    setActiveRole(role);
    setView('dashboard');
  };

  const handleSignup = (role: UserRole) => {
    setActiveRole(role);
    setView('dashboard');
  };

  const handleLogout = () => {
    setView('welcome');
  };

  const renderContent = () => {
    switch (view) {
      case 'welcome':
        return <Welcome onNavigate={(target, role) => {
          if (role) setActiveRole(role);
          setView(target);
        }} />;
      case 'courses_public':
        return <PublicCourses onBack={() => setView('welcome')} onNavigate={(target) => setView(target)} />;
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'signup':
        return <Signup onSignup={handleSignup} onBack={() => setView('welcome')} />;
      case 'dashboard':
        return (
          <Layout activeRole={activeRole} setActiveRole={setActiveRole}>
            {activeRole === UserRole.STUDENT && <StudentDashboard />}
            {activeRole === UserRole.INSTRUCTOR && <InstructorDashboard />}
            {activeRole === UserRole.ADMIN && <AdminDashboard />}
          </Layout>
        );
      default:
        return <Welcome onNavigate={(target) => setView(target)} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
    </div>
  );
};

export default App;
