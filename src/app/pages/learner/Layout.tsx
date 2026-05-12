import { Outlet } from 'react-router';
import { Sidebar } from '../../components/ui/Sidebar';
import { DashboardNavbar } from '../../components/ui/Navbar';
import { LayoutDashboard, BookOpen, Briefcase, Folder, Activity, Settings } from 'lucide-react';

export function LearnerDashboardLayout() {
  const sidebarItems = [
    { label: 'Overview', href: '/learner', icon: LayoutDashboard },
    { label: 'My Courses', href: '/learner/courses', icon: BookOpen },
    { label: 'My Projects', href: '/learner/projects', icon: Briefcase },
    { label: 'Portfolio', href: '/learner/portfolio', icon: Folder },
    { label: 'Activity & Streaks', href: '/learner/activity', icon: Activity },
    { label: 'Settings', href: '/learner/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar items={sidebarItems} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-16 md:pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
