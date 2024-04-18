import React from 'react'
import {useEffect} from 'react'
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Info from "./components/Info"
function App() {
  // useEffect(()=>{
  //   AOS.init();
  // })

  return (
    <div className='mx-[5rem]'>
      <Nav/>
      <Hero/>
    <Info/>
      
      
    </div>
  )
}

export default App
