import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SingleJob } from './SingleJob';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

export const AllJobs = () => {
  const jobs = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(6); // Start with 6 jobs
  const [searchResults, setSearchResults] = useState(jobs);
  const [isSearching, setIsSearching] = useState(false);

  // Load more function
  const loadMoreJobs = () => {
    setDisplayCount(prev => prev + 6); // Add 6 more jobs
  };

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults(jobs);
      setIsSearching(false);
      setDisplayCount(6); // Reset to 6 when search is cleared
    } else {
      const filteredJobs = jobs.filter(job => {
        const titleMatch = job.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase());
        const companyMatch = job.companyName?.toLowerCase().includes(searchQuery.toLowerCase());
        return titleMatch || companyMatch;
      });
      setSearchResults(filteredJobs);
      setIsSearching(true);
      // When searching, show all results (or you can keep pagination)
      setDisplayCount(filteredJobs.length); 
    }
  }, [searchQuery, jobs]);

  // Jobs to display (either 6 or more when loading more)
  const jobsToDisplay = searchResults.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>JOBI | All Jobs</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-12">
       <div className="mb-12 text-center">
  <div className="inline-flex flex-col items-center">
    {/* Main Title with Stronger Gradient */}
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 mt-10">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-500 to-indigo-600 animate-gradient">
        Latest Job Openings
      </span>
    </h1>
    
    {/* Decorative Element */}
    <div className="flex items-center justify-center space-x-2 mb-4">
      <div className="w-8 h-1 bg-gradient-to-r from-sky-400 to-transparent rounded-full"></div>
      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
      <div className="w-8 h-1 bg-gradient-to-l from-indigo-600 to-transparent rounded-full"></div>
    </div>
    
    {/* Subtitle with Better Typography */}
    <p className="text-lg text-gray-500 max-w-lg">
      Discover your next career opportunity from our curated selection
    </p>
  </div>
</div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {jobsToDisplay.map((job) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="hover:scale-[1.02] transition-transform duration-200"
              >
                <SingleJob job={job} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {jobsToDisplay.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No matching jobs found</h3>
            <p className="text-gray-500">Try a different search term</p>
          </div>
        )}

        {/* Show Load More button only when there are more jobs to show */}
        {!isSearching && displayCount < jobs.length && (
         <div className="text-center mt-12">
  <button 
    onClick={loadMoreJobs}
    className="relative overflow-hidden group px-8 py-3 rounded-full font-medium text-white shadow-lg transition-all duration-300"
  >
    {/* Gradient background */}
    <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-600 opacity-100 group-hover:from-sky-600 group-hover:to-indigo-700 transition-all"></span>
    
    {/* Shine effect on hover */}
    <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-150"></span>
    
    {/* Button content */}
    <span className="relative z-10 flex items-center justify-center">
      Load More Jobs 
      <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
        {jobs.length - displayCount} remaining
      </span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </span>
  </button>
</div>
        )}
      </div>
    </div>
  );
};