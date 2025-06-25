
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1TN3ALUDhPsfmsrw_ggikRQHFaUVOIxjP/view?usp=sharing', '_blank');
  };

  const openYouTube = () => {
    window.open('http://www.youtube.com/@SumitMishra77', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Much Darker Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/90 via-slate-950/70 to-indigo-950/95"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/40 to-slate-950/70"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-800/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 animate-fade-in tracking-tight" 
              style={{ fontFamily: 'Vilane, Roboto, Moderne Sans, Simplifica, Bebas Neue, cursive', letterSpacing: '0.1em' }}>
            SUMIT MISHRA
          </h1>
          
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 mb-6 sm:mb-8 font-medium animate-fade-in delay-200 px-2 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Front-End Developer | Digital Marketer | Tech Creator | GATE CS 2025 Qualified
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-5xl mx-auto animate-fade-in delay-300 leading-relaxed whitespace-nowrap"
             style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            "Building user-first platforms and scaling them with content, code, and creativity."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in delay-500">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800 text-white px-12 py-4 font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 overflow-hidden border border-blue-600/30 hover:border-blue-400/50 rounded-lg"
            >
              <span className="relative z-10">HIRE ME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            <button 
              onClick={openResume}
              className="group relative border-2 border-blue-400/60 hover:border-blue-300/80 text-white px-12 py-4 font-bold text-lg transition-all duration-500 hover:bg-blue-900/40 backdrop-blur-sm overflow-hidden rounded-lg"
            >
              <span className="relative z-10">VIEW RESUME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            <button 
              onClick={openYouTube}
              className="group relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800 text-white px-12 py-4 font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 overflow-hidden border border-blue-600/30 hover:border-blue-400/50 rounded-lg"
            >
              <span className="relative z-10">CHECK MY YOUTUBE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-300/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
