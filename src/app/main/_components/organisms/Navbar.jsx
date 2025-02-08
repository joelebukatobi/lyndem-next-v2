'use client';
// Next
import Link from 'next/link';
// Images
import LyndemLogo from '@/main/_assets/images/lyndem-logo.svg';

export const Navbar = () => {
  return (
    <div className="navbar container-fluid">
      <nav className="navbar-nav container">
        <a className="navbar-logo" href="/main/home">
          <LyndemLogo />
        </a>
        <div className="navbar-menu">
          <button
            type="button"
            className="hs-collapse-toggle "
            id="hs-navbar-alignment-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-alignment"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-alignment"
          >
            <svg
              className="hs-collapse-open:hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke=""
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke=""
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle</span>
          </button>

          <Link href="/main/contact-us">
            <button>Contact Us</button>
          </Link>
        </div>
        <div
          id="hs-navbar-alignment"
          className="hs-collapse navbar-list hidden overflow-hidden transition-all duration-300 basis-full grow lg:grow-0 lg:basis-auto lg:block lg:order-2 "
          aria-labelledby="hs-navbar-alignment-collapse"
        >
          <ul className="flex flex-col lg:gap-x-[5.6rem] gap-y-[6.4rem] lg:gap-y-[unset] mb-[2.4rem] lg:flex-row lg:items-center lg:my-0 bg-blue-800 lg:bg-transparent py-[5.6rem] lg:py-[unset] absolute lg:relative w-full left-0 lg:left-[unset] top-[5.6rem] px-[5.6rem] lg:px-[unset] z-[10] lg:z-[unset]">
            <li>
              <Link href="/main/home">Home</Link>
            </li>
            <li>
              <Link href="/main/about-us">About</Link>
            </li>
            <li>
              <Link href="/main/our-services">Services</Link>
            </li>
            <li>
              <Link href="/main/games">Games</Link>
            </li>
            <li>
              <Link href="/main/blog">Blog</Link>
            </li>
            <li>
              <Link href="/main/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    // <header className="flex flex-wrap lg:justify-start lg:flex-nowrap w-full bg-white text-sm py-3">
    //   <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
    //     <a className="lg:order-1 flex-none text-xl font-semibold focus:outline-none focus:opacity-80" href="#">
    //       Brand
    //     </a>
    //     <div className="lg:order-3 flex items-center gap-x-2">
    //       <button
    //         type="button"
    //         className="lg:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
    //         id="hs-navbar-alignment-collapse"
    //         aria-expanded="false"
    //         aria-controls="hs-navbar-alignment"
    //         aria-label="Toggle navigation"
    //         data-hs-collapse="#hs-navbar-alignment"
    //       >
    //         <svg
    //           className="hs-collapse-open:hidden shrink-0 size-4"
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         >
    //           <line x1="3" x2="21" y1="6" y2="6" />
    //           <line x1="3" x2="21" y1="12" y2="12" />
    //           <line x1="3" x2="21" y1="18" y2="18" />
    //         </svg>
    //         <svg
    //           className="hs-collapse-open:block hidden shrink-0 size-4"
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         >
    //           <path d="M18 6 6 18" />
    //           <path d="m6 6 12 12" />
    //         </svg>
    //         <span className="sr-only">Toggle</span>
    //       </button>
    //       <button
    //         type="button"
    //         className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
    //       >
    //         Button
    //       </button>
    //     </div>
    //     <div
    //       id="hs-navbar-alignment"
    //       className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:grow-0 lg:basis-auto lg:block lg:order-2"
    //       aria-labelledby="hs-navbar-alignment-collapse"
    //     >
    //       <div className="flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:mt-0 lg:ps-5">
    //         <a className="font-medium text-blue-500 focus:outline-none" href="#" aria-current="page">
    //           Landing
    //         </a>
    //         <a
    //           className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
    //           href="#"
    //         >
    //           Account
    //         </a>
    //         <a
    //           className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
    //           href="#"
    //         >
    //           Work
    //         </a>
    //         <a
    //           className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
    //           href="#"
    //         >
    //           Blog
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};
