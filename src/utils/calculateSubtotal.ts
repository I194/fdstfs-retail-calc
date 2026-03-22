export function calculateSubtotal(count: number, price: number): number {
  return Math.round(count * price * 100) / 100
}
