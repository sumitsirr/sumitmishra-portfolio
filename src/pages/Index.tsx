
import React from 'react';
import Header from '../components/portfolio/Header';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import YouTubeSection from '../components/portfolio/YouTube';
import OpenToWork from '../components/portfolio/OpenToWork';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <YouTubeSection />
      <OpenToWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
