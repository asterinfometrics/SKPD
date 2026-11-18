import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CrestLogo from './CrestLogo';
import './Navbar.css';

export default function Navbar({ activePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressRef = useRef(null);
  const location = useLocation();

  const currentPath = location?.pathname || '/';
  const effectiveActive = activePage || (
    currentPath === '/about' ? 'about' :
    currentPath === '/membership' ? 'membership' :
    currentPath === '/events' ? 'events' :
    currentPath === '/articles' ? 'articles' :
    currentPath === '/contact' ? 'contact' : 'home'
  );

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;

          // Hysteresis threshold: 70px to activate, 20px to deactivate
          // This eliminates bouncing/jitter feedback loops when scrolling near the threshold
          if (!lastScrolled && scrollY > 70) {
            lastScrolled = true;
            setIsScrolled(true);
          } else if (lastScrolled && scrollY < 20) {
            lastScrolled = false;
            setIsScrolled(false);
          }

          // Direct DOM style update to prevent re-rendering Navbar on every scroll pixel
          if (progressRef.current) {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const totalScroll = docHeight - winHeight;
            if (totalScroll > 0) {
              const percent = Math.min(100, Math.max(0, (scrollY / totalScroll) * 100));
              progressRef.current.style.width = `${percent}%`;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavItems = [
    { label: 'Home', to: '/', id: 'home' },
    { label: 'About', to: '/about', id: 'about' },
    { label: 'Membership', to: '/membership', id: 'membership' },
  ];

  const rightNavItems = [
    { label: 'Events', to: '/events', id: 'events' },
    { label: 'Articles', to: '/articles', id: 'articles' },
    { label: 'Contact', to: '/contact', id: 'contact' },
  ];

  return (
    <header className={`skpd-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Scroll Progress Bar at the bottom of header */}
      <div className="skpd-scroll-progress-track" aria-hidden="true">
        <div
          ref={progressRef}
          className="skpd-scroll-progress-indicator"
          style={{ width: '0%' }}
        />
      </div>

      <div className="skpd-nav-container">
        {/* Left Navigation Links */}
        <nav className="skpd-nav-group skpd-nav-left" aria-label="Main Navigation Left">
          {leftNavItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`skpd-nav-link ${effectiveActive === item.id ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center Logo Bridge */}
        <div className="skpd-logo-anchor">
          <Link to="/" className="skpd-crest-link" aria-label="SKPD Alumni Home">
            <CrestLogo className="skpd-nav-crest" width={112} height={112} />
          </Link>
        </div>

        {/* Right Navigation Links */}
        <nav className="skpd-nav-group skpd-nav-right" aria-label="Main Navigation Right">
          {rightNavItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`skpd-nav-link ${effectiveActive === item.id ? 'active' : ''}`}
            >
              {item.label}
            </Link>
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
            <Link
              key={item.label}
              to={item.to}
              className={`skpd-mobile-link ${effectiveActive === item.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/membership"
            className="skpd-mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Begin the Journey
          </Link>
        </nav>
      </div>
    </header>
  );
}
