import { describe, expect, it } from 'vitest';
import { calculateTotal } from '../utils/calculateTotal.ts';

describe('full calculation flow', () => {
  it('calculates total with no discount and no region', () => {
    const result = calculateTotal(10, 50, null);
    expect(result.subtotal).toBe(500);
    expect(result.discount.rate).toBe(0);
    expect(result.discount.amount).toBe(0);
    expect(result.discountedSubtotal).toBe(500);
    expect(result.tax.rate).toBe(0);
    expect(result.tax.amount).toBe(0);
    expect(result.total).toBe(500);
  });

  it('calculates total with 5% discount and AUK tax', () => {
    // subtotal = 100 * 50 = 5000
    // discount = 5% of 5000 = 250
    // discountedSubtotal = 4750
    // tax = 6.85% of 4750 = Math.round(4750 * 6.85) / 100 = 325.38
    // total = 4750 + 325.38 = 5075.38
    const result = calculateTotal(100, 50, 'AUK');
    expect(result.subtotal).toBe(5000);
    expect(result.discount.rate).toBe(5);
    expect(result.discount.amount).toBe(250);
    expect(result.discountedSubtotal).toBe(4750);
    expect(result.tax.rate).toBe(6.85);
    expect(result.tax.amount).toBe(325.38);
    expect(result.total).toBe(5075.38);
  });

  it('calculates total with 15% discount and CHC tax', () => {
    // subtotal = 1000 * 55 = 55000
    // discount = 15% of 55000 = 8250
    // discountedSubtotal = 46750
    // tax = 4% of 46750 = 1870
    // total = 46750 + 1870 = 48620
    const result = calculateTotal(1000, 55, 'CHC');
    expect(result.subtotal).toBe(55000);
    expect(result.discount.rate).toBe(15);
    expect(result.discount.amount).toBe(8250);
    expect(result.discountedSubtotal).toBe(46750);
    expect(result.tax.rate).toBe(4);
    expect(result.tax.amount).toBe(1870);
    expect(result.total).toBe(48620);
  });

  it('calculates total with 3% discount and TAS tax', () => {
    // subtotal = 20 * 60 = 1200
    // discount = 3% of 1200 = 36
    // discountedSubtotal = 1164
    // tax = 8.25% of 1164 = Math.round(1164 * 8.25) / 100 = 96.03
    // total = 1164 + 96.03 = 1260.03
    const result = calculateTotal(20, 60, 'TAS');
    expect(result.subtotal).toBe(1200);
    expect(result.discount.rate).toBe(3);
    expect(result.discount.amount).toBe(36);
    expect(result.discountedSubtotal).toBe(1164);
    expect(result.tax.rate).toBe(8.25);
    expect(result.tax.amount).toBe(96.03);
    expect(result.total).toBe(1260.03);
  });

  it('calculates total with zero count', () => {
    const result = calculateTotal(0, 100, 'WLG');
    expect(result.subtotal).toBe(0);
    expect(result.discount.amount).toBe(0);
    expect(result.discountedSubtotal).toBe(0);
    expect(result.tax.amount).toBe(0);
    expect(result.total).toBe(0);
  });

  it('calculates total with zero price', () => {
    const result = calculateTotal(10, 0, 'WAI');
    expect(result.subtotal).toBe(0);
    expect(result.discount.amount).toBe(0);
    expect(result.discountedSubtotal).toBe(0);
    expect(result.tax.amount).toBe(0);
    expect(result.total).toBe(0);
  });

  it('calculates total with decimal price and WLG tax', () => {
    // subtotal = 5 * 19.99 = 99.95
    // discount = 0% (below 1000) = 0
    // discountedSubtotal = 99.95
    // tax = 8% of 99.95 = Math.round(99.95 * 8) / 100 = 8
    // total = 99.95 + 8 = 107.95
    const result = calculateTotal(5, 19.99, 'WLG');
    expect(result.subtotal).toBe(99.95);
    expect(result.discount.rate).toBe(0);
    expect(result.discount.amount).toBe(0);
    expect(result.discountedSubtotal).toBe(99.95);
    expect(result.tax.rate).toBe(8);
    expect(result.tax.amount).toBe(8);
    expect(result.total).toBe(107.95);
  });

  it('calculates total with 10% discount and WAI tax', () => {
    // subtotal = 200 * 75 = 15000
    // discount = 10% of 15000 = 1500
    // discountedSubtotal = 13500
    // tax = 6.25% of 13500 = Math.round(13500 * 6.25) / 100 = 843.75
    // total = 13500 + 843.75 = 14343.75
    const result = calculateTotal(200, 75, 'WAI');
    expect(result.subtotal).toBe(15000);
    expect(result.discount.rate).toBe(10);
    expect(result.discount.amount).toBe(1500);
    expect(result.discountedSubtotal).toBe(13500);
    expect(result.tax.rate).toBe(6.25);
    expect(result.tax.amount).toBe(843.75);
    expect(result.total).toBe(14343.75);
  });
});
