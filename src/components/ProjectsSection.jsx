import React from 'react';
import { FolderGit2, Star, GitFork, ExternalLink, ShieldCheck, RefreshCw } from 'lucide-react';
import { useGithubProjects } from '../services/useGithubProjects';

export default function ProjectsSection() {
  const { projects, loading, isFallback, fromCache, username } = useGithubProjects();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
            <FolderGit2 size={16} aria-hidden="true" />
            <span>04 / Progetti GitHub ({username})</span>
          </div>
          <h2 className="section-title">Showcase Repository</h2>
          <p className="section-subtitle">
            Repository pubblici caricati in tempo reale via GitHub REST API {fromCache && '(dati da cache locale)'} {isFallback && '(modalità fallback locale)'}
          </p>
        </div>

        {loading ? (
          <div role="status" aria-live="polite" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            <RefreshCw size={24} className="spin" style={{ marginBottom: '0.75rem' }} aria-hidden="true" />
            <p>Caricamento repository GitHub in corso…</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {projects.map((repo) => (
              <article key={repo.id} className="card-minimal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                      {repo.name}
                    </h3>
                    <span className="badge">{repo.language}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', marginBottom: '1.25rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                    {repo.description}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Star size={14} aria-hidden="true" /> {repo.stargazers_count}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <GitFork size={14} aria-hidden="true" /> {repo.forks_count}
                    </span>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-primary)' }}
                    aria-label={`Vedi il codice del repository ${repo.name} su GitHub`}
                  >
                    <span>Codice</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
