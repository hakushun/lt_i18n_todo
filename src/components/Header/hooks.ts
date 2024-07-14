import { useStore } from '@/store';

export function useHooks() {
  const { timezone, changeTimezone } = useStore();

  function handleChangeTimezone(event: React.ChangeEvent<HTMLSelectElement>) {
    changeTimezone(event.target.value);
  }

  return {
    timezone,
    handleChangeTimezone,
  };
}
