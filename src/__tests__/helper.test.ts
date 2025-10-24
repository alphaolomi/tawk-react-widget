import { describe, it, expect } from 'vitest';
import { isValidString, isBrowser } from '../utils/helper';

describe('Helper Functions', () => {
  describe('isValidString', () => {
    it('should return true for valid strings', () => {
      expect(isValidString('test')).toBe(true);
      expect(isValidString('hello world')).toBe(true);
    });

    it('should return false for empty strings', () => {
      expect(isValidString('')).toBe(false);
    });

    it('should return false for non-strings', () => {
      expect(isValidString(null)).toBe(false);
      expect(isValidString(undefined)).toBe(false);
      expect(isValidString(123)).toBe(false);
      expect(isValidString({})).toBe(false);
      expect(isValidString([])).toBe(false);
    });
  });

  describe('isBrowser', () => {
    it('should return true in browser environment', () => {
      expect(isBrowser()).toBe(true);
    });
  });
});
