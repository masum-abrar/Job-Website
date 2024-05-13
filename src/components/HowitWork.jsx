import React from 'react'
import account from '../assets/account.png';
import search from '../assets/search.png';
import apply from '../assets/apply.png';
export const HowitWork = () => {
  return (
<div>
  <div>
    <h1 className='font-bold text-black text-center mt-20 mb-12'>How It Works?</h1>
  </div>
<div className='flex gap-16 max-w-[900px] mx-auto text-center '>
        <div className=' flex-row  '>
<img src={account} className='h-[50px] w-[50px] items-center ml-24' alt="" />
<h1>Register an Account</h1>
<p> Post a job tell us about your project</p>
        </div>
        <div>
        <img src={search} className='h-[50px] w-[50px] ml-24' alt="" />
<h1>Register an Account</h1>
<p> Post a job tell us about your project</p>
        </div>
        <div>
        <img src={apply} className='h-[50px] w-[50px] ml-24' alt="" />
<h1>Register an Account</h1>
<p> Post a job tell us about your project</p>        
        </div>
    </div>
</div>
  )
}
