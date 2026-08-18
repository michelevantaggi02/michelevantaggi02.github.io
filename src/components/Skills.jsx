import React from 'react';
import { Cpu, Code, Smartphone, Server } from 'pixelarticons/react';

export default function Skills({ onSelectSkill }) {
  const skillCategories = [
    {
      title: 'Computer Vision & AI',
      icon: <Cpu style={{ width: '22px', height: '22px', color: 'var(--accent-teal-light)' }} aria-hidden="true" />,
      skills: ['OpenCV', 'YOLO', 'FastReID', 'DeepSort', 'Tesseract OCR', 'Machine Learning', 'C#'],
    },
    {
      title: 'Linguaggi & Sistemi',
      icon: <Code style={{ width: '22px', height: '22px', color: 'var(--accent-teal-light)' }} aria-hidden="true" />,
      skills: ['C++', 'Python', 'Dart', 'Java', 'Rust', 'JavaScript', 'SQL / PostgreSQL'],
    },
    {
      title: 'Sviluppo Mobile',
      icon: <Smartphone style={{ width: '22px', height: '22px', color: 'var(--accent-teal-light)' }} aria-hidden="true" />,
      skills: ['Flutter', 'Android Native', 'REST API', 'JSON / Serialization', 'UI / UX Responsive'],
    },
    {
      title: 'Server, Tools & Cloud',
      icon: <Server style={{ width: '22px', height: '22px', color: 'var(--accent-teal-light)' }} aria-hidden="true" />,
      skills: ['Git / GitHub', 'Docker', 'Linux / Bash', 'Vite / React', 'CI / CD Actions'],
    },
  ];

  const handleSkillClick = (skill) => {
    if (onSelectSkill) {
      onSelectSkill(skill);
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-prefix">
            <Cpu style={{ width: '16px', height: '16px' }} aria-hidden="true" />
            <span>01 / Competenze Tecniche</span>
          </div>

          <h2 className="section-title">Tech Stack &amp; Skill Set</h2>
          <p className="section-subtitle">
            Competenze pratiche acquisite durante il percorso universitario LM-32 ed i progetti di sviluppo.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginTop: '2rem',
          }}
        >
          {skillCategories.map((cat, idx) => (
            <article key={idx} className="card-minimal">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                {cat.icon}
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleSkillClick(skill)}
                    className="badge badge-teal"
                    style={{
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                    title={`Filtra progetti con ${skill}`}
                    aria-label={`Filtra i progetti GitHub relativi a ${skill}`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
