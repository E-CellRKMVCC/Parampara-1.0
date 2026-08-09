import React from 'react'
import { motion } from 'framer-motion'

const Main = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible" 
      className='w-full flex flex-col justify-center items-center min-h-screen px-4 py-20 relative z-10'
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A373]/20 rounded-full blur-[100px] md:blur-[150px] -z-10 pointer-events-none"></div>

      {/* Pill Badge for Subtitle */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="px-6 py-2 rounded-full border border-[#D4A373]/30 bg-[#D4A373]/10 backdrop-blur-md text-[#D4A373] text-sm md:text-base tracking-[0.2em] uppercase font-semibold shadow-[0_0_15px_rgba(212,163,115,0.2)]">
          An Intra-College Hackathon
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        variants={itemVariants} 
        className='text-5xl sm:text-7xl md:text-9xl lg:text-[130px] xl:text-[150px] font-bold text-center italic indian-style-text bg-gradient-to-b from-[#FFF] via-[#FDE047] to-[#D4A373] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(212,163,115,0.4)] leading-tight px-4'
      >
        Parampara 1.0
      </motion.h1>
      
      {/* Sanskrit Subtitle */}
      <motion.p 
        variants={itemVariants} 
        className='text-2xl sm:text-3xl md:text-5xl mt-6 md:mt-10 font-bold text-center cinzel text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] px-4'
      >
        ।। परंपरा से प्रौद्योगिकी तक ।।
      </motion.p>

      {/* Info Card with Hover Effect */}
      <motion.div 
        variants={itemVariants} 
        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
        className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] justify-items-center items-center text-white gap-8 md:gap-12 mt-16 md:mt-24 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group cursor-default"
      >
        {/* Date */}
        <div className="text-center md:text-right m-0 p-0 flex flex-col items-center md:items-end">
            <p className="text-[40px] md:text-[60px] sirin font-extrabold tracking-tighter leading-none bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-colors duration-500">
              August 22
            </p>
            <p className="text-[28px] md:text-[40px] sirin text-[#D4A373] font-bold tracking-[0.1em] mt-2 group-hover:drop-shadow-[0_0_10px_rgba(212,163,115,0.8)] transition-all duration-500">
              2026
            </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-[100px] bg-gradient-to-b from-transparent via-[#D4A373]/50 to-transparent group-hover:via-[#D4A373] transition-all duration-500"></div>
        <div className="md:hidden h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-[#D4A373]/50 to-transparent"></div>

        {/* Location */}
        <div className="text-center md:text-left m-0 p-0 flex flex-col items-center md:items-start">
            <p className="text-[24px] md:text-[35px] font-bold cinzel text-white/90 leading-tight group-hover:text-white transition-colors duration-500">
              Ramakrishna Mission
            </p>
            <p className="text-[16px] md:text-[22px] sirin text-[#D4A373]/80 mt-2 tracking-wide group-hover:text-[#D4A373] transition-colors duration-500">
              Vivekananda Centenary College
            </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Main