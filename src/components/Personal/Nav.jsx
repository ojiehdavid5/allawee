import React from 'react'
import ee from '../../assets/personal/ee.svg'

const Nav = () => {
  return (
    <header className='w-full h-[6rem] flex justify-center items-center'>
    <nav className='w-full h-16 flex flex-row gap-[25rem]  items-center'>
      <div className='flex gap-3 max-lg:hidden'>
      <h1 className='text-2max-lg text-white ml-1'>
        App Store
      </h1>

           <h1 className='text-2max-lg text-white mr-5'>
        Play Store
        </h1>
        </div>

   <img src={ee}
   className='max-lg:flex max-lg:ml-[7rem]'
   alt='logo'/>




    </nav>
    
  </header>

  )
}

export default Nav
