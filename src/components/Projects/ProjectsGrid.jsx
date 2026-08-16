import React, { useState } from 'react';
import { FolderGit2, Search, RotateCcw, ArrowUpRight } from 'lucide-react';
import { useGithubProjects } from '../../services/useGithubProjects';
import GithubIcon from '../icons/GithubIcon';
import ProjectCard from './ProjectCard';
import ProjectSkeleton from './ProjectSkeleton';

export default function ProjectsGrid({ activeFilter, onFilterChange }) {
  const { projects, loading, isFallback, fromCache, username } = useGithubProjects();
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique languages
  const languages = ['All', ...new Set(projects.map((p) => p.language).filter(Boolean))];

  // Filter projects
  const filteredProjects = projects.filter((repo) => {
    const currentFilter = activeFilter || 'All';
    
    const matchesLang =
      currentFilter === 'All' ||
      (repo.language && repo.language.toLowerCase().includes(currentFilter.toLowerCase())) ||
      (repo.topics && repo.topics.some((t) => t.toLowerCase().includes(currentFilter.toLowerCase()))) ||
      repo.name.toLowerCase().includes(currentFilter.toLowerCase());

    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesLang && matchesSearch;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header with Quick Link to GitHub Profile */}
        <div
          className="section-header"
          style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div className="section-prefix">
              <FolderGit2 size={16} aria-hidden="true" />
              <span>02 / Progetti GitHub ({username})</span>
            </div>

            <h2 className="section-title">Showcase Repository</h2>
            <p className="section-subtitle">
              Repository pubblici estratti in tempo reale da GitHub {fromCache && '(dati in cache)'} {isFallback && '(modalità offline)'}
            </p>
          </div>

          {/* Moved GitHub Profile Quick Link Button */}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: '0.85rem' }}
            aria-label={`Visualizza il profilo GitHub completo di ${username} (apre una nuova scheda)`}
          >
            <GithubIcon size={16} aria-hidden="true" />
            <span>Profilo GitHub ({username})</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justify: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {/* Language filter pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', alignItems: 'center' }} role="tablist" aria-label="Filtra per linguaggio o argomento">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => onFilterChange(lang)}
                className={`badge ${activeFilter === lang ? 'badge-active' : ''}`}
                style={{ cursor: 'pointer' }}
                role="tab"
                aria-selected={activeFilter === lang}
              >
                {lang}
              </button>
            ))}

            {activeFilter && activeFilter !== 'All' && (
              <button
                onClick={() => onFilterChange('All')}
                className="btn-secondary"
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', borderRadius: 'var(--radius-sm)' }}
                aria-label="Resetta filtri progetti"
              >
                <RotateCcw size={12} aria-hidden="true" />
                <span>Reset ({activeFilter})</span>
              </button>
            )}
          </div>

          {/* Minimal Search input */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '240px' }}>
            <Search
              size={14}
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }}
              aria-hidden="true"
            />
            <input
              type="text"
              name="project-search"
              placeholder="Cerca repo…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Cerca repository per nome o descrizione"
              style={{
                width: '100%',
                paddingLeft: '2.25rem',
                paddingRight: '0.75rem',
                paddingTop: '0.4rem',
                paddingBottom: '0.4rem',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
              }}
            />
          </div>
        </div>

        {/* Bento Grid */}
        {loading ? (
          <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            <ProjectSkeleton />
            <ProjectSkeleton />
            <ProjectSkeleton />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Nessun repository trovato per il filtro "{activeFilter}".
          </div>
        ) : (
          <div
            className="bento-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {filteredProjects.map((repo, idx) => (
              <ProjectCard key={repo.id} repo={repo} isFeatured={idx === 0 && activeFilter === 'All'} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
