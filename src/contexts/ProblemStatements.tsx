import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { problem_statement } from '../assets/assets.js'

const ProblemStatements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  // State to track the currently expanded statement ID
  const [expandedId, setExpandedId] = useState<number | null>(null)
  
  // State for the theme filter
  const [selectedTheme, setSelectedTheme] = useState<string>('All')

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  // Filter the themes based on selection
  const filteredThemes = selectedTheme === 'All' 
    ? problem_statement 
    : problem_statement.filter((t: any) => t.theme === selectedTheme)

  return (
    <div className='w-full flex flex-col items-center min-h-screen px-6 py-20 relative z-10'>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-[1440px] mx-auto flex flex-col"
      >
        <motion.h1 
          variants={rowVariants}
          className="text-5xl md:text-7xl font-bold cinzel bg-gradient-to-r from-white to-[#D4A373] bg-clip-text text-transparent text-center mb-12 drop-shadow-lg"
        >
          Problem Statements
        </motion.h1>

        {/* Filter Section */}
        <motion.div variants={rowVariants} className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 px-4">
          <button 
            onClick={() => setSelectedTheme('All')}
            className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${selectedTheme === 'All' ? 'bg-[#D4A373] border-[#D4A373] text-black font-bold shadow-[0_0_15px_rgba(212,163,115,0.5)]' : 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg ${selectedTheme === 'All' ? 'bg-black/20 text-black' : 'bg-white/10 text-white'}`}>
              ALL
            </div>
          </button>

          {problem_statement.map((themeObj: any) => (
            <button 
              key={themeObj.id}
              onClick={() => setSelectedTheme(themeObj.theme)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${selectedTheme === themeObj.theme ? 'bg-[#D4A373] border-[#D4A373] text-black font-bold shadow-[0_0_15px_rgba(212,163,115,0.5)]' : 'bg-white/5 border-white/20 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/40'}`}
            >
              <img src={themeObj.img} alt={themeObj.theme} className="w-8 h-8 rounded-full object-cover border border-white/20" />
            </button>
          ))}
        </motion.div>

        {/* Display Filtered Themes */}
        <AnimatePresence mode="popLayout">
          {filteredThemes.map((themeObj: any, index: number) => (
            <motion.div 
              key={themeObj.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row w-full border-t border-white/10 py-16 group"
            >
              {/* Left Column (Theme & Image) */}
              <div className="w-full lg:w-[40%] lg:border-r border-white/10 pr-0 lg:pr-16 flex flex-col gap-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white cinzel leading-tight group-hover:text-[#D4A373] transition-colors duration-500">
                  {themeObj.theme}
                </h2>
                <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group/image">
                   <div className="absolute inset-0 bg-[#D4A373]/20 mix-blend-overlay group-hover/image:opacity-0 transition-opacity duration-500 z-10"></div>
                   <img 
                     src={themeObj.img} 
                     alt={themeObj.theme} 
                     className="w-full h-full object-cover scale-100 group-hover/image:scale-110 transition-transform duration-700 bg-white/5"
                     onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400/111111/FFFFFF?text=THEME+IMAGE' }}
                   />
                </div>
              </div>

              {/* Right Column (Headings & Accordion Descriptions) */}
              <div className="w-full lg:w-[60%] pl-0 lg:pl-16 pt-12 lg:pt-0 flex flex-col gap-6">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-bold mb-4">
                  CHALLENGES
                </h3>
                
                <div className="flex flex-col gap-4">
                  {themeObj.statements.map((statement: any) => (
                    <div 
                      key={statement.id} 
                      className={`flex flex-col border rounded-xl overflow-hidden transition-colors duration-300 ${expandedId === statement.id ? 'bg-white/10 border-white/30' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}
                    >
                      {/* Accordion Header */}
                      <button 
                        onClick={() => toggleExpand(statement.id)}
                        className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                      >
                        <h4 className={`text-xl md:text-2xl font-bold font-sans transition-colors duration-300 pr-4 ${expandedId === statement.id ? 'text-[#D4A373]' : 'text-white'}`}>
                          {statement.heading}
                        </h4>
                        <div className={`text-white/50 transform transition-transform duration-300 ${expandedId === statement.id ? 'rotate-180' : 'rotate-0'}`}>
                          {/* Dropdown Arrow */}
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </button>

                      {/* Accordion Body */}
                      <AnimatePresence>
                        {expandedId === statement.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 text-white/70 text-base md:text-lg leading-relaxed font-sans border-t border-white/5 mx-6">
                              {statement.description}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ProblemStatements