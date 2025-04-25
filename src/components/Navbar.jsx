import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative py-6 px-4 md:px-[100px] flex items-center justify-between">
      {/* Background vector elements - add these as absolute positioned elements */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-20">
        <img src="/assets/bggrill.svg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 opacity-20">
        <img src="/assets/bb.svg" alt="" className="w-full h-full" />
      </div>
      
      {/* Logo */}
      <div className="relative z-10">
        <img src="/assets/logof.svg" alt="Givvest" className="h-8 md:h-10" />
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden relative z-10">
        <button className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Menu */}
      <div className={`md:block relative z-10 ${isOpen ? 'block absolute top-16 right-0 bg-black p-4 z-50' : 'hidden'}`}>
        <img src="/assets/menu.svg" alt="Menu" className="h-6 md:h-8" />
      </div>
    </nav>
  );
};

export default Navbar;
