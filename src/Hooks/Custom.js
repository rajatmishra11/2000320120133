import React from 'react'
import { useCounter } from './useCounter';


const Custom = () => {
    // const [count, setCount] = useState(0);
    // function Increment()
    // {
    //     setCount(count+1);
    // }
    // function Decrement(){
    //     setCount(count-1);
    // }



    const [count, Increment, Decrement] = useCounter();

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Custom;