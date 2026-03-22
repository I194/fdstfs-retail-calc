export function isValidCount(value: number | string): boolean {
  if (value === '') return true
  if (typeof value === 'string') return false
  if (Number.isNaN(value)) return false
  if (value < 0) return false
  if (!Number.isInteger(value)) return false
  return true
}
