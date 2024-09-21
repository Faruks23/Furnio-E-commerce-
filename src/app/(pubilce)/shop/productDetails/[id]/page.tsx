import DetailsHead from '@/app/Components/Shop/DetailsHead/DetailsHead';
import { products } from '@/app/data/data';
import Image from 'next/image';
import React from 'react';
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6';
const ProductDetails = ({ params }: { params: { id: string } }) => {

  const singleProduct = products.find(product => product.id === params.id);
  

  return (
    <div className='  pt-[75px]'>
      <div className="details-header h-[100px] px-[94px] py-9  bg-[#F9F1E7]  ">
        <DetailsHead name={singleProduct?.name}></DetailsHead>
      </div>
      <div className="details-container container mx-auto mt-8">
        <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center'>
          {/* image gallery */}
          <div className="image-gallery flex gap-8  border items-center ">
            <div className="left-img-container flex  flex-col gap-[30px]">

              <div className="img-card w-[85px] h-[90px] flex justify-center items-center  bg-[#F9F1E7]">
                <Image src={'/ProductDetails/Stuart sofa 1.png'} width={78} height={60} alt='product-img'></Image>
              </div>
              <div className="img-card w-[85px] h-[90px] flex justify-center items-center  bg-[#F9F1E7]">
                <Image src={'/ProductDetails/Outdoor sofa set 2.png'} width={78} height={60} alt='product-img'></Image>
              </div>
              <div className="img-card w-[85px] h-[90px] flex justify-center items-center  bg-[#F9F1E7]">
                <Image src={'/ProductDetails/Outdoor sofa set_2 1.png'} width={78} height={60} alt='product-img'></Image>
              </div>
              <div className="img-card w-[85px] h-[90px] flex justify-center items-center  bg-[#F9F1E7]">
                <Image src={'/ProductDetails/Maya sofa three seater (1) 1.png'} width={78} height={60} alt='product-img'></Image>
              </div>

            </div>
            <div className="main-image w-[400px] h-[500px] bg-[#F9F1E7] py-10">
              <Image src={'/ProductDetails/Asgaard sofa 3.png'} width={400} height={500} alt='product-img' className='w-full h-full'></Image>
            </div>
          </div>
          {/* product details */}
          <div className="details">
            <h1 className=' text-[43px] font-normal'>{singleProduct?.name}</h1>
            <p className=' text-[24px] font-medium text-[#9F9F9F] mb-4'>Rs.{singleProduct?.price}</p>
            <div className=' flex items-center divide-x-2 gap-3'>
              <div className="stars flex items-center gap-1">
                <FaStar className=' text-[#FFC700]'></FaStar>
                <FaStar className=' text-[#FFC700]'></FaStar>
                <FaStar className=' text-[#FFC700]'></FaStar>
                <FaStar className=' text-[#FFC700]'></FaStar>
              </div>
              <h1 className=' pl-3 text-sm text-[#9F9F9F] font-normal'>5 Customer Review</h1>
            </div>
            <p className=' mt-5 max-w-[424px]  text-sm font-normal text-[#000000]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

            </p>
            {/* size container */}
            <div className="size-container mt-5  cursor-pointer">
              <h1 className=' text-base font-normal text-[#9F9F9F] mb-3'>Size</h1>
              <div className=' flex gap-4 items-center'>
                <div className="s-card size-8 bg-[#B88E2F] rounded-md  text-white flex justify-center items-center text-sm font-normal ">
                  L
                </div>
                <div className="s-card size-8 bg-[#F9F1E7] rounded-md   flex justify-center items-center text-sm font-normal ">
                  XL
                </div>
                <div className="s-card size-8 bg-[#F9F1E7] rounded-md   flex justify-center items-center text-sm font-normal ">
                  XS
                </div>
             </div>
            </div>
            {/* color  container */}
            <div className="size-container mt-5 cursor-pointer ">
              <h1 className=' text-base font-normal text-[#9F9F9F] mb-3'>Color</h1>
              <div className=' flex gap-4 items-center'>
                <div className="s-card size-8 bg-[#816DFA] rounded-full  text-white flex justify-center items-center text-sm font-normal ">
                 
                </div>
                <div className="s-card size-8 bg-[#000000] rounded-full   flex justify-center items-center text-sm font-normal ">
                 
                </div>
                <div className="s-card size-8 bg-[#B88E2F] rounded-full   flex justify-center items-center text-sm font-normal ">
                  
                </div>
             </div>
            </div>

            {/* Details action  button */}
            <div className="action-btn mt-4 flex gap-4 items-center">
              {/* increase button */}
              <div className="increase-btn w-[123px] h-[64px] border border-[#9F9F9F]  rounded-lg px-[15px]   py-5 flex items-center gap-8">
                <div className='  text-[20px] text-black cursor-pointer font-bold'>
                  -
                </div>
                <div className='   text-[18px] text-black cursor-pointer font-bold'>
                  1
                </div>
                <div className='   text-[20px] text-black cursor-pointer font-bold'>
                  +
                </div>

              </div>
              {/* add to cart btn */}
              <div className="increase-btn w-[215px] h-[64px] border border-[#9F9F9F]  rounded-lg px-[15px]   py-5 flex items-center gap-8 text-center justify-center">
               
                Add To Cart
              </div>
              {/* Compare btn */}
              <div className="increase-btn w-[215px] h-[64px] border border-[#9F9F9F]  rounded-lg px-[15px]   py-5 flex items-center gap-8 text-center justify-center">
               
                + Compare
              </div>
            </div>

            div.

          </div>

        </div>


      </div>
    </div>
  );
};

export default ProductDetails;