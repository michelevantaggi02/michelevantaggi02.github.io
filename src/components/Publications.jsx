import React from 'react';
import { Article, CornerUpRight } from 'pixelarticons/react';

export default function Publications() {
  const publicationUrl = 'https://www.scitepress.org/Link.aspx?doi=10.5220/0014151500004052';

  const handleCardClick = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    window.open(publicationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-prefix">
            <Article style={{ width: '16px', height: '16px' }} aria-hidden="true" />
            <span>03 / Pubblicazioni Scientifiche</span>
          </div>

          <h2 className="section-title">Ricerca &amp; Pubblicazioni</h2>
          <p className="section-subtitle">
            Contributi scientifici presentati a conferenze internazionali nel campo dell'Intelligenza Artificiale.
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <article
            className="card-minimal card-clickable"
            onClick={handleCardClick}
            aria-label="Pubblicazione scientifica: An Application to Automatically Detect Track-Limit Violations in Car Races su SCITEPRESS"
          >
            <div className="card-body">
              {/* Header Row: Badge & Link */}
              <div
                style={{
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '0.875rem',
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span className="badge badge-teal">ICAART 2026</span>
                  <span className="badge-muted">Computer Vision</span>
                </div>

                <a
                  href={publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent-teal-light)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    fontWeight: 700,
                  }}
                  aria-label="Visualizza la pubblicazione scientifica su SCITEPRESS (apre una nuova scheda)"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>SCITEPRESS DOI</span>
                  <CornerUpRight style={{ width: '14px', height: '14px' }} aria-hidden="true" />
                </a>
              </div>

              {/* Publication Title */}
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}
              >
                An Application to Automatically Detect Track-Limit Violations in Car Races
              </h3>

              {/* Abstract / Description */}
              <p
                style={{
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.25rem',
                }}
              >
                Sviluppo di un sistema intelligente basato su tecniche avanzate di Computer Vision e Deep Learning per il rilevamento automatico delle violazioni dei limiti di pista nelle competizioni automobilistiche.
              </p>
            </div>

            {/* Footer Metrics & Citation Info */}
            <div className="card-footer">
              <span>Editore: SCITEPRESS</span>
              <span>Anno: 2026</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
