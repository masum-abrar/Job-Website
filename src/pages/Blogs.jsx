import React from 'react';
import { motion } from 'framer-motion';
import pic from '../assets/pic.jpg';
import pic4 from '../assets/pic1.jpg';
import { Helmet } from 'react-helmet-async';

export const Blogs = () => {
  const blogVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.4 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Helmet>
        <title>JOBI | BLOG</title>
      </Helmet>
      <div className='mt-16'>
        
      <motion.section 
        className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={blogVariants}
      >
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            className="lg:w-1/3 bg-gray-100"
            variants={imageVariants}
          >
            <img 
              src={pic} 
              alt="Access Token and Refresh Token" 
              className="w-full h-full object-cover min-h-[300px]"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3 p-8 md:p-10"
            variants={textVariants}
          >
           <div className="mb-6">
  <span className="inline-block px-3 py-1 text-sm font-semibold text-sky-600 bg-sky-100 rounded-full mb-3">
    Career Tips
  </span>
  <h2 className="text-3xl font-bold text-gray-900 mb-4">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600">
      Mastering the Job Application Process
    </span>
  </h2>
  <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mb-6"></div>
</div>

<div className="space-y-5 text-gray-700">
  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-sky-400">
    <h3 className="font-semibold text-gray-900 mb-2">Tailored Resume</h3>
    <p>
      Customize your resume for each role by aligning your skills and experience with the job description. 
      Highlight accomplishments with clear metrics.
    </p>
  </div>

  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
    <h3 className="font-semibold text-gray-900 mb-2">Effective Cover Letter</h3>
    <p>
      Write a concise, targeted cover letter explaining why you're the right fit. 
      Use the company’s language and show genuine interest in the role.
    </p>
  </div>

  <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-400">
    <h3 className="font-semibold text-gray-900 mb-2">Follow-Up Strategy</h3>
    <p>
      After applying or interviewing, send a polite follow-up email to express enthusiasm and reinforce your value. 
      It shows professionalism and interest.
    </p>
  </div>
</div>

          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="bg-white rounded-2xl shadow-xl overflow-hidden mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={blogVariants}
      >
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            className="lg:w-1/3 bg-gray-100"
            variants={imageVariants}
          >
            <img 
              src={pic4} 
              alt="Express.js vs NestJS" 
              className="w-full h-full object-cover min-h-[300px]"
            />
          </motion.div>
          
         <motion.div 
  className="lg:w-2/3 p-8 md:p-10"
  variants={textVariants}
>
  <div className="mb-6">
    <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-3">
      Job Hunt Strategies
    </span>
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
        Online vs Offline Job Applications
      </span>
    </h2>
    <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mb-6"></div>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-indigo-300 transition-all">
      <h3 className="font-bold text-lg text-indigo-600 mb-3">Online Applications</h3>
      <p className="text-gray-700">
        Fast, accessible, and can reach thousands of companies. 
        Ideal for remote jobs and tech roles. However, you compete with a large pool of applicants.
      </p>
    </div>

    <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 transition-all">
      <h3 className="font-bold text-lg text-purple-600 mb-3">Offline Networking</h3>
      <p className="text-gray-700">
        Builds stronger personal connections through referrals and events. 
        Often leads to higher success rates, but requires time and effort in building relationships.
      </p>
    </div>
  </div>

  <div className="mt-8 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
    <h3 className="font-semibold text-gray-900 mb-2">Key Takeaways</h3>
    <ul className="space-y-2 text-gray-700">
      <li className="flex items-start">
        <span className="text-indigo-500 mr-2">•</span>
        <span>Online applications are scalable but highly competitive</span>
      </li>
      <li className="flex items-start">
        <span className="text-indigo-500 mr-2">•</span>
        <span>Offline networking creates deeper, personal connections</span>
      </li>
      <li className="flex items-start">
        <span className="text-indigo-500 mr-2">•</span>
        <span>The best job strategy blends both online reach and offline trust</span>
      </li>
    </ul>
  </div>
</motion.div>

        </div>
      </motion.section>
      </div>
    </div>
  );
};