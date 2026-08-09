import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timeline } from '../data/timeline';
import TimelineItem from './TimelineItem';
import timelineBg from '../assets/images/timeline-bg.png';

const Timeline = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="timeline" ref={containerRef} className="py-24 relative z-10 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute left-0 right-0 top-[-20%] bottom-[-20%] opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${timelineBg})`,
          y: backgroundY
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D9A85C]/50"></div>
              <div className="w-2 h-2 rotate-45 border border-[#D9A85C]/50"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-medium tracking-[0.1em] text-[#F9E0A9] uppercase">
              Event Timeline
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rotate-45 border border-[#D9A85C]/50"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D9A85C]/50"></div>
            </div>
          </motion.div>
        </div>

        <div className="relative wrap overflow-hidden py-10 h-full">
          {/* Vertical central line for desktop, left-aligned for mobile */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute border-opacity-40 border-[#D9A85C] border-l top-0 left-[32px] md:left-1/2 md:-translate-x-1/2 origin-top"
          />
          
          {timeline.map((item, index) => (
            <TimelineItem 
              key={item.id}
              {...item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
