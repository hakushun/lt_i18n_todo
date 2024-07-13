import { tzDate } from '@formkit/tempo';
import { useEffect, useState } from 'react';
import { Timezone } from '@/components/App/hooks';

export type Todo = {
  id: string;
  title: string;
  deadline: string;
  completed: boolean;
};
export type Todos = (Omit<Todo, 'deadline'> & { deadline: Date })[];

function genetalId() {
  return Math.random().toString(32).substring(2);
}

const initialTodo = {
  id: '',
  title: '',
  deadline: '',
  completed: false,
};

export function useHooks({ timezone }: { timezone: Timezone }) {
  const [todo, setTodo] = useState<Todo>(initialTodo);
  const [todos, setTodos] = useState<Todos>([]);

  const isEdit = todos.some((t) => t.id === todo.id);

  function isDisabled(id: string) {
    return todo.id === id;
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function register(todo: Todo) {
    setTodos((prev) => [
      ...prev,
      { ...todo, id: genetalId(), deadline: tzDate(todo.deadline, timezone) },
    ]);
  }

  function update(todo: Todo) {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...todo, deadline: tzDate(todo.deadline, timezone) } : t,
      ),
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!todo.title || !todo.deadline) return;
    isEdit ? update(todo) : register(todo);
    setTodo(initialTodo);
  }

  function handleComplete(id: string) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  }

  function handleEdit(id: string) {
    const target = todos.find((todo) => todo.id === id);
    if (!target) return;
    setTodo({ ...target, deadline: target.deadline.toISOString() });
  }

  function handleDelete(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return {
    todo,
    todos,
    isEdit,
    handleChange,
    handleSubmit,
    handleComplete,
    handleEdit,
    handleDelete,
    isDisabled,
  };
}
