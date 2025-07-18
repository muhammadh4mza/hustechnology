import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, CreditCard } from 'lucide-react';

const BuyProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    ipBlockSize: '/24',
    budgetRange: '$5,000-$10,000',
    message: ''
  });

  const steps = [
    {
      number: 1,
      title: "Sourcing",
      description: "Contact us or find the IP resource you need on our platform",
      icon: Search
    },
    {
      number: 2,
      title: "Agreement",
      description: "Agree on the IP resource and price",
      icon: FileText
    },
    {
      number: 3,
      title: "Payment",
      description: "Huscomintl will take care of and assist in the whole IP transfer process and payment process",
      icon: CreditCard
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
    console.log('Buy request submitted:', contactForm);
    setIsModalOpen(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      ipBlockSize: '/24',
      budgetRange: '$5,000-$10,000',
      message: ''
    });
    alert('Thank you for your IPv4 purchase request! Our team will contact you within 24 hours.');
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/80 to-transparent z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/80 to-transparent z-0"></div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-100 bg-blue-800/50 rounded-full mb-4">
            FAST & EASY PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Process of Buying an <span className="text-cyan-300">IP Address Block</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-blue-100/90">
              The process of buying IP addresses with Huscomintl is straightforward and hassle-free. Our experts will assist you every step of the way as you buy IP addresses. Simply discuss your needs with us, fill out a few forms, and we'll take care of the rest.
              You can rely on us for a streamlined process when you purchase IP addresses. You'll experience minimal hassles while our support team handles the whole process. So, when you're ready to buy IP addresses, reach out to us, and we'll guide you through the process.
            </p>
          </div>
        </motion.div>

        {/* Steps Stepper Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:flex justify-center items-stretch gap-0 mt-16"
        >
          {steps.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-row items-center">
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col items-center w-80 p-8 bg-gradient-to-br from-white/10 via-blue-200/5 to-blue-400/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-cyan-300/30 transition-all duration-300 relative group z-10"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-tr from-blue-400 to-cyan-400 opacity-30 animate-pulse"></div>
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-lg border-2 border-white/20">
                      <span className="text-3xl font-bold text-white flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-white" />
                      </span>
                      <span className="absolute -bottom-2 -right-2 w-8 h-8 flex items-center justify-center bg-white text-blue-600 font-bold rounded-full border-2 border-blue-600">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{step.title}</h3>
                  <p className="text-blue-100/90 text-center">{step.description}</p>
                </motion.div>
                {idx < steps.length - 1 && (
                  <div className="flex items-center h-full mx-0">
                    <svg 
                      className="w-14 h-14 text-cyan-300 animate-bounce-x drop-shadow-lg" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 48 48" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id={`arrow-gradient-${idx}`} x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#22d3ee" />
                          <stop offset="1" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                      <path stroke="url(#arrow-gradient-0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M16 12l16 12-16 12" />
                    </svg>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Mobile stacked layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden space-y-8 mt-12"
        >
          {steps.map((step, idx) => (
            <motion.div 
              variants={itemVariants}
              key={step.number} 
              className="flex items-start relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white text-xl font-bold mr-4 shadow-lg border-2 border-white/20">
                <span className="flex items-center justify-center w-full h-full">
                  <step.icon className="w-7 h-7 text-white" />
                </span>
                <span className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center bg-white text-blue-600 text-xs font-bold rounded-full border border-blue-600">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-100/90">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute left-7 bottom-0 transform translate-y-full w-0.5 h-6 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative overflow-hidden inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></span>
            </span>
            <span className="relative z-10 flex items-center">
              <span>Buy IPv4 Addresses Now</span>
              <svg
                className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Contact Popup Modal */}
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
                <h2 className="text-xl font-bold text-gray-100">IPv4 Purchase Request</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-100 hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex p-2 items-center text-xs mb-6 bg-gray-700 rounded-b-lg mx-6">
                <img src="https://ipv4.larus.net/images/icon_tips.png" alt="icon_tips" className="w-6 h-6 mr-4 ml-3" />
                <span className="text-gray-200">Please fill out the form below and our IP acquisition specialists will contact you within 24 hours.</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-6">
                <div className="md:col-span-2">
                  <div className="bg-gray-700 rounded-2xl shadow-sm p-6">
                    <h1 className="font-bold text-lg mb-4 text-white">Purchase Information</h1>
                    <form onSubmit={handleContactSubmit}>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="text-gray-300 text-sm">Full Name<span className="text-red-500">*</span></label>
                          <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} required className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm">Email<span className="text-red-500">*</span></label>
                          <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} required className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm">Phone Number<span className="text-red-500">*</span></label>
                          <input type="tel" name="phone" value={contactForm.phone} onChange={handleContactChange} required className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" />
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm">Desired IP Block Size<span className="text-red-500">*</span></label>
                          <select name="ipBlockSize" value={contactForm.ipBlockSize} onChange={handleContactChange} required className="form-select rounded border-gray-600 bg-gray-600 text-white w-full p-2">
                            <option value="/24">/24 (256 IPs)</option>
                            <option value="/23">/23 (512 IPs)</option>
                            <option value="/22">/22 (1,024 IPs)</option>
                            <option value="/21">/21 (2,048 IPs)</option>
                            <option value="/20">/20 (4,096 IPs)</option>
                            <option value="/19">/19 (8,192 IPs)</option>
                            <option value="/18">/18 (16,384 IPs)</option>
                            <option value="/17">/17 (32,768 IPs)</option>
                            <option value="/16">/16 (65,536 IPs)</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-gray-300 text-sm">Budget Range<span className="text-red-500">*</span></label>
                          <select name="budgetRange" value={contactForm.budgetRange} onChange={handleContactChange} required className="form-select rounded border-gray-600 bg-gray-600 text-white w-full p-2">
                            <option value="$5,000-$10,000">$5,000-$10,000</option>
                            <option value="$10,000-$25,000">$10,000-$25,000</option>
                            <option value="$25,000-$50,000">$25,000-$50,000</option>
                            <option value="$50,000-$100,000">$50,000-$100,000</option>
                            <option value="$100,000+">$100,000+</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-gray-300 text-sm">Additional Requirements<span className="text-red-500">*</span></label>
                          <textarea 
                            name="message" 
                            value={contactForm.message} 
                            onChange={handleContactChange} 
                            required 
                            rows="4" 
                            className="form-textarea rounded border-gray-600 bg-gray-600 text-white w-full p-2"
                            placeholder="Tell us about your specific needs, including any technical requirements or geographic preferences..."
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button type="submit" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w-full py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                          Submit Purchase Request
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
    </section>
  );
};

export default BuyProcess;