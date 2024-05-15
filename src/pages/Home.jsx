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
      const res = await fetch('http://localhost:5000/jobs');
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
              <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
                Browse Jobs By Categories
              </h1>
              <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
                Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below.
              </p>
              <div className='flex items-center justify-center'>
                <TabList>
                  <Tab>On-Site Job</Tab>
                  <Tab>Remote Job</Tab>
                  <Tab>Hybrid</Tab>
                  <Tab>Part-Time</Tab>
                  <Tab>All Jobs</Tab>
                </TabList>
              </div>
              <motion.div
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
              </motion.div>
            </div>
          </Tabs>
        </div>
      </div>
      
      <NewSection></NewSection>
      <HowitWork></HowitWork>
    </div>
  )
}
