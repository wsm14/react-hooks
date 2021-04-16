import React,{useState,useEffect} from 'react'

export default function HookCounterChangetittle() {


    const [count, setCount] = useState(0)




    useEffect(() => {
        
        console.log("订阅一些事件")
        return () => {
            console.log("取消订阅")
        }
    },[])

    //加一个数组就可以不会有取消订阅和重复订阅

    return (
        <div>
           <h2>{count}</h2>
           <button onClick={e=>{
               setCount(count + 1)
           }}>+1</button>
           {/* 点击的时候会不断的取消订阅  然后再重复订阅 */}
        </div> 
    )
}
