
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-slate-900/95 via-blue-950/95 to-indigo-950/95 backdrop-blur-lg border-b border-blue-800/30 shadow-2xl shadow-blue-900/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-black tracking-tight text-gray-100 hover:text-white transition-colors duration-300 cursor-pointer"
            style={{ fontFamily: 'Orbitron, Space Grotesk, system-ui, sans-serif' }}
          >
            Sumit Mishra
          </button>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'YouTube', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="group relative text-gray-300 hover:text-white font-medium transition-colors duration-300 py-2"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-blue-300 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 bg-gradient-to-r from-slate-900/95 via-blue-950/95 to-indigo-950/95 backdrop-blur-lg rounded-lg border border-blue-800/30">
            {['About', 'Skills', 'Projects', 'YouTube', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900/30 transition-colors duration-300 font-medium"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
