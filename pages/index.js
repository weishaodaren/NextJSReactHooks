import React from 'react'
import Head from 'next/head'
import {Header} from '../components/Header'
import List from './list'

const Home = () => {

  return(
  <div>
    <Head>
      <title>MotherFucker!!!</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header></Header>
    <List></List>
  


    <style jsx>{`
      
      
    `}</style>
  </div>
  )
}

export default Home
