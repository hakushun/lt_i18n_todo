import styles from './index.module.scss';
import { Header } from '@/components/Header';
import { Todos } from '@/components/Todos';

export function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Todos />
    </div>
  );
}
