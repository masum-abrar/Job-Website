import React from 'react'
import { Link } from 'react-router-dom'

export const SingleJob = ({job}) => {
    const {
        _id,
        jobTitle,
        jobPostingDate,
       
        applicationDeadline,
        salaryRange,
        jobCategory
       
       
      } = job || {}
  return (
    <div className="card w-96 bg-primary text-primary-content ">
    <div className="card-body">
      <h2 className="card-title"> Deadline: {new Date(applicationDeadline).toLocaleDateString()}</h2>
      <div className="badge badge-secondary p-3 bg-rose-600">{jobTitle}</div>
      <p>  </p>
      <h2 className="card-title">PostingDate : {new Date(jobPostingDate).toLocaleDateString()}</h2>
      <p className='mt-2 text-sm font-bold  '>
             Range: {salaryRange}
          </p>
          <p> {jobCategory}</p>
      <div className="card-actions justify-center">
      <Link to={`/details/${_id}`}> <button className="btn "> VIEW DETAILS</button></Link>
      
      </div>
    </div>
  </div>
  )
}
