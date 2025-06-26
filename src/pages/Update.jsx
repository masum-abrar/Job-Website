import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const jobs = useLoaderData();

  const {
    _id,
    pictureURL,
    jobTitle,
    jobCategory,
    salaryRange,
    jobDescription,
    jobPostingDate,
    applicationDeadline,
    jobApplicantsNumber,
    Name,
  } = jobs;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedJob = {
      Name: form.name.value,
      pictureURL: form.pictureURL.value,
      jobTitle: form.jobTitle.value,
      jobCategory: form.jobCategory.value,
      salaryRange: form.salaryRange.value,
      jobDescription: form.jobDescription.value,
      jobPostingDate: form.jobPostingDate.value,
      applicationDeadline: form.applicationDeadline.value,
      jobApplicantsNumber: form.jobApplicantsNumber.value,
    };

    fetch(`https://job-server-site.vercel.app/updatejobs/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success',
            text: 'Successfully Updated',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          navigate(location?.state ? location.state : '/myjobs');
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <Helmet>
        <title>JOBI | Update Job</title>
      </Helmet>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-10 mt-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
            Update Job Info
          </h2>
          <p className="text-gray-500 mt-2">Edit and save your job post below</p>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        <form onSubmit={handleUpdate} className="space-y-6 text-sm text-gray-800">
          {[
            { label: 'Your Name', name: 'name', defaultValue: Name },
            { label: 'Job Banner Image URL', name: 'pictureURL', defaultValue: pictureURL },
            { label: 'Job Title', name: 'jobTitle', defaultValue: jobTitle },
            { label: 'Job Category', name: 'jobCategory', defaultValue: jobCategory },
            { label: 'Salary Range', name: 'salaryRange', defaultValue: salaryRange },
            { label: 'Posting Date', name: 'jobPostingDate', type: 'date', defaultValue: jobPostingDate },
            { label: 'Application Deadline', name: 'applicationDeadline', type: 'date', defaultValue: applicationDeadline },
            { label: 'Number of Applicants', name: 'jobApplicantsNumber', type: 'number', defaultValue: jobApplicantsNumber },
          ].map((field, i) => (
            <div key={i}>
              <label className="block font-medium mb-1">{field.label}</label>
              <input
                type={field.type || 'text'}
                name={field.name}
                defaultValue={field.defaultValue}
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          ))}

          {/* Job Description */}
          <div>
            <label className="block font-medium mb-1">Job Description</label>
            <textarea
              name="jobDescription"
              defaultValue={jobDescription}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 shadow-md"
          >
            Update Job
          </button>
        </form>
      </div>
    </div>
  );
};
