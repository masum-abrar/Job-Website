import React, { useState,useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import { TabCategories } from '../components/TabCategories'
import { useLoaderData } from 'react-router-dom'
import { AllJobs } from './AllJobs'
import { Test } from './Test'
import { NewSection } from '../components/NewSection'
import { HowitWork } from '../components/HowitWork'
//import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const jobs = useLoaderData()
  console.log(jobs)

  // const { isPending, isError, error, data: foods } = useQuery({
  //       queryKey: ['foods'],
  //       queryFn: async () => {
  //           const res = await fetch('http://localhost:8000/foods');
  //           return res.json();
  //       }
  //   })
  //   console.log(foods);


  //   if (isPending) {
  //       return <span className="loading loading-spinner text-primary"></span>
  //   }

  //   if (isError) {
  //       return <p>{error.message}</p>
  //   }

  const [theme, setTheme] = useState(() => {
    
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
});

useEffect(() => {
    
    document.querySelector('html').setAttribute('data-theme', theme);
}, [theme]);

const handleToggle = (e) => {
    const newTheme = e.target.checked ? 'night' : 'light';
    setTheme(newTheme);
    
    localStorage.setItem('theme', newTheme);
};
console.log(theme)


  return (
    <div>

<Banner></Banner>
<TabCategories jobs={jobs}></TabCategories>
{/* <Test></Test> */}
<NewSection></NewSection>
<HowitWork></HowitWork>
    </div>
  )
}
