import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { User } from 'lucide-react';

const TeamCard = ({ name, designation, image, linkedin, email, contain }) => {
  return (
    <div className="group relative bg-[#051016]/80 md:backdrop-blur-md border border-[#D9A85C]/30 rounded-xl overflow-hidden hover:border-[#D9A85C]/60 hover:shadow-[0_0_20px_rgba(217,168,92,0.15)] transition-all duration-300 w-full h-full flex flex-col justify-center items-center py-6 px-4">
      
      {/* Profile Image / Avatar */}
      <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden mb-4 bg-black border border-[#D9A85C]/20 flex items-center justify-center relative">
        {image ? (
          <img 
            loading="lazy"
            src={image} 
            alt={name} 
            className={`w-full h-full ${contain ? 'object-contain' : 'object-cover object-top'}`}
          />
        ) : (
          <User size={32} className="text-[#D9A85C]/40" />
        )}
      </div>
      
      {/* Info */}
      <h3 className="text-sm md:text-base font-bold text-[#F9E0A9] mb-1 text-center">
        {name}
      </h3>
      <p className="text-xs md:text-sm text-gray-400 text-center mb-4">
        {designation}
      </p>
      
      {/* Socials */}
      <div className="flex gap-3">
        {
          linkedin !== "#" && (
            <a href={linkedin} className="w-7 h-7 rounded border border-[#D9A85C]/40 flex items-center justify-center text-[#D9A85C] hover:bg-[#D9A85C] hover:text-black transition-colors duration-300">
              <FaLinkedin size={12} />
            </a>
          )
        }
        {
          email !== "#" && (
            <a href={`mailto:${email}`} className="w-7 h-7 rounded border border-[#D9A85C]/40 flex items-center justify-center text-[#D9A85C] hover:bg-[#D9A85C] hover:text-black transition-colors duration-300">
              <FaEnvelope size={12} />
            </a>
          )
        }

      </div>
      
    </div>
  );
};

export default TeamCard;
