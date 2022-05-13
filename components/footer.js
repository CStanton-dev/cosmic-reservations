import Link from 'next/link';
import styles from './styles/footer.module.css';

/**
 * 
 * @returns 
 */
export default function Footer() {
  return ( 
    <footer className={styles.footer}>
      <Link href="https://carterstanton.dev" >
        <a target="_blank" rel="noopener noreferrer">
          carterstanton.dev
        </a>
      </Link>
    </footer>
  )
}