import { format } from '@formkit/tempo';
import { useTranslation } from 'next-i18next';
import styles from './index.module.scss';
import { useHooks } from './hooks';

export function TodoList() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { timezone, todos, handleComplete, handleEdit, handleDelete, isDisabled } = useHooks();

  return (
    <section className={styles.root}>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <input
              type="checkbox"
              name="complete"
              id="complete"
              className={styles.checkbox}
              checked={todo.completed}
              onChange={() => handleComplete(todo.id)}
            />
            <span>{todo.title}</span>
            <span>
              [
              {format({
                date: todo.deadline,
                format: { date: 'medium', time: 'short' },
                tz: timezone,
                locale: language,
              })}
              ]
            </span>
            <div className={styles.actions}>
              <button type="button" className={styles.action} onClick={() => handleEdit(todo.id)}>
                {t('編集')}
              </button>
              <button
                type="button"
                className={styles.action}
                disabled={isDisabled(todo.id)}
                onClick={() => handleDelete(todo.id)}>
                {t('削除')}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
