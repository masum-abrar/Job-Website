import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import { JobTable } from './JobTable';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'


export const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!user?.email) return;

    const fetchJobs = async () => {
      try {
        const url = `https://job-server-site.vercel.app/myjobs?email=${encodeURIComponent(user.email)}`;
        const response = await axios.get(url, { withCredentials: true });
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to load your jobs',
          icon: 'error',
          confirmButtonColor: '#3B82F6',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [user?.email]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3B82F6",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Yes, delete it!",
      backdrop: `
        rgba(10, 25, 49, 0.3)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`https://job-server-site.vercel.app/jobs/${id}`);
        Swal.fire(
          "Deleted!",
          "Your job has been deleted.",
          "success"
        );
        setJobs(jobs.filter(job => job._id !== id));
      } catch (error) {
        Swal.fire(
          "Error!",
          "Failed to delete the job.",
          "error"
        );
      }
    }
  };

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
        <title>JOBI | MY JOBS</title>
      </Helmet>

      <div className="mb-10 text-center mt-16">
        <h2 className="text-4xl font-bold mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600">
            Your Posted Jobs
          </span>
        </h2>
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"></div>
        </div>
        <p className="mt-4 text-gray-600">
          {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'} posted
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Filter and Stats */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-6">
              <p className="text-sm text-gray-500">Total Jobs</p>
              <p className="text-2xl font-bold text-gray-900">{jobs.length}</p>
            </div>
          </div>

         <Link to="/addjobs" className="ml-auto">
          <button 
            className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg hover:from-sky-600 hover:to-indigo-700 transition-all shadow-md"
            onClick={() => {/* Add create new job functionality */}}
          >
            + Add New Job
          </button>
         </Link>
        </div>

        {/* Table Container */}
        {loading ? (
          <div className="p-6">
           <div className="animate-pulse flex space-x-4">
  <div className="flex-1 h-6 bg-gray-200 rounded"></div>
  <div className="flex-1 h-6 bg-gray-200 rounded"></div>
  <div className="flex-1 h-6 bg-gray-200 rounded"></div>
</div>
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
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Posted Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Salary
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobs.length > 0 ? (
                  jobs.map((job) => (
                    <JobTable 
                      key={job._id} 
                      job={job}
                      handleDelete={handleDelete}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                      You haven't posted any jobs yet
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