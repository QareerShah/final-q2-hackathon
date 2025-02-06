"use client";
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';
import { navLinks } from '../constant/constant';


// define props type

type Props ={
    showNav: boolean;
    closeNav:()=> void
  }

const MobileNav = ({showNav, closeNav} : Props) => {

    const navOPen = showNav? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOPen} transform transition-all duration-500 inset-0 z-[1000] bg-black bg-opacity-70 w-full h-screen`}>
        {/* Navlinks */}
        <div className={`text-white fixed ${navOPen} transform transition-all duration-500 delay-300 flex justify-center items-center flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715]
         space-y-8 z-[10000]`}>
          {/* Nav links */}

          {navLinks.map((navlink) =>{
              return <Link key={navlink.id} href={navlink.url}>
                <p className='nav_link text-[20px] ml-2 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{navlink.label}</p>
              </Link>
            }) }

            {/* close btn */}
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
