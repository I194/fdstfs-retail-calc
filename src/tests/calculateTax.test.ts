import { describe, expect, it } from 'vitest';
import { calculateTax } from '../utils/calculateTax.ts';

describe('calculateTax', () => {
  it('returns rate 0 and amount 0 for null region', () => {
    expect(calculateTax(1000, null)).toEqual({ rate: 0, amount: 0 });
  });

  it('calculates AUK tax (6.85%) correctly', () => {
    expect(calculateTax(1000, 'AUK')).toEqual({ rate: 6.85, amount: 68.5 });
  });

  it('calculates WLG tax (8%) correctly', () => {
    expect(calculateTax(500, 'WLG')).toEqual({ rate: 8, amount: 40 });
  });

  it('calculates WAI tax (6.25%) correctly', () => {
    expect(calculateTax(800, 'WAI')).toEqual({ rate: 6.25, amount: 50 });
  });

  it('calculates CHC tax (4%) correctly', () => {
    expect(calculateTax(2500, 'CHC')).toEqual({ rate: 4, amount: 100 });
  });

  it('calculates TAS tax (8.25%) correctly', () => {
    expect(calculateTax(200, 'TAS')).toEqual({ rate: 8.25, amount: 16.5 });
  });

  it('returns amount 0 for zero subtotal', () => {
    expect(calculateTax(0, 'AUK')).toEqual({ rate: 6.85, amount: 0 });
  });

  it('rounds tax amount to two decimal places', () => {
    // 333.33 * 6.85 = 2283.3105, Math.round(2283.3105) / 100 = 22.83
    expect(calculateTax(333.33, 'AUK')).toEqual({ rate: 6.85, amount: 22.83 });
  });

  it('handles floating-point precision', () => {
    // 99.99 * 8.25 = 824.9175, Math.round(824.9175) / 100 = 8.25
    expect(calculateTax(99.99, 'TAS')).toEqual({ rate: 8.25, amount: 8.25 });
  });
});
