import React, { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProviders';
import pic2 from '../assets/pic2.png';
export const JobDetails = () => {
    const { user} = useContext(AuthContext) ;
    const jobs = useLoaderData()
    console.log(jobs)
    
    const {
        _id,
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
<div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ml-[25%] mt-10">
    <img class="object-cover w-full h-64" src={pictureURL} alt="Article"/>

    <div class="p-6">
        <div>
            <span class="text-xs font-medium text-white rounded-lg  uppercase  bg-rose-600 p-3 items-center">{ jobTitle}</span>
            <span class="text-xs font-medium text-white rounded-lg  uppercase  bg-rose-600 p-3 items-center ml-[60%]">{ jobCategory}</span>
            
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{jobDescription}</p>
        </div>
        <div className='text-xl font-semibold'>
            <span>{ applicationDeadline}</span> <span className='ml-[60%]'>{ jobPostingDate}</span>
        </div>

        <div class="mt-4">
            <div class="flex items-center">
                <div class="flex items-center">
                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">{Name}</a>
                </div>
               
            </div>
           
        </div>
        <div>
                        <label htmlFor="my_modal_7" className="btn w-full bg-lime-400">Apply Now</label>
                    </div>
    </div>
    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
    <div className="modal" role="dialog">
                <div className="modal-box">
                    <form >
                        <h3 className="text-xl font-bold"></h3>
                        <p className='text-center mb-4'><span className="font-bold"> </span>Name : {Name}</p>
                        
                       <p className='text-center m-4'><span className="font-bold "> </span>Email:  {user?.email}</p>
                        <textarea className="border-2 border-black px-2 w-96 ml-10" name="additional_notes" defaultValue="Drop Your CV..." />

                       
                        <hr />
                        {/* <div className="">
                            <p><span className="font-bold">Donator Name: </span>{donator_name}</p>
                            <p><span className="font-bold">Donator Email: </span>{donator_email}</p>
                        </div> */}
                       
                        <div>
                            <button  className="btn btn-sm btn-success text-white ml-[43%]">Apply</button>
                        </div>
                    </form>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
</div>
  )
}
