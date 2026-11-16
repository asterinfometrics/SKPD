import React, { useState } from 'react';
import './FaqSection.css';

const faqQuestions = [
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
      'You can register online by clicking the "Become a Member" button, filling in your details, batch year, and submitting the membership registration form.',
  },
  {
    id: 3,
    question: '3. Is there a membership fee?',
    answer:
      'Standard alumni association registration is free of charge. Optional life memberships and event-specific contributions may apply for select reunions and galas.',
  },
  {
    id: 4,
    question: '4. What are the benefits of becoming a member?',
    answer:
      'Members gain access to the exclusive alumni directory, event invitations, networking opportunities, mentorship programs, and updates on campus initiatives.',
  },
  {
    id: 5,
    question: '5. Can I update my alumni details later?',
    answer:
      'Yes, you can update your contact information, location, and professional details anytime through your alumni profile or by contacting the alumni committee.',
  },
  {
    id: 6,
    question: '6. Will I receive updates about alumni events?',
    answer:
      'Yes, registered members receive our quarterly alumni newsletter, invitations to annual reunions, regional meetups, and commemorative celebrations.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Left Column: Heading and Still have questions card */}
        <div className="faq-left-col">
          <div className="faq-badge">
            <span className="faq-badge-dot" aria-hidden="true" />
            <span className="faq-badge-text">FAQ</span>
          </div>

          <h2 className="faq-title">
            <span className="faq-highlight">Let's Clear</span> Things Up
          </h2>

          <p className="faq-subtitle">
            Everything you need to know about joining, staying connected, and
            being part of the alumni community.
          </p>

          {/* Still Have Questions Card */}
          <div className="faq-help-card">
            <h3 className="faq-help-title">Still have questions?</h3>
            <p className="faq-help-text">
              We're here to help. Reach out to the alumni association and get the
              answers you need.
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

        {/* Right Column: Accordion Questions */}
        <div className="faq-right-col">
          <div className="faq-accordion-list">
            {faqQuestions.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
                  key={item.id}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-toggle-icon" aria-hidden="true">
                      {isOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="16" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

