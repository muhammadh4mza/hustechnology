import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IpservicesBG from '../assets/Services/stormwallnetwork/stormwallnetworkbanner.jpg';

const StormwallNetworkBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    protectionType: 'website',
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
    console.log('Protection request submitted:', contactForm);
    setIsModalOpen(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      protectionType: 'website',
      message: ''
    });
    alert('Thank you for your DDoS protection request! Our security team will contact you within 24 hours.');
  };

  return (
    <div className="relative h-[650px] sm:h-[650px] md:h-[800px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${IpservicesBG})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white flex justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-center uppercase">
              When It Comes to DDoS
              <br />
              We've Got You Covered
            </h1>
            <p className="text-lg md:text-xl mb-6 text-center">
              Reliable solutions to safeguard websites, networks, servers, and IT infrastructures of
              any size and complexity from modern DDoS and hacker attacks
            </p>
            
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="glare-hover relative px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full shadow-lg transition duration-300 capitalize tracking-wider overflow-hidden"
                type="button"
              >
                <span className="relative z-10">Activate Protection</span>
                <span className="glare"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Protection Request Popup Modal */}
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
                <h2 className="text-xl font-bold text-gray-100">DDoS Protection Activation</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-100 hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex p-2 items-center text-xs mb-6 bg-gray-700 rounded-b-lg mx-6">
                <img src="https://ipv4.larus.net/images/icon_tips.png" alt="icon_tips" className="w-6 h-6 mr-4 ml-3" />
                <span className="text-gray-200">Please fill out the form below and our security specialists will contact you within 24 hours.</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-6">
                <div className="md:col-span-2">
                  <div className="bg-gray-700 rounded-2xl shadow-sm p-6">
                    <h1 className="font-bold text-lg mb-4 text-white">Protection Details</h1>
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
                          <label className="text-gray-300 text-sm">Protection Type<span className="text-red-500">*</span></label>
                          <select name="protectionType" value={contactForm.protectionType} onChange={handleContactChange} required className="form-select rounded border-gray-600 bg-gray-600 text-white w-full p-2">
                            <option value="website">Website Protection</option>
                            <option value="network">Network Protection</option>
                            <option value="server">Server Protection</option>
                            <option value="infrastructure">IT Infrastructure</option>
                            <option value="consultation">Consultation Needed</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-gray-300 text-sm">Protection Requirements<span className="text-red-500">*</span></label>
                          <textarea 
                            name="message" 
                            value={contactForm.message} 
                            onChange={handleContactChange} 
                            required 
                            rows="4" 
                            className="form-textarea rounded border-gray-600 bg-gray-600 text-white w-full p-2"
                            placeholder="Describe what you need protected, current security concerns, and any specific requirements..."
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button type="submit" className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                          Request Protection Activation
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

export default StormwallNetworkBanner;