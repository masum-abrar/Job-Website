import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { SingleJob } from './SingleJob'

export const AllJobs = () => {

  const jobs = useLoaderData()



  return (
    
  <div className=''>
      <div className='flex flex-wrap gap-3 justify-center mt-4'>
      {jobs
        
        .map(job => (
        <SingleJob key={job._id} job={job}></SingleJob>
        ))}
      </div>
  </div>
  )
}
