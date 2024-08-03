import Layout from '@/component/layout/Layout'
import ContactMain from '@/component/main/ContactMain'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <>
    <Head>
        <title>VerizonOfficial - Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon"/>
    </Head>
    <Layout>
        <ContactMain/>
    </Layout>
    </>
  )
}

export default contact