import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a numeric amount as Indian Rupee currency string.
 * e.g. 120000 → "₹1,20,000"
 */
export function formatCurrency(amount: number): string {
  return '₹' + amount.toLocaleString('en-IN');
}

