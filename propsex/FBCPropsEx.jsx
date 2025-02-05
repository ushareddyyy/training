import React from 'react'

const FBCPropsEx = (props) => {
    console.log(props);
    if(props.isselected==true){
  return (
    <div>
          <h1>{props.username} is selected</h1>
          {
            props.hobbies.map(hobby=>{
                return <li>{hobby}</li>
            })
          }
   
    </div>
 
  )
}else{
    return <h1>not selected</h1>
}
}

export default FBCPropsEx
