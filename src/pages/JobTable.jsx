import React from 'react'

export const JobTable = ({job, handleDelete, handleUpdate }) => {
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
    <tr>
    <td>
        
            {jobTitle}
       
    </td>
    <td>
        {  jobCategory}
    </td>
    <td>{ jobPostingDate}</td>
    <td>{salaryRange}</td>
    <td>
        <button onClick={() => handleUpdate(_id)} className="btn btn-sm">Update</button>
    </td>
    <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
    </th>
    {/* <th>
        {
            status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
    </th> */}
</tr>
  )
};