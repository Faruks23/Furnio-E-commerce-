import Image from 'next/image';
import React from 'react';

const Step = () => {
  return (
    <div className=' mt-20 mb-[-40px] w-full border border-dashed '>
      <img src={'/step.png'} width={1440} height={150} alt='step-image' className=' w-full '></img>
    </div>
  );
};

export default Step;