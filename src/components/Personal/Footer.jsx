import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[10rem] mt-10 flex flex-row space-x-2'>
        <div className="flex  flex-col leading-7 space-y-1 text-white">
            <p className='text-wrap'>Allawee is a financial technology platform, not a bank.</p>
            <p className='text-wrap'> Credit lines provided by Allawee as a licensed Digital Money<br/> Lender.</p>
            <p className='text-wrap'>Banking services provided by Providus Bank PLC, a CBN<br/> licensed commercial bank.</p>
        </div>

        <div className="flex  flex-col leading-7 space-y-3 text-white ">
            <p className='text-wrap'>Debit & prepaid cards are issued by Providus Bank PLC<br/> pursuant to license by Mastercard & Verve.</p>
            <p className='text-wrap text-[#D6F5C5]'> Our official support email: support@allawee.com</p>
            <p className='text-wrap text-[#D6F5C5]'>Phone line: +234-818-414-6005<br/>
9am - 5pm Monday - Friday.</p>
        </div>
      
    </div>
  )
}

export default Footer
