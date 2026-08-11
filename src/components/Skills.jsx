import React from 'react';
import { Code, Server, Wrench, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Linguaggi di Programmazione',
      icon: Code,
      skills: ['Rust', 'Python', 'C / C++', 'JavaScript (ES6+)', 'Lua', 'LaTeX'],
    },
    {
      title: 'Sviluppo Web & Framework',
      icon: Server,
      skills: ['React', 'Vite', 'Node.js', 'REST APIs', 'HTML5 / Modern CSS', 'JSON/MDX'],
    },
    {
      title: 'Sistemi & DevOps',
      icon: Wrench,
      skills: ['Linux (Arch/AwesomeWM)', 'Git / GitHub', 'Makefile / Build Tools', 'Docker', 'Bash Shell'],
    },
    {
      title: 'Aree di Specializzazione',
      icon: Layers,
      skills: ['Algoritmi & Strutture Dati', 'Reverse Engineering Base', 'Sistemi Embedded / Microcontrollori', 'Robotica'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
            <Code size={16} aria-hidden="true" />
            <span>02 / Tecnologie</span>
          </div>
          <h2 className="section-title">Skills &amp; Tech Stack</h2>
          <p className="section-subtitle">
            Gli strumenti, i linguaggi ed i sistemi che utilizzo quotidianamente.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="card-minimal">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
                  <IconComponent size={20} color="var(--text-primary)" aria-hidden="true" />
                  <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{category.title}</h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
