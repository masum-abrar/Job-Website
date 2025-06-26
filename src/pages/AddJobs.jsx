import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export const AddJobs = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.name.value;
    const pictureURL = form.pictureURL.value;
    const jobTitle = form.jobTitle.value;
    const jobCategory = form.jobCategory.value;
    const salaryRange = form.salaryRange.value;
    const jobDescription = form.jobDescription.value;
    const jobPostingDate = form.jobPostingDate.value;
    const applicationDeadline = form.applicationDeadline.value;
    const jobApplicantsNumber = form.jobApplicantsNumber.value;
    const email = user?.email;

    const newJob = {
      email,
      pictureURL,
      jobTitle,
      jobCategory,
      salaryRange,
      jobDescription,
      jobPostingDate,
      applicationDeadline,
      jobApplicantsNumber,
      Name,
    };

    axios.post('https://job-server-site.vercel.app/jobs', newJob).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: 'Success',
          text: 'New Job Added Successfully',
          icon: 'success',
          confirmButtonText: 'Done',
        });
        form.reset();
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <Helmet>
        <title>JOBI | Add Job</title>
      </Helmet>

    <div className='mt-12'>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-10 mt-14"
      >
        <div className="text-center mb-10 ">
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
              Post a New Job
            </span>
          </h2>
          <p className="text-gray-500 mt-2">Fill in the details below to publish a job listing</p>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-sm text-gray-800">
          {/* Input Fields */}
          {[
            { label: 'Your Name', name: 'name', type: 'text' },
            { label: 'Job Banner Image URL', name: 'pictureURL', type: 'text' },
            { label: 'Job Title', name: 'jobTitle', type: 'text' },
            { label: 'Job Category', name: 'jobCategory', type: 'text' },
            { label: 'Salary Range', name: 'salaryRange', type: 'text' },
            { label: 'Posting Date', name: 'jobPostingDate', type: 'date' },
            { label: 'Application Deadline', name: 'applicationDeadline', type: 'date' },
            { label: 'Number of Applicants', name: 'jobApplicantsNumber', type: 'number', defaultValue: 0 },
          ].map((field, i) => (
            <div key={i}>
              <label className="block font-medium mb-1">{field.label}</label>
              <input
                type={field.type}
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
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white font-semibold rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 shadow-md"
          >
            Submit Job
          </button>
        </form>
      </motion.div>
    </div>
    </div>
  );
};
