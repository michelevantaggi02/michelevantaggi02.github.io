import React from 'react';
import { ArrowDownRight, Mail } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';

export default function Hero() {
  return (
    <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Availability Badge */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div className="status-badge">
            <span className="status-dot" aria-hidden="true"></span>
            <span>Disponibile per nuove opportunità &amp; progetti</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
            color: 'var(--text-primary)',
          }}
        >
          Michele Ventaggi
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Computer Engineering &amp; Robotics Student / Software Developer
        </h2>

        {/* Bio summary */}
        <p
          style={{
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '2.25rem',
            maxWidth: '680px',
          }}
        >
          Sviluppatore e studente magistrale con passione per l&apos;architettura del codice, la robotica, 
          gli algoritmi e la realizzazione di sistemi software efficienti in Rust, Python, C/C++ e web moderno.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#projects" className="btn btn-primary">
            <span>Esplora i Progetti</span>
            <ArrowDownRight size={16} aria-hidden="true" />
          </a>

          <a href="#contact" className="btn btn-secondary">
            <Mail size={16} aria-hidden="true" />
            <span>Contattami</span>
          </a>

          <a
            href="https://github.com/michelevantaggi02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            aria-label="Profilo GitHub di Michele Ventaggi (si apre in una nuova scheda)"
          >
            <GithubIcon size={16} aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
