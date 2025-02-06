'use client';
import React, { useEffect, useState } from 'react';
import { navLinks } from '../constant/constant';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Image from 'next/image';
import { CgHeart, CgSearch } from 'react-icons/cg';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/app/context/cartContext';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const { cart, wishlist } = useCart(); // Accessing the cart and wishlist from the context

  // Calculate the total quantity of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total quantity of items in the wishlist
  const totalWishlistItems = wishlist.length;

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div>
      <div
        className={`flex items-center h-full justify-between w-[90%] md:w-[80%] mx-auto ${
          navBg ? 'bg-gray-100 shadow-lg' : ''
        }`}
      >
        {/* Logo */}
        <div>
          <Image src='/images/Frame1.png' alt='nav-image' width={78} height={78} />
        </div>

        {/* Nav Links */}
        <div className='flex items-center space-x-6 '>
          <div className='hidden lg:flex items-center space-x-4 xl:space-x-8 font-medium'>
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className='nav_link'>{navlink.label}</p>
              </Link>
            ))}
          </div>

          {/* Search Buttons */}
          <div className='flex items-center space-x-3 md:space-x-4'>
            {/* Search Bar */}
            <div className='hidden sm:flex items-center bg-gray-100 p-2 rounded-full w-[150px] md:w-[180px]'>
              <CgSearch className='text-black text-[20px] md:text-[24px] mr-2' />
              <input
                type='search'
                placeholder='Search'
                className='placeholder:text-opacity-60 text-[14px] md:text-[16px] h-[30px] w-full outline-none bg-gray-100'
              />
            </div>

            {/* Heart and Bag Icons */}
            <div className='flex space-x-3 md:space-x-4 text-[20px] md:text-[24px]'>
              <div className='relative'>
                <Link href='/wishlist'>
                  <CgHeart />
                </Link>

                {/* Wishlist notification (badge) */}
                {totalWishlistItems > 0 && (
                  <div className='absolute top-[-5px] right-[-5px] bg-red-600 text-white rounded-full w-4 h-4 text-[10px] flex justify-center items-center'>
                    {totalWishlistItems}
                  </div>
                )}
              </div>

              <div className='relative'>
                <Link href='/cart'>
                  <FaShoppingCart />
                </Link>

                {/* Cart notification (badge) */}
                {totalItems > 0 && (
                  <div className='absolute top-[-5px] right-[-5px] bg-red-600 text-white rounded-full w-4 h-4 text-[10px] flex justify-center items-center'>
                    {totalItems}
                  </div>
                )}
              </div>
            </div>

            {/* Hamburger Menu Icon */}
            <HiBars3BottomRight
              onClick={openNav}
              className='w-6 h-6 md:w-8 md:h-8 cursor-pointer text-black lg:hidden'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
