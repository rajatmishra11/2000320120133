import React, {memo} from 'react'

const ChildA = ({Learning}) => {
    console.log("Child A")
  return (
    <div>ChildA</div>
  )
}

export default memo(ChildA);