import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleSelectSkill = (skillName) => {
    setActiveFilter(skillName);
  };

  const handleFilterChange = (filterName) => {
    setActiveFilter(filterName);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a href="#main-content" className="skip-link">
        Salta al contenuto principale
      </a>

      <Navbar />

      <main id="main-content" style={{ flex: 1 }}>
        <Hero />
        <Skills onSelectSkill={handleSelectSkill} />
        <ProjectsGrid activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        <Publications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
