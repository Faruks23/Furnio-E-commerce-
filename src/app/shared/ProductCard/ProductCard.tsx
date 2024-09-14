import Image from 'next/image';
import { FaShoppingCart, FaShareAlt, FaHeart, FaExchangeAlt } from 'react-icons/fa';

export default function ProductCard({ item }:any) {
  return (
    <div className='relative h-[445px] w-full max-w-[285px] border group'>
      {/* Product Image */}
      <Image src={item.image} width={285} height={300} alt='product-image' className=' h-[300px]' />

      {/* Product Body */}
      <div className="product-body p-4  scroll-py-1 md:space-y-2">
        <h1 className='text-[24px] font-semibold'>{item.name}</h1>
        <p className='text-[#898989] font-medium'>{item.subName}</p>
        <p className='text-[20px] font-semibold'>
          Rp {item.price} 
          <br className=' block md:hidden' />
          {item.mainPrice && <span className='ml-2 text-[#B0B0B0] font-normal text-base'>Rp {item?.mainPrice}</span>}
        </p>
      </div>

      {/* Overlay - initially hidden, appears on hover */}
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-60 flex flex-col items-center justify-center space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Add to Cart Button */}
        <button className="bg-[#FFFFFF] text-[#B88E2F] py-2 px-4 rounded">
          <FaShoppingCart className="inline mr-2" /> Add to Cart
        </button>

        {/* Icons: Share, Compare, Like */}
        <div className="flex space-x-4 text-white text-xl">
          <FaShareAlt className="hover:text-gray-300 cursor-pointer" />
          <FaExchangeAlt className="hover:text-gray-300 cursor-pointer" />
          <FaHeart className="hover:text-gray-300 cursor-pointer" />
        </div>

        

      </div>
      {item.status === 'New' && <>
        {/* badge  */}
        <div className={` absolute top-5 right-4 badge size-12  rounded-full bg-[#2EC1AC]  flex justify-center items-center px-3 py-3`}>
          <h1 className='text-white text-base font-medium'>{item?.status}</h1>
        </div>
      </>}
      {item.discount && <>
        {/* badge  */}
        <div className={` absolute top-5 right-4 badge size-12  rounded-full bg-[#E97171]  flex justify-center items-center px-3 py-3`}>
          <h1 className='text-white text-base font-medium'>{item?.discount}</h1>
        </div>
      </>}

    </div>
  );
}
