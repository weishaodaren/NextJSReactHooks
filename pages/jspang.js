import Link from 'next/link'
import {useState} from 'react';


function Jspang(){
    const [color, setColor] = useState('blue') 
    const changeColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue')
    }

    return(
        <div>
            <button className='jspang' onClick={changeColor}>技术胖aa</button>
            <Link href='/'><a>返回首页</a></Link>

        <style jsx>
            {
                `div{
                    color:blue
                }
                .jspang{
                    color:${color};
                    background:#126;
                    border:10px dotted purple
                }
                `
            }
        </style>

        </div>
    )
}

export default Jspang