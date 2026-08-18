import React from 'react';
import { Notes, CornerDownRight, Mail } from 'pixelarticons/react';

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '5rem', paddingBottom: '4.5rem' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          {/* Main Title H1 - Silkscreen 8-Bit Pixel Typography */}
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.15,
              letterSpacing: '0.01em',
              marginBottom: '0.875rem',
              color: 'var(--text-primary)',
            }}
          >
            Michele Vantaggi
          </h1>

          {/* Subtitle H2 - Silkscreen 8-Bit Pixel Typography */}
          <h2
            style={{
              fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              lineHeight: 1.3,
              color: 'var(--accent-teal-light)',
              marginBottom: '1.5rem',
              letterSpacing: '0.01em',
            }}
          >
            Sviluppatore Software Junior
          </h2>

          {/* Short & Focused Description - DotGothic16 High Legibility Body Font */}
          <p
            style={{
              fontSize: '1.05rem',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              marginBottom: '2.5rem',
              maxWidth: '660px',
            }}
          >
            Studente magistrale in Ingegneria Informatica e Robotica (LM-32). Specializzato in sistemi di Computer Vision (YOLO, OpenCV, FastReID, C#) e sviluppo Mobile (Flutter/Dart). Desidero applicare le mie competenze in contesti aziendali dinamici e sfidanti.
          </p>

          {/* Action Buttons with 8-Bit Pixel Icons */}
          <div className="hero-actions-mobile" style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="/cv-michele-vantaggi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Apri il Curriculum Vitae di Michele Vantaggi in formato PDF in una nuova scheda"
            >
              <Notes style={{ width: '18px', height: '18px' }} aria-hidden="true" />
              <span>Apri CV (PDF)</span>
            </a>

            <a href="#projects" className="btn btn-accent">
              <span>Progetti GitHub</span>
              <CornerDownRight style={{ width: '18px', height: '18px' }} aria-hidden="true" />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail style={{ width: '18px', height: '18px' }} aria-hidden="true" />
              <span>Contatti</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
