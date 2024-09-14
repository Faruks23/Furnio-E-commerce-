
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
      description: "Bedroom"
    },
    {
      name: 'Laviosa ',
      subName: "Stylish cafe chair",
      price: " 2.500.000",
      mainPrice: "3.500,000",
      image: '/proudcts/image 2.png',
      category: 'Dining',
      discount: null,
      status: 'Old',
      description: "Bedroom"
    },
    {
      name: 'Loalito',
      subName: "Luxury big sofa",
      price: " 7.500.000",
      mainPrice:"14.500,000",
      image: '/proudcts/image 3.png',
      category: 'Dining',
      discount: '-30%',
      status: 'Old',
      description: "Bedroom"
    },
    {
      name: 'Respira',
      subName: "Outdoor bar table and stool",
      price: "5.500.000",
      image: '/proudcts/image 4.png',
      category: 'Dining',
      discount: null,
      status: 'New',
      description: "Bedroom"
    },
    {
      name: 'Grifo',
      subName: "Night Lamp",
      price: "1.500.000",
      image: '/proudcts/image 5.png',
      category: 'Dining',
      discount: null,
      status: 'Old',
      description: "Lamp"
    },
    {
      name: 'Muggo',
      subName: "Small Mug",
      price: "150.000",
      image: '/proudcts/image 6.png',
      category: 'Dining',
      discount: null,
      status: 'New',
      description: "Lamp"
    },
    {
      name: 'PingKy',
      subName: "Cute bed set",
      price: "7.000.000",
      mainPrice:"14.000.000",
      image: '/proudcts/image 7.png',
      category: 'Dining',
      discount: '-50%',
      status: 'Old',
      description: "Bedroom"
    },
    {
      name: 'Potty',
      subName: "Minimalist flower pot",
      price: "500.000",
      image: '/proudcts/image 8.png',
      category: 'Dining',
      discount: null,
      status: 'New',
      description: "Bedroom"
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

      <div className=' flex justify-center mt-8'>
        <button className='w-[245px] text-center h-12 border border-[#B88E2F]  py-3 px-16 text-[#B88E2F]  hover:bg-orange-500 duration-300 hover:text-white '>Show More</button>
      </div>
    </div>
  );
};

export default Product;