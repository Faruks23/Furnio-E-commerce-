import Image from 'next/image';

const FurnitureGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className=' text-center  text-base text-[#616161] mb-2'>Share your setup with</p>
      <h1 className="text-4xl font-bold text-center mb-8">#FunForFurniture</h1>

      {/* Masonry Grid Layout */}
      <div className="masonry">


        <div className="grid-col">
          <div className="relative">
            <Image
              src="/Gallery/Rectangle 36.png" // replace with your own image paths
              alt="Furniture 1"
              layout="responsive"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>

          <div className="relative">
            <Image
              src="/Gallery/Rectangle 40.png"
              alt="Furniture 3"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="relative">
            <Image
              src="/Gallery/Rectangle 43.png"
              alt="Furniture 8"
              layout="responsive"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
          
        </div>
        <div className="grid-col">
          <div className="relative">
            <Image
              src="/Gallery/Rectangle 38.png"
              alt="Furniture 2"
              layout="responsive"
              width={300}
              height={400}
              className="rounded-md"
            />
          </div>

          <div className="relative">
            <Image
              src="/Gallery/Rectangle 37.png"
              alt="Furniture 4"
              layout="responsive"
              width={300}
              height={400}
              className="rounded-md"
            />
          </div>
          <div className="relative">
            <Image
              src="/Gallery/Rectangle 39.png"
              alt="Furniture 5"
              layout="responsive"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="relative">
            <Image
              src="/Gallery/Rectangle 40.png"
              alt="Furniture 6"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
        
        <div className="grid-col">
          <div className="relative">
            <Image
              src="/Gallery/Rectangle 41.png"
              alt="Furniture 7"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="relative">
            <Image
              src="/Gallery/Rectangle 45.png"
              alt="Furniture 8"
              layout="responsive"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>


         
          <div className="relative">
            <Image
              src="/Gallery/Rectangle 44.png"
              alt="Furniture 8"
              layout="responsive"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
       </div>
      
        
       
      </div>
    </div>
  );
};

export default FurnitureGallery;
