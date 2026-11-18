import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FooterSection.css';
import footerlogo from '../../assets/footerlogo.png';
import footerSketch from '../../assets/footer_sketch.webp';

export default function FooterSection() {
  const location = useLocation();
  const [activeModal, setActiveModal] = useState(null);

  const handleHashLink = (targetPath, hash) => {
    if (location.pathname === targetPath) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="skpd-footer" id="footer">
      <div className="skpd-footer-container">
        {/* Top Header Row: Left (Logo + Title stacked), Right (Subtitle + Button stacked) */}
        <div className="footer-top-row">
          <div className="footer-top-left">
            <Link to="/" className="footer-crest-wrapper" aria-label="SKPD Alumni Home">
              <img
                src={footerlogo}
                alt="SKPD Crest Logo"
                className="footer-crest-img"
              />
            </Link>
            <h2 className="footer-brand-title">
              Once a Student. Always an Alumnus.
            </h2>
          </div>

          <div className="footer-top-right">
            <p className="footer-top-subtitle">
              Wherever life takes you, stay connected to <br /> the people, memories,
              and community that <br /> 
              shaped your journey.
            </p>
            <Link to="/membership" className="footer-member-cta">
              <span className="footer-cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
              </span>
              <span>Become a Member</span>
            </Link>
          </div>
        </div>

        {/* Divider Line */}
        <div className="footer-divider" />

        {/* 5 Navigation & Info Columns */}
        <div className="footer-links-grid">
          {/* Col 1: Explore */}
          <div className="footer-col">
            <h3 className="footer-col-title">Explore</h3>
            <ul className="footer-col-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li>
                <Link to="/#gallery" onClick={() => handleHashLink('/', '#gallery')}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/articles">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Connect */}
          <div className="footer-col">
            <h3 className="footer-col-title">Connect</h3>
            <ul className="footer-col-list">
              <li>
                <Link to="/#stories" onClick={() => handleHashLink('/', '#stories')}>
                  Alumni Stories
                </Link>
              </li>
              <li><Link to="/membership">Become a Member</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="footer-col">
            <h3 className="footer-col-title">Resources</h3>
            <ul className="footer-col-list">
              <li>
                <button
                  type="button"
                  className="footer-text-btn"
                  onClick={() => setActiveModal('privacy')}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-text-btn"
                  onClick={() => setActiveModal('terms')}
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <Link to="/#faq" onClick={() => handleHashLink('/', '#faq')}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-col footer-contact-col">
            <h3 className="footer-col-title">Contact</h3>
            <p className="footer-contact-item">
              <Link
                to="/contact#location-map"
                onClick={() => handleHashLink('/contact', '#location-map')}
                className="footer-address-link"
              >
                223/107, Govindappa Naicken Street, Chennai - 600 001
              </Link>
            </p>
            <p className="footer-contact-item">
              <a href="tel:+919000000000">+91 90000 00000</a>
            </p>
            <p className="footer-contact-item">
              <a href="mailto:info@skpdalumni.com">info@skpdalumni.com</a>
            </p>
          </div>

          {/* Col 5: Social Links */}
          <div className="footer-col footer-social-col">
            <h3 className="footer-col-title">Social Links</h3>
            <div className="footer-social-icons">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Facebook / Alumni Network */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Alumni Network"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer: Divider & Copyright */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2026. All rights reserved. Designed and Developed by <a href="https://asterinfometrics.com" target="_blank" rel="noopener noreferrer" className="footer-credit-link">Aster Infometrics</a>
          </p>
        </div>

        {/* Heritage Campus Line Illustration anchored directly to the bottom */}
        <div className="footer-sketch-wrapper" aria-hidden="true">
          <img
            src={footerSketch}
            alt="SKPD heritage building architectural sketch"
            className="footer-sketch-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Policy Modal (Privacy / Terms) */}
      {activeModal && (
        <div
          className="footer-modal-overlay"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="footer-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="footer-modal-topbar">
              <h3 className="footer-modal-title">
                {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                type="button"
                className="footer-modal-close"
                onClick={() => setActiveModal(null)}
                aria-label="Close dialog"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="footer-modal-body">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    The Sri Kanyaka Parameswari Devasthanam (SKPD) Alumni Association respects your privacy. We are committed to safeguarding personal information shared during membership registration, events, and community activities.
                  </p>
                  <p>
                    Your contact information is utilized exclusively for alumni communications, newsletters, event invitations, and official directory purposes. We do not sell or lease your personal information to third parties.
                  </p>
                  <p>
                    For inquiries regarding data retention or profile updates, contact us at <a href="mailto:info@skpdalumni.com">info@skpdalumni.com</a>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    By accessing the SKPD Alumni Association portal and registering as a member, you agree to uphold the values of respect, fellowship, and academic legacy that define our community.
                  </p>
                  <p>
                    All content, archival images, and branding on this portal remain the intellectual property of the SKPD Alumni Association and its management charities.
                  </p>
                  <p>
                    Members are expected to maintain professional etiquette across all association gatherings, digital directories, and commemorative activities.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
