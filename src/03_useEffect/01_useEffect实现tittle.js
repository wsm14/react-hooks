import React,{useState,useEffect} from 'react'

export default function HookCounterChangetittle() {


    const [counter, setCounter] = useState(0)




    useEffect(() => {
        document.title = counter
        // return () => {
        //     cleanup
        // }
    })

    return (
        <div>
            <h2>当前计数:{counter}</h2>
            <button onClick={e=>{setCounter(counter+1)}}>+1</button>
        </div>
    )
}
