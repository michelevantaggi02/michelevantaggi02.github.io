import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import LinkedinIcon from './icons/LinkedinIcon';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'michelevantaggi02@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/michele-vantaggi-a6319432b/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-prefix">
            <Mail size={16} aria-hidden="true" />
            <span>04 / Contatti</span>
          </div>

          <h2 className="section-title">Contatti Diretti</h2>
          <p className="section-subtitle">
            Canali diretti per opportunità lavorative, progetti o networking professionale.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
            marginTop: '2rem',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Direct Email */}
          <article className="card-minimal" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="card-body" style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                <Mail size={20} aria-hidden="true" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Email Diretta</h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Inviami direttamente un messaggio alla mia casella di posta elettronica.
              </p>

              {/* Email Tag Pushed Right Above Footer */}
              <div style={{ marginTop: 'auto', marginBottom: '1.25rem' }}>
                <span className="badge badge-muted" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>
                  {emailAddress}
                </span>
              </div>
            </div>

            {/* Rigid Bottom Footer Buttons */}
            <div className="card-footer" style={{ borderTop: 'none', paddingTop: 0, marginTop: 'auto' }}>
              <div style={{ display: 'flex', gap: '0.5rem', width: '100%', flexWrap: 'wrap' }}>
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
                  {copied ? <Check size={16} color="var(--accent-teal-light)" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                  <span>{copied ? 'Copiato!' : 'Copia'}</span>
                </button>
              </div>
            </div>
          </article>

          {/* Card 2: LinkedIn Profile */}
          <article className="card-minimal" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="card-body" style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                <LinkedinIcon size={20} aria-hidden="true" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>LinkedIn</h3>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                Consulta il mio profilo per dettagli sulla carriera e sulla formazione accademica.
              </p>

              {/* LinkedIn Tag Pushed Right Above Footer */}
              <div style={{ marginTop: 'auto', marginBottom: '1.25rem' }}>
                <span className="badge badge-muted" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>
                  in/michele-vantaggi-a6319432b
                </span>
              </div>
            </div>

            {/* Rigid Bottom Footer Button */}
            <div className="card-footer" style={{ borderTop: 'none', paddingTop: 0, marginTop: 'auto' }}>
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
        </div>
      </div>
    </section>
  );
}
