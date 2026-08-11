import React from 'react';

export default function ProjectSkeleton() {
  return (
    <div
      className="card-minimal"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between',
        minHeight: '220px',
      }}
      role="status"
      aria-label="Caricamento scheda progetto in corso"
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div className="skeleton-box" style={{ width: '40%', height: '1.25rem', borderRadius: 'var(--radius-sm)' }}></div>
          <div className="skeleton-box" style={{ width: '20%', height: '1.25rem', borderRadius: 'var(--radius-sm)' }}></div>
        </div>
        <div className="skeleton-box" style={{ width: '90%', height: '0.875rem', marginBottom: '0.5rem', borderRadius: 'var(--radius-sm)' }}></div>
        <div className="skeleton-box" style={{ width: '70%', height: '0.875rem', marginBottom: '1rem', borderRadius: 'var(--radius-sm)' }}></div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <div className="skeleton-box" style={{ width: '50px', height: '1.25rem', borderRadius: 'var(--radius-sm)' }}></div>
        <div className="skeleton-box" style={{ width: '60px', height: '1.25rem', borderRadius: 'var(--radius-sm)' }}></div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', pt: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="skeleton-box" style={{ width: '80px', height: '1rem', borderRadius: 'var(--radius-sm)' }}></div>
        <div className="skeleton-box" style={{ width: '60px', height: '1rem', borderRadius: 'var(--radius-sm)' }}></div>
      </div>
    </div>
  );
}
