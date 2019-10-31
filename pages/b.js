import Link from 'next/link'
import Router from 'next/router'
 
export default ()=>{
    //routeChangeStart
    //routeChangeComplete
    //beforeHistoryChange
    //routeChangeError
    //hashChangeStart
    //hashChangeComplete
  
    function handleClick(){
        // Router.push('/xiaojiejei?name=yangmi_songzuer')
        Router.push({
            pathname:'/xiaojiejei',
            query:{name:'yangmi_songzuer'}
        })
    }
    return(
    <div>
        {'这是 B 页面'}
        <Link href='/jspang'><a>{'去往 A'}</a></Link>
        <button onClick={handleClick}>Click</button>
    </div>
    )
}