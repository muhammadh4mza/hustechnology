import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IpservicesBG from '../assets/Services/IpServices/Ipservicebanner.jpg';

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setIsModalOpen(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    alert('Thank you for contacting us! We will get back to you soon.');
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
              Leading Provider of Fast, Reliable, and Expert IP Solutions
            </h1>
            <p className="text-lg md:text-xl mb-6 text-center">
              Huscomintl, a trusted global IP solutions provider, specializes in meeting your most critical networking needs. Whether you're buying, selling, or leasing IP addresses, we deliver on-demand solutions—fast. Get IP addresses provisioned within 24 hours and keep your infrastructure running seamlessly.
            </p>
            <div className="flex justify-center">
              <button
                className="glare-hover relative px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full shadow-lg transition duration-300 capitalize tracking-wider overflow-hidden"
                type="button"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="relative z-10">Get IP Addresses Now</span>
                <span className="glare"></span>
              </button>
            </div>
          </div>
        </div>
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
                <h2 className="text-xl font-bold text-gray-100">Get IP Addresses</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-100 hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex p-2 items-center text-xs mb-6 bg-gray-700 rounded-b-lg mx-6">
                <img src="https://ipv4.larus.net/images/icon_tips.png" alt="icon_tips" className="w-6 h-6 mr-4 ml-3" />
                <span className="text-gray-200">Please fill out the form below and our IP specialists will contact you within 24 hours.</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-6">
                <div className="md:col-span-2">
                  <div className="bg-gray-700 rounded-2xl shadow-sm p-6">
                    <h1 className="font-bold text-lg mb-4 text-white">IP Address Request</h1>
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
                          <label className="text-gray-300 text-sm">IP Address Type</label>
                          <select name="subject" className="form-select rounded border-gray-600 bg-gray-600 text-white w-full p-2">
                            <option value="IPv4 Leasing">IPv4 Leasing</option>
                            <option value="IPv4 Purchase">IPv4 Purchase</option>
                            <option value="IPv6 Solutions">IPv6 Solutions</option>
                            <option value="Bulk IPs">Bulk IPs</option>
                            <option value="Not Sure">Not Sure - Need Consultation</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-gray-300 text-sm">Project Details<span className="text-red-500">*</span></label>
                          <textarea 
                            name="message" 
                            value={contactForm.message} 
                            onChange={handleContactChange} 
                            required 
                            rows="4" 
                            className="form-textarea rounded border-gray-600 bg-gray-600 text-white w-full p-2"
                            placeholder="Tell us about your project and IP requirements..."
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button type="submit" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white w-full py-3">
                          Request IP Addresses
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

export default Banner;