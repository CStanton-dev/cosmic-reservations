import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

/** 
 * @todo flesh out reservations page 
 */
export default function Reservations () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reserve a Room</title>
      </Head>
      <h1 className={styles.title}>Reservations</h1>
      <h2>
        <Link href='/'>
          <a>Oops nothing here</a>
        </Link>
      </h2>
    </div>
  );
}