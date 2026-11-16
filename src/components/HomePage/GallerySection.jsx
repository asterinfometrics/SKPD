import { useState } from 'react';
import './GallerySection.css';
import galleryFarLeft from '../../assets/gallery_far_left.webp';
import galleryLeft from '../../assets/gallery_left.webp';
import galleryCenter from '../../assets/gallery_center.webp';
import galleryRight from '../../assets/gallery_right.webp';
import galleryFarRight from '../../assets/gallery_far_right.webp';

import icon1 from '../../assets/icon1.webp';
import icon2 from '../../assets/icon2.webp';
import icon3 from '../../assets/icon3.webp';
import icon4 from '../../assets/icon4.webp';
import icon5 from '../../assets/icon5.webp';

const galleryItems = [
  {
    id: 1,
    image: galleryFarLeft,
    tag: 'Campus Gatherings',
    title: 'Shared Beginnings',
    caption: 'Tradition echoing across the campus.',
    icon: icon2,
  },
  {
    id: 2,
    image: galleryLeft,
    tag: 'Sports Day',
    title: 'Spirit on the Field',
    caption: 'Moments of victory and camaraderie.',
    icon: icon1, // Trophy
  },
  {
    id: 3,
    image: galleryCenter,
    tag: 'Campus Memories',
    title: 'The Moment that stay',
    caption: 'Some friendships become memories.',
    icon: icon3, // People / Users
  },
  {
    id: 4,
    image: galleryRight,
    tag: 'Heritage Walk',
    title: 'Arches of Tradition',
    caption: 'Walking through history together.',
    icon: icon4, // Rosette / Smile
  },
  {
    id: 5,
    image: galleryFarRight,
    tag: 'Classroom Hours',
    title: 'Lessons of a Lifetime',
    caption: 'Where curiosity found its home.',
    icon: icon5, // Group
  },
];

function getCardPositionClass(index, activeIndex, total) {
  let diff = index - activeIndex;
  while (diff > 2) diff -= total;
  while (diff < -2) diff += total;

  if (diff === 0) return 'gallery-active';
  if (diff === -1) return 'gallery-prev';
  if (diff === 1) return 'gallery-next';
  if (diff === -2) return 'gallery-far-prev';
  if (diff === 2) return 'gallery-far-next';
  return 'gallery-hidden';
}

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(2); // Center item (Campus Memories)

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const activeItem = galleryItems[activeIndex];

  return (
    <section className="gallery-section" id="gallery">
      {/* Header Block with Badge and Heading */}
      <div className="gallery-header">
        <div className="events-badge">
          <span className="events-badge-dot" aria-hidden="true" />
          <span className="events-badge-text">GALLERY</span>
        </div>

        <h2 className="gallery-title">
          A Collection of <span className="gallery-highlight">Memories</span>
        </h2>
      </div>

      {/* Full-width Carousel Stage with Edge-to-Edge Cards */}
      <div className="gallery-stage-wrapper">
        {/* Horizontal warm beige backdrop band behind cards */}
        <div className="gallery-backdrop-band" aria-hidden="true" />

        {/* Soft edge fades to blend outer cards seamlessly */}
        <div className="gallery-fade-left" aria-hidden="true" />
        <div className="gallery-fade-right" aria-hidden="true" />

        {/* Carousel Track with 5 Visible Cards */}
        <div className="gallery-stage">
          {galleryItems.map((item, idx) => {
            const posClass = getCardPositionClass(idx, activeIndex, galleryItems.length);

            return (
              <div
                key={item.id}
                className={`gallery-card-item ${posClass}`}
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveIndex(idx);
                }}
              >
                <div className="gallery-card-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-card-img"
                    loading="lazy"
                  />

                  {/* Active Card Pill Badge with image icon */}
                  {posClass === 'gallery-active' && (
                    <div className="gallery-active-badge">
                      <img
                        src={item.icon}
                        alt=""
                        className="gallery-badge-icon"
                      />
                      <span>{item.tag}</span>
                    </div>
                  )}

                  {/* Side Card Round Badges with image icon */}
                  {(posClass === 'gallery-prev' ||
                    posClass === 'gallery-next' ||
                    posClass === 'gallery-far-prev' ||
                    posClass === 'gallery-far-next') && (
                      <div className="gallery-mini-badge">
                        <img
                          src={item.icon}
                          alt=""
                          className="gallery-mini-badge-icon"
                        />
                      </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows positioned floating beside the center card */}
        <button
          className="gallery-nav-btn gallery-prev-btn"
          onClick={prevSlide}
          aria-label="Previous memory"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="gallery-nav-btn gallery-next-btn"
          onClick={nextSlide}
          aria-label="Next memory"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Caption block aligned with the left edge of the center card */}
      <div className="gallery-caption-block">
        <h3 className="gallery-caption-title">{activeItem.title}</h3>
        <p className="gallery-caption-sub">{activeItem.caption}</p>
      </div>
    </section>
  );
}
