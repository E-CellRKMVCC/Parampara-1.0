import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ecellLogo from '../assets/images/E-cell-Logo-W.png';
import xLogo from '../assets/images/X.png';
import paramparaLogo from '../assets/images/parampara-w.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Problem Statements', href: '#problems' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Team', href: '#team' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-300 ${
        isScrolled ? 'pt-4 px-4 pointer-events-none' : 'pt-0 px-0 pointer-events-none'
      }`}
    >
      <div 
        className={`w-full max-w-7xl transition-all duration-300 pointer-events-auto ${
          isScrolled || isMobileMenuOpen
            ? `bg-black md:bg-black/95 backdrop-blur-none md:backdrop-blur-lg border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] ${
                isMobileMenuOpen 
                  ? (isScrolled ? 'rounded-3xl' : 'rounded-b-3xl') 
                  : (isScrolled ? 'rounded-full' : '')
              }` 
            : 'bg-transparent border border-transparent'
        }`}
      >
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'py-2 max-[420px]:px-3 px-6 md:px-8' : 'py-5 max-[420px]:px-3 px-6 md:px-12'
        }`}>
        {/* Left: Logos */}
        <div className="flex items-center max-[420px]:gap-2 gap-3 md:gap-4">
          <img src={ecellLogo} alt="E-Cell Logo" className="max-[420px]:h-10 h-14 md:h-16 w-auto object-contain" />
          <img src={xLogo} alt="X" className="max-[420px]:h-3 h-4 md:h-5 w-auto object-contain opacity-70" />
          <img src={paramparaLogo} alt="Parampara Logo" className="max-[420px]:h-10 h-14 md:h-16 w-auto object-contain" />
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-[var(--color-brand-gold)] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a 
            href="https://forms.gle/f76Aj5QzdLUyu6wbA"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#F0C477] text-[#06131A] px-8 py-2 rounded-full font-bold tracking-wider hover:bg-[#D9A85C] hover:shadow-[0_0_15px_rgba(217,168,92,0.5)] transition-all duration-300"
          >
            REGISTER
          </a>
          
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-[var(--color-brand-gold)] py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
