import React from 'react';

const TelcomServices = () => {
  return (
    <section className=" py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h5 className="text-lg text-blue-400 font-semibold mb-3">How It Works?</h5>
          <div className="flex justify-center mb-4">
            <span className="block w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Get your own server in three steps
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let Huscomintl artificial intelligence assist you in handling complex business.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-gray-800 rounded-lg p-8 text-center border-gray-700 md:border-r">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              01.
            </span>
            <h4 className="text-xl font-bold text-white mt-4 mb-2">Register or log in account</h4>
            <p className="text-gray-300">
              Enter your email and username to create an account successfully.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 rounded-lg p-8 text-center border-gray-700 md:border-r">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              02.
            </span>
            <h4 className="text-xl font-bold text-white mt-4 mb-2">Account recharge</h4>
            <p className="text-gray-300">
              Participate in Huscomintl promotions or recharge your account to successfully purchase products with various configurations.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              03.
            </span>
            <h4 className="text-xl font-bold text-white mt-4 mb-2">Product billing settlement</h4>
            <p className="text-gray-300">
              All paid products are billed and settled by the hour, so you can use them however you want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelcomServices;
