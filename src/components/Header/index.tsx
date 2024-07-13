import styles from "./index.module.scss";

export function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <h1>I18n Todo App</h1>
        <form className={styles.form}>
          <div className={styles.group}>
            <label htmlFor="language" className={styles.label}>
              言語
            </label>
            <select name="language" id="language" className={styles.select}>
              <option value="ja">日本語</option>
              <option value="en">英語</option>
              <option value="es">スペイン語</option>
            </select>
          </div>
          <div className={styles.group}>
            <label htmlFor="timezone" className={styles.label}>
              タイムゾーン
            </label>
            <select name="timezone" id="timezone" className={styles.select}>
              <option value="Tokyo">東京</option>
              <option value="London">ロンドン</option>
              <option value="Caracas">ベネズエラ</option>
            </select>
          </div>
        </form>
      </div>
    </header>
  );
}
