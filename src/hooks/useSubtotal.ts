import { calculateSubtotal } from '../utils/calculateSubtotal.ts';

export function useSubtotal(count: number | string, price: number | string): number {
  const numericCount = typeof count === 'string' ? parseFloat(count) || 0 : count;
  const numericPrice = typeof price === 'string' ? parseFloat(price) || 0 : price;
  return calculateSubtotal(numericCount, numericPrice);
}
