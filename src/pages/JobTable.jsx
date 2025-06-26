import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const JobTable = ({ job, handleDelete }) => {
  const {
    _id,
    jobTitle,
    jobPostingDate,
    salaryRange,
    jobCategory,
    jobApplicantsNumber,
    applicationDeadline
  } = job || {};

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.01,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.tr
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="border-b border-gray-100 last:border-0"
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-sky-100 to-indigo-100 rounded-lg flex items-center justify-center mr-4">
            <span className="text-sky-600 font-medium">
              {jobTitle?.charAt(0) || 'J'}
            </span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">
              {jobTitle}
            </div>
            <div className="text-xs text-gray-500">
              {jobApplicantsNumber || 0} applicants
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
          {jobCategory}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {new Date(jobPostingDate).toLocaleDateString()}
        </div>
        <div className="text-xs text-gray-500">
          {new Date(applicationDeadline).toLocaleDateString()}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {salaryRange}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <Link to={`/updatejob/${_id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-colors text-sm font-medium"
          >
            Edit
          </motion.button>
        </Link>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <motion.button
          onClick={() => handleDelete(_id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 text-red-500 hover:text-red-700 transition-colors"
          aria-label="Delete"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </motion.button>
      </td>
    </motion.tr>
  );
};