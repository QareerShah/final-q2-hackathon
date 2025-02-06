import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const Hero = () => {
  return (
    <main className="w-full mb-11">
      {/* Top Text Section */}
      <div className="bg-gray-200 text-center p-1 md:p-3">
        <p className="text-[13px] md:text-[15px] font-semibold">Hello Nike App</p>
        <p className="text-[12px] md:text-[13px]">
          Download the app to access everything Nike.{' '}
          <Link href="#" className="font-semibold underline">
            Get Your Great
          </Link>
        </p>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center w-[90%] mx-auto">
        <Image
          src="/images/Image.png"
          alt="Hero image showcasing Nike Air Max Pulse"
          width={1344}
          height={700}
          priority
        />
      </div>

      {/* Heading Text */}
      <div className="text-center mt-10 w-[90%] mx-auto">
        <p className="font-medium">First Look</p>
        <h1 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-[25px] font-medium">
          Nike Air Max Pulse
        </h1>
        <p className="lg:text-[13px] md:text-[12px] sm:text-[10px] text-[9px]">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br />
          —designed to push you past your limits and help you go to the max.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center mt-8 space-x-7 text-white lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]">
  <button
    className="bg-black rounded-full py-2 px-4 w-[139px] sm:w-[120px] h-[48px] flex justify-center items-center whitespace-nowrap"
    aria-label="Notify Me"
  >
    Notify Me
  </button>
  <button
    className="bg-black rounded-full py-2 px-4 w-[139px] sm:w-[120px] h-[48px] flex justify-center items-center whitespace-nowrap"
    aria-label="Shop Air Max"
  >
    Shop Air Max
  </button>
</div>


    </main>
  );
};

export default Hero;
