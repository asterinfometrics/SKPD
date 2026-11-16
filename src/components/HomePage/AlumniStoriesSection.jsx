import React, { useRef } from 'react';
import './AlumniStoriesSection.css';
import story1 from '../../assets/story1.webp';
import story2 from '../../assets/story2.webp';
import story3 from '../../assets/story3.webp';
import story4 from '../../assets/story4.webp';

const storiesData = [
  {
    id: 1,
    quote: '“The values I learned here continue to guide me in every step of my career.”',
    name: 'Arjun Menon',
    role: 'Product Designer',
    batch: 'Class of 1999',
    image: story1,
    alt: 'Arjun Menon, Product Designer, Class of 1999',
  },
  {
    id: 2,
    quote: '“Some of my most important lessons began within these walls.”',
    name: 'Aditya Rao',
    role: 'Business Consultant',
    batch: 'Class of 1998',
    image: story2,
    alt: 'Aditya Rao, Business Consultant, Class of 1998',
  },
  {
    id: 3,
    quote: '“School gave me the confidence to explore, take risks, and build something of my own.”',
    name: 'Rahul Krishnan',
    role: 'Entrepreneur',
    batch: 'Class of 1995',
    image: story3,
    alt: 'Rahul Krishnan, Entrepreneur, Class of 1995',
  },
  {
    id: 4,
    quote: '“I left with memories, but the lessons and friendships stayed with me.”',
    name: 'Vikram S',
    role: 'Educator & Mentor',
    batch: 'Class of 1992',
    image: story4,
    alt: 'Vikram S, Educator & Mentor, Class of 1992',
  },
];

export default function AlumniStoriesSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="stories-section" id="stories">
      <div className="stories-container">
        {/* Header Block with Actions */}
        <div className="stories-header">
          <div className="stories-header-left">
            <div className="stories-badge">
              <span className="stories-badge-dot" aria-hidden="true" />
              <span className="stories-badge-text">ALUMNI STORIES</span>
            </div>

            <h2 className="stories-title">
              The Journey Continues <span className="stories-highlight">Beyond the Gates</span>
            </h2>

            <p className="stories-subtitle">
              From familiar classrooms to new paths, our alumni carry the same
              shared beginning.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="stories-nav-arrows">
            <button
              className="stories-arrow-btn"
              onClick={scrollLeft}
              aria-label="Previous stories"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              className="stories-arrow-btn"
              onClick={scrollRight}
              aria-label="Next stories"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="stories-grid" ref={scrollRef}>
          {storiesData.map((item) => (
            <div className="story-card" key={item.id}>
              <img
                src={item.image}
                alt={item.alt}
                className="story-card-bg"
                loading="lazy"
              />
              <div className="story-card-gradient" />

              <div className="story-card-content">
                <p className="story-quote">{item.quote}</p>

                <div className="story-author-row">
                  <div className="story-author-info">
                    <h3 className="story-author-name">{item.name}</h3>
                    <p className="story-author-role">{item.role}</p>
                  </div>
                  <span className="story-batch-tag">{item.batch}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

