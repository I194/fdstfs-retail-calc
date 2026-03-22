import { describe, expect, it } from 'vitest'
import { isValidPrice } from '../utils/isValidPrice.ts'

describe('isValidPrice', () => {
  it('accepts 0', () => {
    expect(isValidPrice(0)).toBe(true)
  })

  it('accepts positive integers', () => {
    expect(isValidPrice(100)).toBe(true)
  })

  it('accepts positive decimals', () => {
    expect(isValidPrice(9.99)).toBe(true)
    expect(isValidPrice(0.5)).toBe(true)
  })

  it('rejects negative numbers', () => {
    expect(isValidPrice(-1)).toBe(false)
    expect(isValidPrice(-0.5)).toBe(false)
  })

  it('rejects NaN', () => {
    expect(isValidPrice(NaN)).toBe(false)
  })

  it('accepts empty string (unset input)', () => {
    expect(isValidPrice('')).toBe(true)
  })

  it('rejects non-empty strings', () => {
    expect(isValidPrice('abc')).toBe(false)
    expect(isValidPrice('9.99')).toBe(false)
  })
})
