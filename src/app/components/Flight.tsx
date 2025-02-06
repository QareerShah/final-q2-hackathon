import React from 'react';
import Image from 'next/image';

const Flight = () => {
  return (
    <main className="mt-[70px] w-[90%] mx-auto">
      {/* Heading */}
      <h2 className="text-[19px] font-medium md:text-[22px] lg:text-[22px]">
        Don&rsquo;t Miss
      </h2>

      {/* Image section */}
      <div className="mt-7">
        <Image
          src="/images/Image11.png"
          alt="hero-image"
          width={1344}
          height={700}
          className="w-full h-auto object-cover" 
        />
      </div>



                     

    </main>
  );
};

export default Flight;
