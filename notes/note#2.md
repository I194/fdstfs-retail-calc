I added subtotal calculation.

Two new components:

- `src/components/ItemCountInput`
- `src/components/ItemPriceInput`

I added validation utils to both of them and covered them with Vitest unit tests.

Subtotal calculation happens here: [src/hooks/useSubtotal.ts](../src/hooks/useSubtotal.ts). I prefer creating custom hooks for any logic because it allows me to clearly separate code. I will later move this code into a final custom hook which will call other hooks to perform total price calculation:
```ts
  const [count, setCount] = useState<number | string>('')
  const [price, setPrice] = useState<number | string>('')
  const subtotal = useSubtotal(count, price)
```

Subtotal calculation is also covered by unit tests: [text](../src/tests/calculateSubtotal.test.ts).

I added a command to run tests which I forgot to add in the previous PR: `"test": "vitest run"`

I spent around 30 minutes implementing all of this.