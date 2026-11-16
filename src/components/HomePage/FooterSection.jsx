import React from 'react';
import './FooterSection.css';
import footerlogo from '../../assets/footerlogo.png';
import footerSketch from '../../assets/footer_sketch.webp';

export default function FooterSection() {
  return (
    <footer className="skpd-footer" id="footer">
      <div className="skpd-footer-container">
        {/* Top Header Row: Left (Logo + Title stacked), Right (Subtitle + Button stacked) */}
        <div className="footer-top-row">
          <div className="footer-top-left">
            <div className="footer-crest-wrapper">
              <img
                src={footerlogo}
                alt="SKPD Crest Logo"
                className="footer-crest-img"
              />
            </div>
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
            <a href="#membership" className="footer-member-cta">
              <span className="footer-cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
              </span>
              <span>Become a Member</span>
            </a>
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
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#articles">Articles</a></li>
            </ul>
          </div>

          {/* Col 2: Connect */}
          <div className="footer-col">
            <h3 className="footer-col-title">Connect</h3>
            <ul className="footer-col-list">
              <li><a href="#stories">Alumni Stories</a></li>
              <li><a href="#membership">Become a Member</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="footer-col">
            <h3 className="footer-col-title">Resources</h3>
            <ul className="footer-col-list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-col footer-contact-col">
            <h3 className="footer-col-title">Contact</h3>
            <p className="footer-contact-item">
              223/107, Govindappa Naicken Street, Chennai - 600 001
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
              <a href="#instagram" className="footer-social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#linkedin" className="footer-social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Facebook / Alumni Network */}
              <a href="#network" className="footer-social-btn" aria-label="Alumni Network">
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
    </footer>
  );
}
