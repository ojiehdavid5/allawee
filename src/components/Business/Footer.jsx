import React from 'react'
import logo from '../../assets/Business/logo.svg'
import instagram from '../../assets/personal/instagram.svg'
import facebook from '../../assets/personal/facebook.svg'
import tiktok from '../../assets/personal/tiktok.svg'
import twitter from '../../assets/personal/Twitter.svg'

const Footer = () => {
  return (
    <div className=""> 


<div className='min-h-screen flex flex-row  items-center justify-center gap-[10rem]'>
        <div className=" flex flex-col items-center justify-center gap-7">
            <img src={logo}  className='w-[50%]'   alt=''/>
            <h1 className='text-[#fff]'>Built in Lagos and san Francisco</h1>

            <div className=" flex flex-row gap-4">

            <img src={instagram}  className='w-[20%] bg-[#000]' alt=''/>
            <img src={facebook} className='w-[20%]'  alt=''/>
            <img src={tiktok} className='w-[20%]'  alt=''/>
            <img src={twitter}  className='w-[20%]' alt=''/>

            </div>


            


        </div>

        <div className="text-white flex flex-row gap-[5rem] items-center  justify-center">
            <div className=" flex flex-col gap-9">
                <p>Features</p>
                <ul >
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                </ul>
            </div>

            <div className=" flex flex-col gap-9 mb-[9rem]">
                <p>Features</p>
                <ul >
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                </ul>
            </div>

            <div className=" flex flex-col gap-9 mb-[9rem]">
                <p>Features</p>
                <ul >
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                </ul>
            </div>


        </div>

    </div>
    
    </div>
    
  
  )
}

export default Footer
