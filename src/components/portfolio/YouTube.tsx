
import React from 'react';
import { Youtube } from 'lucide-react';

const YouTubeSection = () => {
  const videos = [
    {
      title: "AKTU College Reviews & Rankings",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      views: "15K+ views"
    },
    {
      title: "Engineering Career Roadmap Guide",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", 
      views: "12K+ views"
    },
    {
      title: "College Hostel Tour & Reviews",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      views: "8K+ views"
    },
    {
      title: "Placement Preparation Tips",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      views: "20K+ views"
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-slate-900 via-red-700 to-red-800 bg-clip-text text-transparent tracking-tight"
                style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              YouTube Channel
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Helping thousands of students navigate their academic journey through engaging content, college reviews, and career guidance.
            </p>
            
            <div className="flex items-center justify-center space-x-12 mb-12">
              <div className="text-center group cursor-default">
                <div className="text-4xl font-black text-gray-800 group-hover:text-blue-800 transition-colors duration-300"
                     style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>1000+</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-medium">Students Guided</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-4xl font-black text-gray-800 group-hover:text-blue-800 transition-colors duration-300"
                     style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>50+</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-medium">Videos Created</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-4xl font-black text-gray-800 group-hover:text-blue-800 transition-colors duration-300"
                     style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>100K+</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-medium">Total Views</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {videos.map((video, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 cursor-pointer border border-gray-100 hover:border-blue-300/50">
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Youtube className="text-white w-16 h-16 transform transition-all duration-500 group-hover:scale-125 drop-shadow-2xl" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/90 text-white text-xs px-3 py-1 rounded-full font-bold transform transition-all duration-300 group-hover:scale-110">
                    {video.views}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-blue-800 transition-colors duration-300"
                      style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="group relative bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-12 py-5 font-black text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-red-500/30 inline-flex items-center space-x-4 overflow-hidden border border-red-600/30 hover:border-red-400/50">
              <Youtube size={28} className="transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
              <span className="relative z-10" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>SUBSCRIBE & WATCH NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-red-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
