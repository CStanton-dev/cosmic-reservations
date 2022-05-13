
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';
import styles from './styles/layout.module.css';

const name ='Carter Stanton'
export const siteTitle = 'Cosmic Reservations'

/**
 * Layout component
 * 
 * @param {*} children - nested children
 * @returns 
 */
export default function Layout({ children, Reservations }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content={name} />
        <meta name='description' content='Reserve a room at the Cosmic Hotel now!' />
        <meta
          property="og:image"
          content='/cosmic-reservations-logo.svg'
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='cosmic-reservations-full.svg' />
      </Head>
      <Navbar/>
      {Reservations ? (<main className={styles.reservations}>{children}</main>) : (<main className={styles.main}>{children}</main>)}
      <Footer />
    </div>
  )
}