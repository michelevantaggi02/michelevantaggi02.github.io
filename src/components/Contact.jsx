import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import { GITHUB_USERNAME } from '../services/githubService';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'michelevantaggi02@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/michele-vantaggi-a6319432b/';
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '0.5rem',
            }}
          >
            <Mail size={16} aria-hidden="true" />
            <span>05 / Contatti</span>
          </div>

          <h2 className="section-title">Contatti &amp; Social</h2>
          <p className="section-subtitle">
            Canali diretti per opportunità lavorative, progetti o networking professionale.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginTop: '2rem',
          }}
        >
          {/* Card 1: Direct Email */}
          <article className="card-minimal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                <Mail size={20} aria-hidden="true" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Email Diretta</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Inviami direttamente un messaggio alla mia casella di posta elettronica.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                <a
                  href={`mailto:${emailAddress}`}
                  className="btn btn-primary"
                  style={{ flex: 1, textDecoration: 'none' }}
                  aria-label={`Invia una mail a ${emailAddress}`}
                >
                  <span>Scrivi via Mail</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  aria-label="Copia indirizzo email negli appunti"
                  title="Copia email"
                >
                  {copied ? <Check size={16} color="var(--accent-emerald)" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                  <span>{copied ? 'Copiato!' : 'Copia'}</span>
                </button>
              </div>

              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                {emailAddress}
              </span>
            </div>
          </article>

          {/* Card 2: LinkedIn Profile */}
          <article className="card-minimal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                <LinkedinIcon size={20} aria-hidden="true" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>LinkedIn</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Consulta il mio profilo per dettagli sulla carriera e sulla formazione accademica.
              </p>
            </div>

            <div>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'space-between' }}
                aria-label="Profilo LinkedIn di Michele Vantaggi (apre in una nuova scheda)"
              >
                <span>Profilo LinkedIn</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* Card 3: GitHub Profile */}
          <article className="card-minimal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                <GithubIcon size={20} aria-hidden="true" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>GitHub</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Esplora il codice sorgente dei repository, dei contributi e dei progetti open source.
              </p>
            </div>

            <div>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'space-between' }}
                aria-label={`Profilo GitHub di ${GITHUB_USERNAME} (apre in una nuova scheda)`}
              >
                <span>github.com/{GITHUB_USERNAME}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
