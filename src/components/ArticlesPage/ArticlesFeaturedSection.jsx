import React, { useState } from 'react';
import './ArticlesFeaturedSection.css';
import featuredImg from '../../assets/article_featured.webp';
import thumb1 from '../../assets/article_thumb1.webp';
import thumb2 from '../../assets/article_thumb2.webp';
import thumb3 from '../../assets/article_thumb3.webp';

const featuredStories = [
  {
    id: 'f1',
    title: 'Where Are They Now?',
    description: 'Discover the journeys of our alumni as they build careers, pursue passions, and create new chapters beyond school.',
    time: '3 days ago',
    readTime: '5 Min Read',
    image: featuredImg,
    category: 'FEATURED STORY',
  },
  {
    id: 'f2',
    title: 'Where Are They Now?',
    description: 'Discover the journeys of our alumni as they build careers, pursue passions, and create new chapters beyond school.',
    time: '3 days ago',
    readTime: '5 Min Read',
    image: thumb1,
    category: 'ALUMNI CAREERS',
  },
  {
    id: 'f3',
    title: 'Where Are They Now?',
    description: 'Discover the journeys of our alumni as they build careers, pursue passions, and create new chapters beyond school.',
    time: '3 days ago',
    readTime: '5 Min Read',
    image: thumb2,
    category: 'GLOBAL VOICES',
  },
  {
    id: 'f4',
    title: 'Where Are They Now?',
    description: 'Discover the journeys of our alumni as they build careers, pursue passions, and create new chapters beyond school.',
    time: '3 days ago',
    readTime: '5 Min Read',
    image: thumb3,
    category: 'COMMUNITY BOND',
  },
];

export default function ArticlesFeaturedSection({ onSelectArticle }) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const mainStory = featuredStories[activeStoryIndex];
  const sideStories = featuredStories.slice(1);

  const handleCardClick = (story, index) => {
    setActiveStoryIndex(index);
    if (onSelectArticle) {
      onSelectArticle(story);
    }
  };

  const handleHeroClick = () => {
    if (onSelectArticle) {
      onSelectArticle(mainStory);
    }
  };

  const handleIndicatorClick = (e, index) => {
    e.stopPropagation();
    setActiveStoryIndex(index);
    if (onSelectArticle) {
      onSelectArticle(featuredStories[index]);
    }
  };

  return (
    <section className="articles-featured-section" id="featured-articles">
      <div className="articles-featured-container">
        {/* Section Header */}
        <div className="articles-featured-header">
          <div className="art-pill-badge">
            <span className="art-pill-dot" aria-hidden="true" />
            <span className="art-pill-text">FEATURED</span>
          </div>
          <h2 className="articles-featured-title">
            Voices From <span className="art-title-blue">Our Community</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="articles-featured-grid">
          {/* Left Hero Card */}
          <div
            className="featured-hero-card"
            onClick={handleHeroClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleHeroClick()}
          >
            <img
              key={mainStory.id}
              src={mainStory.image}
              alt={mainStory.title}
              className="featured-hero-bg"
              loading="eager"
            />
            <div className="featured-hero-gradient" />

            <div className="featured-hero-content">
              <h3 className="featured-hero-title">{mainStory.title}</h3>
              <p className="featured-hero-desc">{mainStory.description}</p>

              <div className="featured-hero-footer">
                <div className="featured-meta-info">
                  <svg
                    viewBox="0 0 24 24"
                    className="meta-clock-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{mainStory.time} • {mainStory.readTime}</span>
                </div>

                {/* Carousel Indicator for all 4 stories */}
                <div className="featured-carousel-indicator" aria-label="Story slides">
                  {featuredStories.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`carousel-indicator-dot ${activeStoryIndex === idx ? 'active' : ''}`}
                      onClick={(e) => handleIndicatorClick(e, idx)}
                      aria-label={`Show story ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right 3 Cards Column */}
          <div className="featured-side-list">
            {sideStories.map((story, sIdx) => {
              const realIndex = sIdx + 1;
              const isCurrent = activeStoryIndex === realIndex;
              return (
                <div
                  className={`featured-side-card ${isCurrent ? 'is-active' : ''}`}
                  key={story.id}
                  onClick={() => handleCardClick(story, realIndex)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(story, realIndex)}
                >
                  <div className="featured-side-thumb-frame">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="featured-side-thumb-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="featured-side-body">
                    <h4 className="featured-side-title">{story.title}</h4>
                    <p className="featured-side-desc">{story.description}</p>

                    <div className="featured-side-meta">
                      <svg
                        viewBox="0 0 24 24"
                        className="meta-clock-icon"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{story.time} • {story.readTime}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
