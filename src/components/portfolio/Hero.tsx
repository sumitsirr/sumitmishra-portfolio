
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-800/20 to-indigo-700/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Sumit Mishra
          </h1>
          
          <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-medium animate-fade-in delay-200">
            Front-End Developer | Digital Marketer | Tech Creator | GATE CS 2025 Qualified
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in delay-300">
            "Building user-first platforms and scaling them with content, code, and creativity."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in delay-500">
            <button className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </button>
            <button className="group relative border-2 border-blue-400/50 hover:border-blue-300 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:bg-blue-900/30 backdrop-blur-sm overflow-hidden">
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="group relative bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:from-slate-600 hover:via-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-slate-500/25 overflow-hidden">
              <span className="relative z-10">Watch YouTube</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-300/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
