export function getDiscountRate(subtotal: number): number {
  if (subtotal >= 50000) return 15;
  if (subtotal >= 10000) return 10;
  if (subtotal >= 7000) return 7;
  if (subtotal >= 5000) return 5;
  if (subtotal >= 1000) return 3;
  return 0;
}
