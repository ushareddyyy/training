

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
import React, { Component } from 'react'
import CBCPropEx from './propsex/CBCPropEx'

export default class App extends Component {
  render() {
    return (
      <div>
        <CBCPropEx username="usha" />
      </div>
    )
  }
}
