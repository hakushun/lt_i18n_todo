import { useTranslation } from 'next-i18next';
import styles from './index.module.scss';
import { useHooks } from './hooks';

export function TodoForm() {
  const { t } = useTranslation();
  const { todo, isEdit, handleChange, handleSubmit } = useHooks();

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.group}>
          <label htmlFor="title" className={styles.label}>
            {t('やること')}
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={todo.title}
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="deadline" className={styles.label}>
            {t('期日')}
          </label>
          <input
            type="datetime-local"
            name="deadline"
            id="deadline"
            required
            value={todo.deadline}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.action}>
          {isEdit() ? t('更新') : t('登録')}
        </button>
      </div>
    </form>
  );
}
