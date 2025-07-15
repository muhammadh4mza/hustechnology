import React from 'react';

const LeaseIPPricingPlan = () => {
  const pricingPlans = [
    { cidr: '/24', price: '$97.28' },
    { cidr: '/23', price: '$194.56' },
    { cidr: '/22', price: '$378.88' },
    { cidr: '/21', price: '$716.80' },
    { cidr: '/20', price: '$1269.76' },
    { cidr: '/19', price: '$2457.60' },
    { cidr: '/18', price: '$4915.20' },
    { cidr: '/17', price: '$9830.40' },
    { cidr: '/16', price: '$19660.80' },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 bg-transparent text-white">
      {/* Gradient Background Circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-[140px] opacity-30"></div>
        <div className="absolute bottom-16 right-20 w-80 h-80 bg-gradient-to-br from-pink-500 via-blue-400 to-cyan-400 rounded-full blur-[120px] opacity-20"></div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md">
          Flexible IP Leasing Plans
        </h2>
        <p className="text-white/80 text-lg">
          Choose from a range of scalable IPv4 lease plans designed to meet global enterprise needs. All plans include LOA, BGP support, RPKI, geolocation updates, and 24/7 technical assistance.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg transition-all hover:shadow-2xl hover:border-blue-500"
          >
            {/* Floating Halo */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>

            {/* CIDR */}
            <h3 className="text-3xl font-bold text-white mb-4 text-center drop-shadow-lg">
              {plan.cidr}
            </h3>

            {/* Price */}
            <div className="text-center mb-4">
              <span className="text-4xl font-extrabold text-blue-400 drop-shadow-xl">
                {plan.price}
              </span>
              <span className="text-white/70 text-sm ml-1">/month</span>
              <div className="text-xs text-white/50 mt-1">(billed annually)</div>
            </div>

            {/* Features */}
            <ul className="text-sm text-white/70 space-y-2 my-4">
              <li>✅ LOA & Global Routing</li>
              <li>✅ Geolocation & DNS Delegation</li>
              <li>✅ IRR, RPKI, WHOIS support</li>
              <li>✅ Abuse Complaint Handling</li>
            </ul>

            {/* CTA */}
            <div className="mt-6 text-center">
              <a
                href="https://larus.net/ipv4/new"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 group/button"
              >
                {/* Shine effect */}
                <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
                  <span
                    className="block w-1/3 h-full bg-white/20 blur-lg opacity-0 group-hover/button:opacity-80 group-hover/button:translate-x-full transition-all duration-700 ease-out"
                    style={{ transform: 'skewX(-20deg)' }}
                  ></span>
                </span>
                <span className="z-10">Order Now</span>
                <svg
                  className="w-4 h-4 ml-2 z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaseIPPricingPlan;
