import React from 'react'
import Nav from './Nav'
import './personal.css'
import Hero from './Hero'
import App from './App'
import Tourist from './Tourist'
import Uses from './Uses'
import Faq from './Faq'
import Importance from './Importance'
import Social from './Social'
import Footer from './Footer'


import Slide from './Slide'
const Personal = () => {
  return (
    <div className='mx-10 bg-[#0D1F23] mih-h-screen'>
        <Nav/>
<Hero/>
<App/>
<Tourist/>
<Uses/>
<Faq/>
<Slide/>
<Importance/>
<Social/>
<Footer/>
      
    </div>
  )
}

export default Personal
