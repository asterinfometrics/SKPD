import React, { useState } from 'react';
import CrestLogo from './CrestLogo';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leftNavItems = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About', href: '#about' },
    { label: 'Membership', href: '#membership' },
  ];

  const rightNavItems = [
    { label: 'Events', href: '#events' },
    { label: 'Articles', href: '#articles' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="skpd-header">
      <div className="skpd-nav-container">
        {/* Left Navigation Links */}
        <nav className="skpd-nav-group skpd-nav-left" aria-label="Main Navigation Left">
          {leftNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`skpd-nav-link ${item.active ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Center Logo Bridge */}
        <div className="skpd-logo-anchor">
          <a href="#home" className="skpd-crest-link" aria-label="SKPD Alumni Home">
            <CrestLogo className="skpd-nav-crest" width={112} height={112} />
          </a>
        </div>

        {/* Right Navigation Links */}
        <nav className="skpd-nav-group skpd-nav-right" aria-label="Main Navigation Right">
          {rightNavItems.map((item) => (
            <a key={item.label} href={item.href} className="skpd-nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Responsive Mobile Hamburger Button (<= 768px) */}
        <button
          className={`skpd-mobile-hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </div>

      {/* Mobile Slide Drawer Menu */}
      <div className={`skpd-mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <nav className="skpd-mobile-links">
          {[...leftNavItems, ...rightNavItems].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`skpd-mobile-link ${item.active ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#journey"
            className="skpd-mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Begin the Journey
          </a>
        </nav>
      </div>
    </header>
  );
}
