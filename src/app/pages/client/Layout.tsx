import { Outlet } from 'react-router';
import { Sidebar } from '../../components/ui/Sidebar';
import { DashboardNavbar } from '../../components/ui/Navbar';
import { LayoutDashboard, PlusCircle, Briefcase, FileText, Settings } from 'lucide-react';

export function ClientDashboardLayout() {
  const sidebarItems = [
    { label: 'Overview', href: '/client', icon: LayoutDashboard },
    { label: 'Post Project', href: '/client/post-project', icon: PlusCircle },
    { label: 'My Projects', href: '/client/projects', icon: Briefcase },
    { label: 'Contracts & Documents', href: '/client/contracts', icon: FileText },
    { label: 'Settings', href: '/client/settings', icon: Settings },
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
