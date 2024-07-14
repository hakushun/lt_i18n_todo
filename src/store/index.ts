import { create } from 'zustand';
import { TimezoneSlice, createTimezoneSlice } from './slices/timezone';
import { TodoSlice, createTodoSlice } from './slices/todo';
import { TodosSlice, createTodosSlice } from './slices/todos';

export type Store = TimezoneSlice & TodoSlice & TodosSlice;

export const useStore = create<Store>()((...a) => ({
  ...createTimezoneSlice(...a),
  ...createTodoSlice(...a),
  ...createTodosSlice(...a),
}));
