import { format } from '@formkit/tempo';
import { useTranslation } from 'next-i18next';
import { Todos } from '../hooks';
import styles from './index.module.scss';
import { Timezone } from '@/components/App/hooks';

type Props = {
  timezone: Timezone;
  todos: Todos;
  onComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isDisabled: (id: string) => boolean;
};

export function TodoList({ timezone, todos, onComplete, onEdit, onDelete, isDisabled }: Props) {
  const {
    t,
    i18n: { language },
  } = useTranslation();

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
              onChange={() => onComplete(todo.id)}
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
              <button type="button" className={styles.action} onClick={() => onEdit(todo.id)}>
                {t('編集')}
              </button>
              <button
                type="button"
                className={styles.action}
                disabled={isDisabled(todo.id)}
                onClick={() => onDelete(todo.id)}>
                {t('削除')}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
