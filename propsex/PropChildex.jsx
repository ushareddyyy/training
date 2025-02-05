import React from 'react'

function PropChildex(props) {
    console.log(props)
  return (
    <div>PropChildex
        <h1>{props.num}</h1>
        {
            props.children
        }
    </div>
  )
}

export default PropChildex