import React, { Component } from 'react'
import FBCPropsEx from './FBCPropsEx';
export default class CBCPropEx extends Component {
  render() {
    console.log(this);
    return (
      /* <div>CBCPropEx
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {
          this.props.hobbies.map(hobby=>{
            return <li>{hobby}</li>
          })
        }
        <h1>{this.props.address.city}</h1>
        <button onClick={this.props.sendFun}>Click</button>
      </div> */
      <FBCPropsEx
        username="usha"
        isselected={true}
        />
      
    )
  }
}
