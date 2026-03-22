import { Select } from '@mantine/core';
import type { Region } from '../../types/region.ts';

interface RegionSelectProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

const REGION_OPTIONS: { value: Region; label: string }[] = [
  { value: 'AUK', label: 'Auckland (AUK)' },
  { value: 'WLG', label: 'Wellington (WLG)' },
  { value: 'WAI', label: 'Waikato (WAI)' },
  { value: 'CHC', label: 'Christchurch (CHC)' },
  { value: 'TAS', label: 'Tasman (TAS)' },
];

export default function RegionSelect({ value, onChange }: RegionSelectProps) {
  return (
    <Select
      label="Region"
      placeholder="Select region"
      data={REGION_OPTIONS}
      value={value}
      onChange={onChange}
    />
  );
}
