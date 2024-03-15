import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [add, setAdd]= useState(0);
    const [sub, setSub]= useState(100);

    // function multiply()
    // {  
    //     console.log("multiply called")
    //     return add*10;
    // }

    const multiplication= useMemo(
          function multiply()
        {  
        console.log("multiply called")
        return add*10;
        }, [add]
    )
  return (
    <div>
        {/* {multiply()} <br /> */}

        {multiplication} <br />
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <span>{add}</span> <br />
        <button onClick={()=>setSub(sub-1)}>Sub</button>
        <span>{sub}</span>
    </div>
  )
}

export default UseMemo;