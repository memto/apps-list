import Head from 'next/head'

import NavBar from '../components/navbar'

import '../scss/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>NextJS apps</title>
        <meta name="description" content="Collection of NextJS applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <NavBar></NavBar>
      
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
