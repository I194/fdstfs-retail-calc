import { useState } from 'react'
import { Text } from '@mantine/core'
import ItemCountInput from './components/ItemCountInput/index.tsx'
import ItemPriceInput from './components/ItemPriceInput/index.tsx'
import { useSubtotal } from './hooks/useSubtotal.ts'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState<number | string>('')
  const [price, setPrice] = useState<number | string>('')
  const subtotal = useSubtotal(count, price)

  return (
    <>
      <section className={styles.center}>
        <div>
          <h1>Retail Calculator</h1>
          <ItemCountInput value={count} onChange={setCount} />
          <ItemPriceInput value={price} onChange={setPrice} />
          <Text size="lg" fw={700} mt="md">
            Discounted Subtotal: ${(subtotal - amount).toFixed(2)}
          </Text>
        </div>
      </section>
    </>
  );
}

export default App;
