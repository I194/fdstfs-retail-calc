import { describe, expect, it } from 'vitest'
import { calculateSubtotal } from '../utils/calculateSubtotal.ts'

describe('calculateSubtotal', () => {
  it('multiplies count by price', () => {
    expect(calculateSubtotal(5, 10)).toBe(50)
  })

  it('returns 0 when count is 0', () => {
    expect(calculateSubtotal(0, 10)).toBe(0)
  })

  it('returns 0 when price is 0', () => {
    expect(calculateSubtotal(3, 0)).toBe(0)
  })

  it('returns 0 when both are 0', () => {
    expect(calculateSubtotal(0, 0)).toBe(0)
  })

  it('handles decimal prices correctly', () => {
    expect(calculateSubtotal(3, 9.99)).toBe(29.97)
  })

  it('avoids floating point precision errors', () => {
    expect(calculateSubtotal(2, 0.1)).toBe(0.2)
  })
})
