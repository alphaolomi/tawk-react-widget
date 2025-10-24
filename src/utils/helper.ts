/**
 * Validates if a value is a valid non-empty string
 * @param value - The value to validate
 * @returns True if the value is a valid string, false otherwise
 */
export function isValidString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && value !== null && value !== undefined;
}

/**
 * Safely checks if code is running in a browser environment
 * @returns True if running in a browser
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
