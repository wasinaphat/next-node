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
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps
  }
}
export default wrapper.withRedux(MyApp);