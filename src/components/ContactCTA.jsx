import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-[var(--color-brand-surface-2)]/50 backdrop-blur-md border border-[var(--color-brand-gold)]/30 rounded-2xl p-8 md:p-16 text-center shadow-[0_0_50px_rgba(217,168,92,0.1)] group"
        >
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--color-brand-gold)_0%,_transparent_50%)] opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-700"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-6">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Reach out to the E-Cell RKMVCC team directly. We are here to help you preserve the legacy and reimagine the future.
            </p>
            
            <button className="flex items-center gap-3 bg-transparent border-2 border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] px-8 py-4 rounded-md font-semibold hover:bg-[var(--color-brand-gold)] hover:text-black transition-all duration-300 transform hover:-translate-y-1">
              <Mail size={20} />
              <span>REACH US</span>
              <ArrowRight size={18} className="opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </button>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--color-brand-cyan)]/30 rounded-tl-2xl m-4 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--color-brand-gold)]/30 rounded-br-2xl m-4 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
