

/* import React from 'react';
import './App.css';

function App() {
  //let ele=React.createElement("div",{className:"App"},
  //React.createElement("h1",null,"hello"))
  let username="usha";
  return ( */
  
    //ele
    /* <section>
      <h1>hello</h1>
      <p>usha</p>
    </section>  */

    
/*     <div>
      <h1>{username}</h1>
      <p>{1760+2870}</p>

    </div>
     );
}

export default App; */

/* class App extends React.Children{
  render(){
    return(
      <h1>finally CBS</h1>
    )
  }
  
}export default App; */



//!component componnets
/* import React from "react";
import Navebar from './components/Navbar';
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import Footer from './components/Footer'
import global from './global.css';
const App=()=>{
  return(
    <div className='app'>
      <Navebar/>
      <Main/>
      <div className='sidebar'>
     <Sidebar1/>
     <Sidebar2/>
     </div>
     <Footer/>

    </div>
  )
}
export default App; */
/* import React, { Component } from 'react'
import CBCPropEx from './propsex/CBCPropEx'
import FBCPropsEx from './propsex/FBCPropsEx'

export default class App extends Component {
  render() {
    return ( */
      /* <div>
        <CBCPropEx username="usha"
        age={20}
        hobbies={["reading" , "listening music"]}
        address={{city:"hyd" ,area:"kphb"}}
        sendFun={function(){alert("hi i am usha")}}
        />
      </div> */
    /*   <FBCPropsEx
      username="usha"
      isselected={true}
      hobbies={["reading" , "listening music"]}

      />
    )
  }
} */
/* import React from 'react'
import PropChildex from './propsex/PropChildex'
import SubChild from './propsex/SubChild'
import Child1 from './propsex/Child1'
function App() {
  return (
    <div>
      <PropChildex num={100}>
        <h1>hi props children</h1>
        <SubChild/>
      </PropChildex>
      <Child1/>
    </div>
    
  )
}

export default App */
import React from 'react'

import CBCStateEx from './stateexample/CBCStateEx'
import FBCPropsEx from './propsex/FBCPropsEx';
import { FBCStateEx } from './stateexample/FBCStateEx';
import FunctionalComponent from './components/FunctionalComponent'
export const App = () => {
  return (
    
      //<FBCStateEx/>
      <div className='App'>
        <h1 class='heading'>so fast </h1>
        
        <FunctionalComponent cname="Mru" apply={true}>
          <h1>i am usha</h1>
        </FunctionalComponent>
      </div>
      
    
  )
}
export default App;
