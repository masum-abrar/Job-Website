import React from 'react'
import '../style/style.css'

import pic2 from '../assets/pic2.png';
export const Banner = () => {
  return (
    <div className='box'>
<div className='flex-row sm:gap-4 lg:flex items-center justify-around'>

<div className='text-white '>
  <h1 className='font-bold text-2xl '>
Drop Resume and Get Your <br />
Your Desire job
  </h1>
  <p>
Find Jobs , Employment and Carrer Opertunities
  </p>
  <div className="join pt-3">
  <input className="input input-bordered join-item w-full" placeholder="Email"/>
  <button className="btn join-item rounded-r-full bg-black text-white">Subscribe</button>
</div>
</div>
<div>
 <img  src={pic2} alt="" />
 </div>
</div>

    </div>
  )
}
