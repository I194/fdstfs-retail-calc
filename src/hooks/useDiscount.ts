import { calculateDiscount, type DiscountResult } from '../utils/calculateDiscount.ts';

export function useDiscount(subtotal: number): DiscountResult {
  return calculateDiscount(subtotal);
}
