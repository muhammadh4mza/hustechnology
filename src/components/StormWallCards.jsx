import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Network, Server } from 'lucide-react';

const HuscomintlCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const HuscomintlServices = [
    {
      icon: <Globe size={56} className="text-blue-600 bg-white rounded-full p-2" />,
      title: <>Huscom <br /><span className="text-blue-600 font-bold">for Web</span></>,
      description: "Powerful solution to make sure your business-crucial web applications are always accessible during even the most severe DDoS attacks.",
      worksFor: ["Retail", "E-commerce", "Government", "Media", "Banking", "Entertainment, etc"],
      serviceType: "Web Protection"
    },
    {
      icon: <Network size={56} className="text-blue-600 bg-white rounded-full p-2" />,
      title: <>Huscom <br /><span className="text-blue-600 font-bold">for Networks</span></>,
      description: "Best-in-class network protection to ensure stable operation of your network and secure your business from unforeseen disruptions.",
      worksFor: ["ISPs", "Telecom", "Data Centers", "Hosting and Cloud Service Providers", "Large companies with internal networks"],
      serviceType: "Network Protection"
    },
    {
      icon: <Server size={56} className="text-blue-600 bg-white rounded-full p-2" />,
      title: <>Huscom <br /><span className="text-blue-600 font-bold">for Servers</span></>,
      description: "Keep your TCP/UDP services operational and safe from the most modern and complex DDoS attacks.",
      worksFor: ["Gaming", "IP telephony, etc"],
      serviceType: "Server Protection"
    }
  ];

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
      serviceType: selectedService,
      message: ''
    });
    alert(`Thank you for your ${selectedService} request! Our security team will contact you within 24 hours.`);
  };

  const openModal = (serviceType) => {
    setSelectedService(serviceType);
    setContactForm(prev => ({ ...prev, serviceType }));
    setIsModalOpen(true);
  };

  return (
    <div className="w-full flex flex-col items-center py-12 relative">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
        {HuscomintlServices.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 flex-1 min-w-[320px] max-w-lg mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              {service.icon}
              <div className="text-2xl font-bold text-white leading-tight" style={{ fontFamily: 'Gilroyf, sans-serif' }}>
                {service.title}
              </div>
            </div>
            <div className="text-base text-white/90 mb-6" style={{ lineHeight: '1.6' }}>
              {service.description}
            </div>
            <div className="font-semibold text-white mb-2" style={{ fontFamily: 'Gilroy, sans-serif' }}>Works for:</div>
            <ul className="mb-6 space-y-2">
              {service.worksFor.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-400" />
                  <span className="text-base text-white">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openModal(service.serviceType)}
              className="mt-auto flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Learn more
              <ArrowRight size={24} className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
      <button
        className="mt-14 px-8 py-4 bg-blue-800 hover:bg-blue-600 text-white font-bold rounded-lg text-lg shadow-lg transition"
        onClick={() => openModal('DDoS Protection')}
        style={{ margin: '56px auto 0 auto' }}
      >
        Activate Protection
      </button>

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
                          <label className="text-gray-300 text-sm">Service Type<span className="text-red-500">*</span></label>
                          <input 
                            type="text" 
                            name="serviceType" 
                            value={selectedService} 
                            readOnly 
                            className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" 
                          />
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

export default HuscomintlCards;