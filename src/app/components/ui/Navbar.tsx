import { Link } from 'react-router';
import { useState } from 'react';
import { Search, Bell, User, Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '../../contexts/ThemeContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="MiraiCraft Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">MiraiCraft</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Courses
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
              Projects
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-gray-700 dark:text-gray-300" /> : <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-4 space-y-3">
          <Link to="/courses" onClick={() => setMobileOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">
            Courses
          </Link>
          <Link to="/projects" onClick={() => setMobileOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">
            Projects
          </Link>
          <div className="flex gap-2 pt-2">
            <Link to="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full">Log in</Button>
            </Link>
            <Link to="/signup" className="flex-1" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full">Sign up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

interface DashboardNavbarProps {
  onSearchChange?: (value: string) => void;
}

export function DashboardNavbar({ onSearchChange }: DashboardNavbarProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg relative">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
