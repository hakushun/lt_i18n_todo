import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export function useI18n() {
  const router = useRouter();

  const {
    t,
    i18n: { language },
  } = useTranslation();

  function changeLanguage(locale: string) {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale });
  }

  return {
    t,
    language,
    changeLanguage,
  };
}
