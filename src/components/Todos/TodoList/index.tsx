import { useTranslation } from 'next-i18next';
import { Todo } from '../hooks';
import styles from './index.module.scss';

type Props = {
  todos: Todo[];
  onComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  isDisabled: (id: string) => boolean;
};

export function TodoList({ todos, onComplete, onEdit, onDelete, isDisabled }: Props) {
  const { t } = useTranslation();

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
            <span>[{todo.deadline}]</span>
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
