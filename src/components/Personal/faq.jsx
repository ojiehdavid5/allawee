import React, { useState } from 'react';
import cross from '../../assets/personal/cross.svg';

const Faq = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  return (
    <div className='flex flex-col min-h-screen mt-[10rem] justify-center items-center  max-lg:ml-[35rem]'>
      <div className={active1 ? 'w-[80rem] h-[18rem] mx-10 rounded-md flex flex-row items-center  justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]' : '   w-[80rem]  h-[12rem] max-lg:w-[25rem] max-lg:h-[10rem] max-lg:-ml-[45rem] max-lg:overflow-hidden  mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]'}>
        <div className={"flex flex-col justify-center items-start space-x-2 space-y-4 h-[20rem] w-[60rem]"}>
                  <p className='text-[15px] font-medium ml-[2rem]  text-white'>How do I signup? Do I need a bank account?</p>
<p className={active1?'text-1max-lg w-[40rem] h-[10rem] text-white  p-5 mr-[12rem] leading-8  text-center':'hidden'}>Download the Allawee app on the iOS App Store or Google Play Store and follow the on-screen instructions to create your account. All you need is your phone number to create your account. Government issued ID, BVN & Selfie will be required to increase account limits.</p>
        </div>


        <img
          src={cross}
          onClick={() => setActive1(true)}
          className='w-[28px] h-[28px] mr-[3rem] -mb-[0rem]   bg-white bg-clip-white'
          alt=''
        />
      </div>
      <div className={active2 ? 'w-[80rem] h-[18rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]' : '     max-lg:w-[24rem] max-lg:h-[10rem] max-lg:-ml-[45rem] w-[80rem] h-[12rem]  mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]'}>
        <div className={"flex flex-col justify-center items-start space-x-2 space-y-4 h-[20rem] w-[60rem]  " }>
                  <p className='text-2max-lg font-medium ml-[6rem] text-white'>Do I need to have a bank account?</p>
<p className={active2?'text-1max-lg w-[40rem] h-[10rem] text-white  p-5 mr-[12rem] leading-8  text-center':'hidden'}>No, you don't need a bank account to create an Allawee account or add money to your balance.

All account approvals are subject to CBN KYC & AML/CFT regulations & guidelines.</p>
        </div>


        <img
          src={cross}
          onClick={() => setActive2(true)}
          className='w-[28px] h-[28px] mr-[6rem] -mt-[3rem] bg-white'
          alt=''
        />
      </div>
      <div className={active3 ? 'w-[80rem] h-[18rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]' : '   max-lg:w-[24rem] max-lg:h-[10rem] max-lg:-ml-[45rem] w-[80rem] h-[12rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]'}>
        <div className={"flex flex-col justify-center items-start space-x-2 space-y-4 h-[20rem] w-[60rem]"}>
                  <p className='text-2max-lg font-medium ml-[6rem] text-white'>How does the card work?</p>
<p className={active3?'text-1max-lg w-[40rem] h-[10rem] text-white  p-5 mr-[12rem] leading-8  text-center flex-wrap flex':'hidden'}>Easily create as many physical or virtual cards as you wish & they will be delivered to you.

Simply request a card from our options of Mastercard or Verve & setup your 4 digit PIN once it arrives. You can create cards for loved ones with your own special controls and limits too.

If you already have a card, just login to your app and click on the 'Link a Card' button located on the Cards page. Once a card is activated by creating a PIN, you can start spending immediately. Always remember to select 'Current Account' on a POS terminal.

CVV is the 3 digit number at the back of your card. Happy Spending!</p>
        </div>


        <img
          src={cross}
          onClick={() => setActive3(true)}
          className='w-[28px] h-[28px] mr-[6rem] -mt-[3rem] bg-white'
          alt=''
        />
      </div>
      <div className={active4 ? 'w-[80rem] h-[18rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]' : '  max-lg:w-[24rem] max-lg:h-[10rem] max-lg:-ml-[45rem] w-[80rem] h-[12rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]'}>
        <div className={"flex flex-col justify-center items-start space-x-2 space-y-4 h-[20rem] w-[60rem]"}>
                  <p className='text-2max-lg font-medium ml-[6rem] text-white'>How do I load or receive money?</p>
<p className={active4?'text-1max-lg w-[40rem] h-[10rem] text-white  p-5 mr-[12rem] leading-8  text-center':'hidden'}>You get a dedicated bank account number for yourself instantly, where you can transfer funds into your account seamlessly. You can also top up with a card, which attracts a 1.5% fee capped at N2,000. Click on the 'Add Money' button on the homepage to load your account.</p>
        </div>


        <img
          src={cross}
          onClick={() => setActive4(true)}
          className='w-[28px] h-[28px] mr-[6rem] -mt-[3rem] bg-white'
          alt=''
        />
      </div>
      <div className={active5 ? 'w-[80rem] h-[18rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]' : ' max-lg:w-[24rem] max-lg:h-[10rem] max-lg:-ml-[45rem] w-[80rem] h-[12rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]'}>
        <div className={"flex flex-col justify-center items-start space-x-2 space-y-4 h-[20rem] w-[60rem]"}>
                  <p className='text-2max-lg font-medium ml-[6rem] text-white'>How do I spend my money?</p>
<p className={active5?'text-1max-lg w-[40rem] h-[10rem] text-white  p-5 mr-[12rem] leading-8  text-center':'hidden'}>You can either use your allawee card to pay anywhere! POS, Online or ATM.

Instantly transfer money to any bank account or wallet in Nigeria. Get instant push notifications & emails immediately a transaction happens.</p>
        </div>


        <img
          src={cross}
          onClick={() => setActive5(true)}
          className='w-[28px] h-[28px] mr-[6rem] -mt-[3rem] bg-white'
          alt=''
        />
      </div>
      <div className={active6 ? 'w-[80rem] h-[18rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]' : ' max-lg:w-[24rem] max-lg:h-[10rem] max-lg:-ml-[45rem] w-[80rem] h-[12rem] mx-10 rounded-md flex flex-row items-center justify-between bg-[#161B39] border border-[#48535C] mb-[5rem]'}>
        <div className={"flex flex-col justify-center items-start space-x-2 space-y-4 h-[20rem] w-[60rem]"}>
                  <p className='text-2max-lg font-medium ml-[6rem] text-white'> How does Allawee keep my money safe?</p>
<p className={active6?'text-1max-lg w-[40rem] h-[10rem] text-white  p-5 mr-[12rem] leading-8  text-center':'hidden'}>We use advanced encryption and fraud detection technology to ensure the security of your data and finances. Any information you provide is encrypted and securely transmitted to our servers.

Funds are safely held with Providus Bank PLC, a CBN licensed commercial bank. Debit & prepaid cards are issued by Providus Bank PLC pursuant to license by Mastercard & Verve.</p>
        </div>


        <img
          src={cross}
          onClick={() => setActive6(true)}
          className='w-[28px] h-[28px] mr-[6rem] -mt-[3rem] bg-white'
          alt=''
        />
      </div>
    </div>
  );
}

export default Faq;