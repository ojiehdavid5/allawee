import React from 'react'
import topship from '../../assets/Business/topship.svg'
import carbon from '../../assets/Business/carbon.svg'
import piggyvest from '../../assets/Business/piggyvest.svg'
import eight  from '../../assets/Business/eight.svg'
import glovo from '../../assets/Business/glovo.svg'
import fluna from '../../assets/Business/fluna.svg'
import emma from '../../assets/Business/emma.webp'
import Appstore from "../../assets/personal/Appstore.png";
import Googleplay from "../../assets/personal/Googleplay.png";



const Trust = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#fff]  '>
      <h1 className='leading-9  font-light text-[20px] mb-[8rem] mt-[4rem]'>Trusted by hundreds of Nigerian businesses</h1>
      <div className='flex flex-row justify-center items-center gap-[5rem]'>
        <img src={topship} alt=''/>
        <img src={carbon} alt=''/>
        <img src={topship} alt=''/>
        <img src={fluna} alt=''/>
        <img src={carbon} alt=''/>


      </div>
      <div className='flex flex-row  gap-[5rem] mt-[3rem] ml-[5rem]'>
        <img src={piggyvest} alt=''/>
        <img src={eight} alt=''/>
        <img src={glovo} alt=''/>
        <img src={fluna} alt=''/>
        <img src={carbon} alt=''/>


      </div>


      <div className='flex flex-row   items-center justify-center mt-[9rem] gap-[7rem]'>
        <span className='flex flex-col'>
          <h1 className='text-6xl font-[600] mb-[2rem]'>One Solution for<br/>
business expenses!</h1>

<p className='mb-[1rem]'>Manage company spend for day-to-day expenses,<br/>
software subscriptions, & Ads all in app ©</p>
<p>Seamlessly use Allawee on the Web, Android and IOS</p>

<span className='flex flex-row gap-6'>
  <img src={Appstore} className='w-[30%]' alt=''/>
  <img src={Googleplay}    className='w-[30%]' alt=''/>

</span>


        </span>
        <img src={emma} className='w-[30%]' alt=''/>


      </div>

    </div>
  )
}

export default Trust
