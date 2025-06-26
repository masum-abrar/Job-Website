import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { JobCard } from './JobCard';

import { FiArrowRight } from 'react-icons/fi';
export const TabCategories = ({ jobs }) => {
    if (!jobs) {
        // If jobs is still loading, return a loader or a message
        return <div>Loading...</div>;
    }
    return (
      <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Premium Header */}
    <div className="text-center mb-16 p-8 rounded-2xl backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/50 shadow-xl">
      <div className="mb-1 inline-block bg-gradient-to-r from-sky-400 to-indigo-500 text-transparent bg-clip-text text-4xl font-bold">
        Browse Jobs By Categories
      </div>
      <div className="w-20 h-1 mx-auto bg-gradient-to-r from-sky-400 to-indigo-500 mb-6 rounded-full"></div>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Explore top opportunities in <span className="font-medium text-sky-500">Web Development</span>, 
        <span className="font-medium text-indigo-500"> Graphics Design</span>, and 
        <span className="font-medium text-purple-500"> Digital Marketing</span>.
      </p>
    </div>

    {/* Premium Tabs */}
    <Tabs>
      <div className="flex justify-center mb-12">
        <TabList className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white dark:bg-gray-800 p-1.5 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
          {['On-Site', 'Remote', 'Hybrid', 'Part-Time', 'All Jobs'].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) => `
                px-5 py-2.5 text-sm sm:text-base font-medium rounded-full transition-all
                ${selected 
                  ? 'bg-gradient-to-r from-sky-400 to-indigo-500 text-white shadow-md' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
              `}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
      </div>

      {/* Tab Panels with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {['On Site', 'Remote', 'Hybrid', 'Part-Time', ''].map((category, index) => (
          <TabPanel key={index}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {jobs
                .filter(job => category ? job.jobCategory === category : true)
                .map((job, jobIndex) => (
                  <motion.div
                    key={job._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: jobIndex * 0.05 }}
                  >
                    <JobCard job={job} />
                  </motion.div>
                ))}
            </motion.div>
            
            {jobs.filter(j => category ? j.jobCategory === category : true).length === 0 && (
              <div className="text-center py-12">
                <div className="inline-block p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-gray-500 dark:text-gray-400 text-lg">
                    No {category || ''} jobs available currently
                  </div>
                  <button className="mt-3 px-4 py-2 bg-gradient-to-r from-sky-400/20 to-indigo-500/20 text-sky-600 dark:text-sky-400 font-medium rounded-lg hover:shadow transition-all">
                    Get Notified When Available
                  </button>
                </div>
              </div>
            )}
          </TabPanel>
        ))}
      </motion.div>
    </Tabs>

    {/* View All CTA */}
    <div className="text-center mt-16">
      <button className="px-8 py-3.5 bg-gradient-to-r from-sky-400 to-indigo-500 text-white font-medium rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-sky-200/50 dark:hover:shadow-sky-700/30">
        View All Job Opportunities
        <FiArrowRight className="inline ml-2" />
      </button>
    </div>
  </div>
</div>
    );
};
