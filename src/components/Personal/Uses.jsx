import React from 'react'
import personal from '../../assets/personal/personalcard.png'
import half from '../../assets/personal/half.png'


import Googleplay2 from '../../assets/personal/Googleplay2.png'
import Appstore2 from '../../assets/personal/Appstore2.png'

const Uses = () => {
  return (
    <div className='mt-[25rem] flex flex-col justify-center items-center '>
        <div className=" h-[790px] w-[624px] bg-white flex flex-col items-center rounded-lg p-7">
          <img src={personal}
          className='w-[48vh] mt-[3rem] bg-[#F0FDE8]  box-border'
          alt='personal'/>

          <h2 className='text-black  box-border text-4xl text-center mt-5 font-medium'>Create multiple cards for<br/> yourself or loved ones and set<br/> controls on them</h2>


          <p className='mt-4 text-1xl'>it's your money, use it in your own way!</p>

            

        </div>
        <div className=" h-[790px] w-[624px] bg-white flex flex-col items-center rounded-lg p-7 mt-[10rem]">

          <h2 className='text-black  box-border text-4xl text-center mt-5 font-medium'>Pay like a local with our<br/> Mastercard & Verve cards

</h2>


          <p className='mt-4 text-1xl'>Download the app & signup in seconds with just your phone<br/> number.</p>
<div className='flex flex-row space-x-5'>
<img src={Googleplay2}
          className='w-[12rem]'
          
          alt='googleplay'/>
          <img src={Appstore2}
          className='w-[12rem]'
          alt='Applestore'/>



</div>
                      <img src={half}
          className='w-[48vh] mt-[3rem] bg-[#F0FDE8]  box-border'
          alt='personal'/>


        </div>

    </div>
  )
}

export default Uses
