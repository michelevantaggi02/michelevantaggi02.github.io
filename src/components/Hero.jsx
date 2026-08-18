import React from 'react';
import { ArrowDownRight, FileText, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '5rem', paddingBottom: '4.5rem' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          {/* Main Title H1 */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 3.75rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              marginBottom: '0.875rem',
              color: 'var(--text-primary)',
            }}
          >
            Michele Vantaggi
          </h1>

          {/* Subtitle H2 - Clean Sans-Serif Fluid Typography */}
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              fontWeight: 500,
              lineHeight: 1.3,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              letterSpacing: '-0.015em',
            }}
          >
            Sviluppatore Software Junior
          </h2>

          {/* Short & Focused Description */}
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              marginBottom: '2.5rem',
              maxWidth: '660px',
            }}
          >
            Studente magistrale in Ingegneria Informatica e Robotica (LM-32). Specializzato in sistemi di Computer Vision (YOLO, OpenCV, FastReID, C#) e sviluppo Mobile (Flutter/Dart). Desidero applicare le mie competenze in contesti aziendali dinamici e sfidanti.
          </p>

          {/* Action Buttons (Option A Hierarchy: Primary CV, Accent Projects, Secondary Contact) */}
          <div className="hero-actions-mobile" style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="/cv-michele-vantaggi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Apri il Curriculum Vitae di Michele Vantaggi in formato PDF in una nuova scheda"
            >
              <FileText size={16} aria-hidden="true" />
              <span>Apri CV (PDF)</span>
            </a>

            <a href="#projects" className="btn btn-accent">
              <span>Progetti GitHub</span>
              <ArrowDownRight size={16} aria-hidden="true" />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={16} aria-hidden="true" />
              <span>Contatti</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
