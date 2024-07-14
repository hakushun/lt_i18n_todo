import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export function useI18n() {
  const router = useRouter();

  const {
    t,
    i18n: { language },
  } = useTranslation();

  function changeLanguage(locale: string) {
    router.push('/', '/', { locale });
  }

  return {
    t,
    language,
    changeLanguage,
  };
}
