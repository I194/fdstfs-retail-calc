import { describe, expect, it } from 'vitest';
import { getDiscountRate } from '../utils/getDiscountRate.ts';

describe('getDiscountRate', () => {
  it('returns 0 for subtotal of 0', () => {
    expect(getDiscountRate(0)).toBe(0);
  });

  it('returns 0 for subtotal of 999.99', () => {
    expect(getDiscountRate(999.99)).toBe(0);
  });

  it('returns 3 for subtotal of 1000', () => {
    expect(getDiscountRate(1000)).toBe(3);
  });

  it('returns 3 for subtotal of 4999.99', () => {
    expect(getDiscountRate(4999.99)).toBe(3);
  });

  it('returns 5 for subtotal of 5000', () => {
    expect(getDiscountRate(5000)).toBe(5);
  });

  it('returns 5 for subtotal of 6999.99', () => {
    expect(getDiscountRate(6999.99)).toBe(5);
  });

  it('returns 7 for subtotal of 7000', () => {
    expect(getDiscountRate(7000)).toBe(7);
  });

  it('returns 7 for subtotal of 9999.99', () => {
    expect(getDiscountRate(9999.99)).toBe(7);
  });

  it('returns 10 for subtotal of 10000', () => {
    expect(getDiscountRate(10000)).toBe(10);
  });

  it('returns 10 for subtotal of 49999.99', () => {
    expect(getDiscountRate(49999.99)).toBe(10);
  });

  it('returns 15 for subtotal of 50000', () => {
    expect(getDiscountRate(50000)).toBe(15);
  });

  it('returns 15 for subtotal of 100000', () => {
    expect(getDiscountRate(100000)).toBe(15);
  });

  it('returns 3 for a mid-tier subtotal of 2500', () => {
    expect(getDiscountRate(2500)).toBe(3);
  });
});
