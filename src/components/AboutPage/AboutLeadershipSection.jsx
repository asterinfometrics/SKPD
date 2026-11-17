import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeaderModal from '../Common/LeaderModal';
import { allCommitteeMembers } from '../MembershipPage/MembershipLeadershipSection';
import './AboutLeadershipSection.css';

export default function AboutLeadershipSection() {
  const [selectedMember, setSelectedMember] = useState(null);

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
          {allCommitteeMembers.slice(0, 4).map((member) => (
            <div
              key={member.id}
              className="leadership-card"
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex="0"
              aria-haspopup="dialog"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedMember(member);
                }
              }}
            >
              <span className="leader-card-badge-hint" aria-hidden="true">
                View Profile →
              </span>

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

      {/* Responsive Profile Popup Modal */}
      <LeaderModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
