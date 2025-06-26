import React from 'react';
import { Link } from 'react-router-dom';

export const NewSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Career Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
              Elevate Your
            </span>{' '}
            Career Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Where exceptional talent meets extraordinary opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Employer Card - Glass Morphism Effect */}
          <div className="relative group overflow-hidden rounded-2xl h-[400px] transition-all duration-700 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-90 z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center transition-all duration-1000 group-hover:scale-110"></div>
            
            <div className="relative z-20 h-full flex flex-col justify-center px-10 text-center backdrop-blur-sm bg-white/5 rounded-2xl border border-white/20">
              <div className="mb-8 transform transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Hire Top Talent</h3>
                <p className="text-sky-100/90 max-w-md mx-auto text-lg leading-relaxed">
                  Access our exclusive network of pre-vetted professionals ready to drive your business forward.
                </p>
              </div>
              <Link 
                to="/addjobs" 
                className="mt-4 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-indigo-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg mx-auto w-max"
              >
                Post Opportunities
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Job Seeker Card - Glass Morphism Effect */}
          <div className="relative group overflow-hidden rounded-2xl h-[400px] transition-all duration-700 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-90 z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center transition-all duration-1000 group-hover:scale-110"></div>
            
            <div className="relative z-20 h-full flex flex-col justify-center px-10 text-center backdrop-blur-sm bg-white/5 rounded-2xl border border-white/20">
              <div className="mb-8 transform transition-all duration-500 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Find Dream Jobs</h3>
                <p className="text-sky-100/90 max-w-md mx-auto text-lg leading-relaxed">
                  Discover hand-picked positions from innovative companies that value your expertise.
                </p>
              </div>
              <Link 
                to="/alljobs" 
                className="mt-4 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-indigo-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg mx-auto w-max"
              >
                Explore Careers
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2">
            <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500"></div>
            <span className="text-sm font-medium text-gray-500">TRUSTED BY INDUSTRY LEADERS</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500"></div>
          </div>
       <div className="mt-12">
  <div className="relative overflow-hidden py-6">
    {/* Gradient fade edges */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
    
    {/* Infinite scrolling logos */}
    <div className="flex items-center space-x-16 animate-infinite-scroll">
      {[...Array(3)].map((_, i) => (
        <React.Fragment key={i}>
          {[
            { name: 'Google', color: 'from-blue-500 to-green-500' },
            { name: 'Microsoft', color: 'from-blue-600 to-green-500' },
            { name: 'Apple', color: 'from-gray-800 to-gray-600' },
            { name: 'Amazon', color: 'from-orange-400 to-yellow-500' },
            { name: 'Netflix', color: 'from-red-600 to-red-800' },
            { name: 'Tesla', color: 'from-red-500 to-gray-800' },
            { name: 'Meta', color: 'from-blue-600 to-purple-600' },
            { name: 'Adobe', color: 'from-red-500 to-pink-600' }
          ].map((company) => (
            <div 
              key={`${company.name}-${i}`} 
              className="flex-shrink-0 group relative"
            >
              {/* Base logo (grayscale) */}
              <img 
                src={`https://logo.clearbit.com/${company.name.toLowerCase()}.com`} 
                alt={company.name}
                className="h-14 object-contain opacity-90 grayscale"
              />
              
              {/* Colored overlay (shown on hover) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-80 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Pure colored version (shown on hover) */}
              <img 
                src={`https://logo.clearbit.com/${company.name.toLowerCase()}.com`} 
                alt=""
                className="absolute inset-0 h-14 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};