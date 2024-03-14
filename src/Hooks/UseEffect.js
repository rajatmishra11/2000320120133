
import React, {useEffect, useState} from 'react'


const UseState = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect called")
    }, [count])
  return (
    <div>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count+1)}>CLick to Increment</button>
    </div>
  )
}

export default UseState;