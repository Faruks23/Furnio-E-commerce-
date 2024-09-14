import NavList from '@/app/utils/NavList';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa6';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

const Header = () => {




  return (
    <div className=' w-full  fixed top-0 left-0 z-50 bg-[#F2F2F2]'>
      <header className='container mx-auto '>
        <div className="header-content flex  items-center  justify-between  py-5 border-b-black border-1 ">
          <div className="logo">
            {/* <Image src={'/'} width={40} height={40} alt='header-logo'> </Image> */}
            <h1 className=' font-bold text-3xl'>Furnio</h1>
          </div>
          <div className="menu-item">
            <NavList></NavList>
             
          </div>
          <div className="cart-user-item">
            <ul className=' flex  items-center gap-5'>
              <Link href={'/'}>
                <li><FaRegUser className='size-6'/></li>
              </Link>
              <Link href={'/'}>
                <li><IoSearchOutline className='size-7'/></li>
              </Link>
              <Link href={'/'}>
                <li><IoMdHeartEmpty className='size-7'/></li>
              </Link>
              <Link href={'/'}>
                <li><IoCartOutline className='size-7'/></li>
              </Link>
             </ul>
          </div>
         </div>
      </header>
      
    </div>
  );
};

export default Header;