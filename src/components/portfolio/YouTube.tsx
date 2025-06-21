
import React from 'react';
import { Users, Eye, Video } from 'lucide-react';

const YouTubeSection = () => {
  const stats = [
    { icon: Users, number: "5000+", label: "Students Guided" },
    { icon: Eye, number: "1M+", label: "Views" },
    { icon: Video, number: "150+", label: "Videos Created" },
  ];

  const videos = [
    {
      embedId: "WJXvF0jCH2g"
    },
    {
      embedId: "hVwbLVrhIFA" 
    },
    {
      embedId: "-kePCsCwhIg"
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
              <div key={index} className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <stat.icon className="text-white w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2"
                     style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Featured Videos */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="http://www.youtube.com/@SumitMishra77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-red-500/25 overflow-hidden"
            >
              <span className="relative z-10">Subscribe to the Channel</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
