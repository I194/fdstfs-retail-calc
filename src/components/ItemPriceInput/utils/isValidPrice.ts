export function isValidPrice(value: number | string): boolean {
  if (value === '') return true
  if (typeof value === 'string') return false
  if (Number.isNaN(value)) return false
  if (value < 0) return false
  return true
}
