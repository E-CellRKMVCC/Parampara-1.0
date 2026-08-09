import React from 'react'
import { motion } from 'framer-motion'

const ContactUs = () => {
  // Placeholder data for the organizing team. You can easily edit names, roles, and links here!
  const teamMembers = [
    {
      id: 1,
      name: "Member Name",
      role: "Lead Organizer",
      image: "https://via.placeholder.com/150/111111/FFFFFF?text=PIC",
      linkedin: "#",
      email: "mailto:example@example.com"
    },
    {
      id: 2,
      name: "Member Name",
      role: "Technical Head",
      image: "https://via.placeholder.com/150/111111/FFFFFF?text=PIC",
      linkedin: "#",
      email: "mailto:example@example.com"
    },
    {
      id: 3,
      name: "Member Name",
      role: "Design Lead",
      image: "https://via.placeholder.com/150/111111/FFFFFF?text=PIC",
      linkedin: "#",
      email: "mailto:example@example.com"
    },
    {
      id: 4,
      name: "Member Name",
      role: "Marketing Head",
      image: "https://via.placeholder.com/150/111111/FFFFFF?text=PIC",
      linkedin: "#",
      email: "mailto:example@example.com"
    },
    {
      id: 5,
      name: "Member Name",
      role: "Logistics Head",
      image: "https://via.placeholder.com/150/111111/FFFFFF?text=PIC",
      linkedin: "#",
      email: "mailto:example@example.com"
    },
    {
      id: 6,
      name: "Member Name",
      role: "Sponsorship Lead",
      image: "https://via.placeholder.com/150/111111/FFFFFF?text=PIC",
      linkedin: "#",
      email: "mailto:example@example.com"
    }
  ]

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
        className="w-full max-w-[1200px] mx-auto flex flex-col"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold cinzel bg-gradient-to-r from-[#A04949] via-[#D4A373] to-[#99582A] bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Parampara 1.0 is proudly organized by <br/>
            <span className="font-bold text-[#D4A373] cinzel text-3xl block mt-2 tracking-wide drop-shadow-[0_0_10px_rgba(212,163,115,0.4)]">
              E-Cell RKMVCC
            </span>
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div variants={itemVariants} className="mb-24 w-full">
          <div className="flex items-center justify-center w-full mb-12">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#D4A373]/50"></div>
            <h2 className="text-lg md:text-xl text-center text-white/70 cinzel tracking-[0.2em] uppercase px-6">
              Organizing Team
            </h2>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#D4A373]/50"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#D4A373]/50 transition-all duration-300 shadow-xl group"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/10 group-hover:border-[#D4A373] transition-colors duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D4A373] transition-colors text-center">{member.name}</h3>
                <p className="text-[11px] text-white/50 font-bold tracking-[0.1em] uppercase mb-6 text-center">{member.role}</p>
                
                <div className="flex gap-4 mt-auto">
                  {/* LinkedIn Icon */}
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4A373]/20 hover:border-[#D4A373] hover:text-[#D4A373] transition-all text-white/70">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  {/* Email Icon */}
                  <a href={member.email} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4A373]/20 hover:border-[#D4A373] hover:text-[#D4A373] transition-all text-white/70">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* General Contact Info / Footer */}
        <motion.div variants={itemVariants} className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#A04949]/20 to-[#99582A]/20 border border-[#D4A373]/30 backdrop-blur-md shadow-[0_0_30px_rgba(160,73,73,0.2)]">
           <div className="text-center md:text-left mb-6 md:mb-0">
             <h3 className="text-2xl md:text-3xl font-bold cinzel text-white mb-2">Still have questions?</h3>
             <p className="text-white/70 font-sans text-lg">Reach out to the E-Cell RKMVCC team directly.</p>
           </div>
           <a href="mailto:ecell@rkmvcc.edu" className="px-8 py-4 bg-[#D4A373] text-black font-bold rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,163,115,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] flex items-center gap-3">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
             </svg>
             Email Us
           </a>
        </motion.div>

        {/* Site Credits */}
        <motion.div variants={itemVariants} className="w-full mt-24 text-center border-t border-white/10 pt-8 pb-4">
          <p className="text-sm text-white/40 font-sans tracking-wider">
            Site Designed & Developed by <span className="text-[#D4A373] font-bold">Rajdeep Pal & Subhadeep Mondal</span>. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactUs