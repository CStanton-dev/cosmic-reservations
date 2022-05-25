
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './styles/Layout.module.css';

const name ='Carter Stanton'
export const siteTitle = 'Cosmic Reservations'

export default function Layout({ children, Home }) {
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
      {Home ? (<main role='main' className={styles.home}>{children}</main>) : (<main role='main' className={styles.pages}>{children}</main>)}
      <Footer />
    </div>
  )
}