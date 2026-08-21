import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/About.bg.png';

const About = () => {
  return (
    <section id="about" className="relative w-full h-[100dvh] lg:h-screen min-h-[650px] flex items-center overflow-hidden z-10">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 py-6 md:py-0">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          
          {/* LEFT: ABOUT */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-3 md:space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-4xl font-display font-semibold text-[var(--color-brand-gold-light)] mb-2 uppercase tracking-wide">
                ABOUT
              </h2>
              <div className="w-12 h-[2px] bg-[var(--color-brand-gold)]"></div>
            </div>
            
            <p className="text-gray-300 text-xs md:text-base leading-relaxed">
              parampara 1.0 is the intra-college hackathon of Ramakrishna Mission Vivekananda Centenary College, an initiative by E-Cell RKMVCC.
            </p>
            
            <p className="text-gray-400 text-xs md:text-base leading-relaxed">
              It's a platform where ideas meet tradition, and innovation creates impact. Together by the Timeless values of art and heritage, we challenge young minds to build solutions that empower communities and shape a better tomorrow.
            </p>
          </motion.div>

          {/* CENTRAL VISUAL (The split face) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center relative"
          >
            <img 
              loading="lazy"
              src={aboutImg} 
              alt="Parampara About Theme" 
              className="w-full max-w-[150px] sm:max-w-xs lg:max-w-md object-contain mix-blend-screen"
            />
          </motion.div>

          {/* RIGHT: THEME */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center border border-[var(--color-brand-gold)]/50 rounded-3xl max-[420px]:p-4 p-5 lg:p-8 relative bg-[var(--color-brand-surface-1)]/30 md:backdrop-blur-sm"
          >
            <div className="flex justify-between items-start mb-3 md:mb-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-display font-semibold text-[var(--color-brand-gold-light)] mb-2 uppercase tracking-wide">
                  THEME
                </h2>
                <div className="w-12 h-[2px] bg-[var(--color-brand-gold)]"></div>
              </div>
              
              {/* Decorative Mandala SVG */}
              <div className="text-[var(--color-brand-gold)] opacity-70 hidden md:block">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="50" cy="50" r="10" fill="currentColor" />
                  <path d="M50 30 Q65 15 50 0 Q35 15 50 30 Z" />
                  <path d="M50 70 Q65 85 50 100 Q35 85 50 70 Z" />
                  <path d="M30 50 Q15 65 0 50 Q15 35 30 50 Z" />
                  <path d="M70 50 Q85 65 100 50 Q85 35 70 50 Z" />
                  <path d="M35 35 Q20 15 15 20 Q15 20 15 20 Q20 35 35 35 Z" />
                  <path d="M65 65 Q80 85 85 80 Q85 80 85 80 Q80 65 65 65 Z" />
                  <path d="M65 35 Q80 15 85 20 Q85 20 85 20 Q80 35 65 35 Z" />
                  <path d="M35 65 Q20 85 15 80 Q15 80 15 80 Q20 65 35 65 Z" />
                  <circle cx="50" cy="50" r="45" strokeDasharray="2 4" opacity="0.5" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-lg md:text-2xl font-display font-semibold text-[var(--color-brand-gold)] mb-3 md:mb-6 leading-tight">
              Our roots. Our values.<br/>
              Our future.
            </h3>
            
            <div className="space-y-3 md:space-y-6">
              <p className="text-gray-300 text-xs md:text-base leading-relaxed">
                Bridging the legacy of wisdom, art, and culture with the power of modern innovation.
              </p>
              
              <p className="text-gray-400 text-xs md:text-base leading-relaxed">
                A promise between the old generation and the new — to keep innovating.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
