import React from 'react'
import cross from '../../assets/personal/cross.svg'
import {useState} from 'react'

const [active,setActive]=useState(true);

const Faq = () => {
  return (
    <div className='flex flex-col  min-h-screen mt-[10rem] justify-center items-center'>
      <div className='w-[80rem] h-[10rem] mx-10  rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C]'>
        <p className='text-2xl font-medium ml-[6rem]  text-white'>How do I signup? Do I need a bank account? </p>

        <img src={cross} 
// onClick={}
        className='w-[28px] h-[28px] mr-[6rem]  -mt-[3rem] bg-white'
        
        alt=''/>
        </div>

      
    </div>
  )
}

export default Faq
