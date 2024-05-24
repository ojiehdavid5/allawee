import React from 'react'
import Nav from './Nav'

import Hero from './Hero'
 import Reconcile from './Reconcile';
 import Unlimited from './Unlimited'
 import Trust from './Trust'
 import Resources from './Resources'

//  xl:px-44 2xl:px-64 md:px-12 px-8 overflow-hidden

const Business = () => {
  return (
    <div className=''>
      <div className='bg-[#000]'>
      <Nav className=''/>
        <Hero/>
        
        <Reconcile/>
        <Unlimited/>

      </div>
        <Trust/>
        <div className="bg-[#000]">
        <Resources/>

        </div>



      
    </div>
  )
}

export default Business
