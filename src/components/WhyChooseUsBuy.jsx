import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Headset } from 'lucide-react';

const WhyChooseUsBuy = () => {
  const reasons = [
    {
      id: 1,
      title: "Easy Transaction",
      description: "When you buy an IP address from us, we will handle the entire process from start to finish. We'll ensure the integrity of the IP addresses with blacklist checks and assist with the pre-approval process with your Regional Internet Registry (RIR).",
      Icon: ShieldCheck
    },
    {
      id: 2,
      title: "Deployment Support",
      description: "We will provide expert assistance in dealing with RIRs for IP address transfer, IP address broadcast, routing, and updating WHOIS information. This is especially beneficial if your organization does not have extensive experience in managing IP addresses.",
      Icon: Users
    },
    {
      id: 3,
      title: "Ongoing Management and Support",
      description: "You can count on 24x7 management service and support from our skilled and experienced IP team. You'll have access to assistance and expertise whenever you need it. We offer unparalleled support that no other IPv4 broker can match.",
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
            Why Choose Huscomintl as Your IPv4 Broker?
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-white/80">
            <p className="mb-4">
              When it comes to choosing a partner to buy IP addresses, Huscomintl stands out. As the premier IPv4 broker, we provide the best-in-class services that match our clients' premium-level needs.

            </p>
            <p>
              As your trusted partner, Huscomintl ensures a smooth experience when you purchase IPv4 address blocks. When you're in search of a dependable IPv4 broker, Huscomintl is your go-to source for buying IP addresses.
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

export default WhyChooseUsBuy;