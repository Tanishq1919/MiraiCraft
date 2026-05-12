import { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'verified-student' | 'verified-business' | 'verified-instructor';
}

export function Badge({ variant = 'primary', className, children, ...props }: BadgeProps) {
  const variants = {
    primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'verified-student': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'verified-business': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'verified-instructor': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
