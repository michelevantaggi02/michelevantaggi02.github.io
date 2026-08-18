import React, { useState, useEffect } from 'react';
import { Terminal, Sun, Moon, FileText, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Skills & Tech', href: '#skills' },
    { name: 'Progetti', href: '#projects' },
    { name: 'Pubblicazioni', href: '#publications' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'background-color var(--transition-normal), border-color var(--transition-normal)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            fontWeight: 600,
            fontSize: '1rem',
            fontFamily: 'var(--font-mono)',
          }}
          aria-label="Michele Ventaggi - Torna in cima alla pagina"
        >
          <Terminal size={20} color="var(--text-primary)" aria-hidden="true" />
          <span>michelevantaggi02</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          aria-label="Navigazione principale"
        >
          <ul
            style={{
              display: 'flex',
              gap: '1.5rem',
              listStyle: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Open CV Button */}
            <a
              href="/cv-michele-vantaggi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary desktop-nav"
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', minHeight: '36px' }}
              aria-label="Apri il Curriculum Vitae di Michele Ventaggi in formato PDF in una nuova scheda"
            >
              <FileText size={14} aria-hidden="true" />
              <span>CV (PDF)</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Passa alla modalità chiara' : 'Passa alla modalità scura'}
              className="btn-secondary"
              style={{
                padding: '0.4rem',
                borderRadius: 'var(--radius-sm)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '44px',
                minWidth: '44px',
              }}
            >
              {theme === 'dark' ? (
                <Sun size={18} aria-hidden="true" />
              ) : (
                <Moon size={18} aria-hidden="true" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={isMobileMenuOpen}
              className="btn-secondary mobile-toggle"
              style={{
                padding: '0.4rem',
                display: 'none',
                minHeight: '44px',
                minWidth: '44px',
              }}
            >
              {isMobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            padding: '1.25rem var(--space-md)',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMobileMenu}
                  style={{
                    display: 'block',
                    padding: '0.625rem 0',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontWeight: 500,
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href="/cv-michele-vantaggi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justify: 'center',
                  padding: '0.75rem',
                  fontSize: '0.95rem',
                }}
              >
                <FileText size={16} aria-hidden="true" />
                <span>Apri CV (PDF)</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
