import React from 'react';
import { Eye, Code, Smartphone, Terminal, ArrowDown } from 'lucide-react';

export default function Skills({ onSelectSkill }) {
  const skillCategories = [
    {
      title: 'Computer Vision & AI',
      icon: Eye,
      skills: ['OpenCV', 'YOLO', 'FastReID', 'DeepSort', 'Tesseract'],
    },
    {
      title: 'Linguaggi Principali & Sistemi',
      icon: Code,
      skills: ['Java', 'C#', 'Dart', 'Rust', 'Python', 'C / C++', 'Lua', 'SQL'],
    },
    {
      title: 'Mobile & Web Development',
      icon: Smartphone,
      skills: ['Flutter (iOS/Android)', 'React', 'PHP', 'JSP', 'HTML5 / CSS3'],
    },
    {
      title: 'Server, Database & Tools',
      icon: Terminal,
      skills: ['Linux', 'Git / GitHub', 'MySQL', 'Tomcat', 'Certbot / TLS', 'Docker'],
    },
  ];

  const handleSkillClick = (skillName) => {
    const cleanName = skillName.split(' ')[0];
    if (onSelectSkill) {
      onSelectSkill(cleanName);
    }
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-prefix">
            <Code size={16} aria-hidden="true" />
            <span>01 / Competenze Tecniche</span>
          </div>

          <h2 className="section-title">Skills &amp; Tecnologie</h2>
          <p className="section-subtitle">
            Seleziona una tecnologia per filtrare istantaneamente i relativi progetti pubblici su GitHub.
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
                    <button
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      className="badge"
                      style={{
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent-teal-light)';
                        e.currentTarget.style.color = 'var(--accent-teal-light)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                      aria-label={`Filtra i progetti per ${skill} e scorri alla sezione progetti`}
                      title={`Filtra progetti per ${skill}`}
                    >
                      <span>{skill}</span>
                      <ArrowDown size={12} aria-hidden="true" style={{ opacity: 0.6 }} />
                    </button>
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
