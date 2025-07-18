import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, FileCheck } from 'lucide-react';

const ManageProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Contact Huscomintl",
      description: "Prepare the number of unused IPv4 addresses you have, and then contact us.",
      icon: Mail
    },
    {
      number: 2,
      title: "Sourcing",
      description: "We will reach out to our global partners and propose your IPv4 addresses to them.",
      icon: Users
    },
    {
      number: 3,
      title: "Service Contract",
      description: "After they have placed the order, we will Manage your IPv4 addresses to them and you will receive the payment.",
      icon: FileCheck
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/80 to-transparent z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/80 to-transparent z-0"></div>
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"></div>
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
          <span className="inline-block px-4 py-2 text-sm font-medium text-blue-100 bg-blue-800/50 rounded-full mb-4">
            FAST & EASY PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Process of <span className="text-cyan-300">IP Management Services</span>
          </h2>
          
        </motion.div>

        {/* Steps Stepper Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:flex justify-center items-stretch gap-0 mt-16"
        >
          {steps.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-row items-center">
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col items-center w-80 p-8 bg-gradient-to-br from-white/10 via-blue-200/5 to-blue-400/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-cyan-300/30 transition-all duration-300 relative group z-10"
                >
                  {/* Step Number with animated gradient */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-tr from-blue-400 to-cyan-400 opacity-30 animate-pulse"></div>
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-lg border-2 border-white/20">
                      <span className="text-3xl font-bold text-white flex items-center justify-center">
                        <step.icon className="w-10 h-10 text-white" />
                      </span>
                      <span className="absolute -bottom-2 -right-2 w-8 h-8 flex items-center justify-center bg-white text-blue-600 font-bold rounded-full border-2 border-blue-600">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{step.title}</h3>
                  <p className="text-blue-100/90 text-center">{step.description}</p>
                </motion.div>
                {/* Animated Connecting arrow */}
                {idx < steps.length - 1 && (
                  <div className="flex items-center h-full mx-0">
                    <svg 
                      className="w-14 h-14 text-cyan-300 animate-bounce-x drop-shadow-lg" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 48 48" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id={`arrow-gradient-${idx}`} x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#22d3ee" />
                          <stop offset="1" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                      <path stroke="url(#arrow-gradient-0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M16 12l16 12-16 12" />
                    </svg>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Mobile stacked layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden space-y-8 mt-12"
        >
          {steps.map((step, idx) => (
            <motion.div 
              variants={itemVariants}
              key={step.number} 
              className="flex items-start relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white text-xl font-bold mr-4 shadow-lg border-2 border-white/20">
                <span className="flex items-center justify-center w-full h-full">
                  <step.icon className="w-7 h-7 text-white" />
                </span>
                <span className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center bg-white text-blue-600 text-xs font-bold rounded-full border border-blue-600">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-100/90">
                  {step.description}
                </p>
              </div>
              {/* Mobile connecting line */}
              {idx < steps.length - 1 && (
                <div className="absolute left-7 bottom-0 transform translate-y-full w-0.5 h-6 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/contact-us"
            className="relative overflow-hidden inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {/* Animated background */}
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></span>
            </span>
            <span className="relative z-10 flex items-center">
              <span>Manage IPv4 Addresses Now</span>
              <svg
                className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ManageProcess;