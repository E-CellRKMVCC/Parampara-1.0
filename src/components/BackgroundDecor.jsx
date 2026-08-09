import React from 'react';

const BackgroundDecor = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[var(--color-brand-bg)]">
      {/* Subtle mandala/ornamental pattern top left */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full border border-white/5 opacity-20"></div>
      <div className="absolute -top-16 -left-16 w-[400px] h-[400px] rounded-full border border-white/5 opacity-10"></div>
      
      {/* Circuit lines removed per user request */}
      {/* Subtle grid in background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"></div>
      
      {/* Particles/glow effect */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-brand-cyan)] rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-brand-gold)] rounded-full blur-[150px] opacity-10"></div>

      {/* Decorative vertical text (Devanagari) */}
      <div className="absolute left-4 top-1/3 transform -rotate-90 origin-left text-white/5 font-devanagari text-4xl tracking-widest pointer-events-none whitespace-nowrap">
        ज्ञानम् परमम् बलम्
      </div>
    </div>
  );
};

export default BackgroundDecor;
