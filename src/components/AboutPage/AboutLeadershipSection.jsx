import React from 'react';
import { Link } from 'react-router-dom';
import './AboutLeadershipSection.css';

import leader1 from '../../assets/leader_1.webp';
import leader2 from '../../assets/leader_2.webp';
import leader3 from '../../assets/leader_3.webp';
import leader4 from '../../assets/leader_4.webp';

const committeeMembers = [
  {
    id: 1,
    name: 'Voora Lakshmi Narasimha Rao',
    role: 'President',
    imgSrc: leader1,
    alt: 'Portrait of R. Srinivasan, President',
  },
  {
    id: 2,
    name: 'A.Sudhakar',
    role: 'Vice President',
    imgSrc: leader2,
    alt: 'Portrait of S. Venkatesh, Vice President',
  },
  {
    id: 3,
    name: 'P.RadhaKrishna',
    role: 'Vice President',
    imgSrc: leader2,
    alt: 'Portrait of S. Venkatesh, Vice President',
  },
  {
    id: 4,
    name: 'V.Anjaneyulu',
    role: 'Vice President',
    imgSrc: leader2,
    alt: 'Portrait of S. Venkatesh, Vice President',
  },

  {
    id: 5,
    name: 'Y.Suresh Babu',
    role: 'Secretary',
    imgSrc: leader3,
    alt: 'Portrait of K. Prakash, Secretary',
  },
  {
    id: 6,
    name: 'V.Ramesh Gupta',
    role: 'Joint Secretary',
    imgSrc: leader3,
    alt: 'Portrait of K. Prakash, Secretary',
  },
  {
    id: 7,
    name: 'Srinivasulu Kanamarlapudi',
    role: 'Treasurer, Alumni Association',
    imgSrc: leader4,
    alt: 'Portrait of A. Raghavan, Treasurer',
  },
  {
    id: 8,
    name: 'J.Badrinath',
    role: 'Executive Commitee',
    imgSrc: leader4,
    alt: 'Portrait of A. Raghavan, Treasurer',
  },
  {
    id: 9,
    name: 'V.Venkateswarlu',
    role: 'Executive Commitee',
    imgSrc: leader4,
    alt: 'Portrait of A. Raghavan, Treasurer',
  },
  {
    id: 10,
    name: 'Mukkala Sriramprasad',
    role: 'Executive Commitee',
    imgSrc: leader4,
    alt: 'Portrait of A. Raghavan, Treasurer',
  },
  {
    id: 11,
    name: 'K.Ramesh',
    role: 'Executive Commitee',
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
          {committeeMembers.slice(0, 4).map((member) => (
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

        {/* Button to navigate to Membership Page */}
        <div className="about-leadership-cta-wrap">
          <Link to="/membership#committee" className="about-leadership-cta-btn">
            <span className="btn-chevron-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
            <span>View All Committee Members</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

