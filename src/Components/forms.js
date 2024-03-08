import React, { useState, useRef } from 'react'
 /*
 1. React Form
 2. Controlled Commponent
 3. Uncontrolled Component

 */

const Forms = () => {
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    // function handlechange(e){
    //     console.log(e.target.value);
    //     const capName= (e.target.value.toUpperCase());
    //     setName(capName);
    // }
    // function handlePassword(e){
    //     console.log(e.target.value);
    //     const capName= (e.target.value.toUpperCase());
    //     setName(capName);
    // }




    // function handleChange(e){
    //     console.log(e.target.name);
    //     if(e.target.name ==='firstName'){
    //         const capName= e.target.value.toUpperCase();
    //         setName(capName);
    //     }
    //     else{
    //          setPassword(e.target.value);
    //     }
    // }


    const refObject= useRef();
    console.log(refObject);
    function handleSubmit(e){
        e.preventDefault();
        console.log(refObject.current.value);
    }
  return (
    <>
    <form className='form' onSubmit={handleSubmit}>
        <label>First name</label> <br />
        {/* <input type="text" value={name} onChange={handlechange}/> <br />
         <label>Passcode</label> <br />
        <input type="text" value={password} onChange={handlePassword}/> */}



        {/* <input type='text' name='firstName' value={name} onChange={handleChange}/>  <br />
        <label>Passcode</label> <br />
        <input type='text' name='password' value={password} onChange={handleChange}/> */}


        <input type="text" ref={refObject}/>
        <button>Submit</button>
    </form> 
    </>
  )
}

export default Forms;