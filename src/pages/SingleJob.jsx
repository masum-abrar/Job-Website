import React from 'react'
import { Link } from 'react-router-dom'

export const SingleJob = ({job}) => {
    const {
        _id,
        Job_Title,
        description,
       
        Application_Deadline,
        Salary_Range,
        Name_who_posted_the_job
       
      } = job || {}
  return (
    <div className="card w-96 bg-primary text-primary-content ">
    <div className="card-body">
      <h2 className="card-title"> Deadline: {new Date(Application_Deadline).toLocaleDateString()}</h2>
      <div className="badge badge-secondary p-3 bg-rose-600">{Job_Title}</div>
      <p>{Name_who_posted_the_job}</p>
      <p className='mt-2 text-sm font-bold  '>
             Range: {Salary_Range}
          </p>
      <div className="card-actions justify-center">
      <Link to={`/details/${_id}`}> <button className="btn "> VIEW DETAILS</button></Link>
      
      </div>
    </div>
  </div>
  )
}
