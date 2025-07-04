
import React from 'react';
import { Github, Linkedin, Instagram, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 cursor-default">
              Sumit Mishra
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built with ❤️ by Sumit Mishra — GATE CS 2025 Qualified | YouTuber | Tech Creator
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/sumitmishra07" target="_blank" rel="noopener noreferrer" 
               className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <Github size={24} className="group-hover:drop-shadow-lg transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/sumit-mishra77?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
               className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <Linkedin size={24} className="group-hover:drop-shadow-lg transition-all duration-300" />
            </a>
            <a href="https://x.com/sumitsirr?t=VsJupW6vU95Z07fjLU8i2g&s=09" target="_blank" rel="noopener noreferrer"
               className="group text-gray-400 hover:text-gray-200 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <X size={24} className="group-hover:drop-shadow-lg transition-all duration-300" />
            </a>
            <a href="https://www.instagram.com/sumitsirr?igsh=MWhxNW1hOGdpeWt3MQ==" target="_blank" rel="noopener noreferrer"
               className="group text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <Instagram size={24} className="group-hover:drop-shadow-lg transition-all duration-300" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sumit Mishra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
