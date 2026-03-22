import type { Region } from '../types/region.ts';

const TAX_RATES: Record<Region, number> = {
  AUK: 6.85,
  WLG: 8.00,
  WAI: 6.25,
  CHC: 4.00,
  TAS: 8.25,
};

export function getTaxRate(region: string | null): number {
  if (!region) return 0;
  return TAX_RATES[region as Region] ?? 0;
}
