// import Head from 'next/head'
// import MyHeader from '../components/myHeader'
import dynamic from 'next/dynamic'

const MyHeader = dynamic(import('../components/myHeader'))
function Header(){
    return(
        <div>
            <MyHeader></MyHeader>
            {/* <Head>
                <title>Happy啦Shaking</title>
                <meta charSet='utf-8'/>
            </Head> */}
            <h1>Happy Coding</h1>
        </div>
    )
}
export default Header