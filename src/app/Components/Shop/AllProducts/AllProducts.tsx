
import ProductCard from '@/app/shared/ProductCard/ProductCard';
import React from 'react';
import ProductFilterBar from '../Filter/Filter';


const AllProduct = ({ currentItems }: any) => {
  
  return (
    <div className='Container  '>
      <ProductFilterBar></ProductFilterBar>
      <div className="product-container mt-10 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 justify-items-center">
        {currentItems &&
          currentItems.map((product: any) => {
            return <>
              <ProductCard item={product}></ProductCard>
            </>
          })
        }


      </div>


    </div>
  );
};

export default AllProduct;