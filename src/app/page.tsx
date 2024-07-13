import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <Todos />
    </div>
  );
}
