import React from 'react';
import GlitchText from './GlitchText';

const ParamparaLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-devanagari text-2xl md:text-3xl text-[var(--color-brand-gold)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        parampara
      </span>
      <span className="text-xl md:text-2xl mt-1">
        <GlitchText text="1.0" />
      </span>
    </div>
  );
};

export default ParamparaLogo;
