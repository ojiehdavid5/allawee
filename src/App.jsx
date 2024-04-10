import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {useEffect} from 'react'
function App() {
  // useEffect(()=>{
  //   AOS.init();
  // })

  return (
    <div className='bg-[rgb(13,31,35)]'>
      <Nav/>
      <Hero/>
    </div>
  )
}

export default App
