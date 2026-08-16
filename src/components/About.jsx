import React from 'react';
import { User, Cpu, Shield, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Cpu,
      title: 'Ingegneria & Robotica',
      description: 'Studi specialistici focalizzati sui sistemi complessi, algoritmo-design e controllo software.',
    },
    {
      icon: Shield,
      title: 'Clean Architecture',
      description: 'Scrittura di codice manutenibile, tipizzato e ben documentato in ambiente Unix/Linux.',
    },
    {
      icon: Zap,
      title: 'Efficienza & Performance',
      description: 'Ottimizzazione di algoritmi e gestione efficiente delle risorse di memoria e di calcolo.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
            <User size={16} aria-hidden="true" />
            <span>01 / Background</span>
          </div>
          <h2 className="section-title">Chi Sono</h2>
          <p className="section-subtitle">
            Un'introduzione alla mia visione informatica e al mio approccio allo sviluppo software.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <article key={item.title} className="card-minimal">
                <div style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  <IconComponent size={24} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
