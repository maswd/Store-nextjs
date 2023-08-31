import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatDecimal(number: number): string {
  const formatter = new Intl.NumberFormat('fa-IR', {
      useGrouping: true,
  });

  return formatter.format(number) + " تومان";
}