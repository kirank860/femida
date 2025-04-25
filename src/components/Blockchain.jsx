import React from 'react';

const Blockchain = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Powered by</h2>
        <div className="mb-4">
          <img src="/assets/Blockchain.svg" alt="Blockchain" className="max-w-full h-auto" />
        </div>
        <p className="text-gray-300 mb-6 text-base sm:text-lg">
          Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.
        </p>
      </div>
      
      <div className="relative mt-8 md:mt-0">
        <img 
          src="/assets/world-map.svg" 
          alt="World Map" 
          className="w-full max-w-md mx-auto md:max-w-full" 
        />
      </div>
    </div>
  );
};

export default Blockchain;