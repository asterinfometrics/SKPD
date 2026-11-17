import React from 'react';
import './ContactMapSection.css';

export default function ContactMapSection() {
  const contactInfo = [
    {
      id: 'address',
      label: 'ADDRESS',
      value: '223/107, Govindappa Naicken Street, Chennai - 600 001',
      link: 'https://maps.google.com/?q=SKPD+Boys+Higher+Secondary+School,+107+Govindappa+Naicken+St,+Sowcarpet,+Chennai,+Tamil+Nadu+600001',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      id: 'email',
      label: 'EMAIL',
      value: 'info@skpdalumni.com',
      link: 'mailto:info@skpdalumni.com',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: 'phone',
      label: 'PHONE',
      value: '+91 90000 00000',
      link: 'tel:+919000000000',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: 'hours',
      label: 'OFFICE HOURS',
      value: '09:00 AM - 05:00 PM',
      link: null,
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="contact-map-section" id="location-map">
      <div className="contact-map-container">
        {/* 4 Quick Info Columns with Dividers */}
        <div className="contact-info-strip">
          {contactInfo.map((item, idx) => (
            <React.Fragment key={item.id}>
              <div className="contact-info-col">
                <div className="contact-info-icon-box" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="contact-info-details">
                  <span className="contact-info-label">{item.label}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="contact-info-value link"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-info-value">{item.value}</span>
                  )}
                </div>
              </div>

              {idx < contactInfo.length - 1 && (
                <div className="contact-col-divider" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Interactive Google Map Frame with Blue Border */}
        <div className="contact-map-frame-wrapper">
          <iframe
            title="SKPD Boys Higher Secondary School Campus Map"
            src="https://maps.google.com/maps?q=SKPD+Boys+Higher+Secondary+School,+107+Govindappa+Naicken+St,+George+Town,+Chennai,+Tamil+Nadu+600001&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="contact-google-map-iframe"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Directions Link */}
          <a
            href="https://maps.google.com/?q=SKPD+Boys+Higher+Secondary+School,+107+Govindappa+Naicken+St,+George+Town,+Chennai,+Tamil+Nadu+600001"
            target="_blank"
            rel="noopener noreferrer"
            className="map-directions-badge"
          >
            <span>Open in Google Maps</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
