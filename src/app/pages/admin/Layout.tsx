import { Outlet } from 'react-router';
import { Sidebar } from '../../components/ui/Sidebar';
import { DashboardNavbar } from '../../components/ui/Navbar';
import { LayoutDashboard, Users, FileText } from 'lucide-react';

export function AdminDashboardLayout() {
  const sidebarItems = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Users', href: '/admin/users', icon: Users },
    { label: 'Contract Templates', href: '/admin/contracts', icon: FileText },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar items={sidebarItems} logo="MiraiCraft Admin" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-16 md:pt-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
