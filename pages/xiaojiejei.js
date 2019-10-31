import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Xiaojiejei =({router, list}) =>{
    return(
        <div>
            <h1>{router.query.name}来为我fuwu</h1>
            <div>{list}</div>
            <Link href="/"><a>回首页</a></Link>
        </div>
    )
}
Xiaojiejei.getInitialProps = async ()=>{
    const promise = new Promise((resolve,reject)=>{
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res,'-------------------')
            resolve(res.data.data)
        }).catch((err)=>{
            reject(err)
            throw err
        })
    })
    return await promise
}



export default withRouter(Xiaojiejei)