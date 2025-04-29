import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isLoggedIn = () => {
    return typeof window !== 'undefined' && localStorage.getItem('token')
}

export function slugify(name: string): string {
  return name
      .toLowerCase()
      .replace(/\s+/g, '-')         // Replace spaces with hyphens
      .replace(/[^\w.\-]+/g, '')    // Remove all non-word characters except hyphens and periods
      .replace(/\./g, '-')          // Replace periods with hyphens
      .replace(/\-\-+/g, '-')       // Replace multiple hyphens with a single hyphen
      .trim();
}