import React from 'react';
import { Link } from 'react-router-dom';
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

export const JobCard = ({ job }) => {
  const {
    _id,
    jobTitle,
    jobPostingDate,
    Name,
    applicationDeadline,
    salaryRange,
    jobCategory,
    jobApplicantsNumber,
  } = job || {};

  return (
    <div className="relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
      {/* Category Badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
        {jobCategory}
      </div>

      <div className="p-6 flex flex-col h-full">
        {/* Company Info */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 truncate">
            {Name}
          </span>
        </div>

        {/* Job Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative group-hover:text-sky-600 transition-colors">
          {jobTitle}
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
        </h3>

        {/* Salary and Applicants */}
        <div className="flex flex-wrap gap-5 mb-5 text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <CurrencyDollarIcon className="w-5 h-5 text-sky-500" />
            <span className="font-medium">{salaryRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserGroupIcon className="w-5 h-5 text-indigo-500" />
            <span>{jobApplicantsNumber} applicants</span>
          </div>
        </div>

        {/* Deadline */}
        <div className="flex items-center gap-1 text-xs bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 px-2 py-1 rounded-md mb-5 w-max">
          <CalendarIcon className="w-4 h-4" />
          <span>{new Date(applicationDeadline).toLocaleDateString()}</span>
        </div>

        {/* View Details Button */}
        <Link
          to={`/details/${_id}`}
          className="mt-auto inline-block w-full text-center bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-semibold py-2.5 rounded-xl hover:from-sky-500 hover:to-indigo-600 shadow-md hover:shadow-lg transition-all"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
