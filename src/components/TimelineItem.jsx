import React from 'react';
import { motion } from 'framer-motion';
import { Users, Hourglass, Upload, Trophy, ChevronRight, ChevronLeft } from 'lucide-react';

const TimelineItem = ({ title, date, description, index, isLeft }) => {
  const getIcon = () => {
    switch(index) {
      case 0: return <Users size={20} className="text-[#F9E0A9]" />;
      case 1: return <Hourglass size={20} className="text-[#F9E0A9]" />;
      case 2: return <Upload size={20} className="text-[#F9E0A9]" />;
      case 3: return <Trophy size={20} className="text-[#F9E0A9]" />;
      default: return <Users size={20} className="text-[#F9E0A9]" />;
    }
  };

  return (
    <div className={`mb-16 md:mb-12 flex justify-between items-center w-full relative ${isLeft ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
      
      {/* Spacer for desktop */}
      <div className="hidden md:block w-5/12"></div>
      
      {/* Center node */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        className="z-20 flex items-center bg-[#010408] shadow-[0_0_15px_rgba(217,168,92,0.3)] justify-center w-12 h-12 rounded-full border border-[#D9A85C] shrink-0 mx-auto absolute left-2 md:relative md:left-auto"
      >
        {getIcon()}
      </motion.div>

      {/* Connecting line desktop */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`hidden md:flex absolute top-1/2 -translate-y-1/2 h-[1px] bg-[#D9A85C]/50 z-10`}
        style={{
          left: isLeft ? '41.666667%' : 'calc(50% + 24px)',
          right: isLeft ? 'calc(50% + 24px)' : '41.666667%'
        }}
      />

      {/* Connecting line mobile */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="md:hidden absolute top-1/2 -translate-y-1/2 left-[56px] w-[24px] h-[1px] bg-[#D9A85C]/50 z-10" 
      />

      {/* Content card */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`bg-[#051016]/90 md:backdrop-blur-md border border-[#D9A85C]/30 rounded-2xl p-6 w-[calc(100%-5rem)] md:w-5/12 ml-20 md:ml-0 relative group hover:border-[#D9A85C]/60 hover:shadow-[0_0_30px_rgba(217,168,92,0.15)] transition-all duration-300`}
      >
        <h3 className="text-xl font-display font-medium text-[#F9E0A9] mb-1 leading-snug">{title}</h3>
        <span className="text-[#D9A85C] font-sans text-sm mb-4 block tracking-wide">{date}</span>
        <p className="text-gray-300 text-sm leading-relaxed opacity-90">{description}</p>
        
      </motion.div>
      
    </div>
  );
};

export default TimelineItem;
