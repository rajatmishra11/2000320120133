import React, {useReducer} from 'react'

const initialState=0;
const reducer   =  (state, action)=>{
    switch (action) {
        case "Increment": 
            return state + 1;
        case "Decrement":  
            return state - 1;
        default:  
            return state;
    }
}

const Counter = () => {
   const [count, dispatch]= useReducer(reducer, initialState);
  return (
    <div>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
        <h1>{count}</h1>
    </div>
  )
}


//flow > click on increment >  diptach the increment as action > reducer function runs > returns state
export default Counter;