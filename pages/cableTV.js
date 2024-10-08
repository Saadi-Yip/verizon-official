import Layout from '@/component/layout/Layout'
import ServiceMain from '@/component/main/ServiceMain'
import Head from 'next/head'
import React from 'react'

const service = () => {
  return (
    <>
        <Head>
        <title>Official - Service</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon"/>
        </Head>
        <Layout>
            <ServiceMain/>
        </Layout>
    </>
  )
}

export default service