import React,{useState}from 'react'

export default function Complete() {

    const [friends, setFriends] = useState([
        {
            name:"wang",
            age:24
        },
        {
            name:"zhang",
            age:23
        }
    ])

    function setNew(index){
        const newFriends = [...friends];
        newFriends[index].age += 1;
        setFriends(newFriends);

    }

    return (
        <div>
            {
                friends.map((item,index)=>(
                    <ul key={item.name}>
                        <li>{item.name}</li>
                        <li>{item.age}</li>
                        <button onClick={e=>{
                            setNew(index)
                        }}>+1</button>
                    </ul>
                    
                ))
            }
        </div>
    )
}
