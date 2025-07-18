import React, { useState } from 'react';
import groupImg from '../assets/Services/telcom/telcomright.jpg';
import { CheckCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const IpServicesMeet = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
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
    console.log('Free trial request submitted:', contactForm);
    setIsModalOpen(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    alert('Thank you for your free trial request! Our team will contact you shortly.');
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              STARTED WITH HUSCOMINTL
            </span>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-center md:text-left text-gray-100">
              Get Started
            </h2>
            <div className="space-y-4 text-gray-100 mb-8 text-center md:text-left">
              <p>
                Stop wasting time looking for computing resource start making it happen.
              </p>
              <ul className="space-y-1 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>No credit card required</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>Sign up and recharge to enjoy the bonus</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span>30+ regions to explore</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-start w-full">
              <button
                onClick={() => setIsModalOpen(true)}
                className="glare-hover inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="glare"></span>
              </button>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={groupImg}
              alt="HUSCOMINTL team"
              className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Free Trial Request Popup Modal */}
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
                <h2 className="text-xl font-bold text-gray-100">Free Trial Request</h2>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="text-gray-100 hover:text-gray-300 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex p-2 items-center text-xs mb-6 bg-gray-700 rounded-b-lg mx-6">
                <img src="https://ipv4.larus.net/images/icon_tips.png" alt="icon_tips" className="w-6 h-6 mr-4 ml-3" />
                <span className="text-gray-200">Please fill out the form below and our team will contact you to set up your free trial.</span>
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
                        <div className="sm:col-span-2">
                          <label className="text-gray-300 text-sm">Additional Requirements</label>
                          <textarea 
                            name="message" 
                            value={contactForm.message} 
                            onChange={handleContactChange} 
                            rows="4" 
                            className="form-textarea rounded border-gray-600 bg-gray-600 text-white w-full p-2"
                            placeholder="Tell us about your project or any specific requirements you have..."
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button 
                          type="submit" 
                          className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          Request Free Trial
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
    </div>
  );
};

export default IpServicesMeet;