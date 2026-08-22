import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlitchText from './GlitchText';

const ParamparaLogo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={handleClick}>
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
