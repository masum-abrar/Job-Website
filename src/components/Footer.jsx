import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-tr from-sky-900 via-indigo-900 to-indigo-950 text-gray-300 px-12 py-16 overflow-hidden">
      {/* Soft glowing accent */}
      <div className="absolute -top-28 -left-28 w-72 h-72 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Logo + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="flex items-center mb-3 space-x-3">
            <img src={logo} alt="JOBI Logo" className="h-12 w-12" />
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
              HireHaven
            </h1>
          </div>
          <p className="max-w-xs text-gray-400 text-center md:text-left">
            Elevate your career with AI-powered job matching and insights.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex space-x-10 text-gray-400 text-sm font-medium"
        >
          {['Home', 'Jobs', 'About', 'Pricing', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-sky-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.nav>

        {/* Subscribe */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex max-w-md w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email"
            required
            className="flex-grow rounded-l-md px-4 py-3 bg-indigo-900 border border-indigo-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 rounded-r-md font-semibold text-white shadow-lg"
          >
            Subscribe
          </motion.button>
        </motion.form>
      </div>

      {/* Bottom copyright */}
      <p className="mt-16 text-center text-gray-500 text-xs select-none">
        © {year} HireHaven. All rights reserved.
      </p>
    </footer>
  );
};
