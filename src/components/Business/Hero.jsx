import React from 'react'

import Pocket from "../../assets/Business/pocket.webp"

const Hero = () => {
  return (
    <div className='flex flex-row justify-center items-center mt-[6rem] gap-[10rem] bg-[#000]'>
      <div className="space-y-5">
        <h1 className='text-[#ffff] text-6xl'>Card issuing & spend<br/>
management for<br/>
Businesses</h1>


<p className='text-[1.2rem] text-[#ffff]'>Do more work that matters. Leave the expenses, payments and<br/>
reimbursements to Allawee</p>

<div className="">
  <input type='' className='p-5 w-[20rem] bg-transparent border border-[#ffff] text-[#fff] font-bold text-2xl' placeholder='Enter your email'/>
  <button className='p-5 h-[4.1rem] bg-[#ffff]'> Get Started for Free</button>

</div>




<p></p>



      </div>

      <img src={Pocket}  className='w-[30%]' alt='hero'/>
      
    </div>
  )
}

export default Hero
