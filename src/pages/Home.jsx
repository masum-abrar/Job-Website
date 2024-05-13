import React from 'react'
import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import { TabCategories } from '../components/TabCategories'
import { useLoaderData } from 'react-router-dom'
import { AllJobs } from './AllJobs'
import { Test } from './Test'

export const Home = () => {
  const jobs = useLoaderData()
  console.log(jobs)
  return (
    <div>

<Banner></Banner>
<TabCategories jobs={jobs}></TabCategories>
<Test></Test>
    </div>
  )
}
