import React from 'react'

import Pocket from "../../assets/Business/pocket.webp"

const Hero = () => {
  return (
    <div className='flex flex-row justify-center items-center mt-[6rem] gap-9'>
      <div className="space-y-5">
        <h1 className='text-[#ffff] text-5xl'>Card issuing & spend<br/>
management for<br/>
Businesses</h1>


<p className='text-2xl text-slate-600'>Do more work that matters. Leave the expenses, payments and<br/>
reimbursements to Allawee</p>

<div className="">
  <input type='' className='p-5 w-[20rem]' placeholder='Enter your email'/>
  <button className='p-5 bg-[#ffff]'> Get Started for Free</button>

</div>

<p></p>



      </div>

      <img src={Pocket}  className='w-1/4' alt='hero'/>
      
    </div>
  )
}

export default Hero
