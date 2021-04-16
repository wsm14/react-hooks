import React, {useState}from 'react';

function A(props) {

    /*
        Hook:useState
        本身就是一个函数
        参数 ， 返回值（返回一个数组）
        1,参数：作用给创建出来的状态一个默认值
        2,返回值：数组
            元素1：当前state的值
            元素2：设置新的值时，使用的一个函数
    */

   const [state,setState] = useState(0);   


    return (
        <div>
            <div>{state}</div>
            <button onClick={e => setState(state + 1)}>+1</button>
            <button onClick={e => setState((prevCount)=>prevCount+10)}>+10</button>
            {/* 区别和setstate一样的   第一种多个会合并成一个    第二种是同步的改变值 */}
        </div>
    );
}

export default A;