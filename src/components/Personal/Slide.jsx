import React from 'react';
import Marquee from "react-fast-marquee";

const Slide = () => {
  return (
    <div className='className="min-w-screen py-[32px] px-[96px] h-[10rem] rounded-md bg-[#b8caac40] border border-[#dbfdc840] -mt-[9rem]"'>
      <div className="w-[70rem] h-[5rem] bg-[#0B1032] border border-[#DBFDC8] rounded-md flex justify-center items-center">
        <Marquee>
        <h2 className="text-4xl text-[#C6A0D2]">Spend Like a local, live like a tourist * YOU CREATE THE RULES</h2>

        </Marquee>
      </div>
    </div>
    
  );
};

export default Slide;