import React, { useEffect } from 'react';
import './LeaderModal.css';

export default function LeaderModal({ member, onClose }) {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      className="leader-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-leader-name"
    >
      <div
        className="leader-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with badge and close button */}
        <div className="leader-modal-topbar">
          <div className="leader-modal-badge">
            <span className="modal-badge-dot" aria-hidden="true" />
            <span className="modal-badge-text">ALUMNI COMMITTEE PROFILE</span>
          </div>

          <button
            type="button"
            className="leader-modal-close-btn"
            onClick={onClose}
            aria-label="Close profile popup"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="leader-modal-body">
          {/* Left Column: Profile Sidebar */}
          <div className="leader-modal-sidebar">
            <div className="leader-modal-photo-wrapper">
              <img
                src={member.imgSrc}
                alt={member.alt || member.name}
                className="leader-modal-img"
              />
            </div>

            <span className="leader-modal-role-pill">{member.role}</span>

            {/* Desktop-only Sidebar Contact & Meta Box */}
            <div className="leader-sidebar-meta desktop-only">
              {member.batch && (
                <div className="sidebar-meta-item">
                  <span className="meta-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </span>
                  <span>{member.batch}</span>
                </div>
              )}

              {member.location && (
                <div className="sidebar-meta-item">
                  <span className="meta-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>{member.location}</span>
                </div>
              )}

              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="sidebar-meta-item email-link"
                  title={`Send email to ${member.email}`}
                >
                  <span className="meta-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span className="sidebar-email-text">{member.email}</span>
                </a>
              )}
            </div>

            {/* Desktop-only Send Message Action */}
            <div className="leader-sidebar-action desktop-only">
              <a
                href={`mailto:${member.email || 'alumni@skpd.edu'}?subject=Inquiry%20via%20SKPD%20Alumni%20Association`}
                className="leader-modal-cta-btn"
              >
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Narrative Info */}
          <div className="leader-modal-main">
            {/* Identity Header */}
            <div className="leader-modal-header-meta">
              <h2 id="modal-leader-name" className="leader-modal-name">
                {member.name}
              </h2>

              <p className="leader-modal-tenure">
                {member.tenure || `${member.role}, SKPD Alumni Association`}
              </p>

              {/* Mobile-only Meta Badges Row */}
              <div className="leader-modal-meta-pills mobile-only">
                {member.batch && (
                  <div className="modal-meta-pill">
                    <span className="meta-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </span>
                    <span>{member.batch}</span>
                  </div>
                )}

                {member.location && (
                  <div className="modal-meta-pill">
                    <span className="meta-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <span>{member.location}</span>
                  </div>
                )}

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="modal-meta-pill email-pill"
                    title={`Send email to ${member.email}`}
                  >
                    <span className="meta-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <span className="meta-email-text">{member.email}</span>
                  </a>
                )}
              </div>
            </div>

            {/* About / Bio */}
            <div className="leader-modal-bio-block">
              <h3 className="modal-section-label">About & Leadership</h3>
              <p className="leader-modal-bio-text">
                {member.bio ||
                  `${member.name} actively serves as ${member.role} in the SKPD Alumni Association, dedicating leadership and vision to foster camaraderie across batches, promote school development, and connect generations of students worldwide.`}
              </p>
            </div>

            {/* Quote */}
            {member.quote && (
              <div className="leader-modal-quote-box">
                <span className="quote-mark-icon" aria-hidden="true">“</span>
                <p className="leader-modal-quote-text">{member.quote}</p>
              </div>
            )}

            {/* Key Initiatives */}
            {member.initiatives && member.initiatives.length > 0 && (
              <div className="leader-modal-initiatives">
                <h3 className="modal-section-label">Key Initiatives</h3>
                <div className="initiatives-pills">
                  {member.initiatives.map((item, idx) => (
                    <span key={idx} className="initiative-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile-only Action CTA */}
            <div className="leader-modal-actions mobile-only">
              <a
                href={`mailto:${member.email || 'alumni@skpd.edu'}?subject=Inquiry%20via%20SKPD%20Alumni%20Association`}
                className="leader-modal-cta-btn"
              >
                <span>Send Message to {member.role}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
