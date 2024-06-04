import React from 'react'
import logo from '../../assets/Business/logo.svg'
import instagram from '../../assets/personal/social1.svg'
import facebook from '../../assets/personal/social2.svg'
import tiktok from '../../assets/personal/social3.svg'
import twitter from '../../assets/personal/social4.svg'

const Footer = () => {
  return (
    <div className=""> 
<span className='border-2 border-[#fff]  w-[2rem] border-box'></span>




<div className='min-h-screen flex flex-row  items-center justify-center gap-[10rem]'>
        <div className=" flex flex-col items-center justify-center gap-7">

            <img src={logo}  className='w-[80%]'   alt=''/>

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
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-6' >Physical Cards</li>
                </ul>
            </div>

            <div className=" flex flex-col gap-9 mb-[12rem]">
                <p>Features</p>
                <ul >
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-6' >Physical Cards</li>
                </ul>
            </div>

            <div className=" flex flex-col gap-9 mb-[12rem]">
                <p>Features</p>
                <ul >
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-6' >Physical Cards</li>
                    <li className='mb-3' >Physical Cards</li>
                </ul>
            </div>


        </div>


    </div>
    <div className="  flex  items-center justify-center   text-center text-[#fff]">
    Bank accounts are provded ov Providus Bank PLC - licensed and requlated ov the CbN & monev is duv insured bv NDIC<br/>
Debit cards are issued by Providus Bank PLC pursuant to license from Verve & Mastercard Internationa<br/>
Credit lines are provided under state Money Lenders License.<br/>
Allawee is not a bank but provides a spend management technology platform

    </div>
    
    </div>
    
  
  )
}

export default Footer
