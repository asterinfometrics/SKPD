import React from 'react';
import './WhyStayConnectedSection.css';

const reasons = [
  {
    step: '01',
    title: 'Stay Connected',
    description: 'Reconnect with classmates and alumni, wherever they are.',
  },
  {
    step: '02',
    title: 'Come Together',
    description: 'Join reunions, events, and shared celebrations.',
  },
  {
    step: '03',
    title: 'Share Your Journey',
    description: 'Share your story and inspire future generations.',
  },
  {
    step: '04',
    title: 'Give Back',
    description: 'Support initiatives and strengthen the alumni community.',
  },
];

export default function WhyStayConnectedSection() {
  return (
    <section className="why-join-section" id="why-join">
      <div className="why-join-container">
        {/* Header Block */}
        <div className="why-join-header">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            <span className="badge-text">WHY JOIN</span>
          </div>

          <h2 className="why-join-title">Why Stay <span style={{ color: '#333333', fontFamily: "--var(--font-heading)" }}>Connected?</span></h2>

          <p className="why-join-subtitle">
            Years ago, we walked through these gates with dreams of our own.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="why-join-grid">
          {reasons.map((item) => (
            <div className="why-join-card" key={item.step}>
              <div className="why-join-number">{item.step}</div>
              <h3 className="why-join-card-title">{item.title}</h3>
              <p className="why-join-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

