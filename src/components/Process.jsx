import React from 'react';

const Process = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className=" sm:px-8">
        <img src="/assets/lineframe.svg" alt="Process timeline" className="w-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-8 md:px-12">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img src="/assets/document-star.svg" alt="Document" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500 mb-2">01</div>
          <h3 className="text-lg sm:text-xl font-medium mb-2">Find A Cause To Donate</h3>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img src="/assets/ethereum.svg" alt="Ethereum" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500 mb-2">02</div>
          <h3 className="text-lg sm:text-xl font-medium mb-2">Donate And Get An NFT</h3>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img src="/assets/dollar.svg" alt="Dollar" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto" />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500 mb-2">03</div>
          <h3 className="text-lg sm:text-xl font-medium mb-2">Sell The NFT And Get Your Money Back</h3>
        </div>
      </div>
    </div>
  );
};

export default Process;