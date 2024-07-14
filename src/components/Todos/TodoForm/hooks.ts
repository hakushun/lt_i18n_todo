import { useStore } from '@/store';

export function useHooks() {
  const { todo, isEdit, change, submit } = useStore();

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
  };
}
