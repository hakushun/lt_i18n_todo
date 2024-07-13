import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import styles from "./index.module.scss";

export function Todos() {
  return (
    <main className={styles.root}>
      <TodoForm />
      <TodoList />
    </main>
  );
}
