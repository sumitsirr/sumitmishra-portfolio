
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              YouTube Channel
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Helping thousands of students navigate their academic journey through engaging content, college reviews, and career guidance.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">1000+</div>
                <div className="text-gray-600">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">50+</div>
                <div className="text-gray-600">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">100K+</div>
                <div className="text-gray-600">Total Views</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Youtube className="text-white w-12 h-12" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.views}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-3">
              <Youtube size={24} />
              <span>Subscribe & Watch Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
