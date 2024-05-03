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
    <div className='flex flex-col mt-[30rem]  min-h-screen'>
      <img src={skate} 
className='w-[48vw]  absolute -bottom-[130rem]  left-[0rem] max-lg:-bottom-[71rem] max-lg:w-[100rem] ml-[40rem] -mt-[25rem]  max-lg:ml-[0rem] max-lg:-mt-[5rem]  z-[99]'
alt='skate'/>

<h1 className='text-[10rem]  max-lg:text-2xl text-white font-jersey-20 font-[400]  z-[99] max-lg:absolute max-lg:-bottom-[75rem]'   >SPEND{' '} LIKE{' '} A{' '} <span className='text-[#DBFAC8]'>LOCAL</span></h1>
      <h1 className='text-[10rem] max-lg:text-2xl max-lg:ml-[0rem]  max-lg:mb-[20rem]  text-white  ml-[8rem]  z-[99] max-lg:absolute  max-lg:-bottom-[97rem]'  ><span className='text-[#C6A0D2]'>LIVE LIKE A</span> TOURISTS</h1>

{/* <div className='flex flex-col  -mt-[25rem] max-lg:mb-[10rem]'>
    <p className='mb-[4rem] text-white text-[16px] '>Transform your local and international<br/> transactions with our multi-currency<br/> accounts & cards.</p>

    <div className=" flex flex-row space-x-3 m">

    <img src={Appstore} className="image w-[10rem]" alt="appstore" />

<img src={Googleplay} className="image w-[10rem]" alt="googleplay" />


    </div>
</div>
 */}

      
    </div>
  )
}

export default Tourist
