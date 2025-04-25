import React from "react";

const Features = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div className="mb-8 md:mb-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-left ">
          This hesitation, this{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #F7E474, #A8CF65, #6EC8B8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            'giving dilemma'
          </span>
          , was the problem we set out to solve.
        </h2>
      </div>
      
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="bg-gray-800 p-3 rounded-full h-12 w-12 flex items-center justify-center mx-auto sm:mx-0">
            <img
              src="/assets/secure.svg"
              alt="Secure"
              className="w-6 h-6"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Secure</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Donors can give confidently, knowing that their donations are not
              only making a difference in the world but also safeguarding their
              own future needs.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="bg-gray-800 p-3 rounded-full h-12 w-12 flex items-center justify-center mx-auto sm:mx-0">
            <img
              src="/assets/transparent.svg"
              alt="Transparent"
              className="w-6 h-6"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Transparent</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Our use of blockchain technology and smart contracts ensures
              complete transparency and trust in the charitable process.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="bg-gray-800 p-3 rounded-full h-12 w-12 flex items-center justify-center mx-auto sm:mx-0">
            <img src="/assets/impactful.svg" alt="Impactful" className="w-6 h-6" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Impactful</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              We collaborate with a network of reputable NGOs to verify and
              support impactful projects, amplifying the positive change donors
              can make.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;