
import React from 'react';

const OpenToWork = () => {
  const opportunities = [
    "Front-End Development",
    "Digital Marketing", 
    "Sales & Promotions",
    "Tech/Product Management"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12 tracking-tight"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
            I'm Open to Impactful Opportunities
          </h2>
          
          <p className="text-xl text-blue-200 mb-16 leading-relaxed max-w-4xl mx-auto">
            I'm actively seeking roles in <span className="font-bold text-white">Front-End Development</span>, 
            <span className="font-bold text-white"> Digital Marketing</span>, 
            <span className="font-bold text-white"> Sales & Promotions</span>, or 
            <span className="font-bold text-white"> Tech/Product Management</span> where I can combine my creativity, 
            tech skills, and growth mindset to solve real problems. If you're building something cool, let's connect!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-6 text-white font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 cursor-default">
                <span className="group-hover:text-blue-200 transition-colors duration-300"
                      style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                  {opportunity}
                </span>
              </div>
            ))}
          </div>
          
          <button className="group relative bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-16 py-6 font-black text-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-green-500/30 overflow-hidden border border-green-600/30 hover:border-green-400/50">
            <span className="relative z-10" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>LET'S WORK TOGETHER</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-green-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpenToWork;
