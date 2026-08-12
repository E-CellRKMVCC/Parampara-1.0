import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, FileText, Presentation, Award, CheckCircle2 } from 'lucide-react';
import { submissionDetails } from '../data/problems';

const ProblemModal = ({ problem, onClose }) => {
  useEffect(() => {
    if (problem) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [problem]);

  if (!problem) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-3xl bg-[#051016] border border-[#D9A85C]/40 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-10 max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 rounded-full bg-[#D9A85C]/10 border border-[#D9A85C]/30 flex items-center justify-center text-[#D9A85C] hover:bg-[#D9A85C] hover:text-black transition-all duration-300 z-20"
          >
            <X size={18} />
          </button>

          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4 pr-12 md:pr-14">
            <span className="text-xs font-bold tracking-wider text-black bg-[#D9A85C] px-3 py-1 rounded-md">
              {problem.psCode}
            </span>
            <span className="text-xs font-semibold tracking-wider text-[#D9A85C] border border-[#D9A85C]/40 px-3 py-1 rounded-md bg-[#D9A85C]/5">
              {problem.category}
            </span>
            <span className="text-xs font-medium tracking-wider text-gray-300 border border-gray-700 px-3 py-1 rounded-md bg-white/5">
              {problem.track}
            </span>
          </div>

          {/* Title & Image Header */}
          <div className="flex flex-col md:flex-row items-start gap-4 mb-6 pb-6 border-b border-[#D9A85C]/20">
            {problem.image && (
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-[#071722] p-2 rounded-xl border border-[#D9A85C]/20 flex items-center justify-center">
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div>
              <h2 className="text-xl md:text-2xl font-display font-medium text-[#F9E0A9] leading-snug">
                {problem.title}
              </h2>
              {problem.targetAudience && (
                <p className="text-xs text-[#D9A85C]/80 mt-1 italic">
                  Target Audience: {problem.targetAudience}
                </p>
              )}
            </div>
          </div>

          {/* Submission Guidelines Alert Box */}
          <div className="bg-gradient-to-r from-[#D9A85C]/15 via-[#D9A85C]/10 to-transparent border-l-4 border-[#D9A85C] p-4 rounded-r-xl mb-6">
            <div className="flex items-center gap-2 text-[#F9E0A9] font-bold text-sm mb-2">
              <Presentation size={18} className="text-[#D9A85C]" />
              <span>SUBMISSION REQUIREMENT</span>
            </div>
            <p className="text-xs md:text-sm text-gray-200 leading-relaxed mb-3">
              For initial evaluation in <strong>PARAMPARA 1.0</strong>, teams are required to submit <strong className="text-[#F9E0A9]">ONLY a Solution Presentation Deck (PPT / PDF)</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={14} className="text-[#D9A85C]" />
                <span><strong>Submission Deadline:</strong> {submissionDetails.deadline}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award size={14} className="text-[#D9A85C]" />
                <span><strong>Evaluation & Pitching Day:</strong> {submissionDetails.pitchDay}</span>
              </div>
            </div>
          </div>

          {/* Verbatim Description */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D9A85C] mb-2 flex items-center gap-2">
              <FileText size={16} /> Problem Background & Specification
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed bg-[#071722]/60 p-4 rounded-xl border border-white/5">
              {problem.fullDescription || problem.description}
            </p>
          </div>

          {/* Presentation Slide Outline */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#D9A85C] mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} /> Recommended PPT Deck Structure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              <div className="bg-[#071722] p-2.5 rounded-lg border border-white/5">
                <span className="text-[#D9A85C] font-semibold">1. Title Slide:</span> PS Code, Project Name, Team Details
              </div>
              <div className="bg-[#071722] p-2.5 rounded-lg border border-white/5">
                <span className="text-[#D9A85C] font-semibold">2. Problem Analysis:</span> Core bottlenecks & target impact
              </div>
              <div className="bg-[#071722] p-2.5 rounded-lg border border-white/5">
                <span className="text-[#D9A85C] font-semibold">3. Solution Architecture:</span> System workflow & design
              </div>
              <div className="bg-[#071722] p-2.5 rounded-lg border border-white/5">
                <span className="text-[#D9A85C] font-semibold">4. Tech Stack:</span> Frameworks, tools & hardware
              </div>
              <div className="bg-[#071722] p-2.5 rounded-lg border border-white/5 sm:col-span-2">
                <span className="text-[#D9A85C] font-semibold">5. Feasibility & Impact:</span> Practicality, risk mitigation & social ROI
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex justify-end pt-4 border-t border-[#D9A85C]/20">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D9A85C] text-black hover:bg-[#F9E0A9] transition-colors duration-300 shadow-[0_0_15px_rgba(217,168,92,0.3)]"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default ProblemModal;

