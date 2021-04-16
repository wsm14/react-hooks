import React,{useEffect}from 'react'




export default function MultiEffectHookDemo() {

    
    // 按照定义的顺序来执行
    useEffect(() => {
        console.log("修改DOM")
    })


    //如果没有[]，只要组件重新渲染了，useEffect都会重新渲染一遍，数组里的值是代表依赖哪个值重新执行useEffect，空数组代表只进来的时候进行一次渲染
    useEffect(() => {
        console.log("订阅事件")
    },[])


    useEffect(() => {
        console.log("网络请求")
    },[])



    return (
        <div>
            
        </div>
    )



}
