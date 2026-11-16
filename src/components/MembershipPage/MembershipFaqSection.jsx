import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MembershipFaqSection.css';

const membershipFaqItems = [
  {
    id: 1,
    question: '1. Who can become a member?',
    answer:
      'Any former student who attended S.K.P.D. Higher Secondary School for at least one academic year is eligible to become an official member of the alumni association.',
  },
  {
    id: 2,
    question: '2. How do I become a member?',
    answer:
      'You can register online by completing our 3-step membership form above with your basic, academic, and professional details.',
  },
  {
    id: 3,
    question: '3. Is there a membership fee?',
    answer:
      'Standard alumni association membership registration is completely free. Optional patron contributions and special event fees may apply.',
  },
  {
    id: 4,
    question: '4. What are the benefits of becoming a member?',
    answer:
      'Members gain verified access to our global alumni directory, receive invitations to reunions, access mentorship channels, and receive school updates.',
  },
  {
    id: 5,
    question: '5. Can I update my alumni details later?',
    answer:
      'Yes, you can update your current city, contact info, and career profile at any time by reaching out to our alumni office.',
  },
  {
    id: 6,
    question: '6. Will I receive updates about alumni events?',
    answer:
      'Yes, all registered alumni receive our quarterly alumni digests, reunion schedules, and notifications for major campus milestones.',
  },
];

export default function MembershipFaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="membership-faq-section" id="membership-faq">
      <div className="membership-faq-container">
        {/* Left Column: Heading & Still Have Questions Card */}
        <div className="membership-faq-left">
          <div className="membership-faq-badge">
            <span className="faq-badge-dot" aria-hidden="true" />
            <span className="faq-badge-text">FAQ</span>
          </div>

          <h2 className="membership-faq-title">
            <span className="membership-faq-highlight">Let's Clear</span> Things Up
          </h2>

          <p className="membership-faq-subtitle">
            Everything you need to know about joining, staying connected, and being part of the alumni community.
          </p>

          {/* Contact Help Card */}
          <div className="membership-help-card">
            <h3 className="help-card-title">Still have questions?</h3>
            <p className="help-card-desc">
              We're here to help. Reach out to the alumni association and get the answers you need.
            </p>
            <a href="#contact" className="faq-help-cta">
              <span className="faq-cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="13 17 18 12 13 7"></polyline>
                  <polyline points="6 17 11 12 6 7"></polyline>
                </svg>
              </span>
              <span>Contact us</span>
            </a>
          </div>
        </div>

        {/* Right Column: 6 Accordion FAQ Items */}
        <div className="membership-faq-right">
          <div className="faq-accordion-list">
            {membershipFaqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`faq-item-card ${isOpen ? 'is-expanded' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-toggle-circle" aria-hidden="true">
                      <svg
                        className={`faq-toggle-icon ${isOpen ? 'rotate' : ''}`}
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        {isOpen ? (
                          <line x1="5" y1="12" x2="19" y2="12" />
                        ) : (
                          <>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </>
                        )}
                      </svg>
                    </span>
                  </button>

                  <div className={`faq-answer-panel ${isOpen ? 'is-visible' : ''}`}>
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

