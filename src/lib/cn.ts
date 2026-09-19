/**
 * Minimal class joiner. Deliberately dependency-free — this project keeps its
 * bundle small because we sell page speed.
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
