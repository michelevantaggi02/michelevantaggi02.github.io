import React from 'react';
import { Star, GitFork, ExternalLink, Globe } from 'lucide-react';
import GithubIcon from '../icons/GithubIcon';

export default function ProjectCard({ repo, isFeatured = false }) {
  return (
    <article
      className="card-minimal"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between',
        gridColumn: isFeatured ? 'span 2' : 'span 1',
        position: 'relative',
      }}
    >
      <div>
        {/* Card Top Header */}
        <div
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'flex-start',
            gap: '0.75rem',
            marginBottom: '0.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
              <span className="badge" style={{ borderColor: 'var(--text-primary)', color: 'var(--text-primary)' }}>
                Featured
              </span>
            )}
          </div>
          <span className="badge">{repo.language}</span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '1rem',
          }}
        >
          {repo.description}
        </p>

        {/* Topics / Tags */}
        {repo.topics && repo.topics.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
            {repo.topics.map((topic) => (
              <span
                key={topic}
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                }}
              >
                #{topic}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer info & Links */}
      <div
        style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          paddingTop: '0.875rem',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Star size={14} aria-hidden="true" /> {repo.stargazers_count}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <GitFork size={14} aria-hidden="true" /> {repo.forks_count}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
              aria-label={`Vedi sito demo di ${repo.name} (apre una nuova scheda)`}
            >
              <Globe size={13} aria-hidden="true" />
              <span>Demo</span>
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-primary)' }}
            aria-label={`Vedi codice del repository ${repo.name} su GitHub (apre una nuova scheda)`}
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
