import React, { useEffect } from "react";
import phone1 from "../../assets/personal/phone1.png";
import phone2 from "../../assets/personal/phone2.png";
import Appstore from "../../assets/personal/Appstore.png";
import Googleplay from "../../assets/personal/Googleplay.png";

import Arrow from "../../assets/personal/arrow.svg";
import AOS from 'aos'
import "aos/dist/aos.css"


const App = () => {
  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array if you want the effect to run only once on component mount
  return (
    <div>
    <div className="flex flex-row mt-[5rem] items-center justify-center min-h-screen max-lg:block  max-lg:w-full max-lg:mt-[10rem]">
      <div className="max-lg:flex max-lg:w-[10rem]  max-lg:-mt-[5rem] max-lg:mb-[20rem] sm:hidden">
      <img src={phone1} className="w-[20rem]"data-aos="fade-right" alt="phone1" />
            <img src={phone2} data-aos="fade-left"alt="phone2"/>

      </div>
      <img src={phone1} 
      className="max-lg:hidden"
      data-aos="fade-right"alt="phone2"/>



      <div className="flex flex-col  -mt-[12rem]">
        <p className="text-white  text-center mb-9  max-lg:-mt-[7rem] max-lg:mb-[5rem] max-lg:w-full">
          Meet Allawee, your personal money buddy that lets you
           spend like a local in any country.
        </p>
        <div className="flex flex-row space-x-4  max-lg:w-[10rem] max-lg:-mt-[3rem]  ">
          <img src={Appstore} className="image w-[15rem] "    alt="appstore" />

          <img src={Googleplay} className="image w-[15rem]" alt="googleplay" />
        </div>

        <h3 className="text-4xl font-bold text-[#DBFAC8] mt-12 text-center mb-6 max-lg:text-2xl ">
          You're in good company
        </h3>
        <p className="text-2xl text-white text-center leading-7 max-lg:text-[20px]   ">
          we have successfully processed over N2.5b in
           business payments for our customers
        </p>
        <span className="flex flex-row justify-center  items-center mt-9 ">
          <p className="text-white">
            see for yourself
          </p>
          <img src={Arrow} className="w-[25px] bg-clip-content bg-green-500" alt="" />

        </span>
      </div>
      <img src={phone2} 
      className="max-lg:hidden"
      data-aos="fade-left"alt="phone2"/>
    </div>
    {/* <div className="min-w-screen py-[32px] px-[96px] h-[10rem] rounded-md bg-[#b8caac40] border border-[#dbfdc840] -mt-[9rem]">

        <div className=" w-[70rem] h-[5rem]   bg-[#0B1032] border border-[#DBFDC8] rounded-md flex justify-center items-center">
<h2 className="text-4xl text-[#C6A0D2]">Where every $ writes it story </h2>
        </div>

      </div> */}

    </div>



  );
};

export default App;
