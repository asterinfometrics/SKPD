import React, { useState } from 'react';
import './AboutJourneySection.css';

import img1917 from '../../assets/journey_1917.webp';
import img1936 from '../../assets/article2.webp';
import img1947 from '../../assets/arc_img1.webp';
import img1978 from '../../assets/arc_img5.webp';
import img2017 from '../../assets/event3.webp';

const journeyMilestones = [
  {
    year: '1917',
    title: 'The Beginning',
    description:
      'The school was established on 1 April 1917 under the management of Sri Kanyaka Parameswari Devasthanam and Charities, founded by Sri Vemuri Parthasarathy Chetty, B.A.',
    imgSrc: img1917,
    alt: 'Founding teachers and early students standing before the historic school colonial portico',
  },
  {
    year: '1936',
    title: 'Expanding Horizons',
    description:
      'With rapid growth in student strength, the campus expanded its academic wings, introducing new science laboratories, a dedicated library hall, and sports facilities for holistic development.',
    imgSrc: img1936,
    alt: 'The historic SKPD campus building with expansive lush lawns',
  },
  {
    year: '1947',
    title: 'In Independent India',
    description:
      'As our nation stepped into independence, the institution deepened its commitment to accessible education, pioneering rigorous academic standards while preserving time-honored values.',
    imgSrc: img1947,
    alt: 'Students and teachers gathered in the school quadrangle',
  },
  {
    year: '1978',
    title: 'Diamond Jubilee & Growth',
    description:
      'Celebrating 60 years of educational service, the institution launched modernized facilities, expanded arts and athletic programs, and welcomed thousands of alumni back to their alma mater.',
    imgSrc: img1978,
    alt: 'Students studying together at classroom wooden desks',
  },
  {
    year: '2017',
    title: 'Centenary Celebration',
    description:
      'A century of enduring heritage, transformative mentorship, and global alumni leadership. A milestone celebrating 100 years of academic excellence and community impact.',
    imgSrc: img2017,
    alt: 'SKPD centenary reunion gathering with faculty and alumni',
  },
];

export default function AboutJourneySection() {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const activeMilestone = journeyMilestones[activeYearIndex];

  return (
    <section className="about-journey-section" id="journey">
      <div className="about-journey-container">
        {/* Section Header */}
        <div className="about-journey-header">
          <div className="journey-badge">
            <span className="journey-badge-dot" aria-hidden="true" />
            <span className="journey-badge-text">OUR JOURNEY</span>
          </div>

          <h2 className="about-journey-title">
            <span className="journey-blue">A Legacy Built</span> Across Generations
          </h2>

          <p className="about-journey-subtitle">
            From 1917 to today, our journey reflects a legacy of learning, tradition, and generations of students.
          </p>
        </div>

        {/* Interactive Timeline Tabs: Left & Right aligned in same container */}
        <div className="about-journey-body">
          {/* Left: Year Selector List */}
          <div className="journey-year-list" role="tablist" aria-label="Journey Milestones Timeline">
            {journeyMilestones.map((milestone, idx) => {
              const isActive = idx === activeYearIndex;
              return (
                <button
                  key={milestone.year}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`journey-year-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveYearIndex(idx)}
                >
                  <span className="journey-year-indicator" />
                  <span className="journey-year-text">{milestone.year}</span>
                  <span className="journey-year-chevron" aria-hidden="true">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Milestone Detail Card */}
          <div className="journey-detail-card" role="tabpanel">
            <div className="journey-card-media">
              <img
                key={activeMilestone.year}
                src={activeMilestone.imgSrc}
                alt={activeMilestone.alt}
                className="journey-card-img"
              />
            </div>

            <div className="journey-card-text">
              <h3 className="journey-card-title">{activeMilestone.title}</h3>
              <p className="journey-card-desc">{activeMilestone.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
