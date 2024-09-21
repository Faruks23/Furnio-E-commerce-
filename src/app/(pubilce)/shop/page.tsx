import Banner from '@/app/common/banner/banner';
import AllProduct from '@/app/Components/Shop/AllProducts/AllProducts';
import { PaginatedItems } from '@/app/Components/Shop/Pagination/Pagination';
import Step from '@/app/Components/Shop/Step/Step';
import React from 'react';

const ShopPage = () => {
  return (
    <div className='pt-16'>
      <Banner title='Shop'></Banner>
    
      <PaginatedItems itemsPerPage={16} ></PaginatedItems>
      <Step></Step>
       
    </div>
  );
};

export default ShopPage;