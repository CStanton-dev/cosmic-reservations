import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Image from 'next/image';
import utilStyles from '../styles/Utils.module.css';

export default function Home() {
  return (
    <Layout Home>
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
