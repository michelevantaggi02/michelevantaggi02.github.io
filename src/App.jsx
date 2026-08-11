import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a href="#main-content" className="skip-link">
        Salta al contenuto principale
      </a>

      <Navbar />

      <main id="main-content" style={{ flex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <ProjectsGrid />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
