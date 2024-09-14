import Image from 'next/image';
import React from 'react';

const Browses = () => {
  return (
    <div className=' mt-20  px-3 md:px-0'>

      <div className="title text-center">
        <h2 className='text-3xl font-bold text-[rgb(51,51,51)]'>Browse The Range</h2>
        <p className=' text-[#666666] text-[20px] font-normal '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="Container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="browse-card">
          <Image src={'/browes.png'} width={700} height={508} alt='browse-image' className='browse-card-image'></Image>
          <h2 className='browse-card-h2 '> Dining</h2>
        </div>
        <div className="browse-card">
          <Image src={'/Image-living room.png '} width={700} height={508} alt='browse-image' className='browse-card-image'></Image>
          <h2 className='browse-card-h2'> Living</h2>
        </div>
        <div className="browse-card">
          <Image src={'/browes(1).png'} width={700} height={508} alt='browse-image' className='browse-card-image'></Image>
          <h2 className='browse-card-h2'> Bedroom</h2>
        </div>

      </div>


    </div>
  );
};

export default Browses;