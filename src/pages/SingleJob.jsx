import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SingleJob = ({ job }) => {
  const {
    _id,
    jobTitle,
    jobPostingDate,
    applicationDeadline,
    salaryRange,
    jobCategory
  } = job || {};

  // Calculate days remaining until deadline
  const daysRemaining = Math.ceil(
    (new Date(applicationDeadline) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="p-6">
        {/* Job Title & Urgency Badge */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
            {jobTitle}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            daysRemaining <= 3 ? 'bg-red-100 text-red-800' : 
            daysRemaining <= 7 ? 'bg-amber-100 text-amber-800' : 
            'bg-green-100 text-green-800'
          }`}>
            {daysRemaining > 0 ? `${daysRemaining}d left` : 'Expired'}
          </span>
        </div>

        {/* Category Badge */}
        <span className="inline-block mb-4 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
          {jobCategory}
        </span>

        {/* Salary & Dates */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {salaryRange || 'Negotiable'}
            </span>
          </div>

          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              Posted: {new Date(jobPostingDate).toLocaleDateString()}
            </span>
          </div>

          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">
              Deadline: {new Date(applicationDeadline).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Link to={`/details/${_id}`}>
          <button className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium rounded-lg hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center">
            View Details
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};