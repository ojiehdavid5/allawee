import React from 'react'
import Nav from './Nav'

import Hero from './Hero'
 import  About from './About'
 import Reconcile from './Reconcile';
 import Unlimited from './Unlimited'
 import Faq from './Faq'


const Business = () => {
  return (
    <div className='bg-[#000] xl:px-44 2xl:px-64 md:px-12 px-8 overflow-hidden'>
        <Nav className=''/>
        <Hero/>
        
        <About/>
        <Reconcile/>
        <Unlimited/>
        <Faq/>



      
    </div>
  )
}

export default Business
