import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { problems } from '../data/problems';
import ProblemCard from './ProblemCard';

const categories = ['ALL', 'AGRICULTURE', 'CLEAN TECH', 'TOURISM', 'CYBERSECURITY', 'EDUCATION', 'DISASTER MGMT', 'MEDTECH', 'MISC'];

const ProblemStatements = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProblems = activeCategory === 'ALL' 
    ? problems 
    : problems.filter(p => p.category === activeCategory);

  return (
    <section id="problems" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
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
              Problem Statements
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rotate-45 border border-[#D9A85C]/50"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D9A85C]/50"></div>
            </div>
          </motion.div>

          {/* Filter Pills - 2 Lines */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 md:gap-4 items-center"
          >
            {/* First Row: 5 items */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-[#F9E0A9] via-[#D9A85C] to-[#9B6F30] text-black border-transparent shadow-[0_0_15px_rgba(217,168,92,0.3)]'
                      : 'bg-transparent text-[#D9A85C]/80 border-[#D9A85C]/30 hover:border-[#D9A85C] hover:text-[#F9E0A9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Second Row: 4 items */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {categories.slice(5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-[#F9E0A9] via-[#D9A85C] to-[#9B6F30] text-black border-transparent shadow-[0_0_15px_rgba(217,168,92,0.3)]'
                      : 'bg-transparent text-[#D9A85C]/80 border-[#D9A85C]/30 hover:border-[#D9A85C] hover:text-[#F9E0A9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <motion.div layout className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProblems.map((problem) => (
              <motion.div
                key={problem.id}
                layout
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                initial={{ opacity: 0, scale: 0.8, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(5px)", transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              >
                <ProblemCard {...problem} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemStatements;
