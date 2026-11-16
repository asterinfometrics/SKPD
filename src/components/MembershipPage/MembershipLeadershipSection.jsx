import React, { useRef, useState, useEffect } from 'react';
import './MembershipLeadershipSection.css';

import leader1 from '../../assets/leader_1.webp';
import leader2 from '../../assets/leader_2.webp';
import leader3 from '../../assets/leader_3.webp';
import leader4 from '../../assets/leader_4.webp';

export const allCommitteeMembers = [
  {
    id: 1,
    name: 'Voora Lakshmi Narasimha Rao',
    role: 'President',
    imgSrc: leader1,
    alt: 'Portrait of Voora Lakshmi Narasimha Rao, President',
  },
  {
    id: 2,
    name: 'A.Sudhakar',
    role: 'Vice President',
    imgSrc: leader2,
    alt: 'Portrait of A.Sudhakar, Vice President',
  },
  {
    id: 3,
    name: 'P.RadhaKrishna',
    role: 'Vice President',
    imgSrc: leader2,
    alt: 'Portrait of P.RadhaKrishna, Vice President',
  },
  {
    id: 4,
    name: 'V.Anjaneyulu',
    role: 'Vice President',
    imgSrc: leader2,
    alt: 'Portrait of V.Anjaneyulu, Vice President',
  },
  {
    id: 5,
    name: 'Y.Suresh Babu',
    role: 'Secretary',
    imgSrc: leader3,
    alt: 'Portrait of Y.Suresh Babu, Secretary',
  },
  {
    id: 6,
    name: 'V.Ramesh Gupta',
    role: 'Joint Secretary',
    imgSrc: leader3,
    alt: 'Portrait of V.Ramesh Gupta, Joint Secretary',
  },
  {
    id: 7,
    name: 'Srinivasulu Kanamarlapudi',
    role: 'Treasurer, Alumni Association',
    imgSrc: leader4,
    alt: 'Portrait of Srinivasulu Kanamarlapudi, Treasurer',
  },
  {
    id: 8,
    name: 'J.Badrinath',
    role: 'Executive Committee',
    imgSrc: leader4,
    alt: 'Portrait of J.Badrinath, Executive Committee',
  },
  {
    id: 9,
    name: 'V.Venkateswarlu',
    role: 'Executive Committee',
    imgSrc: leader4,
    alt: 'Portrait of V.Venkateswarlu, Executive Committee',
  },
  {
    id: 10,
    name: 'Mukkala Sriramprasad',
    role: 'Executive Committee',
    imgSrc: leader4,
    alt: 'Portrait of Mukkala Sriramprasad, Executive Committee',
  },
  {
    id: 11,
    name: 'K.Ramesh',
    role: 'Executive Committee',
    imgSrc: leader4,
    alt: 'Portrait of K.Ramesh, Executive Committee',
  },
];

export default function MembershipLeadershipSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (slider) slider.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handlePrev = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth } = sliderRef.current;
      const card = sliderRef.current.querySelector('.membership-leader-card');
      const step = card ? card.offsetWidth + 28 : 310;
      if (scrollLeft <= 10) {
        sliderRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: -step, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const card = sliderRef.current.querySelector('.membership-leader-card');
      const step = card ? card.offsetWidth + 28 : 310;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="membership-leadership-section" id="committee">
      <div className="membership-leadership-container">
        {/* Header Row with Title & Arrow Controls */}
        <div className="membership-leadership-header">
          <div className="leadership-header-text">
            <div className="leadership-badge">
              <span className="leadership-badge-dot" aria-hidden="true" />
              <span className="leadership-badge-text">THE PEOPLE</span>
            </div>

            <h2 className="membership-leadership-title">
              <span className="leadership-title-highlight">The People</span> Who Keep the Connection Alive
            </h2>

            <p className="membership-leadership-subtitle">
              Meet the 11 dedicated alumni committee members guiding initiatives, organizing reunions, and serving our community.
            </p>
          </div>

          {/* Navigation Arrows (Default 4 cards, arrow to slide through all 11) */}
          <div className="leadership-arrow-controls">
            <button
              type="button"
              className={`leadership-nav-btn prev-btn ${!canScrollLeft ? 'at-edge' : ''}`}
              onClick={handlePrev}
              aria-label="Previous members"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              className={`leadership-nav-btn next-btn ${!canScrollRight ? 'at-edge' : ''}`}
              onClick={handleNext}
              aria-label="Next members"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slider Track: 4 Visible by default on desktop, slides all 11 */}
        <div className="membership-leadership-carousel" ref={sliderRef} tabIndex="0" aria-label="Committee members carousel">
          {allCommitteeMembers.map((member) => (
            <div key={member.id} className="membership-leader-card">
              <div className="membership-leader-media">
                <img
                  src={member.imgSrc}
                  alt={member.alt}
                  className="membership-leader-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>

              <div className="membership-leader-info">
                <h3 className="membership-leader-name">{member.name}</h3>
                <p className="membership-leader-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
