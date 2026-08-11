import React, { useState, useEffect } from 'react';
import { Terminal, Sun, Moon, Menu, X } from 'lucide-react';

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

  const navLinks = [
    { name: 'Chi Sono', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Percorso', href: '#timeline' },
    { name: 'Progetti', href: '#projects' },
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
          aria-label="Michele Ventaggi - Torna all'inizio"
        >
          <Terminal size={20} color="var(--text-primary)" aria-hidden="true" />
          <span>michelevantaggi02</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
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

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passa alla modalità chiara' : 'Passa alla modalità scura'}
            className="btn-secondary"
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
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
              padding: '0.5rem',
              display: 'none',
            }}
          >
            {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            padding: '1rem var(--space-md)',
            borderTop: '1px solid var(--border-subtle)',
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
