import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { useStore } from 'react-redux'
import wrapper from '@store'
import Head from 'next/head'
import '@styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store: any = useStore()

  useEffect(() => {
    store.__persistor.persist()
  }, [])

  const progress = new ProgressBar({
    size: 4,
    color: '#0dcaf0',
    delay: 100,
  })

  Router.events.on('routeChangeStart', progress.start);
  Router.events.on('routeChangeComplete', progress.finish);
  Router.events.on('routeChangeError', progress.finish);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
