import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <main className="w-full bg-black">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 
             gap-8 px-5 py-[50px] sm:px-10 md:px-[80px] lg:px-[100px] text-white"
      >
        {/* 1st section */}
        <div>
          <p className="text-[15px]">Find A Store</p>
          <p className="text-[15px] mt-5">Become A Member</p>
          <p className="text-[15px] mt-5">Sign Up for Email</p>
          <p className="text-[15px] mt-5">Send Us Feedback</p>
          <p className="text-[15px] mt-5">Student Discounts</p>
        </div>

        {/* 2nd section */}
        <div>
          <p className="text-[15px]">Get Help</p>
          <p className="text-[15px] mt-5 text-gray-400">Order Status</p>
          <p className="text-[15px] mt-5 text-gray-400">Delivery</p>
          <p className="text-[15px] mt-5 text-gray-400">Returns</p>
          <p className="text-[15px] mt-5 text-gray-400">Payment Options</p>
          <p className="text-[15px] mt-5 text-gray-400">
            Contact Us On Nike.com Inquiries
          </p>
          <p className="text-[15px] mt-5 text-gray-400">
            Contact Us On All Other Inquiries
          </p>
        </div>

        {/* 3rd section */}
        <div>
          <p className="text-[15px]">About Nike</p>
          <p className="text-[15px] mt-5 text-gray-400">News</p>
          <p className="text-[15px] mt-5 text-gray-400">Careers</p>
          <p className="text-[15px] mt-5 text-gray-400">Investors</p>
          <p className="text-[15px] mt-5 text-gray-400">Sustainability</p>
        </div>

        {/* 4th section (Social icons) */}
        <div className="col-span-2 flex justify-center lg:justify-end items-center">
          <div className="flex space-x-4">
            <Image src="/images/Frame10.png" alt="image" width={30} height={30} />
            <Image src="/images/Frame12.png" alt="image" width={30} height={30} />
            <Image src="/images/Frame13.png" alt="image" width={30} height={30} />
            <Image src="/images/Frame14.png" alt="image" width={30} height={30} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
