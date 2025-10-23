
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Structure from './components/Structure';
import Benefits from './components/Benefits';
import TraditionalRental from './components/TraditionalRental';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Structure />
        <Benefits />
        <TraditionalRental />
        <Pricing />
        <Location />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;
