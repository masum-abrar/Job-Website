import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Update = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const jobs = useLoaderData();
    console.log(jobs)
   const { _id, pictureURL, jobTitle, jobCategory,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber,Name} = jobs
    
   const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const Name=form.name.value;
        const pictureURL=form.pictureURL.value;
        const jobTitle=form.jobTitle.value;
        const jobCategory=form.jobCategory.value;
        const salaryRange=form.salaryRange.value; 
        const jobDescription=form.jobDescription.value; 
        const jobPostingDate=form.jobPostingDate.value; 
        const applicationDeadline=form.applicationDeadline.value;
        const jobApplicantsNumber=form.jobApplicantsNumber.value;

        
   const UpdateJob ={ pictureURL, jobTitle, jobCategory,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber,Name}
   console.log(UpdateJob);

        fetch(`http://localhost:5000/updatejobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(UpdateJob);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    navigate(location?.state ? location.state : '/myjobs')
                }
            })
        }

  return (
    <div className="max-w-xl mx-auto">
       <Helmet>
        <title> JOBI | UPDATE</title>
       
      </Helmet>
     
      <h1 className="text-2xl font-bold mb-4 text-center">Update the Job</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
      <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
          defaultValue={Name}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Picture URL of the Job Banner:</label>
          <input
            type="text"
            name="pictureURL"
          defaultValue={pictureURL}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
           defaultValue={jobTitle}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Job Category:</label>
          <input
            type="text"
            name="jobCategory"
          defaultValue={jobCategory}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Salary Range:</label>
          <input
            type="text"
            name="salaryRange"
            defaultValue={salaryRange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Job Description:</label>
          <textarea
            name="jobDescription"
         defaultValue={jobDescription}
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Job Posting Date:</label>
          <input
            type="date"
            name="jobPostingDate"
           defaultValue={jobPostingDate}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Application Deadline:</label>
          <input
            type="date"
            name="applicationDeadline"
         defaultValue={applicationDeadline}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Job Applicant Number:</label>
          <input
            type="text"
            name="jobApplicantsNumber"
         defaultValue={jobApplicantsNumber}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  )
}
