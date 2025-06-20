
import React from 'react';

const OpenToWork = () => {
  const opportunities = [
    "Front-End Development",
    "Digital Marketing", 
    "Sales & Promotions",
    "Tech/Product Management"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            I'm Open to Impactful Opportunities
          </h2>
          
          <p className="text-xl text-blue-200 mb-12 leading-relaxed">
            I'm actively seeking roles in <span className="font-semibold text-white">Front-End Development</span>, 
            <span className="font-semibold text-white"> Digital Marketing</span>, 
            <span className="font-semibold text-white"> Sales & Promotions</span>, or 
            <span className="font-semibold text-white"> Tech/Product Management</span> where I can combine my creativity, 
            tech skills, and growth mindset to solve real problems. If you're building something cool, let's connect!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 cursor-default">
                <span className="group-hover:text-blue-200 transition-colors duration-300">{opportunity}</span>
              </div>
            ))}
          </div>
          
          <button className="group relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 overflow-hidden">
            <span className="relative z-10">Let's Work Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpenToWork;
