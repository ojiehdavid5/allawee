import React from 'react'
import Logo from '../../assets/Business/logo.svg'

const Nav = () => {
  return (
    <div className='h-[7rem] w-full flex justify-center items-center'>
      <div className="flex flex-row justify-between items-center  w-[60rem] h-[4rem] gap-[6rem]">
        <img src={Logo} className=''/>
        <div className=" flex flex-row justify-between items-center  gap-[8rem]">
        <p >Features</p>
        <p>About</p>
        <p>Pricing</p>
        <p>Blog</p>

        </div>

        <div className="flex flex-row justify-between items-center">
          <button>Log in</button>
          <button>create an account</button>
        </div>



      </div>



      
      
    </div>
  )
}

export default Nav
