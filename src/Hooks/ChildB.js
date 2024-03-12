import React, { useState } from 'react'
//passing data to parent from child 
const ChildB = (props) => {
    const [name, setName]= useState();
    function handleSubmit(e) {
        e.prevent.default();
        props.getData(name);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <button>Submit</button>
    </form>
  )
}

export default ChildB;