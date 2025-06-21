
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "GoCampuss",
      subtitle: "Founder & Developer",
      description: "A full-featured web platform that helps students explore AKTU colleges with detailed data like seat matrix, hostel and academic fees, placements, and college tours.",
      role: [
        "Designed and developed the front-end using HTML, CSS, and JS",
        "Managed data sourcing, visual presentation, and user flows", 
        "Promoted via SEO, YouTube, Instagram Reels, and student networks",
        "Generated high organic traction and built trust as a counseling brand"
      ],
      image: "https://i.postimg.cc/KjbSzjx1/GC-Project.png",
      gradient: "from-blue-700 to-indigo-800"
    },
    {
      title: "Next2Campus",
      subtitle: "Founder & App Promoter", 
      description: "A mobile app that lets students find PG accommodations near their college campus with verified listings, reviews, pricing, and booking support.",
      role: [
        "Worked on UI/UX wireframes and front-end design",
        "Personally partnered with PG owners to onboard listings",
        "Handled student inquiries, bookings, and grievance resolution",
        "Designed and executed content marketing for visibility and downloads"
      ],
      image: "https://i.postimg.cc/1zL1kMdc/NC-Project.png",
      gradient: "from-slate-700 to-blue-800"
    },
    {
      title: "Tech Roadmap",
      subtitle: "Initiator, Educator and Developer",
      description: "A visual, semester-wise roadmap for engineering students to help them navigate through skill-building, coding, internships, and projects during their B.Tech journey.",
      role: [
        "Created structured content based on real industry needs",
        "Designed the visual presentation",
        "Marketed via YouTube and PDF downloads"
      ],
      image: "https://i.postimg.cc/9MZHCZ53/TR-Project.png",
      gradient: "from-indigo-700 to-blue-800"
    },
    {
      title: "Driver Drowsiness Detection",
      subtitle: "AI-ML Team Project",
      description: "A computer vision-based system to monitor driver fatigue and issue alerts to prevent road accidents.",
      role: [
        "Contributed to front-end dashboard interface",
        "Worked with OpenCV and basic ML models",
        "Managed project documentation and final presentation"
      ],
      image: "https://i.postimg.cc/6Q7NbFMp/DDD-Project.jpg",
      gradient: "from-blue-800 to-slate-800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-white tracking-tight"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 transform hover:-translate-y-6 hover:scale-[1.02] border border-white/20 hover:border-blue-300/50 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className={`absolute top-6 right-6 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 font-bold text-sm shadow-lg transform transition-all duration-500 group-hover:scale-110`}
                       style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                    {project.subtitle}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-black mb-4 text-white group-hover:scale-105 transition-transform duration-300 tracking-tight"
                      style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
                    📌 {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-lg">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-200 group-hover:text-blue-300 transition-colors duration-300 text-lg"
                        style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                      My Role:
                    </h4>
                    <ul className="space-y-2">
                      {project.role.map((roleItem, roleIndex) => (
                        <li key={roleIndex} className="flex items-start text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-3 mr-4 flex-shrink-0 transform transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"></div>
                          {roleItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
