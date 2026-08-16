import React from 'react';
import { Calendar, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function Timeline() {
  const timelineEvents = [
    {
      period: 'In corso',
      title: 'Laurea Magistrale in Ingegneria Informatica e Robotica',
      subtitle: 'Università degli Studi',
      description: 'Specializzazione avanzata su robotica, sistemi autonomi, algoritmi complessi e progettazione software di sistema.',
      icon: GraduationCap,
    },
    {
      period: 'Completata',
      title: 'Laurea Triennale in Informatica',
      subtitle: 'Università degli Studi',
      description: 'Fondamenti di architettura degli elaboratori, ingegneria del software, basi di dati, reti di calcolatori e sistemi operativi.',
      icon: Award,
    },
    {
      period: '2023 - Presente',
      title: 'Sviluppatore Software & Contributore Open Source',
      subtitle: 'Progetti Personali & Community',
      description: 'Sviluppo di tool in Rust/Python, configurazione ambienti Linux (AwesomeWM dotfiles), emulazione reverse engineering e web app React.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="timeline" className="section">
      <div className="container">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
            <Calendar size={16} aria-hidden="true" />
            <span>03 / Formazione &amp; Carriera</span>
          </div>
          <h2 className="section-title">Percorso Professionale</h2>
          <p className="section-subtitle">
            I traguardi accademici ed il percorso di crescita informatica.
          </p>
        </div>

        <div style={{ position: 'relative', marginTop: '2.5rem', paddingLeft: '1.5rem' }}>
          {/* Vertical Timeline Bar */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0.375rem',
              width: '1px',
              backgroundColor: 'var(--border-subtle)',
            }}
            aria-hidden="true"
          ></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {timelineEvents.map((event, idx) => {
              const IconComponent = event.icon;
              return (
                <div key={idx} style={{ position: 'relative' }}>
                  {/* Timeline Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-1.5rem',
                      top: '0.25rem',
                      width: '0.875rem',
                      height: '0.875rem',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-primary)',
                      border: '2px solid var(--text-primary)',
                      transform: 'translateX(-50%)',
                    }}
                    aria-hidden="true"
                  ></div>

                  <article className="card-minimal">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span className="badge" style={{ fontSize: '0.75rem', color: 'var(--text-primary)' }}>
                        {event.period}
                      </span>
                      <IconComponent size={18} color="var(--text-muted)" aria-hidden="true" />
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {event.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
                      {event.subtitle}
                    </p>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                      {event.description}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
