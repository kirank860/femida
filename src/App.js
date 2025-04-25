// App.js
import React from 'react';

import Hero from './components/Hero';
import Process from './components/Process';
import About from './components/About';
import Blockchain from './components/Blockchain';
import Features from './components/Features';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
    <Navbar/>
      <Hero />
      <Process />
      <About />
      <Blockchain />
      <Features />
      <FAQ />
      <CallToAction />
    </div>
  );
}

export default App;