import React, { useState } from 'react'

function AgeValidation() {
    const [isValidAge, setAge]=useState(67);

    //M1.   not a good approch -> multiple return statements used in the function. 
    // if(isValidAge>18)
    // {
    //     return (
    //         <div>You are eligible to vote</div>
    //     )
    // }
    // else{
    //     return (
    //         <div>You are not eligible to vote</div>
    //     )
    // }

    //M2.
    // let age;
    // if(isValidAge)
    // {
    //     age= <div>You  are eligible to vote.</div>;
    // }
    // else{
    //     age= <div>You are not eligible to vote.</div>;
    // }
    // return <>{age}</>


    //M3. Ternary Opearator
    // return isValidAge>18    ? <div>You are eligible to vote</div>   :   <div>You are not eligible to vote</div>


    //M4. Short Circuit Operator : Sirf True wali condition render hogi
    return(
        <>
        {isValidAge && <div>You are not eligible to vote</div>}
        </>
    )
}

export default AgeValidation