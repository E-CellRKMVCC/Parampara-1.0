import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import assets from "../assets/assets.js";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full "
    >
      <div className="w-full max-w-7xl mx-auto h-fit flex justify-between items-center px-4 md:px-8 py-3">
        {/* images */}
        <motion.div
          variants={itemVariants}
          className="w-fit flex items-center justify-center gap-3 md:gap-6"
        >
            <img
              src={assets.logo1BG || assets.logo1}
              alt="PARAMPARA 1.0"
              title="PARAMPARA 1.0"
              className="h-[50px] md:h-[65px] w-auto aspect-square drop-shadow-lg"
            />
            <img src={assets.x} alt="x" className="h-[20px] md:h-[25px] w-auto aspect-square drop-shadow-lg"/>
            <img
              src={assets.logo3BG || assets.logo3}
              alt="E-CELL RKMVCC"
              title="E-CELL RKMVCC"
              className="h-[45px] md:h-[55px] w-auto aspect-square drop-shadow-lg"
            />
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex items-center gap-8"
        >
          <a href="#home" className="text-white hover:text-[#D4A373] transition-colors font-medium">Home</a>
          <a href="#about" className="text-white hover:text-[#D4A373] transition-colors font-medium">About</a>
          <a href="#problems" className="text-white hover:text-[#D4A373] transition-colors font-medium">Problem statements</a>
          <a href="#timeline" className="text-white hover:text-[#D4A373] transition-colors font-medium">Timeline</a>
          <a href="#qa" className="text-white hover:text-[#D4A373] transition-colors font-medium">Q&A</a>
          <a href="#team" className="text-white hover:text-[#D4A373] transition-colors font-medium">TEAM</a>
        </motion.div>

        {/* Register Button & Mobile Toggle */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4"
        >
          <a href="#team" className="hidden sm:flex text-black bg-[#D4A373] px-6 py-2 rounded-full hover:bg-white transition-colors font-bold tracking-wider">
            REGISTER
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden w-full bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition-colors text-lg font-medium">Home</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition-colors text-lg font-medium">About</a>
              <a href="#problems" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition-colors text-lg font-medium">Problem statements</a>
              <a href="#timeline" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition-colors text-lg font-medium">Timeline</a>
              <a href="#qa" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition-colors text-lg font-medium">Q&A</a>
              <a href="#team" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#D4A373] transition-colors text-lg font-medium">TEAM</a>
              <a href="#team" onClick={() => setIsMobileMenuOpen(false)} className="text-black bg-[#D4A373] px-8 py-3 rounded-full hover:bg-white transition-colors text-lg font-bold tracking-wider mt-4">
                REGISTER
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
