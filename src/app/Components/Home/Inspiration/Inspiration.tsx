import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function RoomInspiration() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-[#F7F2EC] mt-16">
      {/* Left Side (Text and Button) */}
      <div className="md:w-[30%] p-6 space-y-4">
        <h1 className="text-[36px] font-bold text-[#3F3F3F]">50+ Beautiful rooms inspiration</h1>
        <p className="text-[#898989] text-lg">
          Our designer already made a lot of beautiful prototype of rooms that inspire you.
        </p>
        <button className="bg-[#A59156] text-white py-3 px-6 rounded-md hover:bg-[#8b7841]">
          Explore More
        </button>
      </div>

      {/* Right Side (Image Slider) */}
      <div className="md:w-[70%] flex space-x-4 relative overflow-x-hidden  py-20">
        {/* Image 1 */}
        <div className="relative w-[340px] h-[450px]">
          <Image
            src="/slider/Rectangle 24.png" // replace with your image paths
            alt="Room 1"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow-lg">
            <p className="text-sm text-[#A59156]">01 — Bed Room</p>
            <h2 className="text-lg font-semibold text-[#3F3F3F]">Inner Peace</h2>
            <button className="text-[#A59156] mt-2">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-[300px] h-[450px] hidden md:block">
          <Image
            src="/slider/Rectangle 25.png" // replace with your image paths
            alt="Room 2"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        {/* Image 3 */}
        <div className="relative w-[300px] h-[450px] hidden md:block">
          <Image
            src="/slider/Rectangle 26.png" // replace with your image paths
            alt="Room 2"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-2 flex items-center">
          <button className="bg-white text-[#A59156] p-2 rounded-full shadow-md hover:bg-gray-200">
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute inset-y-0 right-2 flex items-center">
          <button className="bg-white text-[#A59156] p-2 rounded-full shadow-md hover:bg-gray-200">
            <FaArrowRight />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="absolute bottom-[20px] left-4 flex space-x-2 z-40">
          <span className="w-3 h-3 bg-[#A59156] rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
