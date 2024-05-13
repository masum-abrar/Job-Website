import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import pic2 from '../assets/pic2.png';
export const JobDetails = () => {
    const jobs = useLoaderData()
    console.log(jobs)
    const {
        _id,
        Job_Title,
        description,
       
        Application_Deadline,
        Salary_Range,
        Name_who_posted_the_job,
        Job_Posting_Date
       
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
    <img class="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article"/>

    <div class="p-6">
        <div>
            <span class="text-xs font-medium text-white rounded-lg  uppercase  bg-rose-600 p-3 items-center">{Job_Title}</span>
            
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
        </div>
        <div className='text-xl font-semibold'>
            <span>{Application_Deadline}</span> <span className='ml-[60%]'>{Job_Posting_Date}</span>
        </div>

        <div class="mt-4">
            <div class="flex items-center">
                <div class="flex items-center">
                    <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
                    <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Jone Doe</a>
                </div>
                <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
            </div>
           
        </div>
        <button className="btn flex items-center w-full bg-lime-400"> APPLY JOB</button>
    </div>
</div>
  )
}
