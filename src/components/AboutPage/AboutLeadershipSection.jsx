import React from 'react';
import './AboutLeadershipSection.css';

import leader1 from '../../assets/leader_1.webp';
import leader2 from '../../assets/leader_2.webp';
import leader3 from '../../assets/leader_3.webp';
import leader4 from '../../assets/leader_4.webp';

const committeeMembers = [
  {
    id: 1,
    name: 'R. Srinivasan',
    role: 'President, Alumni Association',
    imgSrc: leader1,
    alt: 'Portrait of R. Srinivasan, President',
  },
  {
    id: 2,
    name: 'S. Venkatesh',
    role: 'Vice President, Alumni Association',
    imgSrc: leader2,
    alt: 'Portrait of S. Venkatesh, Vice President',
  },
  {
    id: 3,
    name: 'K. Prakash',
    role: 'Secretary, Alumni Association',
    imgSrc: leader3,
    alt: 'Portrait of K. Prakash, Secretary',
  },
  {
    id: 4,
    name: 'A. Raghavan',
    role: 'Treasurer, Alumni Association',
    imgSrc: leader4,
    alt: 'Portrait of A. Raghavan, Treasurer',
  },
];

export default function AboutLeadershipSection() {
  return (
    <section className="about-leadership-section" id="leadership">
      <div className="about-leadership-container">
        {/* Section Header */}
        <div className="about-leadership-header">

          <div className="journey-badge">
            <span className="journey-badge-dot" aria-hidden="true" />
            <span className="journey-badge-text">THE PEOPLE</span>
          </div>

          <h2 className="about-leadership-title">
            <span className="highlight">The People</span> Who Keep the Connection Alive
          </h2>
        </div>

        {/* 4 Leadership Cards Grid */}
        <div className="about-leadership-grid">
          {committeeMembers.map((member) => (
            <div key={member.id} className="leadership-card">
              <div className="leadership-card-media">
                <img
                  src={member.imgSrc}
                  alt={member.alt}
                  className="leadership-card-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>

              <div className="leadership-card-info">
                <h3 className="leadership-name">{member.name}</h3>
                <p className="leadership-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

