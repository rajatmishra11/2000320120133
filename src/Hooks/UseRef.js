import React, { useState } from 'react'
import { useRef } from 'react'

const UseRef = () => {
  const refEle= useRef("")
  const [name, setName]=useState("Paridhi")
  console.log(refEle)
  function Reset()
  {
    setName("");
    refEle.current.focus();
  }
  function handleInput(){
    refEle.current.style.color="blue"
  }
  return (
    <div>
      <input  ref={refEle} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={Reset}>Reset</button> <br />
      <button onClick={handleInput}>Blue</button>
    </div>
  )
}

export default UseRef