import { useI18n } from '@/libs/i18n';
import { useStore } from '@/store';

export function useHooks() {
  const { todo, isEdit, change, submit } = useStore();
  const { t } = useI18n();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    change({ [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit();
  }

  return {
    todo,
    isEdit,
    handleChange,
    handleSubmit,
    t,
  };
}
