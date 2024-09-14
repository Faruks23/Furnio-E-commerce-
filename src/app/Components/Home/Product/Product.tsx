
import ProductCard from '@/app/shared/ProductCard/ProductCard';
import React from 'react';


const Product = () => {
  const products = [
    {
      name: 'Syltherine',
      subName: "Stylish cafe chair",
      price: " 2.500.000",
      mainPrice: "3.500,000",
      image: '/proudcts/image 1.png',
      category: 'Dining',
      discount: '-30%',
      status: 'Old',
      description: "Table  "
    },
    {
      name: 'Syltherine',
      subName: "Stylish cafe chair",
      price: " 2.500.000",
      mainPrice: "3.500,000",
      image: '/proudcts/image 1.png',
      category: 'Dining',
      discount: '-30%',
      status: 'Old',
      description: "Table  "
    },
    {
      name: 'Syltherine',
      subName: "Stylish cafe chair",
      price: " 2.500.000",
      mainPrice: "3.500,000",
      image: '/proudcts/image 1.png',
      category: 'Dining',
      discount: '-30%',
      status: 'Old',
      description: "Table  "
    },
    {
      name: 'Syltherine',
      subName: "Stylish cafe chair",
      price: " 2.500.000",
      mainPrice: "3.500,000",
      image: '/proudcts/image 1.png',
      category: 'Dining',
      discount: '-30%',
      status: 'Old',
      description: "Table  "
    },
  ]

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
    </div>
  );
};

export default Product;