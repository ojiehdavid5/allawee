import React from 'react'
import personal from '../../assets/personal/personalcard.png'
import half from '../../assets/personal/half.png'


import Googleplay2 from '../../assets/personal/Googleplay2.png'
import Appstore2 from '../../assets/personal/Appstore2.png'

import Skate from '../../assets/personal/skateboy.png'
import icecream from '../../assets/personal/icecream.png'
import eee from '../../assets/personal/eee.png'
import card1 from '../../assets/personal/card1.png'
import card2 from '../../assets/personal/card2.png'
import coin from '../../assets/personal/coin.png'
import handcard from '../../assets/personal/handcard.png'
import money from '../../assets/personal/money.png'

const Uses = () => {
  return (
    <div className='mt-[10rem] max-lg:mt-[1rem] flex flex-col justify-center items-center  ]'>
    <img src={Skate}
    className=' aspect-[208/48]  max-lg:hidden max-w-full h-full object-cover box-border overflow-hidden p-0 mt-0 z-[99] absolute   max-lg:absolute max-lg:-bottom-[162rem] w-[30rem] left-[20rem]  max-lg:-left-[4rem]'
     alt='skate'/>
    <img src={icecream}
    className=' aspect-[208/48]  max-lg:hidden max-w-full h-[25rem] object-cover box-border overflow-hidden p-0 mt-0 z-[99] absolute -bottom-[143rem] w-[15rem]  left-[45rem] flex justify-center items-center '
     alt='skate'/>
    <img src={eee}
    className=' aspect-[208/48] max-lg:hidden max-w-full h-[10rem] object-cover box-border overflow-hidden p-0 mt-0 z-[99] absolute -bottom-[150rem] max-lg:bottom-[195rem] w-[10rem]  left-[70rem]  flex justify-center items-center '
     alt='skate'/>
    <img src={card1}
    className=' aspect-[208/48]  max-w-full h-[15rem] object-cover box-border overflow-hidden p-0 mt-0 z-[99] absolute -bottom-[180rem] w-[11rem]  left-[70rem]  flex justify-center items-center max-lg:hidden'
     alt='skate'/>
    <img src={coin}
    className=' aspect-[208/48] max-lg:hidden max-w-full h-[12rem] object-cover box-border overflow-hidden p-0 mt-0 z-[99] absolute -bottom-[190rem] w-[11rem]  left-[55rem]  flex justify-center items-center '
     alt='skate'/>
    <img src={card2}
    className=' aspect-[208/48] max-lg:hidden max-w-full h-[14rem] object-cover box-border overflow-hidden p-0 mt-0 z-[99] absolute -bottom-[220rem] w-[12rem]  right-[65rem]  flex justify-center items-center '
     alt='skate'/>
    <img src={money}
    className=' aspect-[208/48] max-lg:hidden max-w-full h-[14rem] object-cover box-border overflow-hidden p-0 mt-0 z-[99] absolute -bottom-[240rem] w-[15rem]  left-[65rem]  flex justify-center items-center '
     alt='skate'/>
         <img src={coin}
    className=' aspect-[208/48] max-lg:hidden max-w-full h-[12rem] object-cover box-border overflow-hidden p-0 mt-0 z-[99] absolute -bottom-[250rem] w-[11rem]  left-[55rem]  flex justify-center items-center '
     alt='skate'/>
         <img src={handcard}
    className=' aspect-[208/48] max-lg:hidden max-w-full h-[17rem] object-cover box-border overflow-hidden p-0 mt-0 z-[99] absolute -bottom-[250rem] w-[18rem]  right-[65rem]  flex justify-center items-center '
     alt='skate'/>


        <div className=" h-[790px] w-[624px] bg-white flex flex-col items-center rounded-lg p-7 z-0">
          <div className='w-full bg-[#F0FDE8] flex justify-center items-center'>
          <img src={personal}
          className='w-[48vh] mt-[3rem] bg-[#F0FDE8]  box-border'
          alt='personal'/>
</div>
          <h2 className='text-black  box-border text-4max-lg text-center mt-5 font-medium'>Create multiple cards for<br/> yourself or loved ones and set<br/> controls on them</h2>


          <p className='mt-4 text-1max-lg'>it's your money, use it in your own way!</p>

            

        </div>
        <div className=" h-[790px] w-[624px] bg-white flex flex-col items-center rounded-lg p-7 mt-[10rem]">

          <h2 className='text-black  box-border text-4max-lg text-center mt-5 font-medium'>Pay like a local with our<br/> Mastercard & Verve cards

</h2>


          <p className='mt-4 text-1max-lg'>Download the app & signup in seconds with just your phone<br/> number.</p>
<div className='flex flex-row space-x-5'>
<img src={Googleplay2}
          className='w-[12rem]'
          
          alt='googleplay'/>
          <img src={Appstore2}
          className='w-[12rem]'
          alt='Applestore'/>



</div>
          <div className='w-full flex justify-center items-center  bg-[#fbe8fd]'>

                      <img src={half}
          className='w-[48vh] mt-[3rem] bg-[#fbe8fd]  box-border'
          alt='personal'/>
          </div>


        </div>

    </div>
  )
}

export default Uses
