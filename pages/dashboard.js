import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';
import Head from 'next/head';
import CoinPriceChart from '../components/charts/CoinPriceChart';
import styles from '../styles/Dashboard.module.css';

const Dashboard = (props) => {
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
        <CoinPriceChart {...props.marketData} />
      </Layout>
    )
  }
}

export const getServerSideProps = async () => {
  const _cg_api = 'https://api.coingecko.com/api/v3';

  const marketData = await fetch(
    `${_cg_api}/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly`
  ).then((res) => res.json());

  return {
    props: {
      marketData: marketData
    }
  };
};

export default Dashboard;