import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import { IoPersonOutline } from "react-icons/io5";


export const Navbar = () => {

const { user, logOut } = useContext(AuthContext) ;


    const handleLogout = () => {
        logOut()
            .then(() => console.log('logOut'))
            .catch(error => console.error(error))
    }

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
  //console.log(theme)
  const navItem = <>
    <NavLink to='/' className={({isActive})=> isActive? ' text-rose-600  font-bold   ' : 'font-bold'}>
           Home
            </NavLink>
              <NavLink to='/alljobs' className={({isActive})=> isActive? ' text-rose-600   font-bold' : 'font-bold'}>
              All Jobs
              </NavLink>
         

            <NavLink to='/blogs' className={({isActive})=> isActive? ' text-rose-600 font-bold' : 'font-bold'}>
             Bolgs
            </NavLink>
  </>
  return (
    <div className={`navbar  `}>

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52 gap-10 text-black">
            <NavLink to='/' className={({isActive})=> isActive ? 
            'border-solid border border-lime-400 rounded  font-bold   ' : 'text-rose-600 font-bold'
            }>
           Home
            </NavLink>
                <NavLink to='/updateprofile' className={({isActive})=> isActive? 'text-rose-600 font-bold' : 'font-bold'}>
             Add list
              </NavLink>
              <NavLink to='/contact' className={({isActive})=> isActive? 'text-rose-600  font-bold' : 'font-bold'}>
           Contact Us {user?.email}
           
            </NavLink>
       
       
      
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"> JOBI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10 text-black">
          {navItem}
           
            
       {
          user && <>
        <NavLink to='/userprofile' className={({isActive})=> isActive? ' text-rose-600 font-bold' : 'font-bold'}>
             User Profile
            </NavLink>
                 <NavLink to='/appliedjobs' className={({isActive})=> isActive? ' text-rose-600 font-bold' : 'font-bold'}>
              Applied Jobs
            </NavLink>
            <NavLink to='/addjobs' className={({isActive})=> isActive? ' text-rose-600 font-bold' : 'font-bold'}>
             Add Jobs
            </NavLink>
            <NavLink to='/myjobs' className={({isActive})=> isActive? ' text-rose-600 font-bold' : 'font-bold'}>
             My Jobs
            </NavLink>
            </>
       }
           
            {user?.email}
            <p></p>
     
          </ul>
        </div>
        <div className="navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom ">
    
        <div className="w-10 rounded-full " >
        {
                        user && <>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle z-[9999] avatar" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="right">
                                {user.photoURL ? <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                                    : <div className="rounded-full pt-3 pl-3 w-10"><IoPersonOutline></IoPersonOutline></div>
                                }
                            </div>
                        </>
                    }
                    </div>
        <div>
          
          </div>
         
      </div>
    
       <>
         
           {
          !user ? <>
         <Link to='/login'>  <a className="btn bg-rose-600 text-white ">Sign In</a></Link>
         <Link to='/register'> <a className="btn bg-lime-400 text-white">Sign Up</a></Link>
      </>
      :
      
      <Link to='/login'><a  className="btn bg-rose-600 text-white" onClick={handleLogout}>Logout</a></Link>
    
      } 
      </>
      <label className="cursor-pointer grid place-items-center ml-4">
  <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    
        </div>
    

        <Tooltip id="my-tooltip" />
      </div>
      )
}