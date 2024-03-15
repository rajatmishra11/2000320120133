import React, {useState} from 'react';

function Parent()
{
    const [fname, setFname]=useState("Radhika")
    const [lname, setLname]= useState("Dixit")
    return (
        <>
        <div>This is Parent</div>
        <ChildA fname={fname} lname={lname}/>
        </>
    )
}

function ChildA({fname, lname}){
    return (
        <>
        <div>This is ChildA</div>
        <ChildB fname={fname} lname={lname}/>
        </>
    )
}

function ChildB({fname, lname}){
    return (
        <>
        <div>This is ChildB</div>
        <ChildC fname={fname} lname={lname}/>
        </>
    )
}

function ChildC({fname, lname}){
    return(
        <>
        <div>This is ChildC</div>
        <h1>{fname}</h1>
        <h1>{lname}</h1>
        </>
    )
}

export default Parent;