'use client';
// React
import { useState } from 'react';
// Next
import Link from 'next/link';
// Components
import { Button } from '@/main/_components/atoms/Button';
// Images
import LyndemLogo from '@/main/_assets/images/logo-new-full.svg';

// Icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Navbar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  //
  return (
    <>
      <nav className={'bg-white '}>
        <div
          className={
            open
              ? `${'h-[100vh] px-[2.4rem] py-[3.2rem] w-full flex justify-between fixed top-0 left-0 z-50 bg-white'}`
              : `${'py-[3.2rem] md:py-[3.2rem] flex items-center justify-between container'}`
          }
        >
          <Link href="/">
            <LyndemLogo className="h-[4rem] md:h-[5.2rem]" />
          </Link>
          <ul
            className={
              open
                ? `${'flex flex-col absolute top-[12.8rem] pl-[2.4rem] w-[100%] left-0 space-x-[0rem] space-y-[3.2rem]'}`
                : `${'space-x-[5.6rem] hidden lg:flex'}`
            }
          >
            <a className="text-[2.4rem] md:text-[1.8rem] font-serif font-bold hover:text-orange-600" href={'/'}>
              <span className="text-orange-600 text-[1.6rem] font-bold mr-[.8rem]">1.</span>Home
            </a>
            <a
              className="text-[2.4rem] md:text-[1.8rem] font-serif font-bold hover:text-orange-600"
              href="/main/about-us"
            >
              <span className="text-orange-600 text-[1.6rem] font-bold mr-[.8rem]">2.</span>About
            </a>
            <a
              className="text-[2.4rem] md:text-[1.8rem] font-serif font-bold hover:text-orange-600"
              href="/main/our-services"
            >
              <span className="text-orange-600 text-[1.6rem] font-bold mr-[.8rem]">3.</span>What We Do
            </a>
            <a className="text-[2.4rem] md:text-[1.8rem] font-serif font-bold hover:text-orange-600" href="/main/games">
              <span className="text-orange-600 text-[1.6rem] font-bold mr-[.8rem]">4.</span>Games
            </a>
            <a className="text-[2.4rem] md:text-[1.8rem] font-serif font-bold hover:text-orange-600" href="/main/blog">
              <span className="text-orange-600 text-[1.6rem] font-bold mr-[.8rem]">5.</span>Blog
            </a>
            <a
              className="text-[2.4rem] md:text-[1.8rem] font-serif font-bold hover:text-orange-600 lg:hidden"
              href="/main/contact-us"
            >
              <span className="text-orange-600 text-[1.6rem] font-bold mr-[.8rem]">6.</span>Contact Us
            </a>
          </ul>

          <a href="/main/contact-us">
            <Button className="hidden lg:flex h-[4.8rem] px-[2.4rem] text-[1.8rem] hover:bg-white hover:text-black">
              Contact Us
            </Button>
          </a>
          {/*  */}
          <div onClick={toggle} className="lg:hidden focus:outline-none focus:select-none">
            {open ? (
              <XMarkIcon className="w-[4rem] h-[4rem] stroke-2 stroke-blue-600" />
            ) : (
              <Bars3Icon className="w-[4rem] h-[4rem] stroke-2 stroke-blue-600" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
