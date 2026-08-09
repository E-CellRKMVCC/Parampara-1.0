import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import ParamparaLogo from './ParamparaLogo';
import ecellLogo from '../assets/images/E-cell-Logo-W.png';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[var(--color-brand-bg)]/80 md:backdrop-blur-md max-[420px]:py-6 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-stretch max-[420px]:gap-6 gap-10 md:gap-4"
        >
          
          {/* Left: Parampara Info & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
            <ParamparaLogo />
            <p className="text-[var(--color-brand-cyan)] font-futuristic text-sm md:text-xs tracking-[0.2em] uppercase mt-4 mb-6 md:mb-0">
              Bridging Past & Technology
            </p>
            
            <p className="text-xs text-gray-500 font-medium mt-auto md:pb-2">
              © 2026 parampara 1.0. All Rights Reserved.
            </p>
          </div>

          {/* Center: E-Cell Organizer Info */}
          <div className="flex flex-col items-center justify-center text-center w-full md:w-1/3 py-6 md:py-0 border-y md:border-y-0 md:border-x border-white/5">
            <span className="text-gray-500 text-xs font-futuristic tracking-[0.2em] mb-3 uppercase">
              Organized By
            </span>
            <img 
              src={ecellLogo} 
              alt="E-Cell RKMVCC" 
              className="w-full max-[420px]:max-w-[100px] max-w-[120px] md:max-w-[160px] h-auto mb-4 opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
            />
            <span className="text-[#D9A85C] text-[10px] md:text-xs font-semibold uppercase tracking-widest">
              We Serve • We Innovate • We Lead
            </span>
          </div>

          {/* Right: Socials & Policies */}
          <div className="flex flex-col items-center md:items-end w-full md:w-1/3">
            <div className="flex gap-4 md:gap-6 justify-center md:justify-end mb-6 md:mb-0">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold)] transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold)] transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand-cyan)] hover:border-[var(--color-brand-cyan)] transition-all duration-300">
                <FaGithub size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
            
            <div className="flex gap-4 text-xs text-gray-500 font-medium mt-auto md:pb-2">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
