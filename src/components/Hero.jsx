import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import GlitchText from './GlitchText';
import homeBg from '../assets/images/Home-Bg.webp';
import paramparaLogo from '../assets/images/parampara-w.webp';
import RegisterButton from './RegisterButton';
import problemStatementPdf from '../assets/PARAMPARA_Problem_Statement.pdf';

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
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 overflow-hidden"
    >
      {/* Background with Ambient Glow */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homeBg})` }}
      />
      
      {/* Dark overlay & Golden Radial Glow */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] bg-[radial-gradient(circle_at_center,rgba(217,168,92,0.15),transparent_70%)] pointer-events-none blur-2xl"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="inline-block text-[#F9E0A9] text-[11px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-semibold uppercase border border-[#D9A85C]/40 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 bg-[#D9A85C]/10 shadow-[0_0_15px_rgba(217,168,92,0.15)] backdrop-blur-md">
            An Intra-College Hackathon
          </span>
        </motion.div>
        
        {/* Main Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src={paramparaLogo} 
            alt="Parampara Logo" 
            className="w-24 sm:w-32 md:w-52 lg:w-60 object-contain mx-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]" 
          />
        </motion.div>
        
        {/* Main Logo Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="drop-shadow-2xl"
        >
          {/* Title wrapper — glitch applied as a unit */}
          <div className={`inline-flex items-end justify-center relative ${isBursting ? 'sv-glitch-active' : ''}`}>

            {/* Parampara — gradient text with cyan/magenta ghost layers */}
            <div className="relative">
              <h1 className="font-shivaraja text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest bg-gradient-to-b from-[#F9E0A9] via-[#D9A85C] to-[#9B6F30] text-transparent bg-clip-text leading-none pt-2 sm:pt-4">parampara</h1>
              {/* Cyan ghost */}
              <h1
                aria-hidden="true"
                className={`sv-layer font-shivaraja text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest leading-none pt-2 sm:pt-4 ${isBursting ? 'sv-layer-1' : ''}`}
                style={{ WebkitTextFillColor: '#3CC7D8', fontFamily: 'Shivaraja, serif' }}
              >parampara</h1>
              {/* Magenta ghost */}
              <h1
                aria-hidden="true"
                className={`sv-layer font-shivaraja text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest leading-none pt-2 sm:pt-4 ${isBursting ? 'sv-layer-2' : ''}`}
                style={{ WebkitTextFillColor: '#FF00FF', fontFamily: 'Shivaraja, serif' }}
              >parampara</h1>
            </div>

            {/* 1.0 — shares the same burst rhythm */}
            <div className="absolute left-full ml-1.5 sm:ml-2.5 md:ml-4 bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-futuristic font-bold text-[var(--color-brand-gold-light)]">
              <GlitchText controlled isBursting={isBursting}>1.0</GlitchText>
            </div>
          </div>
        </motion.div>

        {/* Event Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-row items-center justify-center gap-3 sm:gap-6 md:gap-10 max-w-sm sm:max-w-none w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 rounded-xl border border-[#D9A85C]/60 bg-[#06131A]/85 backdrop-blur-md relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_20px_rgba(217,168,92,0.15)]"
        >
          {/* Ornamental corners */}
          <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#D9A85C]"></div>
          <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#D9A85C]"></div>
          <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#D9A85C]"></div>
          <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#D9A85C]"></div>
          
          <div className="flex items-center gap-2.5 sm:gap-4 relative z-10">
            <div className="text-[#D9A85C]">
              <Calendar className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" strokeWidth={1.5} />
            </div>
            <div className="text-left flex flex-col">
              <span className="text-xs sm:text-base md:text-xl font-bold text-white tracking-wider leading-tight">27 AUGUST</span>
              <span className="text-xs sm:text-base md:text-xl text-[#F0C477] font-medium leading-tight">2026</span>
            </div>
          </div>
          
          {/* Vertical Separator */}
          <div className="w-px h-7 sm:h-9 md:h-12 bg-[#D9A85C]/50 relative z-10"></div>
          
          <div className="text-left relative z-10">
            <p className="font-display font-semibold text-white text-xs sm:text-base md:text-xl tracking-wider mb-0.5">RAMAKRISHNA MISSION</p>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-medium leading-none">Vivekananda Centenary College</p>
          </div>
        </motion.div>

        {/* Mobile / Tablet Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-1 md:hidden flex flex-col items-center gap-2.5 w-full max-w-xs px-2"
        >
          <RegisterButton size="md" text="SUBMIT YOUR IDEA" href="/submission" target="_self" fullWidth />
          <RegisterButton size="md" text="REGISTER NOW" fullWidth />
          <RegisterButton size="md" text="PROBLEM STATEMENTS" href={problemStatementPdf} target="_blank" fullWidth />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
