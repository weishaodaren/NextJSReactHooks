import {Avatar, Divider} from 'antd'
import '../static/style/components/author.css'

export const Author = () =>{
    return(
        <div className='author-div comm-box'>
            <div><Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg"/></div>
            <div className='author-introduction'>
                aksjhdkaskd asklhdjkjashdkja askjdhkasjhdas akjsdha
                <Divider>Social Account</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />
            </div>
        </div>
    )
}