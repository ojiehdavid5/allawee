import React from 'react'
import Nav from './Nav'
import './personal.css'
import Hero from './Hero'
import App from './App'
import Tourist from './Tourist'
import Uses from './Uses'
import Faq from './Faq'

const Personal = () => {
  return (
    <div className='mx-10 bg-[#0B1032] mih-h-screen'>
        <Nav/>
<Hero/>
<App/>
<Tourist/>
<Uses/>
<Faq/>
      
    </div>
  )
}

export default Personal
