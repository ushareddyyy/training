import React from 'react'

export const FBCStateEx = () => {
    const [value,setValue]=React.useState("hello");
    console.log(value);
    const changeValue=()=>{
        setValue("world");
    }
  return (
    <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changeValue}>change value</button>
    </div>
  )
}
export default FBCStateEx
