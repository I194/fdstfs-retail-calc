import { describe, expect, it } from 'vitest'
import { isValidCount } from '../utils/isValidCount.ts'

describe('isValidCount', () => {
  it('accepts 0', () => {
    expect(isValidCount(0)).toBe(true)
  })

  it('accepts positive integers', () => {
    expect(isValidCount(5)).toBe(true)
    expect(isValidCount(100)).toBe(true)
  })

  it('rejects negative numbers', () => {
    expect(isValidCount(-1)).toBe(false)
    expect(isValidCount(-100)).toBe(false)
  })

  it('rejects decimals', () => {
    expect(isValidCount(3.5)).toBe(false)
    expect(isValidCount(0.1)).toBe(false)
  })

  it('rejects NaN', () => {
    expect(isValidCount(NaN)).toBe(false)
  })

  it('accepts empty string (unset input)', () => {
    expect(isValidCount('')).toBe(true)
  })

  it('rejects non-empty strings', () => {
    expect(isValidCount('abc')).toBe(false)
    expect(isValidCount('5')).toBe(false)
  })
})
