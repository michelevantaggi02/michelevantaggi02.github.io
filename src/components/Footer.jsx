import React from 'react';
import { Mail } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { GITHUB_USERNAME } from '../services/githubService';

export default function Footer() {
  const emailAddress = 'michelevantaggi02@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/michele-vantaggi-a6319432b/';
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`;

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '2.5rem 1.25rem',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
        }}
      >
        {/* Quick social links */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <a
            href={`mailto:${emailAddress}`}
            style={{ color: 'var(--text-secondary)' }}
            aria-label={`Invia una mail a ${emailAddress}`}
          >
            <Mail size={18} aria-hidden="true" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Profilo LinkedIn di Michele Vantaggi (apre in una nuova scheda)"
          >
            <LinkedinIcon size={18} aria-hidden="true" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)' }}
            aria-label={`Profilo GitHub di ${GITHUB_USERNAME} (apre in una nuova scheda)`}
          >
            <GithubIcon size={18} aria-hidden="true" />
          </a>
        </div>

        <p>© {new Date().getFullYear()} Michele Vantaggi ({GITHUB_USERNAME}) • Portfolio Professionale Minimalista</p>
        <p style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
          Costruito con React, Vite &amp; Vanilla CSS • Conforme alle Web Interface Guidelines Vercel
        </p>
      </div>
    </footer>
  );
}
