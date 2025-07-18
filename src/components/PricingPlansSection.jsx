import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    plan: '',
    message: ''
  });

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 500, delay: 0.1 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.15 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Plan request submitted:', contactForm);
    setIsModalOpen(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      plan: '',
      message: ''
    });
    alert(`Thank you for your ${selectedPlan} plan request! Our sales team will contact you within 24 hours.`);
  };

  const openModal = (plan = '') => {
    setSelectedPlan(plan);
    setContactForm(prev => ({ ...prev, plan }));
    setIsModalOpen(true);
  };

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
                  onClick={() => openModal(plan.title)}
                  aria-label={`Get started with ${plan.title}`}
                  className={`w-full py-3 px-6 rounded-md font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white text-gray-800 border border-gray-300 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          {/* <div className="inline-block bg-white rounded-lg shadow-sm px-6 py-4 border border-gray-200">
            <p className="text-gray-600 mb-2">
              Need custom solutions for your enterprise?
            </p>
            <button 
              onClick={() => openModal('Enterprise')}
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
            </button>
          </div> */}
        </div>
      </div>

      {/* Plan Request Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-gray-800 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto pb-10 z-[1000]"
              variants={popupVariants}
            >
              <div className="sticky top-0 bg-blue-600 p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-100">Plan Request Form</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-100 hover:text-gray-300 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex p-2 items-center text-xs mb-6 bg-gray-700 rounded-b-lg mx-6">
                <img src="https://ipv4.larus.net/images/icon_tips.png" alt="icon_tips" className="w-6 h-6 mr-4 ml-3" />
                <span className="text-gray-200">Please fill out the form below and our sales team will contact you within 24 hours.</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-6">
                <div className="md:col-span-2">
                  <div className="bg-gray-700 rounded-2xl shadow-sm p-6">
                    <h1 className="font-bold text-lg mb-4 text-white">Contact Information</h1>
                    <form onSubmit={handleContactSubmit}>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="text-gray-300 text-sm">Full Name<span className="text-red-500">*</span></label>
                          <input 
                            type="text" 
                            name="name" 
                            value={contactForm.name} 
                            onChange={handleContactChange} 
                            required 
                            className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" 
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm">Email<span className="text-red-500">*</span></label>
                          <input 
                            type="email" 
                            name="email" 
                            value={contactForm.email} 
                            onChange={handleContactChange} 
                            required 
                            className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" 
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm">Phone Number<span className="text-red-500">*</span></label>
                          <input 
                            type="tel" 
                            name="phone" 
                            value={contactForm.phone} 
                            onChange={handleContactChange} 
                            required 
                            className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" 
                          />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm">Company Name<span className="text-red-500">*</span></label>
                          <input 
                            type="text" 
                            name="company" 
                            value={contactForm.company} 
                            onChange={handleContactChange} 
                            required 
                            className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" 
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-gray-300 text-sm">Plan Interested In<span className="text-red-500">*</span></label>
                          <select 
                            name="plan" 
                            value={selectedPlan || contactForm.plan} 
                            onChange={handleContactChange} 
                            required 
                            className="form-select rounded border-gray-600 bg-gray-600 text-white w-full p-2"
                          >
                            <option value="">Select a plan</option>
                            {plans.map((plan, index) => (
                              <option key={index} value={plan.title}>{plan.title} ({plan.shortTitle})</option>
                            ))}
                            {/* <option value="Enterprise">Enterprise Solution</option> */}
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-gray-300 text-sm">Additional Requirements</label>
                          <textarea 
                            name="message" 
                            value={contactForm.message} 
                            onChange={handleContactChange} 
                            rows="4" 
                            className="form-textarea rounded border-gray-600 bg-gray-600 text-white w-full p-2"
                            placeholder="Tell us about your project requirements, expected usage, and any specific needs..."
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button 
                          type="submit" 
                          className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Request Plan Information
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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