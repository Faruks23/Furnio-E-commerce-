
import { products } from '@/app/data/data';
import ProductCard from '@/app/shared/ProductCard/ProductCard';
import React from 'react';


const Product = () => {
 
  return (
    <div className='Container mt-16 '>

      <h1 className=' text-center text-[48px] font-bold'>Products</h1>
      <div className="product-container mt-10 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 justify-items-center">
        {
          products.map((product) => {
            return <>
              <ProductCard item={product}></ProductCard>
            </>
          })
         }
         
       
      </div>

      <div className=' flex justify-center mt-8'>
        <button className='w-[245px] text-center h-12 border border-[#B88E2F]  py-3 px-16 text-[#B88E2F]  hover:bg-orange-500 duration-300 hover:text-white '>Show More</button>
      </div>
    </div>
  );
};

export default Product;