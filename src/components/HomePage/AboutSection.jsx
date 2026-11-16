import React from 'react';
import './AboutSection.css';
import about from "../../assets/About.webp"

export default function AboutSection() {
  const stats = [
    { value: '75+', label: 'YEARS OF LEGACY' },
    { value: '30+', label: 'COUNTRIES WORLDWIDE' },
    { value: '40+', label: 'PROFESSIONAL FIELDS' },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Column: Content */}
        <div className="about-content">
          {/* Badge Pill */}
          <div className="badge-pill">
            <span className="badge-dot"></span>
            <span className="badge-text">ABOUT</span>
          </div>

          <h1 className="about-title">
            More Than a School. A <span className="about-highlight">Lifelong Connection</span>
          </h1>

          <p className="about-description">
            What began as a place to learn became a place to belong. Through classrooms, friendships, challenges, and countless memories, generations of students began journeys that took them far beyond the school gates.
          </p>

          {/* Stats Row */}
          <div className="about-stats-row">
            {stats.map((item, index) => (
              <React.Fragment key={item.label}>
                <div className="stat-item">
                  <div className="stat-number">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
                {index < stats.length - 1 && <div className="stat-divider" aria-hidden="true"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="about-image-wrapper">
          <div className="about-image-card">
            <img
              src={about}
              alt="SKPD Alumni walking through heritage colonnade"
              className="about-alumni-img"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

