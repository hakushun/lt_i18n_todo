import { format, tzDate } from '@formkit/tempo';
import { StateCreator } from 'zustand';
import { Todo } from './todo';
import { Store } from '..';

export type Todos = (Omit<Todo, 'deadline'> & { deadline: Date })[];

export type TodosSlice = {
  todos: Todos;
  isEdit: () => boolean;
  submit: () => void;
  toggleComplete: (id: string) => void;
  edit: (id: string) => void;
  remove: (id: string) => void;
};

function genetalId() {
  return Math.random().toString(32).substring(2);
}

export const createTodosSlice: StateCreator<Store, [], [], TodosSlice> = (set, get) => ({
  todos: [],
  isEdit: () => get().todos.some((t) => t.id === get().todo.id),
  submit: () => {
    if (!get().todo.title || !get().todo.deadline) return;
    const { todo, timezone } = get();
    if (get().isEdit()) {
      // 更新
      set((state) => ({
        todos: state.todos.map((t) =>
          t.id === todo.id ? { ...todo, deadline: tzDate(todo.deadline, timezone) } : t,
        ),
      }));
    } else {
      // 登録
      set((state) => ({
        todos: [
          ...state.todos,
          { ...todo, id: genetalId(), deadline: tzDate(todo.deadline, timezone) },
        ],
      }));
    }
    get().reset();
  },
  toggleComplete: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  edit: (id: string) => {
    const target = get().todos.find((todo) => todo.id === id);
    if (!target) return;
    set(() => ({
      todo: {
        ...target,
        deadline: format({
          date: target.deadline,
          format: 'YYYY-MM-DDTHH:mm:ss',
          tz: get().timezone,
        }),
      },
    }));
  },
  remove: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
});
