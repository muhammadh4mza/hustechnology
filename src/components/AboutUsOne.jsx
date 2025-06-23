import React from 'react';

const AboutUsOne = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <div className="mb-8">
              <p className="text-blue-600 font-medium mb-2">About Company</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                At HUSCOM International <br />
                Private Limited
              </h1>
              <p className="text-white lg:pr-10">
                We believe in the power of technology to transform businesses. We have grown to become a trusted provider of IT and telecom solutions, offering cutting-edge services that empower businesses to stay connected, secure, and competitive in today's digital world.
              </p>
            </div>
            
            <div className="flex mb-6">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Customized Solutions:</h3>
                <p className="text-white">
                  We understand that every business is unique. That's why we tailor our services to meet your specific needs, ensuring the right technology solutions for your organization.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 lg:pl-10 relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full"></div>
              <div 
                className="bg-gray-300 h-80 w-full rounded-lg bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
              ></div>
              <div className="absolute -bottom-4 -right-4 w-0 h-0 border-l-[50px] border-l-transparent border-b-[50px] border-b-blue-500 border-r-0 border-t-0"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-white/100 to-gray-100/60 rounded-xl p-6 shadow-lg border border-gray-100/60 hover:shadow-xl transition-all hover:-translate-y-1">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Reliable Support:</h3>
              <p className="text-gray-600">
                Our 24/7 support team is always available to assist you, ensuring your systems stay operational and secure at all times
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-white/100 to-gray-100/60 rounded-xl p-6 shadow-lg border border-gray-100/60 hover:shadow-xl transition-all hover:-translate-y-1">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Proven Track Record:</h3>
              <p className="text-gray-600">
                From small businesses to large enterprises, we've built a reputation for delivering top-tier IT and telecom solutions that drive results.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-white/100 to-gray-100/60 rounded-xl p-6 shadow-lg border border-gray-100/60 hover:shadow-xl transition-all hover:-translate-y-1">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Expertise & Experience:</h3>
              <p className="text-gray-600">
                Our certified professionals bring the expertise you need to navigate complex IT and telecom challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOne;