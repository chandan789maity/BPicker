import React from 'react';
import Login from '../pages/Loginpage/Login';

const Navbar: React.FC = () => {
  return (
    <div>
      <header className="flex w-full fixed flex-wrap sm:justify-start sm:flex-nowrap text-sm py-3 dark:bg-slate-900 dark:bg-opacity-40 dark:backdrop-blur-3xl rounded-2xl mb-10 pr-16 z-50 bg-transparent">
        <nav className="max-w-[85rem] mx-auto px-4 flex flex-wrap basis-full items-center justify-between bg-transparent">
          <a 
            className="sm:order-1 flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80" 
            href="#"
          >
            BPicker
          </a>
          <div className="sm:order-3 flex items-center gap-x-4">
            <button 
              type="button" 
              className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" 
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
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
              </svg>
              <svg 
                className="hs-collapse-open:block hidden shrink-0 size-4" 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18"/>
                <path d="M6 6L18 18"/>
              </svg>
              <span className="sr-only">Toggle</span>
            </button>
            <button 
              type="button" 
              onClick={Login}
              className="py-2 px-3 inline-flex items-center gap-x-4 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              Login
            </button>
          </div>
          <div 
            id="hs-navbar-alignment" 
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" 
            aria-labelledby="hs-navbar-alignment-collapse"
          >
            <div className="flex flex-col gap-x-12 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a 
                className="font-medium text-blue-500 focus:outline-none" 
                href="#" 
                aria-current="page"
              >
                Home
              </a>
              <a 
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" 
                href="https://portfolio-chandan-maity.vercel.app/"
              >
                About
              </a>
              <a 
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" 
                href="https://portfolio-chandan-maity.vercel.app/#Contact"
              >
                Contact
              </a>
              <a 
                className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" 
                href="#"
              >
                Description
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
