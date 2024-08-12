
import React from 'react';

const Hero = () => {
  return (
    <div style={{ backgroundImage: "url('/Home hero.png')" }} className=' w-full h-[100vh] bg-no-repeat'>
      <div className="Container flex justify-center items-center h-full">
        <div className="left-hero w-[50%]">
        </div>   
        <div className="right-hero w-[50%]">
          <div className=' max-w-[643px] min-h-[443px]  bg-[#FFF3E3] px-[41px] py-[62px] rounded-lg mt-[150px]  '>
            <p className='  text-base font-semibold tracking-[3px]  text-[rgb(51,51,51)]'>New Arrival</p>
            <h1 className=' text-[52px] font-bold leading-[65px] text-[rgb(184,142,47)]'>Discover Our <br /> New Collection</h1>
            <p className=' text-[18px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

            <button className=' py-[25px] px-[72px] text-white uppercase    text-base font-bold bg-[#B88E2F] mt-11'>by now</button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;