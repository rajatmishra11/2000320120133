import React, {useState, useCallback} from 'react'
import ChildA from './ChildA';

//What is use callback?
/*
1.  The useCallback and useMemo Hooks are used to optimize the re-rendering of components in React. They help us avoid unnecessary renders.
2.  The main difference between the two hooks, useCallback and useMemo, is that useCallback will always return a new memoized function if any of its dependencies change.
3.  The useMemo Hook will always return the same value if the dependencies array is the same.
*/
//Problem ->
/*
    1. on clicking add every time Child A is printed  !!-> useMemo ko apply karien to?? ->wrap karo ->fir sirf 1 baar hi print hoga(render).
    2. but agar childA me props pass karein -> phir wahi problem hogi -> useMemo ke baad bhi ->Re-Render Hoga, Why? 
    REFERENTIAL EQAULITY-(functions are re-created when any re rendering occurs).   
    Solution-> useCallback
*/

//How to use useCallback with example?
/*      
1.      Syntax- 
            const cachedFn = useCallback(fn, dependencies)
2.      The useCallback Hook only runs when one of its dependencies update.
*/

const UseCallback = () => {
    const [add, setAdd]=useState(0);
    const [count, setCount]=useState(0);
    // const Learning=()=>{
    // }

    //change to useCallback
    const Learning= useCallback(()=>{
    }, [count])
  return (
        <div className="main" style={{textAlign:"center"}}>
            <h2>{add}</h2>
            <button onClick={()=> setAdd(add+1)}>Click Me to Add</button>
            <button onClick={()=>setCount(count+2)}>Click me to Count</button>
            <h2>{count}</h2>
            {/* <ChildA/> */}
            <ChildA Learning={Learning}/>
        </div> 
  );
}

export default UseCallback;