import React from 'react'

const Nav = () => {
  return (
    <header className='bg-[#0D1F23]  w-full  px-4 py-6 min-h-[10px] text-white   sticky   rounded-full' >
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold flex items-center justify-center font-poppins capitalized'>School <span className='text-[#DBFDC8]'>Mate</span></h2>

        <div className='flex   max-lg:hidden'>
          <button className='px-10 py-1'>
            <a  className='text-2xl' href=''>Register</a>
          </button>
          <button className='px-10 py-1 ml-6  border-2 border-[#DBFDC8]'>
            <a  className='text-2xl' href=''>Login</a>
          </button>
        </div>
      </div>
      


      
    </header>
  )
}

export default Nav
