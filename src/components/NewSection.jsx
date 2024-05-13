import React from 'react'
import '../style/style.css'
import { Link } from 'react-router-dom'
export const NewSection = () => {
  return (
    <div>
<div className='flex mt-12 '>
<div className='bg-lime-200  h-[200px] w-[50%] rec bg-black relative space-y-4' >
<h1 className='text-center text-white font-bold mt-7 relative '>I AM RECUITER</h1>
<p className='text-center text-white relative'> Dynamic and results-driven job recruiter with a passion for connecting talented <br />  individuals with rewarding career opportunities.  </p>
<Link to="/addjobs"> <button className='btn relative ml-[42%] mt-3'>Post New Job</button></Link>
<img src="" alt="" />
</div>
<div className=' backdrop-brightness-50 h-[200px] w-[50%] rec2 bg-lime-200 relative space-y-4'>
<h1 className='text-center text-white font-bold mt-7 relative'>I AM JOBSEEKER</h1>
<p className='text-center text-white relative'> one of our job has some kind flexiblaity <br /> option such part time ,full time and many more</p>
<Link to="/alljobs"> <button className='btn relative ml-[42%] mt-3'>Browse Job</button></Link>
</div>
</div>
    </div>
  )
}
