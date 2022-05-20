import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from './styles/LoginButton.module.css'

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Link href='/api/auth/signout'>
          <a className={styles.link} onClick={e => {
            e.preventDefault
            signOut()
          }}>Sign Out</a>
        </Link>
      </>
    )
  } else {
    return (
      <>
        <Link href='/api/auth/signin'>
          <a className={styles.link} onClick={e => {
            e.preventDefault
            signIn()
          }}>Sign In</a>
        </Link>
      </>
    )
  }
}