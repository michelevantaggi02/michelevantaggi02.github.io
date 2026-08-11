import React, { useState } from 'react';
import { FolderGit2, Search } from 'lucide-react';
import { useGithubProjects } from '../../services/useGithubProjects';
import ProjectCard from './ProjectCard';
import ProjectSkeleton from './ProjectSkeleton';

export default function ProjectsGrid() {
  const { projects, loading, isFallback, fromCache, username } = useGithubProjects();
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique languages
  const languages = ['All', ...new Set(projects.map((p) => p.language).filter(Boolean))];

  // Filter projects
  const filteredProjects = projects.filter((repo) => {
    const matchesLang = selectedLanguage === 'All' || repo.language === selectedLanguage;
    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLang && matchesSearch;
  });

  return (
    <section id="projects" className="section">
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
            <FolderGit2 size={16} aria-hidden="true" />
            <span>04 / Progetti GitHub ({username})</span>
          </div>

          <h2 className="section-title">Showcase Repository</h2>
          <p className="section-subtitle">
            Repository pubblici estratti in tempo reale da GitHub {fromCache && '(dati in cache)'} {isFallback && '(modalità offline)'}
          </p>
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }} role="tablist" aria-label="Filtra per linguaggio">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className="badge"
                style={{
                  cursor: 'pointer',
                  backgroundColor: selectedLanguage === lang ? 'var(--text-primary)' : 'var(--bg-secondary)',
                  color: selectedLanguage === lang ? 'var(--text-inverse)' : 'var(--text-secondary)',
                  borderColor: selectedLanguage === lang ? 'var(--text-primary)' : 'var(--border-subtle)',
                }}
                role="tab"
                aria-selected={selectedLanguage === lang}
              >
                {lang}
              </button>
            ))}
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
            Nessun repository trovato per i filtri selezionati.
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
              <ProjectCard key={repo.id} repo={repo} isFeatured={idx === 0} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
