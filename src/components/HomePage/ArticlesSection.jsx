import React from 'react';
import './ArticlesSection.css';
import article1 from '../../assets/article1.webp';
import article2 from '../../assets/article2.webp';
import article3 from '../../assets/article3.webp';
import article4 from '../../assets/article4.webp';

const articlesData = [
  {
    id: 1,
    title: 'Where Are They Now?',
    description: (
      <>
        Discover the journeys of our alumni <br /> as they build careers, pursue passi...
      </>
    ),
    time: '2 days ago',
    image: article1,
    alt: 'Alumnus gazing across the valley at sunset',
  },
  {
    id: 2,
    title: 'The Places We Still Remember',
    description: (
      <>
        From familiar classrooms to quiet <br /> corners of the campus, explore the...
      </>
    ),
    time: '6 days ago',
    image: article2,
    alt: 'Heritage campus building with colonnade and green lawn',
  },
  {
    id: 3,
    title: 'Staying Connected',
    description: (
      <>
        How alumni across different cities <br /> and generations continue to reconnect and support one another.
      </>
    ),
    time: '8 days ago',
    image: article3,
    alt: 'Group of three alumni friends laughing together on campus',
  },
  {
    id: 4,
    title: 'Lessons That Lasted',
    description: (
      <>
        Some of the most valuable lessons <br /> were not found in textbooks. Discover...
      </>
    ),
    time: '9 days ago',
    image: article4,
    alt: 'Stack of classic vintage textbooks on library desk',
  },
];

export default function ArticlesSection() {
  return (
    <section className="articles-section" id="articles">
      <div className="articles-container">
        {/* Header Block */}
        <div className="articles-header">
          <div className="events-badge">
            <span className="events-badge-dot" aria-hidden="true" />
            <span className="events-badge-text">ARTICLES</span>
          </div>

          <h2 className="articles-title">
            Voices From <span className="articles-highlight">Our Community</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="articles-grid">
          {articlesData.map((art) => (
            <article className="article-card" key={art.id}>
              <div className="article-image-frame">
                <img
                  src={art.image}
                  alt={art.alt}
                  className="article-card-img"
                  loading="lazy"
                />
              </div>

              <div className="article-card-body">
                <h3 className="article-card-title">{art.title}</h3>
                {typeof art.description === 'string' ? (
                  <p
                    className="article-card-desc"
                    dangerouslySetInnerHTML={{ __html: art.description }}
                  />
                ) : (
                  <p className="article-card-desc">{art.description}</p>
                )}

                <div className="article-card-footer">
                  <div className="article-time">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="article-clock-icon">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{art.time}</span>
                  </div>

                  <a href={`#article-${art.id}`} className="article-learn-more">
                    <span>Learn more</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="article-arrow-icon">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
