import React, { ReactElement } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import App from 'next/app'
import Head from 'next/head'
interface Props {

}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}