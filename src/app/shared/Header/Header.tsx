import NavList from '@/app/utils/NavList';
import Image from 'next/image';
import React from 'react';

const Header = () => {




  return (
    <div className=' w-full'>
      <header className='container mx-auto'>
        <div className="header-content">
          <div className="logo">
            {/* <Image src={'/'} width={40} height={40} alt='header-logo'> </Image> */}
            <h1 className=' font-bold text-3xl'>Furnio</h1>
          </div>
          <div className="menu-item">
            <NavList></NavList>
          </div>
         </div>
      </header>
      
    </div>
  );
};

export default Header;