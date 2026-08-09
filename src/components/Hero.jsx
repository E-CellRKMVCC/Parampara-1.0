import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import GlitchText from './GlitchText';
import homeBg from '../assets/images/Home-Bg.png';
import paramparaLogo from '../assets/images/parampara-w.png';

const Hero = () => {
  const [isBursting, setIsBursting] = useState(false);

  useEffect(() => {
    // Glitch fires every 4s, bursts for 700ms then rests
    const INTERVAL = 4000;
    const BURST_DURATION = 700;

    const fire = () => {
      setIsBursting(true);
      setTimeout(() => setIsBursting(false), BURST_DURATION);
    };

    const initial = setTimeout(fire, 1500); // first burst after hero loads
    const interval = setInterval(fire, INTERVAL);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeBg})` }}
      />
      
      {/* Dark overlay to ensure text readability if needed */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center mt-10 md:mt-20">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 md:mb-6"
        >
          <span className="text-[var(--color-brand-gold-light)] text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-medium uppercase border border-white/20 rounded-full px-6 py-2 bg-white/5 backdrop-blur-sm">
            An Inter-College Hackathon
          </span>
        </motion.div>
        
        {/* Main Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 md:mb-6"
        >
          <img 
            src={paramparaLogo} 
            alt="Parampara Logo" 
            className="w-28 md:w-40 lg:w-48 object-contain mx-auto drop-shadow-xl" 
          />
        </motion.div>
        
        {/* Main Logo Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 md:mb-10 drop-shadow-2xl"
        >
          {/* Title wrapper — glitch applied as a unit */}
          <div className={`inline-flex items-end justify-center relative ${isBursting ? 'sv-glitch-active' : ''}`}>

            {/* Parampara — gradient text with cyan/magenta ghost layers */}
            <div className="relative">
              <h1 className="font-shivaraja text-5xl md:text-7xl lg:text-8xl tracking-widest bg-gradient-to-b from-[#F9E0A9] via-[#D9A85C] to-[#9B6F30] text-transparent bg-clip-text leading-none capitalize pt-4">
                Parampara
              </h1>
              {/* Cyan ghost */}
              <h1
                aria-hidden="true"
                className={`sv-layer font-shivaraja text-5xl md:text-7xl lg:text-8xl tracking-widest leading-none capitalize pt-4 ${isBursting ? 'sv-layer-1' : ''}`}
                style={{ WebkitTextFillColor: '#3CC7D8', fontFamily: 'Shivaraja, serif' }}
              >
                Parampara
              </h1>
              {/* Magenta ghost */}
              <h1
                aria-hidden="true"
                className={`sv-layer font-shivaraja text-5xl md:text-7xl lg:text-8xl tracking-widest leading-none capitalize pt-4 ${isBursting ? 'sv-layer-2' : ''}`}
                style={{ WebkitTextFillColor: '#FF00FF', fontFamily: 'Shivaraja, serif' }}
              >
                Parampara
              </h1>
            </div>

            {/* 1.0 — shares the same burst rhythm */}
            <div className="absolute left-full bottom-2 md:bottom-3 lg:bottom-4 ml-2 md:ml-3 lg:ml-4 text-xl md:text-3xl lg:text-4xl font-futuristic font-bold text-[var(--color-brand-gold-light)]">
              <GlitchText controlled isBursting={isBursting}>1.0</GlitchText>
            </div>
          </div>
        </motion.div>

        {/* Event Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10 px-6 md:px-10 py-3 md:py-4 rounded-lg border border-[#D9A85C]/60 bg-[#06131A]/70 backdrop-blur-md relative overflow-hidden"
        >
          {/* Ornamental corners (simplified with CSS) */}
          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#D9A85C]"></div>
          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#D9A85C]"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#D9A85C]"></div>
          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#D9A85C]"></div>
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="text-[#D9A85C]">
              <Calendar size={32} strokeWidth={1.5} />
            </div>
            <div className="text-left flex flex-col">
              <span className="text-xl font-bold text-white tracking-widest leading-tight">22 AUGUST</span>
              <span className="text-xl text-[#F0C477] font-medium leading-tight">2026</span>
            </div>
          </div>
          
          {/* Vertical Separator */}
          <div className="hidden md:block w-px h-16 bg-[#D9A85C]/50 relative z-10"></div>
          
          <div className="text-center md:text-left relative z-10">
            <p className="font-display font-semibold text-white text-xl tracking-wider mb-1">RAMAKRISHNA MISSION</p>
            <p className="text-sm text-gray-300 font-medium">Vivekananda Centenary College</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
