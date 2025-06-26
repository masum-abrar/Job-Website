import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useViewportScroll } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { TabCategories } from '../components/TabCategories';
import { useLoaderData } from 'react-router-dom';
import { AllJobs } from './AllJobs';
import { Test } from './Test';
import { NewSection } from '../components/NewSection';
import { HowitWork } from '../components/HowitWork';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { JobCard } from '../components/JobCard';
import { useQuery } from "@tanstack/react-query";
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? 'night' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  console.log(theme);

  const { isPending, isError, error, data: jobs } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await fetch('https://job-server-site.vercel.app/jobs');
      return res.json();
    }
  });

  const { scrollYProgress } = useViewportScroll();
  const animationControl = useAnimation();

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      animationControl.start({ opacity: latest });
    });
  }, [scrollYProgress, animationControl]);

  if (isPending) {
    return <span className="loading loading-spinner text-primary"></span>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return (
    <div>
        <Helmet>
        <title> JOBI | HOME</title>
       
      </Helmet>
      
      <Banner></Banner>
      <div>
        <div>
       
          <Tabs>
            <div className='container px-6 py-10 mx-auto'>
        <div className="text-center mb-16 mt-12">
  <span className="inline-block bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-5">
    Career Specializations
  </span>
  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-5">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
      Browse Job
    </span>{' '}
    Categories
  </h1>
  {/* <div className="flex items-center justify-center mb-6">
    <div className="w-24 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
    <div className="w-4 h-4 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-4 transform rotate-45"></div>
    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600"></div>
  </div> */}
  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
    Specializing in{' '}
    <span className="font-semibold ">
      Development
    </span>
    ,{' '}
    <span className="font-semibold  ">
      Creative
    </span>
    , and{' '}
    <span className="font-semibold  ">
      Digital
    </span>{' '}
    fields
  </p>
</div>
              <div className='flex items-center justify-center mb-8'>
                <TabList>
                  <Tab>On-Site Job</Tab>
                  <Tab>Remote Job</Tab>
                  <Tab>Hybrid</Tab>
                  <Tab>Part-Time</Tab>
                  <Tab>All Jobs</Tab>
                </TabList>
              </div>
              <div
                initial={{ opacity: 0 }}
                animate={animationControl}
                transition={{ duration: 0.5 }}
              >
                <TabPanel>
                  <div className='flex-row  lg:flex gap-3 justify-center'>
                    {jobs
                      .filter(j => j.jobCategory === "On Site")
                      .map(job => (
                        <JobCard key={job._id} job={job} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='flex-row  lg:flex gap-3 justify-center'>
                    {jobs
                      .filter(j => j.jobCategory === "Remote")
                      .map(job => (
                        <JobCard key={job._id} job={job} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='flex-row  lg:flex gap-3 justify-center'>
                    {jobs
                      .filter(j => j.jobCategory === "Hybrid")
                      .map(job => (
                        <JobCard key={job._id} job={job} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='flex-row  lg:flex gap-3 justify-center'>
                    {jobs
                      .filter(j => j.jobCategory === "Part-Time")
                      .map(job => (
                        <JobCard key={job._id} job={job} />
                      ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='flex-row flex-wrap lg:flex gap-3 justify-center'>
                    {jobs
                      
                      .map(job => (
                        <JobCard key={job._id} job={job} />
                      ))}
                  </div>
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
      
      <NewSection></NewSection>
      <HowitWork></HowitWork>
    </div>
  )
}
