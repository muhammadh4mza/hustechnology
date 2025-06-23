import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expertise & Experience",
      description: "Our certified professionals bring the expertise you need to navigate complex IT and telecom challenges.",
      delay: "100"
    },
    {
      title: "Customized Solutions",
      description: "We understand that every business is unique. That's why we tailor our services to meet your specific needs.",
      delay: "150"
    },
    {
      title: "Reliable Support",
      description: "Our 24/7 support team is always available to assist you, ensuring your systems stay operational and secure at all times.",
      delay: "200"
    },
    {
      title: "Proven Track Record",
      description: "From small businesses to large enterprises, we've built a reputation for delivering top-tier IT and telecom solutions that drive results.",
      delay: "250"
    }
  ];

  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-white font-medium mb-2">Why Choose</p>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-white ">
            HUSCOM International?
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Image (Hidden on mobile) */}
          <div className="hidden lg:block lg:w-1/3">
            <div 
              className="h-full rounded-2xl bg-cover bg-center shadow-xl transform transition-all hover:scale-[1.02]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
              }}
            >
              <div className="h-full w-full bg-black/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white/40 to-gray-100/60 rounded-xl p-6 shadow-lg border border-gray-100/60 hover:shadow-xl transition-all hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={feature.delay}
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100/30 p-3 rounded-lg mr-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg shadow">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white text-[12px]">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div 
              className="mt-8 rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white rounded-xl">
                <p className="text-lg font-medium">
                  "Sed perspiciatis unde omnis iste natus error voluptatem accusantium
                  doloremque laudantium totam rem aperiam eaque quae"
                </p>
                <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors relative overflow-hidden glare-hover">
                  Get Started
                  <span className="glare" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;