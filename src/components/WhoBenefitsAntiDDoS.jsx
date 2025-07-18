import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Wifi, Banknote, Factory } from 'lucide-react';

const WhoBenefitsAntiDDoS = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });

  const benefitCards = [
    {
      title: "Retail/E-Commerce",
      description: "DDoS attacks disrupt business continuity leading to massive financial and reputational losses. Our protection ensures flawless performance of all your web resources, regardless of the strength of the attacks.",
      Icon: ShoppingCart,
      value: "Retail/E-Commerce"
    },
    {
      title: "ISP/Telecom",
      description: "Huscomintl protection acts like a strong shield to keep telecom systems safe. It goes beyond basic security to ensure ISP networks stay fast and fully operational.",
      Icon: Wifi,
      value: "ISP/Telecom"
    },
    {
      title: "Banking/Finance",
      description: "Banks are frequent targets of complex DDoS attacks. Our multi-layer protection is tailored to the financial sector, prioritizing data security with or without SSL decryption.",
      Icon: Banknote,
      value: "Banking/Finance"
    },
    {
      title: "Manufacturing",
      description: "Manufacturing businesses face serious disruption from DDoS attacks. Huscomintl detects and stops them in real-time, ensuring uninterrupted business processes.",
      Icon: Factory,
      value: "Manufacturing"
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
    console.log('DDoS protection request submitted:', contactForm);
    setIsModalOpen(false);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      industry: '',
      message: ''
    });
    alert(`Thank you for your ${selectedIndustry} DDoS protection request! Our security team will contact you within 24 hours.`);
  };

  const openModal = (industry = '') => {
    setSelectedIndustry(industry);
    setContactForm(prev => ({ ...prev, industry }));
    setIsModalOpen(true);
  };

  return (
    <section className="relative z-10 py-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-gray-950">
      {/* HALOGEN GLOW EFFECT */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Blue glow top left */}
        <div className="absolute top-[-6%] left-[-8%] w-[420px] h-[420px] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-300 rounded-full opacity-30 blur-[120px] animate-pulse-slow" />
        {/* Purple glow bottom right */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[520px] h-[520px] bg-gradient-to-tr from-purple-500 via-blue-400 to-cyan-400 rounded-full opacity-25 blur-[140px] animate-pulse-slower" />
        {/* Cyan ring center */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border-[12px] border-cyan-400/30 rounded-full blur-[80px] opacity-20 animate-spin-slow" />
        {/* Subtle blue overlay */}
        <div className="absolute top-[30%] left-[60%] w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-[100px] opacity-10 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
          Who Benefits From <span className="text-blue-400">Anti-DDoS?</span>
        </h2>

        {/* CTA moved up here */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => openModal()}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-md transition-transform hover:scale-105"
          >
            Protect Your Business
          </button>
        </div>

        {/* Benefit Cards as grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefitCards.map((card, idx) => (
            <button
              key={idx}
              onClick={() => openModal(card.value)}
              className="flex flex-col bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8 flex-1 min-w-[320px] max-w-lg mx-auto items-center gap-6 hover:shadow-blue-500/10 transition text-center cursor-pointer"
            >
              <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-blue-500/10 mb-2">
                <card.Icon className="w-14 h-14 text-blue-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-2">{card.title}</h3>
              <p className="text-gray-200 text-lg leading-relaxed">{card.description}</p>
            </button>
          ))}
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
                <h2 className="text-xl font-bold text-gray-100">DDoS Protection Request</h2>
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
                    <h1 className="font-bold text-lg mb-4 text-white">Business Information</h1>
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
                          <label className="text-gray-300 text-sm">Industry<span className="text-red-500">*</span></label>
                          <select 
                            name="industry" 
                            value={selectedIndustry || contactForm.industry} 
                            onChange={handleContactChange} 
                            required 
                            className="form-select rounded border-gray-600 bg-gray-600 text-white w-full p-2"
                          >
                            <option value="">Select your industry</option>
                            <option value="Retail/E-Commerce">Retail/E-Commerce</option>
                            <option value="ISP/Telecom">ISP/Telecom</option>
                            <option value="Banking/Finance">Banking/Finance</option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-gray-300 text-sm">Security Requirements<span className="text-red-500">*</span></label>
                          <textarea 
                            name="message" 
                            value={contactForm.message} 
                            onChange={handleContactChange} 
                            required 
                            rows="4" 
                            className="form-textarea rounded border-gray-600 bg-gray-600 text-white w-full p-2"
                            placeholder="Describe your security needs, current threats, and any specific requirements..."
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <button type="submit" className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                          Request DDoS Protection
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

export default WhoBenefitsAntiDDoS;