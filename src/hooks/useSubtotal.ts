import { calculateSubtotal } from '../utils/calculateSubtotal.ts'

export function useSubtotal(count: number | string, price: number | string): number {
  const numericCount = typeof count === 'string' ? 0 : count
  const numericPrice = typeof price === 'string' ? 0 : price
  return calculateSubtotal(numericCount, numericPrice)
}
