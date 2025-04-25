import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "We collaborate with a network of reputable NGOs to verify and support impactful projects",
      answer: "Our team carefully vets NGOs based on their track record, transparency, and impact metrics. We maintain ongoing relationships to ensure donations are used effectively."
    },
    {
      question: "Our use of blockchain technology and smart contracts ensures complete transparency and trust",
      answer: "All transactions are recorded on the blockchain, providing an immutable record that anyone can verify. Smart contracts automate the donation process, eliminating middlemen and reducing costs."
    },
    {
      question: "This hesitation, this 'giving dilemma', was the problem we set out to solve.",
      answer: "By creating NFTs that represent donations, we provide donors with a way to both give to causes they care about and maintain financial flexibility for the future."
    },
    {
      question: "Givvest was born out of a shared belief in the transformative power of giving",
      answer: "Our founders experienced firsthand the struggle between wanting to support important causes and maintaining financial security. This personal experience drove the creation of our platform."
    },
    {
      question: "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions",
      answer: "We use blockchain technology to create a transparent, secure, and efficient donation system that benefits both donors and recipients."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Frequently Asked Questions</h2>
      <div className="space-y-2 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-2 sm:pb-4">
            <button
              className="flex justify-between items-center w-full text-left py-3 sm:py-4"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center flex-1 pr-4">
                <span className="text-gray-400 mr-2 sm:mr-4 text-sm sm:text-base">Q{index + 1}</span>
                <span className="font-medium text-sm sm:text-base">{faq.question}</span>
              </div>
              <svg
                className={`w-4 h-4 sm:w-6 sm:h-6 transform transition-transform duration-300 ease-in-out ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Answer with transition */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              } pl-6 sm:pl-12 pr-2 sm:pr-4 text-gray-300 text-sm sm:text-base`}
            >
              <div className="py-2">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
