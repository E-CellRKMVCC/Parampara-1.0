import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import BackgroundDecor from './components/BackgroundDecor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProblemStatements from './components/ProblemStatements';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset scroll to top on load and prevent scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="relative w-full min-h-screen text-gray-200 selection:bg-[var(--color-brand-gold)] selection:text-black">
      <AnimatePresence>
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      <BackgroundDecor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <ProblemStatements />
        <Timeline />
        <FAQ />
        <Team />
      </main>

      <Footer />
    </div>
  );
};

export default App;