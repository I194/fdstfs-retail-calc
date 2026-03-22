import { Text } from '@mantine/core';
import ItemCountInput from './components/ItemCountInput/index.tsx';
import ItemPriceInput from './components/ItemPriceInput/index.tsx';
import RegionSelect from './components/RegionSelect/index.tsx';
import { useApp } from './hooks/useApp.ts';
import styles from './App.module.css';

function App() {
  const { count, setCount, price, setPrice, region, setRegion, total } = useApp();

  return (
    <>
      <section className={styles.center}>
        <div>
          <h1>Retail Calculator</h1>
          <ItemCountInput value={count} onChange={setCount} />
          <ItemPriceInput value={price} onChange={setPrice} />
          <RegionSelect value={region} onChange={setRegion} />
          <Text size="lg" fw={700} mt="md">
            Total: ${total.toFixed(2)}
          </Text>
        </div>
      </section>
    </>
  );
}

export default App;
