import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ecellLogo from '../assets/images/E-cell-Logo-W.png';
import xLogo from '../assets/images/X.png';
import paramparaLogo from '../assets/images/parampara-w.png';
import RegisterButton from './RegisterButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContainerExpanded, setIsContainerExpanded] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Problem Statements', href: '#problems' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Team', href: '#team' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => { setIsContainerExpanded(true); setIsMobileMenuOpen(true); };
  const closeMenu = () => { setIsMobileMenuOpen(false); };
  const toggle = () => (isMobileMenuOpen ? closeMenu() : openMenu());

  const isActive = isScrolled || isContainerExpanded;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-300 ${
        isScrolled ? 'pt-4 px-4 pointer-events-none' : 'pt-0 px-0 pointer-events-none'
      }`}
    >
      <div
        className={`w-full max-w-7xl pointer-events-auto transition-[background-color,border-color,box-shadow] duration-300 ${
          isActive
            ? `bg-black/40 backdrop-blur-xl border shadow-[0_0_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(217,168,92,0.15)] ${
                isContainerExpanded
                  ? (isScrolled ? 'rounded-2xl border-[#D9A85C]/25' : 'rounded-b-2xl border-[#D9A85C]/25')
                  : (isScrolled ? 'rounded-full border-[#D9A85C]/25' : '')
              }`
            : 'bg-transparent border-0'
        }`}
        style={isActive && !isContainerExpanded && isScrolled ? {
          boxShadow: '0 0 0 1px rgba(217,168,92,0.15), 0 0 20px rgba(60,199,216,0.05), 0 8px 32px rgba(0,0,0,0.5)'
        } : {}}
      >
        {/* Scanning line — only on pill state */}
        {isScrolled && !isContainerExpanded && (
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9A85C]/40 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            />
          </div>
        )}

        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'py-2 max-[420px]:px-3 px-6 md:px-8' : 'py-5 max-[420px]:px-3 px-6 md:px-12'
        }`}>
          {/* Left: Logos */}
          <div className="flex items-center max-[420px]:gap-2 gap-3 md:gap-4">
            <img src={ecellLogo} alt="E-Cell Logo" className="max-[420px]:h-10 h-14 md:h-16 w-auto object-contain" />
            <img src={xLogo} alt="X" className="max-[420px]:h-3 h-4 md:h-5 w-auto object-contain opacity-50" />
            <img src={paramparaLogo} alt="Parampara Logo" className="max-[420px]:h-10 h-14 md:h-16 w-auto object-contain" />
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[10px] font-futuristic font-medium tracking-[0.15em] uppercase text-gray-400 hover:text-[#D9A85C] transition-colors duration-200"
              >
                {link.name}
                {/* Techy underline */}
                <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#D9A85C] to-[#3CC7D8] transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <RegisterButton size="sm" text="REGISTER" />
            </div>
            <button
              className="lg:hidden text-[#D9A85C]/80 hover:text-[#D9A85C] w-9 h-9 flex items-center justify-center transition-colors duration-200"
              onClick={toggle}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence initial={false} onExitComplete={() => setIsContainerExpanded(false)}>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
            >
              {/* Top divider — techy look */}
              <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#D9A85C]/30 to-transparent" />

              <div className="flex flex-col px-6 pt-3 pb-5 gap-0">
                {navLinks.map((link, i) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center gap-3 py-3 border-b border-white/[0.04] last:border-b-0"
                  >
                    {/* Index number — techy accent */}
                    <span className="font-futuristic text-[9px] text-[#3CC7D8]/50 group-hover:text-[#3CC7D8] transition-colors duration-200 w-5 text-right flex-shrink-0 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {/* Separator tick */}
                    <span className="w-px h-3 bg-[#D9A85C]/20 group-hover:bg-[#D9A85C]/60 transition-colors duration-200 flex-shrink-0" />
                    {/* Link text */}
                    <span className="text-sm font-medium tracking-wide text-gray-400 group-hover:text-[#F9E0A9] transition-colors duration-200">
                      {link.name}
                    </span>
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
