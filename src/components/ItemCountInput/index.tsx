import { NumberInput } from '@mantine/core';

interface ItemCountInputProps {
  value: number | string
  onChange: (value: number | string) => void
}

export default function ItemCountInput({ value, onChange }: ItemCountInputProps) {
  return (
    <NumberInput
      label="Item Count"
      value={value}
      onChange={onChange}
      min={0}
      allowNegative={false}
      allowDecimal={false}
      clampBehavior="strict"
    />
  );
}
