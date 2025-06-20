
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Git/GitHub", "Figma"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Marketing & Sales", 
      skills: ["Digital Strategy", "SEO", "Instagram Reels Marketing", "Performance Marketing"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Brand & Content",
      skills: ["YouTube SEO", "Scriptwriting", "Video Editing", "Graphic Designing"],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      title: "Business & Management",
      skills: ["PG Onboarding", "Student Handling", "B2B Outreach", "Community Building"],
      color: "from-pink-500 to-pink-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Tech Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-white text-xl font-bold">{category.title.charAt(0)}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
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
