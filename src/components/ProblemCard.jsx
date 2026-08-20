import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProblemCard = ({ category, psCode, track, title, description, image, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-[#051016]/60 md:backdrop-blur-md border border-[#D9A85C]/20 p-5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#D9A85C]/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(217,168,92,0.15)] flex flex-col items-start gap-4 h-full cursor-pointer"
    >
      
      {/* Background overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9A85C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Top Image & Tags */}
      <div className="w-full flex justify-between items-start gap-2 relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {image && <img loading="lazy" src={image} alt={title} className="w-full h-full object-contain" />}
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-[#051016] bg-[#D9A85C] px-2 py-0.5 rounded">
            {psCode}
          </span>
          <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-[#D9A85C] border border-[#D9A85C]/30 px-2 py-0.5 rounded">
            {track}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow w-full pb-2 pr-10">
        <h3 className="text-lg md:text-xl font-display font-medium text-[#F9E0A9] mb-2 leading-snug group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-[13px] leading-relaxed font-sans opacity-80 line-clamp-4">
          {description}
        </p>
      </div>

      {/* Bottom right arrow button */}
      <button
        type="button"
        aria-label="View problem details"
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick();
        }}
        className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-[#D9A85C]/40 flex items-center justify-center text-[#D9A85C] group-hover:bg-[#D9A85C] group-hover:text-black transition-all duration-300 z-20 hover:scale-110"
      >
        <ArrowRight size={15} />
      </button>
    </div>
  );
};

export default ProblemCard;
