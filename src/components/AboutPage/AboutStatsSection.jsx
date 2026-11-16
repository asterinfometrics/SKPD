import React from 'react';
import './AboutStatsSection.css';

const statsData = [
  {
    number: '75+',
    label: 'YEARS OF LEGACY',
  },
  {
    number: '30+',
    label: 'COUNTRIES WORLDWIDE',
  },
  {
    number: '40+',
    label: 'PROFESSIONAL FIELDS',
  },
  {
    number: '5k+',
    label: 'ALUMNI',
  },
];

export default function AboutStatsSection() {
  return (
    <section className="about-stats-section" id="stats">
      <div className="about-stats-container">
        {/* Blueprint Navy Card Container */}
        <div className="about-stats-card">
          {/* Header Typography */}
          <div className="about-stats-header">
            <div className="about-stats-badge">
              <span className="stats-badge-dot" />
              <span className="stats-badge-text">BY THE NUMBERS</span>
            </div>

            <h2 className="about-stats-title">A Legacy Measured in Generations</h2>

            <p className="about-stats-subtitle">
              More than a century of learning, connection, and achievement — carried forward by our alumni <br/> across generations and around the world.
            </p>
          </div>

          {/* 4 Stats Grid */}
          <div className="about-stats-grid">
            {statsData.map((stat, idx) => (
              <div key={idx} className="about-stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

