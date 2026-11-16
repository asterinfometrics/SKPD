import React from 'react';
import './MembershipBenefitsSection.css';

import memberbenefiticon1 from '../../assets/memberbenefiticon1.webp';
import memberbenefiticon2 from '../../assets/memberbenefiticon2.webp';
import memberbenefiticon3 from '../../assets/memberbenefiticon3.webp';
import memberbenefiticon4 from '../../assets/memberbenefiticon4.webp';

const benefitsData = [
  {
    id: 1,
    title: 'Alumni Network',
    description: 'Stay connected with alumni across different generations and locations.',
    icon: memberbenefiticon1,
  },
  {
    id: 2,
    title: 'Events & Reunions',
    description: 'Receive updates about alumni gatherings and school events.',
    icon: memberbenefiticon2,
  },
  {
    id: 3,
    title: 'Community Stories',
    description: 'Share your experiences, achievements, and memories.',
    icon: memberbenefiticon3,
  },
  {
    id: 4,
    title: 'Opportunities to Contribute',
    description: 'Participate in initiatives that support the alumni community and school.',
    icon: memberbenefiticon4,
  },
];

export default function MembershipBenefitsSection() {
  return (
    <section className="membership-benefits-section" id="membership-benefits">
      <div className="membership-benefits-container">

        <div className="benefits-header">
          <div className="badge-pill">
            <span className="badge-dot"></span>
            <span className="badge-text">MEMBERSHIP BENEFITS</span>
          </div>

          <h2 className="benefits-title">
            <span className="benefits-highlight">Be Part</span> of Something That Lasts.
          </h2>

          <p className="benefits-subtitle">
            Stay connected, reconnect with fellow alumni, and keep the <br /> legacy alive.
          </p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((item) => (
            <div key={item.id} className="benefit-card">

              <div className="hexagon-badge-wrapper">
                <div className="hexagon-badge">
                  <div className="hexagon-icon">
                    <img src={item.icon} alt={item.title} className="benefit-icon-img" />
                  </div>
                </div>
              </div>

              <h3 className="benefit-card-title">{item.title}</h3>
              <p className="benefit-card-desc">{item.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}