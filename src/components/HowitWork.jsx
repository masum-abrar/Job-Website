import React from 'react';
import { motion } from 'framer-motion';
import account from '../assets/account.png';
import search from '../assets/search.png';
import apply from '../assets/apply.png';
import { Link } from 'react-router-dom';

export const HowitWork = () => {
  const steps = [
    {
      icon: account,
      title: 'Create Profile',
      description: 'Set up your personalized job seeker profile quickly.',
    },
    {
      icon: search,
      title: 'Smart Match',
      description: 'Find jobs tailored to your skills instantly.',
    },
    {
      icon: apply,
      title: 'One‑Click Apply',
      description: 'Apply instantly with pre-filled details.',
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute -top-20 -left-32 w-96 h-96 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96  opacity-20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-center mb-16"
>
  <span className="inline-block bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
    How It Works
  </span>
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
      Simplifying Your
    </span>{' '}
    Job Hunt Journey
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Discover how our platform helps you create profiles, match smarter, and apply instantly
  </p>
</motion.div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-8 flex flex-col items-center text-center border border-white/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-sky-400 to-indigo-500 p-4 rounded-full shadow-md mb-6">
                <img src={step.icon} alt={step.title} className="w-12 h-12 invert" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-[16px] leading-relaxed">{step.description}</p>
              <span className="mt-6 inline-block text-sm text-indigo-500 font-mono">
                Step 0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link to={"/register"}>
          <button className="relative group inline-block text-white text-lg px-10 py-4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg hover:shadow-indigo-400/30 transition-all duration-500">
            <span className="relative z-10">Begin Your Journey</span>
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-600 to-sky-500 transition duration-500"></span>
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
