import {useState} from 'react';
import dynamic from 'next/dynamic'

const One = dynamic(import('../components/one'))
function Time(){
    const [nowtime, setTime] = useState(Date.now())
    const changeTime = async()=>{
        const moment = await import('moment')
        setTime(moment.default(nowtime).format())
    }
    return(
        <div>
            <h1>显示时间为:{nowtime}</h1>
            <One></One>
            <button onClick={changeTime}>点爆他！！！！</button>
        </div>
    )
}

export default Time
