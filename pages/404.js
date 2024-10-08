import Layout from '@/component/layout/Layout'
import ErrorMain from '@/component/main/ErrorMain'
import Head from 'next/head'
import React from 'react'

const custom404 = () => {
  return (
    <>
        <Head>
        <title>Official - 404</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon"/>
        </Head>
        <Layout>
            <ErrorMain/>
        </Layout>
    </>
  )
}

export default custom404