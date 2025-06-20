
import React from 'react';
import { Github, Linkedin, Youtube, Instagram, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            Sumit Mishra
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition-all duration-300 relative group">
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-700 transition-all duration-300 relative group">
              Skills
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-700 transition-all duration-300 relative group">
              Projects
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#youtube" className="text-gray-700 hover:text-blue-700 transition-all duration-300 relative group">
              YouTube
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-all duration-300 relative group">
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-red-600 transition-all duration-300 transform hover:scale-110">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-pink-600 transition-all duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
            <button className="md:hidden text-gray-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-110">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
