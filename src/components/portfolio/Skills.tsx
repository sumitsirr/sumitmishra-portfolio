
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Git/GitHub", "Figma"],
      color: "from-blue-700 to-indigo-800"
    },
    {
      title: "Marketing & Sales", 
      skills: ["Digital Strategy", "SEO", "Instagram Reels Marketing", "Performance Marketing"],
      color: "from-slate-700 to-blue-800"
    },
    {
      title: "Brand & Content",
      skills: ["YouTube SEO", "Scriptwriting", "Video Editing", "Graphic Designing"],
      color: "from-indigo-700 to-blue-800"
    },
    {
      title: "Business & Management",
      skills: ["PG Onboarding", "Student Handling", "B2B Outreach", "Community Building"],
      color: "from-blue-800 to-slate-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent tracking-tight"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
            Skills & Tech Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="group bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-100 hover:border-blue-300/50 cursor-pointer">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-2xl`}>
                  <span className="text-white text-2xl font-bold">{category.title.charAt(0)}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-6 group-hover:text-blue-800 transition-colors duration-300"
                    style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center group/skill">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-4 transform transition-all duration-300 group-hover/skill:scale-150 group-hover/skill:shadow-lg"></div>
                      <span className="text-gray-700 group-hover/skill:text-blue-700 transition-colors duration-300 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
