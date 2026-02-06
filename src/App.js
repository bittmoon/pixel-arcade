import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <header>
        <Hero />
      </header>
      <main>
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;