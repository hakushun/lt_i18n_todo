import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import styles from './index.module.scss';
import { useHooks } from './hooks';
import { Timezone } from '@/components/App/hooks';

type Props = {
  timezone: Timezone;
};

export function Todos({ timezone }: Props) {
  const {
    todo,
    todos,
    isEdit,
    handleChange,
    handleSubmit,
    handleComplete,
    handleEdit,
    handleDelete,
    isDisabled,
  } = useHooks({ timezone });

  return (
    <main className={styles.root}>
      <TodoForm todo={todo} isEdit={isEdit} onChange={handleChange} onSubmit={handleSubmit} />
      <TodoList
        timezone={timezone}
        todos={todos}
        onComplete={handleComplete}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isDisabled={isDisabled}
      />
    </main>
  );
}
