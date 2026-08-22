import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProblemStatements from '../components/ProblemStatements';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';
import Team from '../components/Team';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <ProblemStatements />
      <Timeline />
      <FAQ />
      <Team />
    </main>
  );
};

export default Home;
