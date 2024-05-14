import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProviders';
import pic2 from '../assets/pic2.png';
import axios from 'axios';
import Swal from 'sweetalert2';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
}

export const JobDetails = () => {

    const { user} = useContext(AuthContext) ;
    const [currentDate, setCurrentDate] = useState(getDate());
    const jobs = useLoaderData()
    console.log(jobs)
    
    const currentDatestring = JSON.stringify(currentDate)
    console.log(currentDatestring)
    
    const {
        _id,
        email,
        jobTitle,
        jobPostingDate,
       Name,
        applicationDeadline,
        salaryRange,
        jobCategory,
        jobApplicantsNumber,
        pictureURL,
        jobDescription
       
      } = jobs || {}
    

      const handleapplyjob = () => {
        console.log(jobs);
        const email = user?.email
        const applydata = { jobs, email}
        console.log(applydata);
   {currentDatestring >= applicationDeadline ?   
        axios.post('http://localhost:5000/applyjob', applydata)
     .then(res => {
            const data = res.data;
            console.log(data);
            if (data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Apply Requested Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
           }
        }).console.error()
        : Swal.fire({
            title: 'Sorry',
            text: 'Application Deadline is over',
            icon: 'error',
            confirmButtonText: 'Done'
        })
    }
    //console.log("hi")
    }

  return (
//     <div className="card w-96 bg-primary text-primary-content ">
//     <div className="card-body">
//       <h2 className="card-title"> Deadline: {new Date(Application_Deadline).toLocaleDateString()}</h2>
//       <div className="badge badge-secondary p-3 bg-rose-600">{Job_Title}</div>
//       <p>{Name_who_posted_the_job}</p>
//       <p className='mt-2 text-sm font-bold  '>
//              Range: {Salary_Range}
//           </p>
//       <div className="card-actions justify-center">
//        {/* <Link to={`/details/${_id}`}> <button className="btn "> VIEW DETAILS</button></Link> */}
//       </div>
//     </div>
    
//   </div>
<div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ml-[25%] mt-10">
    <img className="object-cover w-full h-64" src={pictureURL} alt="Article"/>

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-white rounded-lg  uppercase  bg-rose-600 p-3 items-center">{ jobTitle}</span>
            <span className="text-xs font-medium text-white rounded-lg  uppercase  bg-rose-600 p-3 items-center ml-[60%]">{ jobCategory}</span>
            
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{jobDescription}</p>
        </div>
        <div className='text-xl font-semibold'>
            <span>{ applicationDeadline}</span> <span className='ml-[60%]'>{ jobPostingDate}</span>
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{Name}</a>
                </div>
               
            </div>
           
        </div>
        <div>
                        <label htmlFor="my_modal_7" className="btn w-full bg-lime-400">Apply Now</label>
                    </div>
    </div>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    
                        <h3 className="text-xl font-bold">{email}</h3>
                        <p><span className="font-bold"> </span>Requested Form.</p>
                        <p><span className="font-bold">Date: </span>{currentDate}</p>
                        <img className="w-20 pt-4" src='' alt="" />
                        <p className="font-bold">Food Id: {_id}</p>
                        <input type="text" defaultValue='Drop Your CV' />

                        <p><span className="font-bold">Expire Date:</span> {applicationDeadline}</p>
                        <hr />
                        <div>
                            <button onClick={handleapplyjob} className="btn btn-sm btn-success text-white">Apply</button>
                        </div>
                    
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
</div>
  )
}
