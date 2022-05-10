import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'

/** 
 * @todo flesh out reservations page 
 */
export default function Reservations () {
  return (
    <Layout>
      <Head>
        <title>Reserve a Room</title>
      </Head>
      <h1 className={styles.title}>Reservations</h1>
    </Layout>
  );
}