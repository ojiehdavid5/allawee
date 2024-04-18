import React from 'react'

import img1 from "../assets/chinwa.svg"
import card from "../assets/card.png"
import Laptop from "../assets/laptop2.png"


const Info = () => {
  return (
    <div className='mt-[20rem] min-h-screen flex justify-center items-center w-full'>
        <div className=' bg-white w-[25rem] h-[40rem] mr-4 rounded-md flex flex-col justify-between items-center'>
            <button className='bg-[#DBFAC8] p-3 rounded-md mt-5'>
               <a className='text-1xl mt-3'>For individual</a> 
            </button>
            <h1 className="text-4xl font-bold w-[20rem]  tex" >Spend like a Local.
Live like a Tourist</h1>
<img src={img1} alt=''/>


        </div>

        <div className='  bg-white w-[25rem] h-[40rem] mr-4 rounded-md flex  flex-col justify-between items-center'>

        <button className='bg-[#DBFAC8] p-3 rounded-md'>
               <a className='text-1xl'>For individual</a> 
            </button>
            <h1>Card issuing & spend
management for your business</h1>
<img src={Laptop} 


alt=''/>


        </div>

        <div className='  bg-white w-[25rem] h-[40rem] mr-4 rounded-md  flex flex-col justify-between items-center'>

        <button className='bg-[#DBFAC8] p-3 rounded-md'>
               <a className='text-1xl'>For individual</a> 
            </button>
            <h1>
            Cards, Accounts &
Payments API's for developers</h1>
<img src={card} alt=''/>


        </div>

    </div>
  )
}

export default Info
