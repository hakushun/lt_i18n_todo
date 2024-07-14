import styles from './index.module.scss';
import { TIMEZONE } from '@/store/slices/timezone';
import { useHooks } from './hooks';

export function Header() {
  const { timezone, handleChangeTimezone, t, language, handleChangeLanguage } = useHooks();

  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <h1>{t('I18n Todo App')}</h1>
        <form className={styles.form}>
          <div className={styles.group}>
            <label htmlFor="language" className={styles.label}>
              {t('言語')}
            </label>
            <select
              name="language"
              id="language"
              className={styles.select}
              value={language}
              onChange={handleChangeLanguage}>
              <option value="ja">{t('日本語')}</option>
              <option value="en">{t('英語')}</option>
              <option value="es">{t('スペイン語')}</option>
            </select>
          </div>
          <div className={styles.group}>
            <label htmlFor="timezone" className={styles.label}>
              {t('タイムゾーン')}
            </label>
            <select
              name="timezone"
              id="timezone"
              className={styles.select}
              value={timezone}
              onChange={handleChangeTimezone}>
              {TIMEZONE.map(({ label, value }) => (
                <option key={value} value={value}>
                  {t(label)}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </header>
  );
}
