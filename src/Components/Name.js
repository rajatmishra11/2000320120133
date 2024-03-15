import React from 'react'

const Name = (props) => {
    const {fname, lname} = props;
  return (
    <>
        {/* <h1>fname: {props.fname}</h1>
        <h2>lname: {props.lname}</h2> */}
        <div> 
            {fname} {lname}
        </div>
        
    </>
  )
}

export default Name;