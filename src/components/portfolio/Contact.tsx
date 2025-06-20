
import React, { useState } from 'react';
import { Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_uga3xtk', // service ID
        'template_3np2dqd', // template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sumit Mishra',
        },
        'Ed94EGyrPS0r91d0Z' // public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      console.log('Email sent successfully!');
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email sending failed:', error);
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent"
              style={{ fontFamily: 'Orbitron, Space Grotesk, system-ui, sans-serif' }}>
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6"
                  style={{ fontFamily: 'Orbitron, Space Grotesk, system-ui, sans-serif' }}>
                Get in Touch
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Ready to collaborate on your next project? Whether you need a front-end developer, 
                digital marketer, or someone who can bridge tech and business strategy, I'd love to hear from you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Sumit Mishra</div>
                    <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">GATE CS 2025 Qualified</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="group w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-gray-500/25">
                  <Github className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="group w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-blue-500/25">
                  <Linkedin className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                   className="group w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-red-500/25">
                  <Youtube className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="group w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-pink-500/25">
                  <Instagram className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover:shadow-md disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 hover:shadow-md disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-blue-300 hover:shadow-md disabled:opacity-50"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-600 text-center font-medium">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center font-medium">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
