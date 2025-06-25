
import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology (B.Tech) – CSIT",
      institution: "KIET Group of Institutions, Delhi-NCR",
      period: "2022 – 2026 (Pursuing)",
      description: "Worked on major tech projects: Deepfake Detection System, Driver Drowsiness Alert System, and Student Roadmap Guide Website (TechRoadmap)",
      highlights: [
        "Led the Digital Marketing Team at a college-based startup named StayEz (2024), where I helped thousands of students find PG accommodations during physical reporting and admission season",
        "Promoted the website, collaborated with PG owners",
        "Handled student queries and guided them through PG and admission processes"
      ],
      icon: GraduationCap,
      gradient: "from-blue-700 to-indigo-800"
    },
    {
      title: "Intermediate (Class 12th)",
      institution: "Aster Public School, Greater Noida",
      period: "Completed in 2022",
      description: "Participated in debates, science symposiums, and inter-school competitions, showcasing strong communication and logical thinking",
      highlights: [
        "Anchored the annual school function twice at Gautam Buddha Nagar University Auditorium, Greater Noida, reflecting early development of soft skills and public speaking abilities"
      ],
      icon: BookOpen,
      gradient: "from-slate-700 to-blue-800"
    },
    {
      title: "Matriculation (Class 10th)",
      institution: "Aster Public School, Greater Noida",
      period: "Completed in 2020",
      description: "Engaged in various school-level competitions and presentations",
      highlights: [
        "Developed confidence, communication, and team coordination skills through active school involvement"
      ],
      icon: BookOpen,
      gradient: "from-indigo-700 to-blue-800"
    }
  ];

  const certifications = [
    {
      name: "Palo Alto Networks Cybersecurity Academy",
      date: "Aug 11, 2024",
      gradient: "from-blue-700 to-indigo-800",
      link: "https://drive.google.com/file/d/1ZbV5T8ykg5ojr7F63zOSTeuECAhBvhxc/view?usp=sharing"
    },
    {
      name: "LinkedIn Full Stack Developer Certificate",
      date: "Dec 11, 2023",
      gradient: "from-slate-700 to-blue-800",
      link: "https://drive.google.com/file/d/1mgTsFhCU4WvrpAi3-6gc5ik0Hoifq4Dc/view?usp=sharing"
    },
    {
      name: "LinkedIn Canva Essential Training",
      date: "Dec 13, 2023",
      gradient: "from-indigo-700 to-blue-800",
      link: "https://drive.google.com/file/d/1QFzBEaG78UroX3XF1f5bwMX1965w5mo-/view?usp=sharing"
    },
    {
      name: "Cisco Python Essentials 1",
      date: "22 June 2025",
      gradient: "from-green-700 to-teal-800",
      link: "https://drive.google.com/file/d/1DIYcEFCVQ85PA7ZI2J2W7v_dMYAcY-wG/view?usp=sharing"
    },
    {
      name: "Cisco Python Essentials 2",
      date: "22 June 2025",
      gradient: "from-purple-700 to-blue-800",
      link: "https://drive.google.com/file/d/1WROVVR9arOgWDuClX8_TkAjWLM6W1M81/view?usp=sharing"
    },
    {
      name: "Cisco C++ Essentials 1",
      date: "23 June 2025",
      gradient: "from-red-700 to-orange-800",
      link: "https://drive.google.com/file/d/1YRcKPdXVejIUlnHyxLDPpWnEo6kpnciO/view?usp=sharing"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-white tracking-tight"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
            Education & Certifications
          </h2>
          
          {/* Education Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-black mb-12 text-white tracking-tight flex items-center"
                style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
              📚 Education
            </h3>
            
            <div className="space-y-8">
              {educationData.map((education, index) => {
                const IconComponent = education.icon;
                return (
                  <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] border border-white/20 hover:border-blue-300/50">
                    <div className="p-8">
                      <div className="flex items-start gap-6">
                        <div className={`w-14 h-14 bg-gradient-to-r ${education.gradient} rounded-lg flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-2xl`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-2xl font-black mb-2 text-white group-hover:scale-105 transition-transform duration-300 tracking-tight"
                              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
                            {education.title}
                          </h4>
                          
                          <div className="text-blue-300 font-semibold mb-2"
                               style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                            {education.institution}
                          </div>
                          
                          <div className="text-gray-400 font-medium mb-4">
                            {education.period}
                          </div>
                          
                          <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-lg">
                            {education.description}
                          </p>
                          
                          <ul className="space-y-2">
                            {education.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex} className="flex items-start text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0 transform transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <h3 className="text-3xl font-black mb-12 text-white tracking-tight flex items-center"
                style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
              📜 Certifications
            </h3>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {certifications.map((cert, index) => (
                <a 
                  key={index} 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-6 hover:scale-[1.02] border border-white/20 hover:border-blue-300/50 cursor-pointer block"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${cert.gradient} rounded-lg flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-2xl`}>
                    <Award className="text-white" size={24} />
                  </div>
                  
                  <h4 className="text-lg font-black mb-4 text-white group-hover:scale-105 transition-transform duration-300 tracking-tight leading-tight"
                      style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
                    {cert.name}
                  </h4>
                  
                  <div className="text-blue-300 font-semibold"
                       style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                    {cert.date}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
