import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { JobCard } from './JobCard';


export const TabCategories = ({ jobs }) => {
    if (!jobs) {
        // If jobs is still loading, return a loader or a message
        return <div>Loading...</div>;
    }
    return (
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
                        </TabList>
                    </div>

                
         
              <TabPanel>
                 <div className='flex gap-3 justify-center'>
                 {jobs
              .filter(j => j.jobCategory === "On Site")
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
                 </div>
                    </TabPanel>
           
                 
                    <TabPanel>
               <div  className='flex gap-3 justify-center'>
               {jobs
              .filter(j => j.jobCategory === "Remote")
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
               </div>
                    </TabPanel>
                    <TabPanel>
                <div className='flex gap-3 justify-center'>
                {jobs
              .filter(j => j.jobCategory=== "Hybrid")
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
                </div>
                    </TabPanel>
                    <TabPanel>
               <div className='flex gap-3 justify-center'>
               {jobs
              .filter(j =>j.jobCategory === "Part-Time")
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
               </div>
                    </TabPanel>
                 </div>
               
            </Tabs>
        </div>
    );
};
