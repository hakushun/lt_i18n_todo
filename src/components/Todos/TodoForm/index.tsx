import { Todo } from '../hooks';
import styles from './index.module.scss';

type Props = {
  todo: Todo;
  isEdit: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export function TodoForm({ todo, isEdit, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.group}>
          <label htmlFor="title" className={styles.label}>
            やること
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={todo.title}
            onChange={onChange}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="deadline" className={styles.label}>
            期日
          </label>
          <input
            type="datetime-local"
            name="deadline"
            id="deadline"
            required
            value={todo.deadline}
            onChange={onChange}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.action}>
          {isEdit ? '更新' : '登録'}
        </button>
      </div>
    </form>
  );
}