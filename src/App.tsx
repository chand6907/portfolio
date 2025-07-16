import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CursorTrail />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <a href="https://www.linkedin.com/in/chand6907/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}

export default App;