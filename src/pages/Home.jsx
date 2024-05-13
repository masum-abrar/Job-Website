import React, { useState,useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import { TabCategories } from '../components/TabCategories'
import { useLoaderData } from 'react-router-dom'
import { AllJobs } from './AllJobs'
import { Test } from './Test'

export const Home = () => {
  const jobs = useLoaderData()
  console.log(jobs)

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
<Test></Test>
    </div>
  )
}
