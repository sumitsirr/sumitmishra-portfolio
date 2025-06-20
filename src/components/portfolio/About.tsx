
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm <span className="font-semibold text-purple-600">Sumit Mishra</span> — a Computer Science graduate and 
                <span className="font-semibold text-blue-600"> GATE CS 2025 qualifier</span> with a strong foundation in tech, content, and business.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I've built multiple platforms like <span className="font-semibold">GoCampuss</span> and <span className="font-semibold">next2campuss</span> from scratch — 
                handling everything from front-end development and UX to digital marketing, sales funnels, and user acquisition.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My work has helped <span className="font-semibold text-purple-600">thousands of students</span> in their academic journey while giving me 
                real-world experience in building, marketing, and scaling products.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  Full-Stack Development
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Digital Marketing
                </span>
                <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                  Content Creation
                </span>
                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
                  Business Strategy
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=600&fit=crop&crop=face"
                  alt="Sumit Mishra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
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
