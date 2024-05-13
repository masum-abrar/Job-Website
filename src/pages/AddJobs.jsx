import  { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import Swal from 'sweetalert2';

export const AddJobs = () => {
  const {user} =useContext(AuthContext);
  // const [formData, setFormData] = useState({
  //   pictureURL: '',
  //   jobTitle: '',
  //   jobCategory: '',
  //   salaryRange: '',
  //   jobDescription: '',
  //   jobPostingDate: '',
  //   applicationDeadline: '',
  //   jobApplicantsNumber: 0,
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
   const pictureURL=form.pictureURL.value;
   const jobTitle=form.jobTitle.value;
   const jobCategory=form.jobCategory.value;
   const salaryRange=form.salaryRange.value; 
   const jobDescription=form.jobDescription.value; 
   const jobPostingDate=form.jobPostingDate.value; 
   const applicationDeadline=form.applicationDeadline.value;
   const jobApplicantsNumber=form.jobApplicantsNumber.value;
   const email = user?.email;

   const newJob ={ email, pictureURL, jobTitle, jobCategory,salaryRange,jobDescription,jobPostingDate,applicationDeadline,jobApplicantsNumber}
console.log(newJob)
   axios.post("http://localhost:5000/jobs", newJob)
   .then(res => {
       const data = res.data;
       console.log(data);
       if (data.insertedId){
           Swal.fire({
               title: 'Success',
               text: 'New Job Added Successfully',
               icon: 'success',
               confirmButtonText: 'Done'
           })
       }
   })
  
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add A Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Picture URL of the Job Banner:</label>
          <input
            type="text"
            name="pictureURL"
          
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
           
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Job Category:</label>
          <input
            type="text"
            name="jobCategory"
          
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Salary Range:</label>
          <input
            type="text"
            name="salaryRange"
            
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Job Description:</label>
          <textarea
            name="jobDescription"
         
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Job Posting Date:</label>
          <input
            type="date"
            name="jobPostingDate"
           
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Application Deadline:</label>
          <input
            type="date"
            name="applicationDeadline"
         
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Job Applicant Number:</label>
          <input
            type="text"
            name="jobApplicantsNumber"
         defaultValue="0"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

