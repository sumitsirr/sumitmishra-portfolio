
import React from 'react';
import { Play, Users, Eye, Video } from 'lucide-react';

const YouTubeSection = () => {
  const stats = [
    { icon: Users, number: "5000+", label: "Students Guided" },
    { icon: Eye, number: "1M+", label: "Views" },
    { icon: Video, number: "150+", label: "Videos Created" },
  ];

  const videos = [
    {
      title: "Complete React Tutorial for Beginners",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop&crop=center",
      views: "45K views",
      duration: "2 weeks ago"
    },
    {
      title: "JavaScript ES6+ Features Explained",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop&crop=center",
      views: "32K views",
      duration: "1 month ago"
    },
    {
      title: "Building Modern UIs with Tailwind CSS",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop&crop=center",
      views: "28K views",
      duration: "3 weeks ago"
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-600"
                style={{ fontFamily: 'Orbitron, Space Grotesk, system-ui, sans-serif' }}>
              YouTube Channel
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Creating content on YouTube to guide students through AKTU counseling, college selection, PG accommodations, and my GATE preparation journey, while sharing relatable college life content.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="text-white w-8 h-8" />
                </div>
                <div className="text-3xl font-black text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300"
                     style={{ fontFamily: 'Orbitron, Space Grotesk, system-ui, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Videos */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {videos.map((video, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-blue-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="text-white w-6 h-6 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{video.views}</span>
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-red-500/25 overflow-hidden"
            >
              <span className="relative z-10">Subscribe to Channel</span>
              <Play className="relative z-10 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
