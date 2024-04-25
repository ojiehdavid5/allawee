import React, { useState } from 'react';
import cross from '../../assets/personal/cross.svg';

const Faq = () => {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <div className='flex flex-col min-h-screen mt-[10rem] justify-center items-center'>
      <div className={active ? 'w-[80rem] h-[20rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C]' : 'w-[80rem] h-[15rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C]'}>
        <div className={"flex flex-col justify-center items-start space-x-2 space-y-4 h-[20rem] w-[60rem]"}>
                  <p className='text-2xl font-medium ml-[6rem] text-white'>How do I signup? Do I need a bank account?</p>
<p className={active?'text-1xl w-[40rem] h-[10rem] text-white mb-[5rem] mr-[12rem] ':'hidden'}>Download the Allawee app on the iOS App Store or Google Play Store and follow the on-screen instructions to create your account. All you need is your phone number to create your account. Government issued ID, BVN & Selfie will be required to increase account limits.</p>
        </div>


        <img
          src={cross}
          onClick={() => setActive(true)}
          className='w-[28px] h-[28px] mr-[6rem] -mt-[3rem] bg-white'
          alt=''
        />
      </div>
    </div>
  );
}

export default Faq;