import React from 'react'
import currency from '../../assets/Business/currency.png'

const Resources = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[20rem]'> 
<h1 className='text-[#fff] mr-[50rem]' >Resources from Allawee<br/>
for Founders & Leaders</h1>
<div className="flex flex-row justify-center items-center">
  <div className="flex flex-col items-center justify-center gap-8">
<img src={currency} className='w-[85%]' alt=''/>
<p className='text-[#fff] text-left mr-[18rem] font-bold'>Spend Management </p>
<p className='text-[#fff] text-[18px]  mr-[4rem]'>The difference between a Business & Personal<br/>
payment card</p>
  </div>
</div>

        
      
    </div>
  )
}

export default Resources
