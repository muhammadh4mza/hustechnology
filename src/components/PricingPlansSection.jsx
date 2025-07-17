import React from 'react';

const plans = [
  {
    title: 'Bare Metal Server',
    shortTitle: 'BMS',
    description: 'Edge computing close to users with on-demand deployment.',
    features: [
      'Multiple architecture options',
      'Dedicated computing power',
      'Full root access',
      'Self-service provisioning',
      '99.9% uptime SLA'
    ],
    highlight: false,
    price: '$99',
    billing: 'per month'
  },
  {
    title: 'Elastic Compute Service',
    shortTitle: 'ECS',
    description: 'Scalable virtual machines for all workloads.',
    features: [
      'Wide range of instance types',
      'Elastic scaling capabilities',
      'Global deployment options',
      'Integrated networking',
      '99.95% uptime SLA'
    ],
    highlight: true,
    badge: 'Most Popular',
    price: '$199',
    billing: 'per month'
  },
  {
    title: 'Elastic Storage Service',
    shortTitle: 'ESS',
    description: 'High-performance storage solutions.',
    features: [
      'Object, file, and block storage',
      'Automatic scaling',
      'Data encryption at rest',
      'Cross-region replication',
      '99.999999% durability'
    ],
    highlight: false,
    price: '$149',
    billing: 'per month'
  },
];

const PricingPlansSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements (reduced visibility) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            FLEXIBLE PRICING
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-200">
            Choose the perfect plan for your business needs with our enterprise-grade cloud solutions
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-white ${
                plan.highlight 
                  ? 'ring-2 ring-blue-500 shadow-lg' 
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-bl-lg rounded-tr-sm">
                  {plan.badge}
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                  <p className="text-blue-600 font-mono text-sm">{plan.shortTitle}</p>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.billing}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 mr-2" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto p-6 bg-gray-50 border-t border-gray-200">
                <button
                  className={`w-full py-3 px-6 rounded-md font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        {/* <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-lg shadow-sm px-6 py-4 border border-gray-200">
            <p className="text-gray-600 mb-2">
              Need custom solutions for your enterprise?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Contact our sales team
              <svg 
                className="w-4 h-4 ml-1.5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        </div> */}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default PricingPlansSection;