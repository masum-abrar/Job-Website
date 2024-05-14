import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import AuthProvider from "./providers/AuthProviders.jsx";
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { AllJobs } from './pages/AllJobs.jsx';
import { AppliedJobs } from './pages/AppliedJobs.jsx';
import { MyJobs } from './pages/MyJobs.jsx';
import { AddJobs } from './pages/AddJobs.jsx';
import { Blogs } from './pages/Blogs.jsx';
import { UserProfile } from './pages/UserProfile.jsx';
import { JobDetails } from './pages/JobDetails.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children :[
      {
        path : "/",
        element : <Home></Home>,
      //  loader : () => fetch(`http://localhost:5000/jobs`),
   
      },
      {
        path : "/login",
        element : <Login></Login>
   
      },
      {
        path : "/register",
        element : <Register></Register>
   
      },
      {
        path : "/alljobs",
        element : <AllJobs></AllJobs>,
        loader : () => fetch(`http://localhost:5000/jobs`),
   
      },
      {
        path : "/appliedjobs",
        element : <AppliedJobs></AppliedJobs>
   
      },
      {
        path : "/addjobs",
        element : <AddJobs></AddJobs>
   
      },
      {
        path : "/myjobs",
        element : <MyJobs></MyJobs>
   
      },
      {
        path : "/blogs",
        element : <Blogs></Blogs>
   
      },
      {
        path : "/userprofile",
        element : <UserProfile></UserProfile>
   
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
         loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
      
      },
      
    ]
  },
 
 
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    


 
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
<HelmetProvider>
<RouterProvider router={router} />
</HelmetProvider>
</QueryClientProvider>
    </AuthProvider>
  

    
  </React.StrictMode>
)
