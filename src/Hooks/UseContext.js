import React, { useState, createContext } from 'react';
//Context API
const DataContext = createContext();

function UseContext() {
    const [fname, setFname] = useState("Radhika");
    const [lname, setLname] = useState("Dixit");

    return (
        <DataContext.Provider value={{ fname, lname }}>
            <div>This is Parent</div>
            <ChildA />
        </DataContext.Provider>
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
    return (
        <DataContext.Consumer>
            {({ fname, lname }) => (
                <>
                    <h1>{fname}</h1>
                    <h1>{lname}</h1>
                </>
            )}
        </DataContext.Consumer>
    );
}

export default UseContext;
