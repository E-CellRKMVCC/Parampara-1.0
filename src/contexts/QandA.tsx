import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { qa_data } from '../assets/assets.js'

const QandA = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className='w-full flex flex-col items-center min-h-screen px-6 py-20 relative z-10'>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-[1000px] mx-auto flex flex-col"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold cinzel bg-gradient-to-r from-white to-[#D4A373] bg-clip-text text-transparent text-center mb-16 drop-shadow-lg"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="flex flex-col gap-4 w-full">
          {qa_data.map((qa) => (
            <motion.div 
              key={qa.id} 
              variants={itemVariants}
              className={`flex flex-col border rounded-xl overflow-hidden transition-colors duration-300 ${expandedId === qa.id ? 'bg-[#D4A373]/10 border-[#D4A373]/50 shadow-[0_0_15px_rgba(212,163,115,0.2)]' : 'bg-black/40 backdrop-blur-md border-white/10 hover:bg-white/5 hover:border-white/20'}`}
            >
              {/* Accordion Header */}
              <button 
                onClick={() => toggleExpand(qa.id)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
              >
                <h4 className={`text-lg md:text-xl font-bold font-sans transition-colors duration-300 pr-4 ${expandedId === qa.id ? 'text-[#D4A373]' : 'text-white'}`}>
                  {qa.question}
                </h4>
                <div className={`text-white/50 transform transition-transform duration-300 flex-shrink-0 ${expandedId === qa.id ? 'rotate-180 text-[#D4A373]' : 'rotate-0'}`}>
                  {/* Dropdown Arrow */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>

              {/* Accordion Body */}
              <AnimatePresence>
                {expandedId === qa.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/70 text-base leading-relaxed font-sans border-t border-white/5 mx-6">
                      {qa.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default QandA