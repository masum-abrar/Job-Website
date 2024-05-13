import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SingleJob } from './SingleJob';
import SearchIcon from '@material-ui/icons/Search';

export const AllJobs = () => {
  const jobs = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="">
      <div className="flex justify-center mt-4">
        <div className="flex items-center border rounded-md px-2">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by job title"
            className="border-none outline-none ml-2"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {filteredJobs.map(job => (
          <SingleJob key={job._id} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};
