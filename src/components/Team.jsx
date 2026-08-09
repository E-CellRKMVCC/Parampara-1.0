import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/team';
import TeamCard from './TeamCard';
import { Mail } from 'lucide-react';
import contactBg from '../assets/images/Contact-Us-bg.png';

const Team = () => {
  return (
    <section id="team" className="max-[420px]:py-16 py-24 relative z-10 overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute -inset-[20%] opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="flex items-center gap-2">
              <div className="max-[420px]:w-4 w-12 h-px bg-gradient-to-r from-transparent to-[#D9A85C]/50"></div>
              <div className="w-2 h-2 rotate-45 border border-[#D9A85C]/50"></div>
            </div>
            <h2 className="max-[420px]:text-lg text-2xl md:text-3xl font-display font-medium tracking-[0.1em] text-[#F9E0A9] uppercase">
              TEAM
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rotate-45 border border-[#D9A85C]/50"></div>
              <div className="max-[420px]:w-4 w-12 h-px bg-gradient-to-l from-transparent to-[#D9A85C]/50"></div>
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 w-full mb-20"
        >
          {team.map((member) => (
            <div key={member.id} className="w-[calc(50%-0.5rem)] md:w-[calc(20%-1.2rem)]">
              <TeamCard {...member} />
            </div>
          ))}
        </motion.div>

        {/* Contact CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#051016]/80 md:backdrop-blur-md border border-[#D9A85C]/30 rounded-2xl max-[420px]:p-5 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative"
        >
          {/* Background glow on banner */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D9A85C]/5 to-transparent rounded-2xl pointer-events-none"></div>

          <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-medium text-[#F9E0A9] mb-2">
              STILL HAVE QUESTIONS?
            </h3>
            <p className="text-gray-300 text-sm">
              Reach out to the E-Cell RKMVCC team directly.
            </p>
          </div>
          
          <button className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-[#F9E0A9] via-[#D9A85C] to-[#9B6F30] text-black max-[420px]:px-5 max-[420px]:py-2 px-8 py-3 rounded font-bold hover:shadow-[0_0_20px_rgba(217,168,92,0.4)] transition-all duration-300 shrink-0">
            <Mail size={18} />
            <span>Reach Us</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;
