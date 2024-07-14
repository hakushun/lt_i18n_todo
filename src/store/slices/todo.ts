import { StateCreator } from 'zustand';
import { Store } from '..';

export type Todo = {
  id: string;
  title: string;
  deadline: string;
  completed: boolean;
};

export type TodoSlice = {
  todo: Todo;
  change: (partial: Partial<Todo>) => void;
  reset: () => void;
  isDisabled: (id: string) => boolean;
};

const initialTodo = {
  id: '',
  title: '',
  deadline: '',
  completed: false,
};

export const createTodoSlice: StateCreator<Store, [], [], TodoSlice> = (set, get) => ({
  todo: initialTodo,
  change: (partial: Partial<Todo>) => set((state) => ({ todo: { ...state.todo, ...partial } })),
  reset: () => set({ todo: initialTodo }),
  isDisabled: (id: string) => get().todo.id === id,
});
