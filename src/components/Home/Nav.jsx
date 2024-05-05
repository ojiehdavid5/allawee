import React from 'react'
import Logo from '../../assets/logo.svg'

const Nav = () => {
  return (
    <header className='w-full max-lg:w-[10rem] h-[6rem] flex justify-center items-center'>
      <nav className='w-full h-16 flex flex-row justify-between  items-center'>
        <h1 className='text-2max-lg text-white ml-1 max-lg:hidden'>
          Blog
        </h1>
        <div className=''>
          <img src={Logo}
          className='max-lg:ml-[8rem] max-lg:w-[7rem] max-lg:mt-[2rem]' 
          
          alt='logo'/>

        </div>

        <h1 className='text-2max-lg text-white mr-5 max-lg:hidden'>
          Career
          </h1>


      </nav>
      
    </header>
  )
}

export default Nav