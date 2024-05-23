import React from 'react'
import Logo from '../../assets/Business/logo.svg'

const Nav = () => {
  return (
    <div className='h-[7rem] flex justify-center items-center bg-[#000] '>
      <div className="flex flex-row justify-between items-center   gap-[6rem]  bg-[#0000]">
        <img src={Logo} className='w-[15%]'/>
        <div className=" flex flex-row justify-between items-center  gap-[3rem] text-[#ffff]">
        <p >Features</p>
        <p>About</p>
        <p>Pricing</p>
        <p>Blog</p>

        </div>

        <div className="flex flex-row justify-between items-center gap-8">
          <button className='p-3 px-6 text-[#ffff] border-[1px] rounded-sm'>Log in</button>
          <button className='p-2 rounded-sm bg-[#fff] text-[#000]'>create an account</button>
        </div>



      </div>



      
      
    </div>
  )
}

export default Nav
