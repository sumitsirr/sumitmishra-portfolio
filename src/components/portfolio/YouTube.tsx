
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-red-600 to-red-700 bg-clip-text text-transparent">
              YouTube Channel
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Helping thousands of students navigate their academic journey through engaging content, college reviews, and career guidance.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">1000+</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Students Guided</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">50+</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Videos Created</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">100K+</div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Total Views</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {videos.map((video, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer border border-gray-100 hover:border-blue-200">
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Youtube className="text-white w-12 h-12 transform transition-all duration-500 group-hover:scale-125" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded transform transition-all duration-300 group-hover:scale-110">
                    {video.views}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="group relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-red-500/25 inline-flex items-center space-x-3 overflow-hidden">
              <Youtube size={24} className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <span className="relative z-10">Subscribe & Watch Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
