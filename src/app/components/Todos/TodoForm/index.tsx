import styles from "./index.module.scss";

export function TodoForm() {
  return (
    <form className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.group}>
          <label htmlFor="todo" className={styles.label}>
            やること
          </label>
          <input type="text" name="todo" id="todo" required />
        </div>
        <div className={styles.group}>
          <label htmlFor="deadline" className={styles.label}>
            期日
          </label>
          <input type="datetime-local" name="deadline" id="deadline" required />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.action}>
          登録
        </button>
      </div>
    </form>
  );
}
