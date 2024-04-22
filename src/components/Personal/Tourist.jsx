import React from 'react'
import './personal.css'
import {useEffect } from 'react'
import skate from '../../assets/personal/boyskate.png'
import Appstore from "../../assets/personal/Appstore.png";
import Googleplay from "../../assets/personal/Googleplay.png";
import AOS from 'aos'
import "aos/dist/aos.css"





const Tourist = () => {
  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array if you want the effect to run only once on component mount

  return (
    <div className='flex flex-col mt-[9rem]'>
        <h1 className='text-[10rem]  text-white font-jersey-20 font-[400] tracking-[-1rem] z-[99]'  data-aos='fade-right' >SPEND{' '} LIKE{' '} A{' '} <span className='text-[#DBFAC8]'>LOCAL</span></h1>
      <h1 className='text-[10rem] text-white tracking-[-1rem] ml-[8rem]  z-[99]' data-aos='fade-left'><span className='text-[#C6A0D2]'>LIVE LIKE A</span> TOURISTS</h1>
<img src={skate} 
className='w-[48vw]  ml-[40rem] -mt-[25rem] z-0'
alt='skate'/>

<div className='flex flex-col  -mt-[25rem]'>
    <p className='mb-[4rem] text-white text-[16px] '>Transform your local and international<br/> transactions with our multi-currency<br/> accounts & cards.</p>

    <div className=" flex flex-row space-x-3">

    <img src={Appstore} className="image w-[10rem]" alt="appstore" />

<img src={Googleplay} className="image w-[10rem]" alt="googleplay" />


    </div>
</div>


      
    </div>
  )
}

export default Tourist
