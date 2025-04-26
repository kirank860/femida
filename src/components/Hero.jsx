import React from 'react';
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row py-28 sm:py-12 px-4 sm:px-8 md:px-12 items-center gap-4 sm:gap-8 mb-16 sm:mb-24 lg:mb-32">
      <div className="flex-1 px-4 sm:px-8 md:px-12 lg:px-20 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Give With Courage</h1>
        <p className="text-gray-300 mb-4 sm:mb-6">
          Donations are open for the 20th edition of Gitcoin Grants! Support builders across web3 to grow their project and scale their impact.
        </p>
        <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
          <div className="flex -space-x-2">
            <img src="/assets/trust.svg" alt="User" className="rounded-full" />
          </div>
          <span className="ml-2 text-gray-300">12k+ trusted users</span>
        </div>
        <div className="flex justify-center lg:justify-start pt-8 sm:pt-0">
        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 50, damping: 15 }}
  className="w-[230px] sm:w-48 md:w-64 lg:w-64 py-4 bg-[#0CC0DF] text-white font-bold uppercase tracking-wider rounded-md shadow-md hover:bg-[#4fb3c4] transition-colors duration-300 flex justify-center items-center"
  onClick={() => {/* Your button action here */}}
>
  EXPLORE FUNDRAISERS
</motion.button>
</div>
      </div>
      
      <div className="flex-1 relative mt-8 lg:mt-0">
        <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <img src="/assets/helpgroup.svg" alt="Tribal children" className="w-full rounded-lg mb-4" />
        </div>
        
        <div className="absolute top-0 sm:-top-5 left-4 sm:left-16 md:left-20 lg:left-20 transform rotate-45 hidden sm:block">
          <img src="/assets/arrow.svg" alt="Arrow" className="w-8 sm:w-12 md:w-16" />
        </div>
        
        <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 right-4 sm:right-16 md:right-24 lg:right-32">
          <img src="/assets/star.svg" alt="Star" className="w-6 sm:w-8 md:w-10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;