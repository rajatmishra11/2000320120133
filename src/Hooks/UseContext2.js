
import React, { createContext, useContext } from 'react';


const data = createContext();
const data1= createContext();

function UseContext2() {
    const name="Divya"
    const age=23

    return (
        <>
            <data.Provider value={name}>
               <data1.Provider value={age}>
                    <ChildA />
               </data1.Provider>
            </data.Provider>  
        </>
    );
}

function ChildA() {
    return (
        <>
            <div>This is ChildA</div>
            <ChildB />
        </>
    );
}

function ChildB() {
    return (
        <>
            <div>This is ChildB</div>
            <ChildC />
        </>
    );
}

function ChildC() {

    const name= useContext(data);
    const age= useContext(data1);
    return (
        <h1>my name is {name} and my age is {age}</h1>
    );
}

export default UseContext2;
