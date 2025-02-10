

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
/* import React from 'react'

import CBCStateEx from './stateexample/CBCStateEx'
import FBCPropsEx from './propsex/FBCPropsEx';
import { FBCStateEx } from './stateexample/FBCStateEx';
import FunctionalComponent from './components/FunctionalComponent'
import { ClassComponent } from './components/ClassComponent';
import MyForm from './components/MyForm'
export const App = () => {
  return (
    
      //<FBCStateEx/>
      <div className='App'>
         <h1 class='heading1'>welcome </h1> 
        
         <FunctionalComponent cname="Mru" name="bye" apply={true}>
          <h1>i am usha</h1>
        </FunctionalComponent>  
        <MyForm/>
         <ClassComponent/> 
      </div>
      
    
  )
}
export default App; */
/* import { useState } from "react";
import "./SampleApp.css";
import SampleApp from "./SampleApp";

export default function App() {
  return (
    <div className="app-container">
      <SampleApp />
    </div>
  );
} */
/* 
import React, { useState } from 'react';
import DoctorList from './SampleApp/DoctorList';
import TimeSlot from './SampleApp/TimeSlot';
import AppointmentForm from './SampleApp/AppointmentForm';
import './App.css';
import Alert from './SampleApp/Alert';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [step, setStep] = useState(1);

  const doctors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      specialty: 'Cardiology',
      image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg',
    },
    {
      id: 2,
      name: 'Dr.Shilpahasa',
      specialty: 'Dermatology',
      image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg',
    },
    // Add more doctors as needed
  ];

  const timeSlots = [
    '09:00 AM - 09:30 AM',
    '10:00 AM - 10:30 AM',
    '11:00 AM - 11:30 AM',
    // Add more time slots as needed
  ];

  const bookAppointment = (appointmentDetails) => {
    console.log('Appointment booked:', appointmentDetails);
    setAlertMessage(
      `Your appointment with Dr. ${appointmentDetails.doctor.name} on ${appointmentDetails.timeSlot} has been successfully booked.`
    );
    setStep(1); // Reset to first step after booking
    setSelectedDoctor(null);
    setSelectedTimeSlot(null);
  };

  const closeAlert = () => {
    setAlertMessage('');
  };

  return (
    <div className="app-container">
      <Alert message={alertMessage} onClose={closeAlert} />
      {step === 1 ? (
        <DoctorList doctors={doctors} selectDoctor={(doctor) => { setSelectedDoctor(doctor); setStep(2); }} />
      ) : step === 2 ? (
        <TimeSlot timeSlots={timeSlots} selectTimeSlot={(slot) => { setSelectedTimeSlot(slot); setStep(3); }} />
      ) : (
        <AppointmentForm
          doctor={selectedDoctor}
          timeSlot={selectedTimeSlot}
          bookAppointment={bookAppointment}
        />
      )}
    </div>
  );
}

export default App; */
import React from 'react'
import UseeffectEx from './hooksexamples/UseeffectEx'

const App = () => {
  return (
    <div classNAme='App'>
      <UseeffectEx/>
    </div>
  )
}

export default App

