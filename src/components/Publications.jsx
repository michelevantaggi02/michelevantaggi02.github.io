import React from 'react';
import { BookOpen, Award, ArrowUpRight } from 'lucide-react';

export default function Publications() {
  const scitepressUrl = 'https://www.scitepress.org/Link.aspx?doi=10.5220/0014151500004052';

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-prefix">
            <BookOpen size={16} aria-hidden="true" />
            <span>03 / Pubblicazioni Scientifiche</span>
          </div>

          <h2 className="section-title">Pubblicazioni</h2>
          <p className="section-subtitle">
            Articoli scientifici ed atti di conferenze internazionali.
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a
            href={scitepressUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-minimal card-clickable"
            style={{ display: 'block' }}
            aria-label="Leggi la pubblicazione su SCITEPRESS (DOI: 10.5220/0014151500004052): An Application to Automatically Detect Track-Limit Violations in Car Races (ICAART 2026) (apre in una nuova scheda)"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} color="var(--accent-teal-light)" aria-hidden="true" />
                <span className="badge badge-teal">
                  ICAART 2026
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-teal-light)' }}>
                <span>SCITEPRESS DOI</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </div>
            </div>

            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                lineHeight: 1.4,
                marginBottom: '0.75rem',
                color: 'var(--text-primary)',
              }}
            >
              "An Application to Automatically Detect Track-Limit Violations in Car Races"
            </h3>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Sviluppo di un sistema avanzato di Computer Vision basato sugli algoritmi YOLO, FastReID, DeepSort ed OpenCV per il monitoraggio e la rilevazione automatizzata in tempo reale delle violazioni dei limiti di pista durante le gare automobilistiche.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge">Computer Vision</span>
              <span className="badge">YOLO</span>
              <span className="badge">DeepSort</span>
              <span className="badge">C# / OpenCV</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
