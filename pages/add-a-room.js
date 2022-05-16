import Head from 'next/head';
import Layout from '../components/layout';
import RoomForm from '../lib/RoomForm';
import styles from '../styles/AddARoom.module.css'

export default function addARoom () {
  return (
    <Layout>
      <Head>
        <title>Add a Room</title>
      </Head>
      <h1 className={styles.title}>Add A Room</h1>
      <p className={styles.description}>Add a room in the Cosmic Hotel for guests to stay in!</p>
      <div className={styles.container}>
        <RoomForm />
      </div>
    </Layout>
  )
}