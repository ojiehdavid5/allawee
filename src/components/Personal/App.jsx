import React from "react";
import phone1 from "../../assets/personal/phone1.png";
import phone2 from "../../assets/personal/phone2.png";
import Appstore from "../../assets/personal/Appstore.png";
import Googleplay from "../../assets/personal/Googleplay.png";

import Arrow from "../../assets/personal/arrow.svg";

const App = () => {
  return (
    <div>
    <div className="flex flex-row mt-[5rem] items-center justify-center min-h-screen">
      <img src={phone1} className="w-[20rem]" alt="phone1" />
      <div className="flex flex-col  -mt-[12rem]">
        <p className="text-white  text-center mb-9 ">
          Meet Allawee, your personal money buddy that lets you
          <br /> spend like a local in any country.
        </p>
        <div className="flex flex-row space-x-4 -">
          <img src={Appstore} className="image w-[15rem]" alt="appstore" />

          <img src={Googleplay} className="image w-[15rem]" alt="googleplay" />
        </div>
        <h3 className="text-4xl font-bold text-[#DBFAC8] mt-12 text-center mb-6">
          You're in good company
        </h3>
        <p className="text-2xl text-white text-center leading-7">
          we have successfully processed over N2.5b in
          <br /> business payments for our customers
        </p>
        <span className="flex flex-row justify-center  items-center mt-9">
          <p className="text-white">
            see for yourself
              <img src={Arrow} className="w-[25px] bg-[#DBFAC8]" alt="" />
          </p>
        </span>
      </div>
      <img src={phone2} alt="phone2"/>
    </div>
    <div className="min-w-screen py-[32px] px-[96px] h-[10rem] rounded-md bg-[#b8caac40] border border-[#dbfdc840]">

        <div className=" w-[70rem] h-[5rem]   bg-[#0B1032] border border-[#DBFDC8] rounded-md flex justify-center items-center">
<h2 className="text-4xl text-[#C6A0D2]">Where every $ writes it story </h2>
        </div>

      </div>

    </div>



  );
};

export default App;
