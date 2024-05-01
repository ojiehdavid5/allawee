import React from "react";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-row   w-full mb-[10rem] max-lg:flex-col max-lg:ml-[3rem]">
      <div className="flex flex-col  w-[30rem] h-[33rem] p-10  border rounded-md border-[rgb(161,221,194)] max-lg:w-[20rem]">
        <img src={Logo} alt="logo" className="w-[13rem] mb-10" />

        <p className="text-white mb-5">
          Allawee is a financial technology platform, not a bank.
        </p>
        <p className="text-white mb-5">
          Credit lines provided by Allawee as a licensed Digital Money Lender.
        </p>
        <p className="text-white mb-5">
          {" "}
          Banking services provided by Providus Bank PLC, a CBN licensed
          commercial bank.
        </p>
        <p className="text-white mb-5">
          Debit & prepaid cards are issued by Providus Bank PLC pursuant to
          license by Mastercard & Verve.
        </p>
      </div>
      <div className="flex flex-col  w-[20rem] h-[25rem] rounded border m-0  border-[rgb(212,250,233)] justify-start items-center space-y-3"> 
      <div className=" max-lg:-ml-[8rem]">
      <p  className="mt-10 text-slate-500 mb-10 text-left">PRODUCT</p>
        <div className="text-left space-y-4">
        <p className="text-white">PERSONAL</p>
        <p className="text-white">BUSINESS</p>
         <p className="text-white text-left">INFRA</p>

        </div>                                                                               


        </div>
      </div>
      <div className="flex flex-col  w-[20rem] h-[25rem] rounded border m-0  border-[rgb(212,250,233)] justify-start items-center space-y-3">    
      <div className="max-lg:-ml-[8rem]">
      <p  className="mt-10 text-slate-500 mb-10 text-left">COMPANY</p>
        <div className="text-left space-y-4">
        <p className="text-white">CAREERS</p>
        <p className="text-white">BLOG</p>


        
        </div>                                                                            

        </div>
      </div>
    </div>
  );
};

export default Footer;
