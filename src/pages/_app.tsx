import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

import { trpc } from "../utils/trpc"

import { Navbar } from "../components"

import "../styles/globals.css"
import "../styles/navbar.css"
import "../styles/development.css"
import "../styles/landing.css"
import "../styles/blog.css"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(MyApp)
