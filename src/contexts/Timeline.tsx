import React from 'react'
import { motion } from 'framer-motion'

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "Registration Starts",
      date: "10th August",
      description: "Open the gates for bright minds to join the hackathon. Form your teams and register your slots early!",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Registration Ends",
      date: "20th August, 11:59 PM",
      description: "Last chance to register for Parampara 1.0. No entries will be accepted beyond this deadline.",
      icon: "⏳"
    },
    {
      id: 3,
      title: "Project Submission",
      date: "21st August, 11:59 PM",
      description: "Submit your final presentation, prototypes, and source code repository for initial evaluation.",
      icon: "💻"
    },
    {
      id: 4,
      title: "Event Date",
      date: "22nd August",
      description: "The grand finale! Pitch your ideas live to the judges and witness incredible innovation.",
      icon: "🏆"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className='w-full flex flex-col items-center min-h-screen px-6 py-20 relative z-10'>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-[1200px] mx-auto flex flex-col"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold cinzel bg-gradient-to-r from-[#A04949] via-[#D4A373] to-[#99582A] bg-clip-text text-transparent text-center mb-24 drop-shadow-lg"
        >
          Event Timeline
        </motion.h1>

        <div className="relative w-full flex flex-col gap-12 md:gap-0">
          {/* Vertical Line */}
          <div className="absolute left-[32px] md:left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-[#A04949] via-[#D4A373] to-[#99582A] transform -translate-x-1/2 opacity-50 rounded-full"></div>

          {timelineData.map((item, index) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full md:mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Spacer for alternating layout on desktop */}
              <div className="hidden md:block w-5/12"></div>

              {/* Node Icon */}
              <div className="absolute left-[32px] md:static md:left-auto transform -translate-x-1/2 md:translate-x-0 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#D4A373] to-[#A04949] flex items-center justify-center text-xl md:text-2xl shadow-[0_0_20px_rgba(212,163,115,0.6)] border-4 border-[#F8DDB5] hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 pl-[80px] md:pl-0 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                <div className="p-6 md:p-8 rounded-3xl bg-black/70 backdrop-blur-md border border-[#D4A373]/20 shadow-2xl hover:bg-black/90 hover:border-[#D4A373]/50 transition-all duration-300 group">
                  <h3 className="text-2xl md:text-3xl font-bold cinzel text-white group-hover:text-[#D4A373] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#D4A373]/10 border border-[#D4A373]/30 group-hover:bg-[#D4A373]/20 transition-colors">
                    <p className="text-sm md:text-base font-bold text-[#D4A373] sirin tracking-wide">
                      {item.date}
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-white/70 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Timeline