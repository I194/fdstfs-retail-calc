import { getDiscountRate } from './getDiscountRate.ts';

export interface DiscountResult {
  rate: number
  amount: number
}

export function calculateDiscount(subtotal: number): DiscountResult {
  const rate = getDiscountRate(subtotal);
  const amount = Math.round(subtotal * rate) / 100;
  return { rate, amount };
}
