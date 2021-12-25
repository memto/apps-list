import React from 'react'

import Head from 'next/head'
import NavBar from '../components/navbar'

const AppsListLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Apps List</title>
        <meta name="description" content="Collection of front-end applications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar></NavBar>

      <div className="page">
        {children}
      </div>
    </>
  )
}

export default AppsListLayout;