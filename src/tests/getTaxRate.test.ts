import { describe, expect, it } from 'vitest';
import { getTaxRate } from '../utils/getTaxRate.ts';

describe('getTaxRate', () => {
  it('returns 6.85 for AUK', () => {
    expect(getTaxRate('AUK')).toBe(6.85);
  });

  it('returns 8 for WLG', () => {
    expect(getTaxRate('WLG')).toBe(8);
  });

  it('returns 6.25 for WAI', () => {
    expect(getTaxRate('WAI')).toBe(6.25);
  });

  it('returns 4 for CHC', () => {
    expect(getTaxRate('CHC')).toBe(4);
  });

  it('returns 8.25 for TAS', () => {
    expect(getTaxRate('TAS')).toBe(8.25);
  });

  it('returns 0 for null region', () => {
    expect(getTaxRate(null)).toBe(0);
  });

  it('returns 0 for unknown region', () => {
    expect(getTaxRate('UNKNOWN')).toBe(0);
  });
});
