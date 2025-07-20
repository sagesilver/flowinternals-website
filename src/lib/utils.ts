import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Debug function to check browser locale settings
 * @returns Object with locale information
 */
export function getBrowserLocaleInfo() {
  return {
    browserLocale: navigator.language,
    browserLocales: navigator.languages,
    defaultDateFormat: new Date().toLocaleDateString(),
    australianDateFormat: new Date().toLocaleDateString('en-AU'),
    systemTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    systemLocale: Intl.DateTimeFormat().resolvedOptions().locale
  };
}

/**
 * Formats a date to Australian format (DD/MM/YYYY)
 * @param date - Date object or string to format
 * @returns Formatted date string in DD/MM/YYYY format
 */
export function formatDateAU(date: Date | string = new Date()): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  return dateObj.toLocaleDateString('en-AU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

/**
 * Formats a date to Australian format with day name (e.g., "Monday, 01/07/2025")
 * @param date - Date object or string to format
 * @returns Formatted date string with day name and DD/MM/YYYY format
 */
export function formatDateAUWithDay(date: Date | string = new Date()): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  return dateObj.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

/**
 * Formats a date to Australian short format (e.g., "1 Jul 2025")
 * @param date - Date object or string to format
 * @returns Formatted date string in short Australian format
 */
export function formatDateAUShort(date: Date | string = new Date()): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  return dateObj.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
