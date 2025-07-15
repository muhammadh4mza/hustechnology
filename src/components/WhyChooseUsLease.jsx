import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, DollarSign, Rocket, ShieldCheck, Users, Headset } from 'lucide-react';

const WhyChooseUsLease = () => {
  const reasons = [
    {
      id: 1,
      title: "No complicated RIR transfer procedure",
      description: "No need to go through RIR membership because IP addresses will be assigned to you from Huscomintl's pool.",
      Icon: UserCheck
    },
    {
      id: 2,
      title: "No upfront heavy investment required",
      description: "Save cost on buying IP addresses and lease IP addresses as long as you need.",
      Icon: DollarSign
    },
    {
      id: 3,
      title: "Immediate deployment by IP specialist",
      description: "IP addresses will be deployed quickly in a couple of days because you will be skipping the complicated process such as IP brokerage, agreements, and so on.",
      Icon: Rocket
    },
    {
      id: 4,
      title: "Secure the future supply on IPv4",
      description: "Sourcing IP addresses is time-consuming due to their scarcity, so leasing on-demand IP addresses is the most efficient way.",
      Icon: ShieldCheck
    },
    {
      id: 5,
      title: "Trusted by 1k+ customers",
      description: "Huscomintl is serving 1000+ customers globally including world players in telecoms and the IT industry.",
      Icon: Users
    },
    {
      id: 6,
      title: "Ongoing Support 24/7",
      description: "Our highly skilled and experienced IP team will provide ongoing management services and support to you.",
      Icon: Headset
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Halogen effect background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-400 via-blue-400 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Us?
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-white/80">
            <p className="mb-4">
              Huscomintl is the best alternative for leasing IP addresses because of our efficient setup process, 
              cost-effective solutions, experienced assistance, and more importantly, an unmatched IP resource pool size.
            </p>
            <p>
              With our quick and cost-effective technique, you can easily obtain your needed IPv4 addresses. 
              Our IP Leasing services ensure a reliable and resilient <strong className="text-white">network infrastructure</strong> with 
              the assurance of dependability and expert assistance.
            </p>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ id, title, description, Icon }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-white/20"
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {title}
                </h3>
                <p className="text-white/90 flex-grow">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsLease;