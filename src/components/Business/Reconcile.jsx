import React from 'react'

const Reconcile = () => {
  return (
    <div className='flex justify-center items-center mt-[4rem] flex-col'>
        <span className='w-[2px] h-[10rem] bg-[#ffff] '></span>



        <div className="flex flex-col  w-[48rem] justify-center items-center gap-8 mt-9">
            <h1 className='text-6xl text-[#ffff] text-center'>Reconcile as you spend!
All your work expenses covered.</h1>

<p className='text-1xl text-[#ffff] text-center'>You shouldn't be spending time chasing receipts and manually reporting chunk of transactions.
Allawee is what smart companies utilize to automate their spending while retaining control, so<br/>
you can focus on what really matters.</p>
        </div>



        <div className="flex flex-row items-center justify-between mt-[12rem]  gap-[9rem] ">
            <div className="flex flex-col text-center w-[16rem]">
                <h1 className='text-[1rem] font-bold text-[#fff]'>Ensured Data accuracy</h1>
                <p className='text-[#fff]'>Access all relevant payment
information in one place to reduce
the risk of error</p>

            </div>
            <div className="text-center w-[16rem]">
                <h1 className='text-[1rem] font-bold text-[#fff]'>Reducing Closing Time</h1>
                <p className='text-[#fff]'>Get all receipts in one place.
Streamline company expense with a
combination of a card and a</p>

            </div>

            <div className="text-center w-[16rem]">
                <h1 className='text-[1rem] font-bold text-[#fff]'>Keep ahead of excess spend
Get all receipts in one place. Stop</h1>

<p className='text-[#fff]'>Get all receipts in one place. Stop
chasing employees - we send them
receipt reminders</p>

            </div>
        </div>
      
    </div>
  )
}

export default Reconcile
