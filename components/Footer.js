import Link from 'next/link';
import styles from './styles/Footer.module.css';

export default function Footer() {
  return ( 
    <footer role='footer' className={styles.footer}>
      <Link href="https://carterstanton.dev" >
        <a target="_blank" rel="noopener noreferrer">
          carterstanton.dev
        </a>
      </Link>
    </footer>
  )
}