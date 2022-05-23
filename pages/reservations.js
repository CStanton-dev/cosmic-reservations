import Head from 'next/head';
import Layout from '../components/Layout';
import RoomSearch from '../lib/SearchForm';
import styles from '../styles/Reservations.module.css';

export default function Reservations () {
  return (
    <Layout>
      <Head>
        <title>Reserve a Room</title>
      </Head>
      <h1 className={styles.title}>Reservations</h1>
      <p className={styles.description}>Search for an open room at the Cosmic Hotel.</p>
      <div className={styles.container}>
        <RoomSearch/>
      </div>
    </Layout>
  );
}