
import React from 'react';
import './MemoriesSection.css';

import image1 from '../../assets/image1.webp';
import image2 from '../../assets/image2.webp';
import image3 from '../../assets/image3.webp';
import image4 from '../../assets/image4.webp';

export default function MemoriesSection() {
  const cards = [
    {
      id: 1,
      title: 'Foundation',
      subtitle: 'Where it all began',
      imgSrc: image1,
      alt: 'SKPD Heritage Campus Foundation',
      cardClass: 'card-foundation',
    },
    {
      id: 2,
      title: 'First Day',
      subtitle: 'A new beginning',
      imgSrc: image2,
      alt: 'Students walking into campus on their first day',
      cardClass: 'card-first-day',
    },
    {
      id: 3,
      title: 'Discovery',
      subtitle: 'Finding passions and purpose',
      imgSrc: image3,
      alt: 'Students discovering science and purpose in laboratory',
      cardClass: 'card-discovery',
    },
    {
      id: 4,
      title: 'Friendships',
      subtitle: 'Connections that lasted',
      imgSrc: image4,
      alt: 'School friends sharing a joyful moment',
      cardClass: 'card-friendships',
    },
  ];

  return (
    <section className="memories-section" id="memories">
      <div className="memories-container">
        <div className="memories-header">

          <div className="badge-pill">
            <span className="badge-dot"></span>
            <span className="badge-text">THE YEARS THAT SHAPED US</span>
          </div>

          <h1 className="memories-title">
            Before we became who we are, <br className="desktop-break" />
            <span className="memories-highlight">we were students.</span>
          </h1>

          <p className="memories-subtitle">
            Years ago, we walked through these gates with dreams of{' '}
            <br className="desktop-break" />
            our own.
          </p>
        </div>

        <div className="memories-grid">
          {cards.map((card) => (
            <div key={card.id} className={`memory-card-item ${card.cardClass}`}>
              <div className="memory-card-image-box">
                <img
                  src={card.imgSrc}
                  alt={card.alt}
                  className="memory-card-img"
                  loading="lazy"
                />
              </div>

              <div className="memory-card-meta">
                <h3 className="memory-card-title">{card.title}</h3>
                <p className="memory-card-subtitle">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
