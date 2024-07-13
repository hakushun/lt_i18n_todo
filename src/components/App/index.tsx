import styles from './index.module.scss';
import { Header } from '@/components/Header';
import { Todos } from '@/components/Todos';
import { useHooks } from './hooks';

export function App() {
  const { timezone, handleChangeTimezone } = useHooks();

  return (
    <div className={styles.root}>
      <Header timezone={timezone} onChange={handleChangeTimezone} />
      <Todos timezone={timezone} />
    </div>
  );
}
