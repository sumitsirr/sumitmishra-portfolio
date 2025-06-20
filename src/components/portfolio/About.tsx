
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm <span className="font-semibold text-blue-700">Sumit Mishra</span> — a Computer Science graduate and 
                <span className="font-semibold text-indigo-700"> GATE CS 2025 qualifier</span> with a strong foundation in tech, content, and business.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I've built multiple platforms like <span className="font-semibold">GoCampuss</span> and <span className="font-semibold">next2campuss</span> from scratch — 
                handling everything from front-end development and UX to digital marketing, sales funnels, and user acquisition.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My work has helped <span className="font-semibold text-blue-700">thousands of students</span> in their academic journey while giving me 
                real-world experience in building, marketing, and scaling products.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
                  Full-Stack Development
                </span>
                <span className="bg-gradient-to-r from-slate-100 to-blue-100 text-slate-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
                  Digital Marketing
                </span>
                <span className="bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
                  Content Creation
                </span>
                <span className="bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
                  Business Strategy
                </span>
              </div>
            </div>
            
            <div className="relative group">
              <div className="w-full h-96 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-500/25">
                <img 
                  src="https://i.postimg.cc/kgcDkkj7/YT-Logo.jpg"
                  alt="Sumit Mishra"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
