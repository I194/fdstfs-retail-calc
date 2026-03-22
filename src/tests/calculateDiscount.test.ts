import { describe, expect, it } from 'vitest';
import { calculateDiscount } from '../utils/calculateDiscount.ts';

describe('calculateDiscount', () => {
  it('returns rate 0 and amount 0 for subtotal of 0', () => {
    expect(calculateDiscount(0)).toEqual({ rate: 0, amount: 0 });
  });

  it('returns rate 0 and amount 0 for subtotal below 1000', () => {
    expect(calculateDiscount(500)).toEqual({ rate: 0, amount: 0 });
  });

  it('calculates 3% discount for subtotal of 1000', () => {
    expect(calculateDiscount(1000)).toEqual({ rate: 3, amount: 30 });
  });

  it('calculates 5% discount for subtotal of 5000', () => {
    expect(calculateDiscount(5000)).toEqual({ rate: 5, amount: 250 });
  });

  it('calculates 7% discount for subtotal of 7000', () => {
    expect(calculateDiscount(7000)).toEqual({ rate: 7, amount: 490 });
  });

  it('calculates 10% discount for subtotal of 10000', () => {
    expect(calculateDiscount(10000)).toEqual({ rate: 10, amount: 1000 });
  });

  it('calculates 15% discount for subtotal of 50000', () => {
    expect(calculateDiscount(50000)).toEqual({ rate: 15, amount: 7500 });
  });

  it('rounds discount amount to two decimal places', () => {
    expect(calculateDiscount(4999.99)).toEqual({ rate: 3, amount: 150 });
  });

  it('handles floating-point precision in discount amount', () => {
    expect(calculateDiscount(1033.33)).toEqual({ rate: 3, amount: 31 });
  });

  it('calculates correct discount for a mid-tier value', () => {
    expect(calculateDiscount(8500)).toEqual({ rate: 7, amount: 595 });
  });
});
