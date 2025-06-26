import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import { IoPersonOutline } from "react-icons/io5";
import { FiMoon, FiSun } from 'react-icons/fi';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { RiHome4Line, RiArticleLine } from 'react-icons/ri';
import logo from '../assets/logo.png';

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [MenuOpenn, setIsMenuOpenn] = useState(false);

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
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme, scrolled]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'night' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const navItem = (to, text, icon) => (
    <NavLink 
      to={to} 
      className={({isActive}) => 
        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`
      }
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  );

  const userNavItem = (to, text, icon) => (
    user && (
      <NavLink 
        to={to} 
        className={({isActive}) => 
          `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`
        }
      >
        {icon}
        <span>{text}</span>
      </NavLink>
    )
  );

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 shadow-lg ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-white dark:bg-gray-900'}`}>
      <div className={`container mx-auto px-4    ${user ? 'max-w-[1240px]' : 'max-w-[1140px]'} `}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} className="h-16 w-16" alt="JOBI Logo" />
             <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
  HireHaven
</span>

            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home', <RiHome4Line size={18} />)}
            {navItem('/alljobs', 'All Jobs', <HiOutlineBriefcase size={18} />)}
            {navItem('/blogs', 'Blogs', <RiArticleLine size={18} />)}
            
            {/* User-specific links */}
            {userNavItem('/userprofile', 'Profile', <IoPersonOutline size={18} />)}
            {userNavItem('/appliedjobs', 'Applications', <HiOutlineBriefcase size={18} />)}
            {userNavItem('/addjobs', 'Post Job', <HiOutlineBriefcase size={18} />)}
            {userNavItem('/myjobs', 'My Jobs', <HiOutlineBriefcase size={18} />)}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
           

            {/* User Avatar */}
            {user && (
              <div className="relative">
                <button 
                  className="flex items-center gap-2 focus:outline-none"
                  onClick={() => setIsMenuOpenn(!MenuOpenn)}
                >
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName} 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <IoPersonOutline size={18} />
                    </div>
                  )}
                </button>

                {/* Dropdown Menu */}
                {MenuOpenn && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 border border-gray-100 dark:border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-medium">{user.displayName || 'User'}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                    </div>
                    <Link 
                      to="/userprofile" 
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Auth Buttons */}
            {!user ? (
              <div className="hidden md:flex items-center gap-2">
                <Link to="/login" className="px-4 py-2 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Sign In
                </Link>
                <Link to="/register" className="px-4 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                  Sign Up
                </Link>
              </div>
            ) : (
              <button 
                onClick={handleLogout}
                className="hidden md:block px-4 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2">
            <div className="flex flex-col gap-1">
              {navItem('/', 'Home', <RiHome4Line size={18} />)}
              {navItem('/alljobs', 'All Jobs', <HiOutlineBriefcase size={18} />)}
              {navItem('/blogs', 'Blogs', <RiArticleLine size={18} />)}
              
              {/* User-specific links */}
              {userNavItem('/userprofile', 'Profile', <IoPersonOutline size={18} />)}
              {userNavItem('/appliedjobs', 'Applications', <HiOutlineBriefcase size={18} />)}
              {navItem('/addjobs', 'Post Job', <HiOutlineBriefcase size={18} />)}
              {navItem('/myjobs', 'My Jobs', <HiOutlineBriefcase size={18} />)}

              {/* Auth Buttons */}
              {!user ? (
                <div className="flex flex-col gap-2 mt-2">
                  <Link 
                    to="/login" 
                    className="px-4 py-2 text-center rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-4 py-2 bg-gradient-to-r from-sky-400 to-indigo-500 text-white text-center rounded-lg font-medium hover:opacity-90 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors mt-2"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}