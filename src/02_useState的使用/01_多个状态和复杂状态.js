import React,{useState}from 'react';

function MultiHooksState(props) {


    const [count, setCount] = useState(0);    
    const [age, setAge] = useState(18);
    const [friends, setFriends] = useState(["kobe","ll"])

    return (
        <div>
            <h2>当前计数:{count}</h2>
            <h2>我的年龄:{age}</h2>
            <ul> 
                {
                    friends.map(item=>
                        <div key={item}> 
                          {item}  
                        </div>
                    ) 
                }
            </ul>
        </div>
    );
}

export default MultiHooksState;