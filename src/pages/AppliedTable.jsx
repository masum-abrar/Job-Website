import React from 'react';
import { motion } from 'framer-motion';

export const AppliedTable = ({ job }) => {
  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.01,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.tr
      variants={rowVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="border-b border-gray-100 last:border-0 "
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-r from-sky-100 to-indigo-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-sky-600 font-medium">
              {job?.jobs?.jobTitle?.charAt(0)}
            </span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">
              {job?.jobs?.jobTitle}
            </div>
            <div className="text-xs text-gray-500">
              Applied on {new Date(job?.appliedDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
          {job?.jobs?.jobCategory}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {job?.jobs?.jobApplicantsNumber}
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {job?.jobs?.salaryRange}
        </div>
      </td>
    </motion.tr>
  );
};