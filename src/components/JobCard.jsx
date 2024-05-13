import React from 'react'
import { Link } from 'react-router-dom'
import '../style/style.css'
export const JobCard = ({job}) => {



    const {
      _id,
        jobTitle,
        jobPostingDate,
       Name,
        applicationDeadline,
        salaryRange,
        jobCategory,
        jobApplicantsNumber
       
      } = job || {}
  return (
    
    // <Link
    // //   to={`/job/${_id}`}
    //   className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    // >
    //   <div className='flex items-center justify-between'>
    //     <span className='text-xs font-light text-gray-800 '>
    //       Deadline: {new Date(Application_Deadline).toLocaleDateString()}
    //     </span>
    //     <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
    //       {/* {category} */}
    //     </span>
    //   </div>

    //   <div>
    //     <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
    //       {Job_Title}
    //     </h1>

    //     <p className='mt-2 text-sm text-gray-600 '>
    //       {/* {description.substring(0, 70)}... */}
    //     </p>
    //     <p className='mt-2 text-sm font-bold text-gray-600 '>
    //       {/* Range: ${min_price} - ${max_price} */}
    //     </p>
    //   </div>
    // </Link>
    <div className="card w-96 bg-primary text-primary-content ">
  <div className="card-body">
    <h1 className="badge badge-secondary p-4 bg-rose-600 absolute bottom-[296px] left-[303px]">{jobCategory}
    
    </h1>
    <h2 className="card-title"> Deadline: {new Date(applicationDeadline).toLocaleDateString()}</h2>
    
    <h2 className="card-title"> PostingDate: {new Date( jobPostingDate).toLocaleDateString()}</h2>
    
    <p>{ Name}</p>
    <div className="badge badge-secondary p-4 bg-rose-600 ">{jobTitle}</div>
    <p className='mt-2 text-sm font-bold  '>
           Range: {salaryRange}
        </p>
        <p className='mt-2 text-sm font-bold  '>
        ApplicantsNumber: {jobApplicantsNumber}
        </p>
    <div className="card-actions justify-center">
     <Link to={`/details/${_id}`}> <button className="btn "> VIEW DETAILS</button></Link>
    </div>
  </div>
</div>
  )
}
