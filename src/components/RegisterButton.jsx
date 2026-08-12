import React from 'react';
import { ArrowRight } from 'lucide-react';

const RegisterButton = ({ 
  text = 'REGISTER', 
  href = 'https://forms.gle/f76Aj5QzdLUyu6wbA', 
  size = 'md', 
  fullWidth = false,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'px-5 py-1.5 text-xs gap-1.5',
    md: 'px-7 py-2.5 text-xs md:text-sm gap-2',
    lg: 'px-9 py-3.5 text-sm md:text-base gap-2.5'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold tracking-widest uppercase text-[#051016] 
        bg-gradient-to-r from-[#F9E0A9] via-[#D9A85C] to-[#9B6F30] 
        border border-[#F9E0A9]/50
        shadow-[0_0_20px_rgba(217,168,92,0.4)] 
        hover:shadow-[0_0_32px_rgba(217,168,92,0.85)] 
        hover:-translate-y-0.5 
        active:scale-95 
        transition-all duration-300 ease-out 
        ${fullWidth ? 'w-full' : ''}
        ${sizeClasses[size] || sizeClasses.md}
        ${className}`}
    >
      {/* Background glowing sweep */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#FFE7BA] via-[#F0C477] to-[#B88741] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

      {/* Light shimmer sweep animation */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span>{text}</span>
        <ArrowRight 
          size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} 
          className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out" 
        />
      </span>
    </a>
  );
};

export default RegisterButton;
