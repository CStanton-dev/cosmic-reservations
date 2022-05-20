import { useSession } from 'next-auth/react';
import Layout from '../components/layout';
import Head from 'next/head';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  const {status} = useSession();
  if(status === 'loading') {
    return <h2>Loading...</h2>
  } else if (status === 'unauthenticated') {
    return (
      <Layout>
        <Head>
          <title>Unauthorized Access</title>
        </Head>
        <h1 className={styles.title}>Unauthorized Access</h1>
        <p className={styles.description}>Sign in to view this page</p>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Head>
          <title>Dashboard</title>
        </Head>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.description}>You are signed in and can view this content.</p>
      </Layout>
    )
  }
}