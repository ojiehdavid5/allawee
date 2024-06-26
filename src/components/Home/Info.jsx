import React from 'react'
import {useEffect} from "react"
import AOS from 'aos'
import "aos/dist/aos.css"


import img1 from "../../assets/chinwa.svg"
import card from "../../assets/card.png"
import Laptop from "../../assets/laptop2.png"






const Info = () => {
  useEffect(()=>{
    AOS.init({
      duration: 2600
    });
  })
  return (
    <div className='mt-[20rem] min-h-screen flex justify-center items-center w-full mb-[10rem]   data-aos="fade-right"  max-lg:block max-lg:mt-[30rem] max-lg:space-y-8  '>
        <div className=' bg-white w-[25rem] h-[40rem] mr-4 rounded-3xl flex flex-col justify-between items-center  max-lg:h-[45rem] '>
            <button className='bg-[#DBFAC8] p-2 w-[10rem] rounded-md mt-5 -ml-[12rem] -mb-[5rem]'>
               <a className='text-1xl mt-3 '>For individual</a> 
            </button>
            <h1 className="text-4xl font-medium w-[20rem]  tex" >Spend like a Local.
Live like a Tourist</h1>
<img src={img1} alt=''/>


        </div>

        <div className='  bg-white w-[25rem] h-[40rem] mr-4 rounded-3xl flex  flex-col justify-between items-center max-lg:h-[45rem]'>

        <button className='bg-[#ADECCF] p-3 rounded-md mt-5 -ml-[12rem] -mb-[5rem]'>
               <a className='text-1xl'>For business</a> 
            </button>
            <h1 className='text-4xl font-medium leading-10 w-[22rem] container h-[10rem] '>Card issuing & <br/>spend<br/>
management for your business</h1>
<img src={Laptop} 


alt=''/>


        </div>

        <div className='  bg-white w-[25rem] h-[40rem] mr-4 rounded-3xl  flex flex-col justify-between items-center max-lg:h-[45rem]'>

        <button className='bg-[#D6B9FB] p-3 rounded-md mt-5 -ml-[6rem] -mb-[1rem]'>
               <a className='text-1xl'>For developers building apps</a> 
            </button>
            <h1 className='text-4xl font-medium leading-10 w-[22rem] container h-[10rem] '>
            Cards, Accounts &
Payments API's for developers</h1>
<img src={card} alt=''/>


        </div>

    </div>
  )
}

export default Info
