import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'; // Import Clerk components

const Header = () => {
  return (
    <header>
      <div className="w-full bg-gray-200">
        {/* Container */}
        <div className="flex items-center justify-between px-4 py-2">
          {/* Image on the Left */}
          <div className="flex-shrink-0">
            <Image
              src="/images/Frame.png"
              alt="header-img"
              width={24}
              height={24}
              className="ml-2 sm:ml-5"
            />
          </div>

          {/* Text and User Profile on the Right */}
          <ul className="flex flex-wrap justify-end items-center space-x-2 sm:space-x-4 text-[10px] sm:text-[11px] font-medium mr-2 sm:mr-5">
            <li>
              <Link href="/new-feature">Find a Store&nbsp;&nbsp;|</Link>
            </li>
            <li>
              <Link href="/help">Help&nbsp;&nbsp;|</Link>
            </li>
            <li>
              {/* Display User ID or SignInButton */}
              <SignedIn>
                {/* Show the UserButton */}
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                {/* Show the SignInButton when signed out */}
                <SignInButton />
              </SignedOut>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
