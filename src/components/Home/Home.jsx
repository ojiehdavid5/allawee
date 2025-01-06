import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Info from './Info'
import Bottom from './Bottom'
import Footer from './Footer'

// #DBFDC8
// #ADECCF
// #0D1F23
// #E5E7EB
// #D6B9FC
// #FFFFFF
// rgba(255, 255, 255, 0.8)
// #F9F9F9
// #000000
// rgba(0, 0, 0, 0.18)




const Home = () => {
  return (

          <div className='max-lg:ml-[2rem]   bg-[#0D1F23]  '>
      <Nav/>
      <Hero/>
    <Info/>
    <Footer/>
    <Bottom/>
      
      
    </div>

  )
}

export default Home
