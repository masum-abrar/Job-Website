import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders';
import { Helmet } from 'react-helmet-async';

export const UserProfile = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>JOBI | USER PROFILE</title>
      </Helmet>
      
      <div className="max-w-4xl mx-auto mt-12">
        <div className="relative group">
          {/* Premium card with subtle shine effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-xl">
            {/* Profile header with gradient */}
            <div className="h-48 bg-gradient-to-r from-sky-500 to-indigo-600 flex items-end p-6">
              <div className="flex items-end space-x-6">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 opacity-75 blur"></div>
                  <img 
                    src={user?.pictureURL || 'https://via.placeholder.com/150'} 
                    alt="Profile" 
                    className="relative w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg"
                  />
                </div>
                <div className="pb-2">
                  <h2 className="text-3xl font-bold text-white">{user?.displayName}</h2>
                  <p className="text-sky-100 font-medium">Premium Member</p>
                </div>
              </div>
            </div>
            
            {/* Profile content */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-indigo-500 rounded-full mr-2"></span>
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-sky-100 dark:bg-gray-700 text-sky-600 dark:text-sky-400 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-medium text-gray-700 dark:text-gray-200">{user?.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="font-medium text-gray-700 dark:text-gray-200">+25 381 77 983</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-sky-500 rounded-full mr-2"></span>
                  Account Details
                </h3>
                
                <div className="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-inner">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Member Since</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Jan 2023</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Account Status</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Membership Tier</span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">Premium</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1">
                  Edit Profile
                </button>
              </div>
            </div>
            
            {/* Premium badge */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full shadow-md text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011-1h8a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-1-1V2zm11 0H6v14h8V2z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Premium
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}