import React from 'react';

const About = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16 sm:mt-24 md:mt-32">
      <div className="relative px-4 sm:px-8 md:px-12 lg:px-20 mx-auto md:mx-0">
        <img 
          src="/assets/children-group.svg" 
          alt="Children" 
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg mx-auto md:mx-0" 
        />
        <div className="absolute -top-4 -right-2 sm:-right-4">
          <div className="hidden md:flex md:bg-black md:rounded-full p-2">
            <img src="/assets/star.svg" alt="Star" className="w-6 h-6" />
          </div>
        </div>
      </div>
      
      <div className="px-4">
        <div className="text-yellow-400 font-bold text-xl sm:text-2xl mb-4 flex justify-center md:justify-start">
          <img src="/assets/givvest2.svg" alt="Givvest" className="h-10 sm:h-12" />
        </div>
        <p className="text-gray-300 mb-6 text-base sm:text-lg">
          Givvest was born out of a shared belief in the transformative power of giving and the growing need for a solution that bridges the gap between philanthropy and personal financial security. Our journey began with a simple yet profound observation: Many individuals genuinely desire to support charitable causes but often hesitate due to the fear of needing those funds for themselves in the future. This hesitation, this 'giving dilemma', was the problem we set out to solve.
        </p>
      </div>
    </div>
  );
};

export default About;