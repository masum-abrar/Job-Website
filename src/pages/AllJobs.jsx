import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SingleJob } from './SingleJob';

export const AllJobs = () => {
  const jobs = useLoaderData();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(jobs);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredJobs = jobs.filter(job =>
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredJobs);
  };

  return (
    <div className="">
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search by job title"
          className="border p-2 rounded-md"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="btn ml-2" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {searchResults.map(job => (
          <SingleJob key={job._id} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};
