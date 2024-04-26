import React from 'react'
import ee from '../../assets/personal/ee.svg'
import  facebook from '../../assets/personal/facebook.svg'
import instagram from '../../assets/personal/instagram.svg'
import twitter from '../../assets/personal/Twitter.svg'
import tiktok from '../../assets/personal/tiktok.svg'

const Social = () => {
  return (
    <div className='flex  justify-center items-center'>
            <div className="w-[80rem] h-[9rem] bg-[#151C3A] border border-[#DBFDC8] rounded-md flex justify-between items-center">
                <img src={ee}
                className='ml-[8rem]'
                alt='ee'/>
                <div className="flex space-x-6 mr-12">
                    <img src={facebook}
                    className='w-[4rem]  rounded-full   hover:mb-[1rem]'
                    alt=''/>
                    <img src={twitter}
                    className='w-[4rem] rounded-full hover:mb-[1rem]'
                    alt=''/>
                    <img src={tiktok}
                    className='w-[4rem] rounded-full hover:mb-[1rem]'
                    alt=''/>
                    <img src={instagram}
                    className='w-[4rem] mr-6 rounded-full hover:mb-[1rem]'
                    alt=''/>
                </div>
                

      </div>

    </div>
  )
}

export default Social
