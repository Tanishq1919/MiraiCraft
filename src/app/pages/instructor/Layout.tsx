import { Outlet } from 'react-router';
import { Sidebar } from '../../components/ui/Sidebar';
import { DashboardNavbar } from '../../components/ui/Navbar';
import { LayoutDashboard, BookOpen, PlusCircle, DollarSign, Settings } from 'lucide-react';

export function InstructorDashboardLayout() {
  const sidebarItems = [
    { label: 'Overview', href: '/instructor', icon: LayoutDashboard },
    { label: 'My Courses', href: '/instructor/courses', icon: BookOpen },
    { label: 'Create Course', href: '/instructor/create-course', icon: PlusCircle },
    { label: 'Earnings', href: '/instructor/earnings', icon: DollarSign },
    { label: 'Settings', href: '/instructor/settings', icon: Settings },
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
