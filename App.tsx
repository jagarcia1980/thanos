import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Methodology from './components/Methodology';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans selection:bg-thanos-200 selection:text-thanos-900">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Methodology />
        <Features />
        <Benefits />
      </main>
      <Footer />
    </div>
  );
}

export default App;