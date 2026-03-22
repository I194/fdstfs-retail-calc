import { getTaxRate } from './getTaxRate.ts';

export interface TaxResult {
  rate: number;
  amount: number;
}

export function calculateTax(discountedSubtotal: number, region: string | null): TaxResult {
  const rate = getTaxRate(region);
  const amount = Math.round(discountedSubtotal * rate) / 100;
  return { rate, amount };
}
