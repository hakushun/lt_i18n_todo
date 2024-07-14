import { useStore } from '@/store';

export function useHooks() {
  const { timezone, todos, toggleComplete, edit, remove, isDisabled } = useStore();

  function handleComplete(id: string) {
    toggleComplete(id);
  }

  function handleEdit(id: string) {
    edit(id);
  }

  function handleDelete(id: string) {
    remove(id);
  }

  return {
    timezone,
    todos,
    handleComplete,
    handleEdit,
    handleDelete,
    isDisabled,
  };
}
