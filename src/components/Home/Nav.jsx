import React from 'react'
import Logo from '../../assets/logo.svg'

const Nav = () => {
  return (
    <header className='w-full h-[6rem] flex justify-center items-center'>
      <nav className='w-full h-16 flex flex-row justify-between  items-center'>
        <h1 className='text-2xl text-white ml-1'>
          Blog
        </h1>
        <div>
          <img src={Logo} alt='logo'/>

        </div>

        <h1 className='text-2xl text-white mr-5'>
          Career
          </h1>


      </nav>
      
    </header>
  )
}

export default Nav