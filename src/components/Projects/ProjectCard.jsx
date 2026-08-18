import React from 'react';
import { Star, GitFork, ExternalLink, Globe } from 'lucide-react';
import GithubIcon from '../icons/GithubIcon';

export default function ProjectCard({ repo, isFeatured = false }) {
  const handleCardClick = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    window.open(repo.html_url, '_blank', 'noopener,noreferrer');
  };

  const categories = [];
  if (repo.language) {
    categories.push({ name: repo.language, isPrimary: true });
  }
  if (repo.topics && Array.isArray(repo.topics)) {
    repo.topics.forEach((t) => {
      if (t.toLowerCase() !== repo.language?.toLowerCase()) {
        categories.push({ name: `#${t}`, isPrimary: false });
      }
    });
  }

  return (
    <article
      className={`card-minimal card-clickable ${isFeatured ? 'bento-featured' : ''}`}
      onClick={handleCardClick}
      style={{
        gridColumn: isFeatured ? 'span 2' : 'span 1',
        position: 'relative',
      }}
      aria-label={`Repository ${repo.name}: ${repo.description || 'Progetto GitHub'}`}
    >
      <div className="card-body">
        {/* Row 1: Project Title Alone */}
        <div
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '0.625rem',
          }}
        >
          <h3
            style={{
              fontSize: isFeatured ? '1.25rem' : '1.1rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-primary)',
            }}
          >
            {repo.name}
          </h3>

          {isFeatured && (
            <span className="badge badge-active" style={{ fontSize: '0.7rem' }}>
              Featured
            </span>
          )}
        </div>

        {/* Row 2: Dedicated Categories & Languages Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.375rem',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          {categories.map((cat, idx) => (
            <span
              key={`${cat.name}-${idx}`}
              className={cat.isPrimary ? 'badge badge-teal' : 'badge-muted'}
            >
              {cat.name}
            </span>
          ))}
        </div>

        {/* Row 3: Description */}
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '1.25rem',
          }}
        >
          {repo.description}
        </p>
      </div>

      {/* Card Footer: Metrics & Actions (Rigidly Pushed to Bottom) */}
      <div className="card-footer">
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', whiteSpace: 'nowrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <Star size={14} aria-hidden="true" /> {repo.stargazers_count}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <GitFork size={14} aria-hidden="true" /> {repo.forks_count}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center', whiteSpace: 'nowrap' }}>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', minHeight: '36px' }}
              aria-label={`Vedi sito demo di ${repo.name} (apre una nuova scheda)`}
              onClick={(e) => e.stopPropagation()}
            >
              <Globe size={13} aria-hidden="true" />
              <span>Demo</span>
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: 'var(--text-primary)', textDecoration: 'none' }}
            aria-label={`Vedi codice del repository ${repo.name} su GitHub (apre una nuova scheda)`}
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon size={14} aria-hidden="true" />
            <span>Codice</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
