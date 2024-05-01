import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Info from './Info'
import Bottom from './Bottom'
import Footer from './Footer'

const Home = () => {
  return (

          <div className='sm:mx-[5rem] max-lg:ml-[2rem]  max-lg:mr-[2rem]  '>
      <Nav/>
      <Hero/>
    <Info/>
    <Footer/>
    <Bottom/>
      
      
    </div>

  )
}

export default Home
