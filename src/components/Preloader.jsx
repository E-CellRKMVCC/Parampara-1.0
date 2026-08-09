import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ecellLogo from '../assets/images/E-cell-Logo-W.png';

/**
 * Sequence:
 *  0ms   → ecell logo fades in
 *  1400ms → parampara text fades in (phase: 'parampara')
 *  2400ms → glitch burst fires (isBursting: true)
 *  3000ms → glitch ends (isBursting: false)
 *  3100ms → preloader dissolves (setLoading(false))
 */
const Preloader = ({ setLoading }) => {
  const [phase, setPhase] = useState('ecell'); // 'ecell' | 'parampara'
  const [isBursting, setIsBursting] = useState(false);

  useEffect(() => {
    // Step 1: Show Parampara after ecell logo
    const t1 = setTimeout(() => setPhase('parampara'), 1400);

    // Step 2: Fire glitch burst (Wait longer so the text stays pristine)
    const t2 = setTimeout(() => setIsBursting(true), 2900);

    // Step 3: End glitch
    const t3 = setTimeout(() => setIsBursting(false), 3500);

    // Step 4: Dismiss preloader
    const t4 = setTimeout(() => setLoading(false), 3700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <AnimatePresence mode="wait">

        {/* ── Phase 1: E-Cell Logo ── */}
        {phase === 'ecell' && (
          <motion.img
            key="ecell"
            src={ecellLogo}
            alt="E-Cell Logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-44 md:w-60 object-contain"
          />
        )}

        {/* ── Phase 2: Parampara text (with glitch layers) ── */}
        {phase === 'parampara' && (
          <motion.div
            key="parampara"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            {/* Wrapper that receives the shake animation during burst */}
            <div className={`relative ${isBursting ? 'sv-glitch-active' : ''}`}>

              {/* Base gradient text */}
              <h1
                className="font-shivaraja tracking-widest leading-none select-none"
                style={{
                  fontSize: 'clamp(2.5rem, 12vw, 9rem)',
                  background: 'linear-gradient(to bottom, #F9E0A9, #D9A85C, #9B6F30)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  paddingTop: '0.25rem',
                }}
              >parampara</h1>

              {/* Cyan ghost layer */}
              <h1
                aria-hidden="true"
                className={`sv-layer font-shivaraja tracking-widest leading-none ${isBursting ? 'sv-layer-1' : ''}`}
                style={{
                  fontSize: 'clamp(2.5rem, 12vw, 9rem)',
                  WebkitTextFillColor: '#3CC7D8',
                  paddingTop: '0.25rem',
                }}
              >parampara</h1>

              {/* Magenta ghost layer */}
              <h1
                aria-hidden="true"
                className={`sv-layer font-shivaraja tracking-widest leading-none ${isBursting ? 'sv-layer-2' : ''}`}
                style={{
                  fontSize: 'clamp(2.5rem, 12vw, 9rem)',
                  WebkitTextFillColor: '#FF00FF',
                  paddingTop: '0.25rem',
                }}
              >parampara</h1>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
