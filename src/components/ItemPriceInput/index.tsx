import { NumberInput } from '@mantine/core';

interface ItemPriceInputProps {
  value: number | string
  onChange: (value: number | string) => void
}

export default function ItemPriceInput({ value, onChange }: ItemPriceInputProps) {
  return (
    <NumberInput
      label="Item Price"
      value={value}
      onChange={onChange}
      min={0}
      allowNegative={false}
      decimalScale={2}
      fixedDecimalScale
      clampBehavior="strict"
      prefix="$"
    />
  );
}
