import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import BackgroundDecor from './components/BackgroundDecor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Submission from './pages/Submission';

const ReloadRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // When the site is reloaded, always redirect to the home page
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset scroll to top on load and prevent scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
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
    <Router>
      <ReloadRedirect />
      <div className="relative w-full min-h-screen text-gray-200 selection:bg-[var(--color-brand-gold)] selection:text-black">
        <AnimatePresence>
          {loading && <Preloader setLoading={setLoading} />}
        </AnimatePresence>

        <BackgroundDecor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<><Home /><Footer /></>} />
          <Route path="/submission" element={<Submission />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;