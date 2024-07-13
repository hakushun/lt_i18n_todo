'use client';

import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import styles from './index.module.scss';
import { useHooks } from './hooks';

export function Todos() {
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
  } = useHooks();

  return (
    <main className={styles.root}>
      <TodoForm todo={todo} isEdit={isEdit} onChange={handleChange} onSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        onComplete={handleComplete}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isDisabled={isDisabled}
      />
    </main>
  );
}
