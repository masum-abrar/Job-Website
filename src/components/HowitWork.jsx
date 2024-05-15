import React from 'react'
import account from '../assets/account.png';
import search from '../assets/search.png';
import apply from '../assets/apply.png';
export const HowitWork = () => {
  return (
<div>
  <div>
    <h1 className='font-bold text-black text-center mt-20 mb-12 text-2xl'>How It Works?</h1>
  </div>
<div className='flex-row lg:flex gap-16 max-w-[900px] mx-auto text-center '>
        <div className=' flex-row  '>
<img src={account} className='h-[50px] w-[50px] items-center lg:ml-24 sm:ml-96' alt="" />
<h1>Register an Account</h1>
<p> Post a job tell us about your project</p>
        </div>
        <div>
        <img src={search} className='h-[50px] w-[50px] lg:ml-28 sm:ml-96' alt="" />
<h1>Find a job</h1>
<p>  many kind of job available in many categories</p>
        </div>
        <div>
        <img src={apply} className='h-[50px] w-[50px] lg:ml-24 sm:ml-96' alt="" />
<h1>Post for a job</h1>
<p> Post a job tell us about your project</p>        
        </div>
    </div>
</div>
  )
}
