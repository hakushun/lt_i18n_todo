import styles from "./index.module.scss";

export function TodoList() {
  return (
    <section className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <input type="checkbox" name="complete" id="complete" className={styles.checkbox} />
          <span>やること</span>
          <span>[期日]</span>
          <div className={styles.actions}>
            <button type="button" className={styles.action}>
              編集
            </button>
            <button type="button" className={styles.action}>
              削除
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}
