import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { LucideIcon, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface SidebarProps {
  items: SidebarItem[];
  logo?: string;
}

export function Sidebar({ items, logo = 'MiraiCraft' }: SidebarProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const nav = (
    <nav className="flex-1 p-4">
      <ul className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.href ||
            location.pathname.startsWith(item.href + '/');
          return (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors',
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          {logo}
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          'md:hidden fixed top-0 left-0 z-40 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-transform duration-200',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {logo}
          </Link>
          <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        {nav}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex-col shrink-0">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {logo}
          </Link>
        </div>
        {nav}
      </aside>
    </>
  );
}

