import { calculateSubtotal } from './calculateSubtotal.ts';
import { calculateDiscount } from './calculateDiscount.ts';
import { calculateTax } from './calculateTax.ts';

export interface TotalResult {
  subtotal: number;
  discount: { rate: number; amount: number };
  discountedSubtotal: number;
  tax: { rate: number; amount: number };
  total: number;
}

export function calculateTotal(count: number, price: number, region: string | null): TotalResult {
  const subtotal = calculateSubtotal(count, price);
  const discount = calculateDiscount(subtotal);
  const discountedSubtotal = subtotal - discount.amount;
  const tax = calculateTax(discountedSubtotal, region);
  const total = Math.round((discountedSubtotal + tax.amount) * 100) / 100;
  return { subtotal, discount, discountedSubtotal, tax, total };
}
