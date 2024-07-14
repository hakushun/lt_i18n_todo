import { useI18n } from '@/libs/i18n';
import { useStore } from '@/store';

export function useHooks() {
  const { timezone, todos, toggleComplete, edit, remove, isDisabled } = useStore();
  const { t, language } = useI18n();

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
    t,
    language,
  };
}
