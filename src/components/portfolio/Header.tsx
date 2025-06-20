
import React from 'react';
import { Github, Linkedin, Youtube, Instagram, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Sumit Mishra
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</a>
            <a href="#youtube" className="text-gray-700 hover:text-purple-600 transition-colors">YouTube</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-purple-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-purple-600 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-purple-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <button className="md:hidden text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
