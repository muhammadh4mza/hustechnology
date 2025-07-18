import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const features = [
    {
      title: "Expertise & Experience",
      description: "Our certified professionals bring the expertise you need to navigate complex IT and telecom challenges.",
      delay: "100"
    },
    {
      title: "Customized Solutions",
      description: "We understand that every business is unique. That's why we tailor our services to meet your specific needs.",
      delay: "150"
    },
    {
      title: "Reliable Support",
      description: "Our 24/7 support team is always available to assist you, ensuring your systems stay operational and secure at all times.",
      delay: "200"
    },
    {
      title: "Proven Track Record",
      description: "From small businesses to large enterprises, we've built a reputation for delivering top-tier IT and telecom solutions that drive results.",
      delay: "250"
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
    <section className="py-10 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-white font-medium mb-2">Why Choose</p>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-white">
            HUSCOM International?
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Image (Hidden on mobile) */}
          <div className="hidden lg:block lg:w-1/3">
            <div 
              className="h-full rounded-2xl bg-cover bg-center shadow-xl transform transition-all hover:scale-[1.02]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
              }}
            >
              <div className="h-full w-full bg-black/20 rounded-2xl"></div>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white/40 to-gray-100/60 rounded-xl p-6 shadow-lg border border-gray-100/60 hover:shadow-xl transition-all hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={feature.delay}
                >
                  <div className="flex items-start">
                    <div className="bg-blue-100/30 p-3 rounded-lg mr-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md flex items-center justify-center text-white font-bold text-lg shadow">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white text-[12px]">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div 
              className="mt-8 rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-white rounded-xl lg:text-left text-center">
                <p className="text-lg sm:text-xl font-medium max-w-3xl lg:mx-0 mx-auto">
                  "Sed perspiciatis unde omnis iste natus error voluptatem accusantium
                  doloremque laudantium totam rem aperiam eaque quae"
                </p>
                <div className="mt-6 lg:flex lg:justify-start flex justify-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors relative overflow-hidden glare-hover inline-flex items-center justify-center"
                  >
                    Get Started
                    <span className="glare" />
                  </button>
                </div>
              </div>
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
                <h2 className="text-xl font-bold text-gray-100">Get Started</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-100 hover:text-gray-300 transition-colors">
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
                    <h1 className="font-bold text-lg mb-4 text-white">Select Services</h1>
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
                          <label className="text-gray-300 text-sm">Choose Services</label>
                          <select name="subject" className="form-select rounded border-gray-600 bg-gray-600 text-white w-full p-2">
                            <option value="Select">-Select-</option>
                            <option value="IP Services">IP Services</option>
                            <option value="Telecom & Communication Hardwar">Telecom & Communication Hardware</option>
                            <option value="Stormwall Network">Stormwall Network</option>
                            <option value="UAV / Drone Technology Solutions">UAV / Drone Technology Solutions</option>
                            <option value="Other">Other</option>
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyChooseUs;