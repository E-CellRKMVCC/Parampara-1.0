import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faq';
import faqBg from '../assets/images/Faq-BG.webp';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`mb-4 border border-[#D9A85C]/20 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#D9A85C]/10 border-[#D9A85C]/50 shadow-[0_0_15px_rgba(217,168,92,0.1)]' : 'bg-[#051016]/80 md:backdrop-blur-md hover:border-[#D9A85C]/40'}`}>
      <button 
        className="w-full max-[420px]:px-4 max-[420px]:py-3 px-6 py-4 md:py-5 text-left flex justify-between items-center group focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-[15px] md:text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-300 pr-8">
          {question}
        </h3>
        <div className={`transform transition-transform duration-300 shrink-0 text-[#D9A85C] ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 pt-2 border-t border-[#D9A85C]/10 text-gray-400 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="max-[420px]:py-16 py-24 relative z-10 overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${faqBg})` }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2">
              <div className="max-[420px]:w-4 w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-[#D9A85C]/50"></div>
              <div className="w-2 h-2 rotate-45 border border-[#D9A85C]/50"></div>
            </div>
            <h2 className="max-[420px]:text-lg text-xl md:text-3xl font-display font-medium tracking-[0.1em] text-[#F9E0A9] uppercase">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rotate-45 border border-[#D9A85C]/50"></div>
              <div className="max-[420px]:w-4 w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-[#D9A85C]/50"></div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
