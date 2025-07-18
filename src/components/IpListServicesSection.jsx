import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import leasingImg from '../assets/Services/IpServices/leasing_img.jpg';
import managementImg from '../assets/Services/IpServices/management_img.jpg';
import buyImg from '../assets/Services/IpServices/buy_img.jpg';
import sellingImg from '../assets/Services/IpServices/selling_img.jpg';

const IPv4OrderPopup = ({ onClose }) => {
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
    <AnimatePresence>
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
            <h2 className="text-xl font-bold text-gray-100">Contact Us</h2>
            <button onClick={onClose} className="text-gray-100 hover:text-gray-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex p-2 items-center text-xs mb-6 bg-gray-700 rounded-b-lg mx-6">
            <img src="https://ipv4.larus.net/images/icon_tips.png" alt="icon_tips" className="w-6 h-6 mr-4 ml-3" />
            <span className="text-gray-200">Please fill out the form below and our team will get back to you shortly.</span>
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
                      <label className="text-gray-300 text-sm">Phone Number</label>
                      <input type="tel" name="phone" value={contactForm.phone} onChange={handleContactChange} className="form-input rounded border-gray-600 bg-gray-600 text-white w-full p-2" />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm">Subject</label>
                      <select name="subject" className="form-select rounded border-gray-600 bg-gray-600 text-white w-full p-2">
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="IP Leasing">IP Leasing</option>
                        <option value="IP Management">IP Management</option>
                        <option value="Buying IPs">Buying IPs</option>
                        <option value="Selling IPs">Selling IPs</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-gray-300 text-sm">Message<span className="text-red-500">*</span></label>
                      <textarea name="message" value={contactForm.message} onChange={handleContactChange} required rows="4" className="form-textarea rounded border-gray-600 bg-gray-600 text-white w-full p-2" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button type="submit" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white w-full py-3">Send Message</button>
                  </div>
                </form>
              </div>
            </div>

            {/* <div className="md:col-span-1">
              <div className="bg-gray-700 rounded-2xl shadow-sm p-6 text-gray-300 space-y-4">
                <h2 className="text-lg font-bold text-white">Our Contact Information</h2>
                <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p><strong>Email:</strong> info@yourcompany.com</p>
                <p><strong>Address:</strong> 123 Business Ave, Suite 100, New York, NY 10001</p>
                <p><strong>Business Hours:</strong><br />Mon - Fri: 9am - 6pm<br />Sat: 10am - 2pm<br />Sun: Closed</p>
              </div>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const IpListServicesSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const services = [
    {
      id: 1,
      title: "IP Leasing Service",
      category: "IP Solutions",
      description: [
        "On-demand IP addresses",
        "Riskless IP resources",
        "Get IP addresses within 24 hours",
        "From /24 to multiple /16s"
      ],
      image: leasingImg
    },
    {
      id: 2,
      title: "IP Management Service",
      category: "IP Solutions",
      description: [
        "Generate profit in zero effort",
        "1000+ partners globally",
        "Ongoing support",
        "Multilingual team support"
      ],
      image: managementImg
    },
    {
      id: 3,
      title: "Buying IP Addresses",
      category: "IP Brokerage",
      description: [
        "Abundant Resources",
        "Worry-Free Transaction",
        "Ongoing Support 24/7"
      ],
      image: buyImg
    },
    {
      id: 4,
      title: "Selling IP Addresses",
      category: "IP Brokerage",
      description: [
        "Monetize your IPs",
        "Save time and costs in maintaining IP",
        "Hassle-free and fast process"
      ],
      image: sellingImg
    }
  ];

  return (
    <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map(service => (
          <div key={service.id} className="group backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col h-full">
              <div className="h-56 w-full overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex flex-col justify-between p-6 md:p-8 flex-grow text-white">
                <div>
                  <span className="text-sm uppercase font-medium tracking-wide text-blue-400">{service.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.description.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 mt-1 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base text-white/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setShowPopup(true)}
                  className="relative overflow-hidden inline-flex items-center px-6 py-3 mt-auto text-base font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg hover:from-blue-700 hover:to-blue-600"
                >
                  <span className="mr-2 z-10">Start Now</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {showPopup && <IPv4OrderPopup onClose={() => setShowPopup(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default IpListServicesSection;
