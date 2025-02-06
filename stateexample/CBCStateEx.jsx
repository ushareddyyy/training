import React,{Component} from "react";
class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            users:["usha","krishna","sai","ram"],
            num:100
        };
    }
    changeNumber=()=>{
        this.setState({num:200})
    }
    render(){
        console.log(this);
        return(
            <div>
                {
                    this.state.users.map((user,i)=>{
                        return <li key={i}>{user}</li>
                    })
                }
                <h1>{this.state.num}</h1>
                <button onClick={this.changeNumber}>change number</button>
            </div>

        )
    }
}
export default CBCStateEx