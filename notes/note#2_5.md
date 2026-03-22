I found a problem in my codebase.

I created utils like [isValidPrice](../src/components/ItemPriceInput/utils/isValidPrice.ts) and [isValidCount](../src/components/ItemCountInput/utils/isValidCount.ts), and covered them with unit tests. But these validators are never used in the components. I completely forgot about that in a rush. Also, I just checked and there is no custom validator prop in the Mantine [NumberInput](https://mantine.dev/core/number-input/). The only way to add custom validation is by using the Mantine `useForm` hook. I can do that, but now I think that this validation is redundant, because `NumberInput` has built-in validation and I already use it like here:

```tsx
  <NumberInput
    label="Item Price"
    value={value}
    onChange={onChange}
    min={0} // here
    allowNegative={false} // here
    decimalScale={2} // here
    fixedDecimalScale // here
    clampBehavior="strict" // here
    prefix="$"
  />
```

Therefore I decided to remove those utils and their tests completely from the codebase. This [test](../src/tests/calculateSubtotal.test.ts) should be enough for subtotal calculation.