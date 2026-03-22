import { useState } from 'react';
import { calculateTotal } from '../utils/calculateTotal.ts';

export function useApp() {
  const [count, setCount] = useState<number | string>('');
  const [price, setPrice] = useState<number | string>('');
  const [region, setRegion] = useState<string | null>(null);

  const numCount = typeof count === 'string' ? parseFloat(count) || 0 : count;
  const numPrice = typeof price === 'string' ? parseFloat(price) || 0 : price;
  const { total } = calculateTotal(numCount, numPrice, region);

  return { count, setCount, price, setPrice, region, setRegion, total };
}
