import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import RegisterButton from '../components/RegisterButton';
import contactBg from '../assets/images/Contact-Us-bg.webp';
import templatePpt from '../assets/Presentation1.pptx';

const rules = [
  { num: 1, label: 'Team Size', text: <><strong className="text-[#D9A85C]">3–6 members</strong> per team.</> },
  { num: 2, label: 'Problem Statement', text: <>Choose <strong className="text-[#D9A85C]">one</strong> problem statement from the official list.</> },
  { num: 3, label: 'Submission', text: <>Submit <strong className="text-[#D9A85C]">one PPT/PDF</strong> using the official PARAMPARA template.</> },
  { num: 4, label: 'Include', text: <>Problem, proposed solution, how it works, target users, and expected impact.</> },
  { num: 5, label: 'Non-Tech Friendly', text: <><strong className="text-[#D9A85C]">No coding or technical knowledge required.</strong> No app, website, or prototype needed. Focus on your <strong className="text-[#D9A85C]">idea, creativity, feasibility, and impact</strong>.</> },
  { num: 6, label: 'Originality', text: <>The solution must be your team's own work. AI tools may be used for research and brainstorming.</> },
  { num: 7, label: 'Deadline', text: <>Submit before the announced deadline. <strong className="text-[#D9A85C]">Late submissions may not be accepted.</strong></> },
];

const Submission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-28 md:pt-32 pb-8 flex items-center justify-center relative z-10 px-4 md:px-8">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center bg-no-repeat fixed"
        style={{ backgroundImage: `url(${contactBg})` }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl w-full relative z-10 bg-[#051016]/90 backdrop-blur-md border border-[#D9A85C]/30 rounded-2xl px-6 py-6 md:px-8 md:py-7 shadow-[0_0_40px_rgba(217,168,92,0.1)]"
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-3xl font-display font-medium text-[#F9E0A9] uppercase tracking-wider mb-1.5">
            Submission Rules
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#D9A85C]/50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[#D9A85C]/50" />
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#D9A85C]/50" />
          </div>
        </div>

        {/* Rules */}
        <ol className="space-y-2 mb-4">
          {rules.map(({ num, label, text }) => (
            <li key={num} className="flex gap-2.5 items-start">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D9A85C]/15 border border-[#D9A85C]/30 flex items-center justify-center text-[10px] font-bold text-[#D9A85C] mt-0.5">
                {num}
              </span>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                <span className="text-[#F0C477] font-semibold">{label}: </span>
                {text}
              </p>
            </li>
          ))}
        </ol>

        {/* Callout */}
        <div className="bg-[#D9A85C]/08 border border-[#D9A85C]/25 rounded-lg px-3.5 py-2.5 mb-5">
          <p className="text-[#F9E0A9] text-xs md:text-sm font-medium m-0">
            💡 <strong className="text-[#D9A85C]">PARAMPARA is for everyone</strong> — a great idea matters more than technical knowledge.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
          <RegisterButton
            text="SUBMIT YOUR IDEA"
            href="https://forms.gle/9sVQCUVzXnw6dLis5"
            size="md"
            target="_blank"
          />
          <RegisterButton
            text="DOWNLOAD TEMPLATE"
            href={templatePpt}
            size="md"
            target="_blank"
            download
          />
        </div>
      </motion.div>
    </main>
  );
};

export default Submission;
