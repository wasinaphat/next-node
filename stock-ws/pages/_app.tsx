import React, { ReactElement } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import App from 'next/app'
import Head from 'next/head'
import { wrapper } from '../redux'
interface Props {

}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default wrapper.withRedux(MyApp);