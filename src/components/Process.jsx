import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Find A Cause To Donate",
    icon: "/assets/document-star.svg",
  },
  {
    id: "02",
    title: "Donate And Get An NFT",
    icon: "/assets/ethereum.svg",
  },
  {
    id: "03",
    title: "Sell The NFT And Get Your Money Back",
    icon: "/assets/dollar.svg",
  },
];

const getItemVariants = (index) => ({
  hidden: { 
    opacity: 0, 
    x: index % 2 === 0 ? -100 : 100,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 10, // made it smoother than 10
    },
  },
});

const Process = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="sm:px-8">
        <img src="/assets/lineframe.svg" alt="Process timeline" className="w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-8 md:px-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={getItemVariants(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}  // 👈 important change: triggers again every time
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="relative">
                <img 
                  src={step.icon} 
                  alt={step.title} 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto" 
                />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500 mb-2">
              {step.id}
            </div>
            <h3 className="text-lg sm:text-xl font-medium mb-2">{step.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
