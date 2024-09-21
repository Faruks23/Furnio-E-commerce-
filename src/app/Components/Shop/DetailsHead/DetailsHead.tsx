import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const DetailsHead = ({name}:{name:string |undefined}) => {
  return (
    <>
      <div className=' bradCam flex items-center gap-5 '>
        <Link href={'/'}>
          <h1 className=' text-base font-normal text-[#9F9F9F]'>Home</h1>
        </Link>
        <IoIosArrowForward />
        <Link href={'/shop'}>
          <h1 className=' text-base font-normal text-[#9F9F9F]'>Shop</h1>
        </Link>
        <IoIosArrowForward />
        <h1 className='text-base font-medium capitalize h-9 border-l-2 border-[#9F9F9F] py-2 px-5 text-[#000000] '>{name && name}</h1>
      </div>
      
    </>
  );
};

export default DetailsHead;