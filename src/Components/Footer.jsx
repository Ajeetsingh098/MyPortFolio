import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 px-[5%] md:px-[10%] relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 text-2xl font-black text-white mb-4">
              <span className="flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                A
              </span> 
              Ajeet Singh
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Engineering the future of smart infrastructure. Final year ECE student at MJPRU, 
              focusing on Solar PV initiatives and automated industrial workflows.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Explore</h4>
              <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm">Experience</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">Connect</h4>
              <a href="https://www.linkedin.com/in/ajeet-singh-24399325b" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a>
              <a href="mailto:ajeetsingh.ece06@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">Email</a>
              <a href="tel:+916306343402" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer"
          >
            <ArrowUp className="text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium uppercase tracking-tighter">
            © 2026 Ajeet Singh. All rights reserved. 
          </p>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/ajeet-singh-24399325b" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors cursor-pointer">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/ajeetsingh0406" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors cursor-pointer">
              <Instagram size={18} />
            </a>
            <a href="mailto:ajeetsingh.ece06@gmail.com" className="text-gray-500 hover:text-red-400 transition-colors cursor-pointer">
              <Mail size={18} />
            </a>
            <a href="tel:+916306343402" className="text-gray-500 hover:text-green-500 transition-colors cursor-pointer">
            <Phone size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;