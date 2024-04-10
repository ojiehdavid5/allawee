import React from 'react'
import {useEffect} from 'react'

const Hero = () => {
  // useEffect(()=>{
  //   AOS.init();
  // })


  return (
    <section className='bg-[#0D1F23] min-h-screen flex items-start justify-center mt-[10rem]'>
<div className="flex flex-col  justify-between text-center  " data-aos='fade-right'>
<h2 className='text-5xl text-white font-bold'> Welcome To <span className='text-[#DBFDC8] font-Roboto '>SCHOOLMATE</span><br/> </h2>

<h3 className='text-4xl text-white font-bold mt-[5rem]'>get instant <span className='text-[#DBFDC8] font-Roboto '>timetable scheduling</span> </h3>
<h3 className='text-4xl text-white font-bold mt-[5rem]'>and  <span className='text-[#DBFDC8] font-Roboto '>examination timetable scheduling</span></h3>



</div>

      
    </section>
  )
}

export default Hero
