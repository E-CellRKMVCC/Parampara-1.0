import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className='w-full max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-20 relative z-10'>
      
      {/* Decorative background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#99582A]/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4A373]/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full"
      >
        {/* ABOUT Section */}
        <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6 lg:pr-10">
            <h1 className="text-5xl md:text-7xl font-bold cinzel bg-gradient-to-r from-white to-[#D4A373] bg-clip-text text-transparent drop-shadow-md">
                ABOUT
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#A04949] to-[#D4A373] rounded-full"></div>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans">
                <span className="text-white font-semibold">Parampara 1.0</span> is the intra-college hackathon of Ramakrishna Mission Vivekananda Centenary College, an initiative by <span className="text-[#D4A373] font-semibold">E-Cell RKMVCC</span>. 
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans">
                It's a platform where ideas meet tradition, and innovation creates impact. Inspired by the timeless values of Indian heritage, we challenge young minds to build solutions that empower communities and shape a better tomorrow.
            </p>
        </motion.div>

        {/* THEME Section - Glass Card */}
        <motion.div 
            variants={itemVariants} 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            className="flex flex-col justify-center p-10 md:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group relative overflow-hidden"
        >
            {/* Inner Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4A373]/0 to-[#D4A373]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <h1 className="text-4xl md:text-5xl font-bold cinzel text-white mb-6 relative z-10">
                Theme
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-[#D4A373] mb-6 tracking-wide sirin relative z-10 drop-shadow-[0_0_10px_rgba(212,163,115,0.4)]">
                Our roots. Our values. Our future.
            </h2>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-sans relative z-10 border-l-2 border-[#D4A373]/50 pl-6 py-2">
                Carrying forward the legacy of wisdom, resilience
                and innovation from our culture into technology
                driven solutions for a better tomorrow.
            </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About