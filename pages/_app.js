import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

export default function CosmicReservations({
  Component, 
  pageProps: { session, ...pageProps }, 
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
