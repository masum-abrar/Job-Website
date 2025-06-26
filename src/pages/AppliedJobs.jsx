import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import { AppliedTable } from './AppliedTable';
import { Helmet } from 'react-helmet-async';


export const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!user?.email) return;

    const url = `https://job-server-site.vercel.app/appliedjobs?email=${encodeURIComponent(user.email)}`;
    
    setLoading(true);
    axios.get(url)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch applied jobs:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email]);

  const filteredJobs = filter === 'all' 
    ? jobs 
    : jobs.filter(job => job.status === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 md:px-8 py-8 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>JOBI | Applied Jobs</title>
      </Helmet>

      <div className="mb-10 text-center mt-20">
        <h2 className="text-4xl font-bold mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600">
            My Applications
          </span>
        </h2>
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Stats and Filter Header */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-6">
              <p className="text-sm text-gray-500">Total Applied</p>
              <p className="text-2xl font-bold text-gray-900">{jobs.length}</p>
            </div>
            <div className="mr-6">
              <p className="text-sm text-gray-500">Active</p>
              <p className="text-2xl font-bold text-sky-600">
                {jobs.filter(job => job.status === 'active').length}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Closed</p>
              <p className="text-2xl font-bold text-indigo-600">
                {jobs.filter(job => job.status === 'closed').length}
              </p>
            </div>
          </div>

          <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
            {['all', 'active', 'closed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === f 
                    ? 'bg-white shadow-sm text-sky-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Table Container */}
        {loading ? (
          <div className="p-6">
           <div> <h1>Loading...</h1> </div> {/* Custom skeleton loader */}
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-x-auto"
          >
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job Title
                  </th>
                
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    jobCategory
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    jobApplicantsNumber
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Salary
                  </th>
                 
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <AppliedTable key={job._id} job={job} />
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                      {jobs.length === 0 ? 'You have no applied jobs yet' : 'No jobs match your filter'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};