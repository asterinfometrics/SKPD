import React, { useRef } from 'react';
import './ArticlesStoriesSection.css';
import story1 from '../../assets/article1.webp';
import story2 from '../../assets/article2.webp';
import story3 from '../../assets/article3.webp';
import story4 from '../../assets/article4.webp';
import story5 from '../../assets/image3.webp';
import story6 from '../../assets/image4.webp';

const alumniStories = [
  {
    id: 1,
    type: 'alumnus',
    name: 'Arjun Menon',
    role: 'Product Designer',
    batch: 'Class of 1999',
    quote: 'The values I learned back then continue to guide me in every step of my career.',
    image: story1,
    bio: 'Arjun leads digital product design for premier global platforms. His journey began with hand-drawn sketches in the school arts wing, nurtured by dedicated mentors.',
  },
  {
    id: 2,
    type: 'alumnus',
    name: 'Aditya Rao',
    role: 'Business Consultant',
    batch: 'Class of 1998',
    quote: 'Some of my best days took place in classrooms and cafeterias.',
    image: story2,
    bio: 'Aditya advises multinational enterprises on operational growth. He credits his analytical mindset to the rigorous academics and teamwork cultivated during his school years.',
  },
  {
    id: 3,
    type: 'alumnus',
    name: 'Rahul Choudhary',
    role: 'Entrepreneur',
    batch: 'Class of 1995',
    quote: 'School gave me the confidence to explore, take risks, and build something of my own.',
    image: story3,
    bio: 'Founder of pioneering venture studios and sustainable tech initiatives, Rahul champions mentorship and empowering fellow alumni worldwide.',
  },
  {
    id: 4,
    type: 'alumnus',
    name: 'Vikram S',
    role: 'Corporate Director',
    batch: 'Class of 1992',
    quote: 'I fell out in between, but the lessons and memories stayed with me.',
    image: story4,
    bio: 'Vikram serves as Corporate Director across leadership boards. A passionate advocate for educational legacy and continuous community service.',
  },
  {
    id: 5,
    type: 'alumnus',
    name: 'Dr. K. Sridhar',
    role: 'Healthcare Innovator',
    batch: 'Class of 1990',
    quote: 'Integrity and discipline learned in morning assemblies became my medical compass.',
    image: story5,
    bio: 'Pioneering cardiac surgeon and healthcare trust advisor dedicated to extending subsidized medical services to rural and underserved communities.',
  },
  {
    id: 6,
    type: 'alumnus',
    name: 'P. Balaji',
    role: 'Technology Architect',
    batch: 'Class of 2002',
    quote: 'The school gave us deep roots, enabling us to spread our wings across the world.',
    image: story6,
    bio: 'Balaji spearheads cloud infrastructure systems across North America and Asia, actively conducting alumni tech webinars for current students.',
  },
];

export default function ArticlesStoriesSection({ onSelectAlumnus }) {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="articles-stories-section" id="stories">
      <div className="articles-stories-container">
        {/* Section Header */}
        <div className="articles-stories-header">
          <div className="stories-header-left">
            <div className="art-dark-pill-badge">
              <span className="dark-pill-dot" aria-hidden="true" />
              <span className="dark-pill-text">ALUMNI STORIES</span>
            </div>

            <h2 className="articles-stories-title">
              The Journey Continues <span className="art-title-blue">Beyond the Gates</span>
            </h2>

            <p className="articles-stories-subtitle">
              From familiar classrooms to new paths, our alumni carry the same shared beginning.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="stories-slider-controls">
            <button
              type="button"
              className="stories-control-btn"
              onClick={handlePrev}
              aria-label="Previous story"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="stories-control-btn"
              onClick={handleNext}
              aria-label="Next story"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* 4 Cards Slider */}
        <div className="articles-stories-slider" ref={sliderRef}>
          {alumniStories.map((person) => (
            <div className="alumni-story-card" key={person.id}>
              <img
                src={person.image}
                alt={person.name}
                className="alumni-story-bg"
                loading="lazy"
              />
              <div className="alumni-story-gradient" />

              <div className="alumni-story-content">
                <p className="alumni-story-quote">"{person.quote}"</p>

                <div className="alumni-story-bottom-row">
                  <div className="alumni-story-person-info">
                    <h3 className="alumni-story-name">{person.name}</h3>
                    <p className="alumni-story-role">{person.role}</p>
                  </div>

                  <button
                    type="button"
                    className="alumni-about-btn"
                    onClick={() => onSelectAlumnus && onSelectAlumnus(person)}
                  >
                    ABOUT HIM
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
