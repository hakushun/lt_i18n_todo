import { useI18n } from '@/libs/i18n';
import { useStore } from '@/store';

export function useHooks() {
  const { timezone, changeTimezone } = useStore();
  const { t, language, changeLanguage } = useI18n();

  function handleChangeTimezone(event: React.ChangeEvent<HTMLSelectElement>) {
    changeTimezone(event.target.value);
  }

  function handleChangeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    changeLanguage(event.target.value);
  }

  return {
    timezone,
    handleChangeTimezone,
    t,
    language,
    handleChangeLanguage,
  };
}
