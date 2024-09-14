'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Banner = ({ title }: { title: string }) => {

  const path = usePathname()

  return (
    <div className=" banner  w-full h-[316px] flex justify-center items-center">
      <div className="banner-body">
        <h1 className=' text-center text-[48px] font-medium text-[#000000] mb-2'>{title}</h1>
        <div className=' bradCam flex items-center gap-2 '>
          <Link href={'/'}>
            <h1 className=' text-base font-medium'>Home</h1>
          </Link>
          <IoIosArrowForward />
          <h1 className='text-base font-light capitalize'>{path.slice(1, path.length)}</h1>
        </div>
      </div>

    </div>
  );
};

export default Banner;