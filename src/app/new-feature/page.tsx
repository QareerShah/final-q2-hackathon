import React from 'react';
import Image from 'next/image';
import ProductCards from '../products/productCards';
const EcommercePage = () => {
  return (
    <div className="relative p-4 sm:p-6">
      {/* Headings */}
      <div className="absolute top-4 left-4 text-sm sm:text-md font-bold cursor-pointer">
        <span>New (500)</span>
      </div>
      <div className="absolute top-4 right-4 text-sm sm:text-[15px] flex items-center space-x-2">
        <span>Hide Filters</span>
        <Image src="/images/Frame15.png" alt="filter-image" width={24} height={24} />
        <select aria-label="Sort By" className="text-sm sm:text-md  rounded p-1">
          <option value="Sort By">Sort By</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-start mt-12 gap-6">
        {/* Left Side (Scrollable Text) */}
        <div className="flex flex-col items-start w-full lg:w-1/4">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-y-scroll p-4 rounded-lg  custom-scrollbar">
            {/* Scrollable Categories */}
            {[
              'Shoes', 'Sports Bras', 'Tops & T-Shirts', 'Hoodies & Sweatshirts', 'Jackets',
              'Trousers & Tights', 'Shorts', 'Tracksuits', 'Jumpsuits & Rompers',
              'Skirts & Dresses', 'Socks', 'Accessories & Equipment', 'Casual Wear',
              'Formal Shirts', 'Denim & Jeans', 'Polo T-Shirts', 'Blazers', 'Yoga Pants',
            ].map((item, index) => (
              <p key={index} className="text-sm sm:text-[15px] font-medium mb-2">
                {item}
              </p>
            ))}
          </div>

          {/* Gender Section */}
          <div className="border-t-2 border-gray-300 my-4">
            <div className="mt-4 text-sm sm:text-[15px] font-medium">
              Gender <select className="lg:ml-[230px] md:ml-auto rounded p-1"></select>
            </div>
            {['Men', 'Women', 'Unisex'].map((gender, index) => (
              <div key={index} className="text-sm sm:text-[15px] mt-3">
                <input type="checkbox" className="mr-3" /> {gender}
              </div>
            ))}
          </div>

          {/* Kids Section */}
          <div className="border-t-2  border-gray-300 my-4">
            <div className="mt-4 text-sm sm:text-[15px] font-medium">
              Kids <select className="lg:ml-[250px] md:ml-auto  rounded p-1"></select>
            </div>
            {['Boys', 'Girls'].map((category, index) => (
              <div key={index} className="text-sm sm:text-[15px] mt-3">
                <input type="checkbox" className="mr-3" /> {category}
              </div>
            ))}
          </div>

          {/* Shop by Price Section */}
          <div className="border-t-2 border-gray-300">
            <div className="mt-4 text-sm sm:text-[15px] font-medium">
              Shop By Price <select className="lg:ml-[185px] md:ml-auto  rounded p-1"></select>
            </div>
            {[
              'Under ₹2,500.00', '₹2,501.00 - ₹7,500.00',
            ].map((priceRange, index) => (
              <div key={index} className="text-sm sm:text-[15px] mt-3">
                <input type="checkbox" className="mr-3" /> {priceRange}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Image Grid) */}
        <div className="w-full lg:w-3/4">
          <ProductCards />
                     
                      {/* Related catogries heading */}

                      <div className='mt-[100px]'>
  <hr />
  <h2 className='font-medium text-[19px] mt-[50px]'>Related Categories</h2>
  <div className='mt-5 flex flex-wrap gap-3 mb-[50px]'>
    {[
      'Best Selling Products',
      'Best Shoes',
      'New Basketball Shoes',
      'New Football Shoes',
      'New Men\'s Shoes',
      'New Running Shoes',
      'Best Men\'s Shoes',
      'New Jordan Shoes',
      'Best Women\'s Shoes',
      'Best Training & Gym',
    ].map((category, index) => (
      <button
        key={index}
        className='text-[12px] border rounded-full p-2 px-5 hover:bg-gray-200  w-full sm:w-auto'
      >
        {category}
      </button>
    ))}
  </div>
</div>
         
        </div>

        
      </div>
    </div>
  );
};

export default EcommercePage;
