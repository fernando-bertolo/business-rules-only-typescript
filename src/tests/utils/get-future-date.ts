import { setYear, parseISO } from "date-fns"

// Receives "2024-09-24" and returns "2025-09-24"

export function getFutureDate(date: string): Date {
  return setYear(parseISO(date), new Date().getFullYear() + 1)
}