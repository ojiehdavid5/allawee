import React from 'react'
import hand from '../../assets/Business/hand.webp'

import KFC from '../../assets/Business/kfc.svg'
import  Virtual from '../../assets/Business/virtual.svg'
const Unlimited = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[10rem]'>
        <div className='flex flex-row justify-center items-center text-[#fff] gap-[5rem] mb-[9rem] '>
            <img src={hand}    className='w-[35%] h-1/2' alt='pics'/>
            <div className="flex flex-col gap-[2rem]">
                <h1 className='text-4xl font-bold'>Unlimited Company<br/>
Expense Cards</h1>
<p className='w-[60]'>Forget about chasing receipts.<br/>
Get freedom & flexibility by providing your team<br/>
with Company cards while managing their spend<br/>
with limits you've set</p>
<button className='bg-[#fff] text-[#000] p-5 font-bold w-[15rem] rounded-md' >Checkout Physical Card</button>
            </div>

            


        </div>
        <div className='flex flex-row-reverse justify-center items-center text-[#fff] gap-[5rem] mb-[9rem] '>
            <img src={KFC}    className='w-[50%] h-1/2' alt='pics'/>
            <div className="flex flex-col gap-[2rem]">
                <h1 className='text-4xl font-bold'>Unlimited Company<br/>
Expense Cards</h1>
<p className='w-[60]'>Forget about chasing receipts.<br/>
Get freedom & flexibility by providing your team<br/>
with Company cards while managing their spend<br/>
with limits you've set</p>
<button className='bg-[#fff] text-[#000] p-5 font-bold w-[15rem] rounded-md' >Checkout Physical Card</button>
            </div>

            


        </div>
      
        <div className='flex flex-row justify-center items-center text-[#fff] gap-[5rem] mb-[9rem] '>
            <img src={Virtual}    className='w-[50%] h-1/2' alt='pics'/>
            <div className="flex flex-col gap-[2rem]">
                <h1 className='text-4xl font-bold'>Unlimited Company<br/>
Expense Cards</h1>
<p className='w-[60]'>Forget about chasing receipts.<br/>
Get freedom & flexibility by providing your team<br/>
with Company cards while managing their spend<br/>
with limits you've set</p>
<button className='bg-[#fff] text-[#000] p-5 font-bold w-[15rem] rounded-md' >Checkout Physical Card</button>
            </div>

            


        </div>
        <div className='flex flex-row-reverse justify-center items-center text-[#fff] gap-[5rem] mb-[9rem] '>
            <img src={Virtual}    className='w-[50%] h-1/2' alt='pics'/>
            <div className="flex flex-col gap-[2rem]">
                <h1 className='text-4xl font-bold'>Unlimited Company<br/>
Expense Cards</h1>
<p className='w-[60]'>Forget about chasing receipts.<br/>
Get freedom & flexibility by providing your team<br/>
with Company cards while managing their spend<br/>
with limits you've set</p>
<button className='bg-[#fff] text-[#000] p-5 font-bold w-[15rem] rounded-md' >Checkout Physical Card</button>
            </div>

            


        </div>
      
    </div>
  )
}

export default Unlimited
