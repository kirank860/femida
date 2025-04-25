import React from 'react';

const CallToAction = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <div className="flex-1 w-full md:w-auto">
          <img 
            src="/assets/hands.svg" 
            alt="Hands together" 
            className="rounded-lg w-full max-w-xs sm:max-w-sm mx-auto md:mx-0" 
          />
        </div>
        
        <div className="flex-1 text-center md:text-left py-6 md:py-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2"    style={{
              background: "linear-gradient(90deg, #F7E474, #A8CF65, #6EC8B8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}>13M+</h2>
          <p className="text-xl sm:text-2xl mb-4 sm:mb-6">People Need Your Help Support Them</p>
        </div>
        
        <div className="flex-1 w-full md:w-auto">
          <img 
            src="/assets/children-sunset.svg" 
            alt="Children at sunset" 
            className="rounded-lg w-full max-w-xs sm:max-w-sm mx-auto md:mx-0" 
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;