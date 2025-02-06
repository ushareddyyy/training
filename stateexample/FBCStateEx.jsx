import React from 'react'

export const FBCStateEx = () => {
    const [value,setValue]=React.useState(0);
    console.log(value);
    const changeValue=()=>{
        setValue(1000);
    }
  return (
    <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changeValue}>change value</button>
    </div>
  )
}
export default FBCStateEx
