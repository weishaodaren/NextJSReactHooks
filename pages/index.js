import React from 'react'
import Head from 'next/head'
import Jspang from '../components/japang'
import Link from 'next/link'
import Router from 'next/router'


const Home = () => {
  // Router.events.on('routeChangeStart',(...args)=>{
  //   console.log('1.routeChangeStart  ----参数为',args)
  // })
  // Router.events.on('routeChangeComplete',(...args)=>{
  //   console.log('2.routeChangeComplete  ----参数为',args)
  // })
  // Router.events.on('hashChangeStart',(...args)=>{
  //   console.log('3.hashChangeStart  ----参数为',args)
  // })
  // Router.events.on('hashChangeComplete',(...args)=>{
  //   console.log('4.hashChangeComplete  ----参数为',args)
  // })

  return(
  <div>
    <Head>
      <title>MotherFucker!!!</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {'老子是首页啊'} 
    <div className='specialSpan'>
      <Link href='/xiaojiejei?name=jieyi'><a>xuanzejieyi</a></Link>
      <br/>
      <Link href='/xiaojiejei?name=jingkong'><a>xuanzejingkong</a></Link>
      <br/>
      <Link href="#jspang"><a>Hash 去jspang</a></Link>
    </div>
    <Link href='/b'><a>去往B页面</a></Link>
    <Jspang>{'helpme'}</Jspang>


    <style jsx>{`
      .specialSpan{
        margin:25px;
        border:1px dotted red;
        font-size:25px;
        color:#234
      }
    `}</style>
  </div>
  )
}

export default Home
