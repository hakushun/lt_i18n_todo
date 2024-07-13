import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import styles from './index.module.scss';
import { Header } from '@/components/Header';
import { Todos } from '@/components/Todos';

export async function getStaticProps({ locale }: any) {
  return {
    props: await serverSideTranslations(locale, ['common']),
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>I18n Todo App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
        <Header />
        <Todos />
      </div>
    </>
  );
}
