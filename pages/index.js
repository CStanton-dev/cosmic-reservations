import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Image 
          src='/cosmic-reservations-full.svg'
          alt='Cosmic Reservations'
          width={480}
          height={260}
        />
      </section>
    </Layout>
  )
}
