import React, { useState, useEffect } from 'react';
import '../style/style.css';
import { FiSearch, FiUpload, FiBriefcase, FiArrowRight } from 'react-icons/fi';

// Import your images
import jobSearch from '../assets/pic.jpg';
import interview from '../assets/pic1.jpg';
import careerGrowth from '../assets/pic4.jpg';
import { Link } from 'react-router-dom';
export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Your Dream Career Starts Here",
      description: "Let top employers compete for your talent with our AI-powered matching system",
      image: jobSearch,
      cta: "Upload Resume",
      icon: <FiUpload className="ml-2" />
    },
    {
      title: "Discover 10,000+ Opportunities",
      description: "Exclusive listings from tech giants to innovative startups across all industries",
      image: interview,
      cta: "Explore Jobs",
      icon: <FiBriefcase className="ml-2" />
    },
    {
      title: "Career Growth Accelerated",
      description: "Personalized coaching and skill development to fast-track your success",
      image: careerGrowth,
      cta: "Get Started",
      icon: <FiArrowRight className="ml-2" />
    }
  ];

  // Auto-rotate slides with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
      {/* Glass morphism background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm"></div>
      
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 mt-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content with animated entrance */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight animate-slideUp">
                {slides[currentSlide].title}
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slideUp delay-100">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Animated search bar */}
            <div className="max-w-xl mx-auto lg:mx-0 animate-slideUp delay-200">
              <div className="relative flex items-center bg-white/20 backdrop-blur-md rounded-full overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300">
                <FiSearch className="absolute left-6 text-white/80" size={20} />
                <input 
                  type="text" 
                  className="w-full py-3 lg:py-5 pl-16 pr-6 bg-transparent text-white placeholder-white/70 focus:outline-none"
                  placeholder="Job title, skills, or company"
                />
               <button className="absolute right-1 sm:right-2 bg-white text-indigo-600 font-medium px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 rounded-full hover:bg-gray-100 transition-colors flex items-center text-xs sm:text-sm md:text-base">
  {slides[currentSlide].cta}
  <span className="ml-1 sm:ml-2">{slides[currentSlide].icon}</span>
</button>
              </div>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4 animate-slideUp delay-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80">Jobs Posted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-white/80">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image with parallax effect */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-full w-full aspect-square max-w-lg mx-auto">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-1000 rounded-2xl shadow-xl border-4 border-white/20"
              />
              {/* Floating badge */}
          <Link to="/alljobs" >
             <div className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 bg-white text-indigo-600 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-full shadow-lg text-xs sm:text-sm md:text-base font-medium flex items-center animate-bounce whitespace-nowrap">
  New Jobs Daily <FiArrowRight className="ml-1 sm:ml-2" size={14} />
</div>
          </Link>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="flex justify-center lg:justify-start gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};