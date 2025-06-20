
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Git/GitHub", "Figma"],
      color: "from-blue-600 to-indigo-700"
    },
    {
      title: "Marketing & Sales", 
      skills: ["Digital Strategy", "SEO", "Instagram Reels Marketing", "Performance Marketing"],
      color: "from-slate-600 to-blue-700"
    },
    {
      title: "Brand & Content",
      skills: ["YouTube SEO", "Scriptwriting", "Video Editing", "Graphic Designing"],
      color: "from-indigo-600 to-blue-700"
    },
    {
      title: "Business & Management",
      skills: ["PG Onboarding", "Student Handling", "B2B Outreach", "Community Building"],
      color: "from-blue-700 to-slate-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Skills & Tech Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-blue-200">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                  <span className="text-white text-xl font-bold">{category.title.charAt(0)}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center group/skill">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 transform transition-all duration-300 group-hover/skill:scale-150"></div>
                      <span className="text-gray-700 group-hover/skill:text-blue-600 transition-colors duration-300">{skill}</span>
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
