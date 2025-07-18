import React, { useState } from 'react';
import { Briefcase, Link2, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import bgImg from '../assets/Services/IpServices/ipserviceSection.jpg';
import { Link } from 'react-router-dom';

const IpServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      id: 1,
      title: "IP Brokerage",
      description: "HUSCOMINTL helps customers to save time, effort, and resources in buying or selling IP addresses by handling the process from start to end.",
      icon: Briefcase,
    },
    {
      id: 2,
      title: "IP Leasing Solutions",
      description: "HUSCOMINTL is ready to help if you are facing a shortage of IP addresses or you need help with IP addresses management.",
      icon: Link2,
    },
    {
      id: 3,
      title: "Other Professional Services",
      description: "HUSCOMINTL has more than 20 specialists handling RIR membership and infrastructure.",
      icon: Users,
    }
  ];

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
    alert(`Thank you for your interest in our ${selectedService} services! We will get back to you soon.`);
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

  const openModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bgImg}
          alt="IP Services background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 uppercase">
            Our Services Include
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            HUSCOMINTL offers a secure and transparent platform for anyone to{' '}
            <a href="/ip-services/buy" className="text-white hover:text-blue-300 font-medium transition-colors">buy</a>,{' '}
            <a href="/ip-services/sell" className="text-white hover:text-blue-300 font-medium transition-colors">sell</a>{' '}
            or{' '}
            <a href="/ip-services/lease" className="text-white hover:text-blue-300 font-medium transition-colors">lease</a>{' '}
            IP addresses. With our user-friendly interface and process, you can enjoy a hassle-free experience and choose from various options to meet your business requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white/30 backdrop-blur-sm rounded-xl p-8 hover:bg-white/40 transition-all duration-300 border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-blue-800/90 group-hover:bg-blue-800/70 transition-all duration-300 shadow-lg">
                  {service.icon && React.createElement(service.icon, {
                    className: "w-10 h-10 text-blue-300 group-hover:text-white transition-colors duration-300"
                  })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-100 flex-grow">{service.description}</p>
                <button
                  onClick={() => openModal(service.title)}
                  className="mt-6 inline-flex items-center text-white hover:text-blue-300 font-medium transition-colors focus:outline-none"
                >
                  Learn more
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
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
                <h2 className="text-xl font-bold text-gray-100">Inquire About {selectedService}</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-100 hover:text-gray-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex p-2 items-center text-xs mb-6 bg-gray-700 rounded-b-lg mx-6">
                <img src="https://ipv4.larus.net/images/icon_tips.png" alt="icon_tips" className="w-6 h-6 mr-4 ml-3" />
                <span className="text-gray-200">Please fill out the form below and our {selectedService} specialists will contact you shortly.</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 px-6">
                <div className="md:col-span-2">
                  <div className="bg-gray-700 rounded-2xl shadow-sm p-6">
                    <h1 className="font-bold text-lg mb-4 text-white">Contact Information</h1>
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
                          <label className="text-gray-300 text-sm">Service Interest</label>
                          <input 
                            type="text" 
                            value={selectedService} 
                            readOnly 
                            className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" 
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-gray-300 text-sm">Your Requirements<span className="text-red-500">*</span></label>
                          <textarea 
                            name="message" 
                            value={contactForm.message} 
                            onChange={handleContactChange} 
                            required 
                            rows="4" 
                            className="form-textarea rounded border-gray-600 bg-gray-600 text-white w-full p-2"
                            placeholder={`Tell us about your ${selectedService} needs...`}
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button type="submit" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white w-full py-3">
                          Request Information
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

export default IpServicesSection;