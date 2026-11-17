import React, { useState } from 'react';
import './EventsMomentsSection.css';
import eventImage from '../../assets/event1.webp';

// Single image used across all event items as requested
const allEventsData = [
  {
    id: 1,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'popular',
    image: eventImage,
  },
  {
    id: 2,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'latest',
    image: eventImage,
  },
  {
    id: 3,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'popular',
    image: eventImage,
  },
  {
    id: 4,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'latest',
    image: eventImage,
  },
  {
    id: 5,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'popular',
    image: eventImage,
  },
  {
    id: 6,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'latest',
    image: eventImage,
  },
  {
    id: 7,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'popular',
    image: eventImage,
  },
  {
    id: 8,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'latest',
    image: eventImage,
  },
  {
    id: 9,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'popular',
    image: eventImage,
  },
  {
    id: 10,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'latest',
    image: eventImage,
  },
  {
    id: 11,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'popular',
    image: eventImage,
  },
  {
    id: 12,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description: 'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: 'Fri, 24 Aug 2026',
    time: '10:00 AM - 4:00 PM',
    venue: 'SKPD Heritage Campus Auditorium, Chennai',
    category: 'latest',
    image: eventImage,
  },
];

export default function EventsMomentsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Filter events based on active tab
  const filteredEvents = allEventsData.filter((evt) => {
    if (activeFilter === 'all') return true;
    return evt.category === activeFilter;
  });

  // Display 9 items per page (matching 3x3 layout in design)
  const itemsPerPage = 9;
  const totalPages = 12; // Static 12 pages indicated in UI mockup

  // Current page items
  const displayEvents =
    filteredEvents.length >= itemsPerPage
      ? filteredEvents.slice(0, itemsPerPage)
      : filteredEvents;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById('moments-grid');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="events-moments-section" id="events-moments">
      <div className="events-moments-container">
        {/* Header Block: Badge, Title & Filter Tabs */}
        <div className="events-moments-header">
          {/* Badge */}
          <div className="events-badge">
            <span className="events-badge-dot" aria-hidden="true" />
            <span className="events-badge-text">PAST EVENTS</span>
          </div>

          {/* Heading */}
          <h2 className="events-moments-title">
            Moments <span className="events-moments-highlight">We've Shared</span>
          </h2>

          {/* Filter Pills: All | Popular | Latest */}
          <div className="events-filter-bar" role="tablist" aria-label="Event category filters">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              className={`filter-pill-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter('all');
                setCurrentPage(1);
              }}
            >
              All
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'popular'}
              className={`filter-pill-btn ${activeFilter === 'popular' ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter('popular');
                setCurrentPage(1);
              }}
            >
              Popular
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'latest'}
              className={`filter-pill-btn ${activeFilter === 'latest' ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter('latest');
                setCurrentPage(1);
              }}
            >
              Latest
            </button>
          </div>
        </div>

        {/* 3x3 Events Grid (9 Cards per page) */}
        <div className="events-moments-grid" id="moments-grid">
          {displayEvents.map((event, index) => (
            <article
              key={`${event.id}-${index}`}
              className="event-moment-card"
              onClick={() => setSelectedEvent(event)}
              tabIndex="0"
              role="button"
              aria-haspopup="dialog"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedEvent(event);
                }
              }}
            >
              {/* Card Image Frame */}
              <div className="event-moment-media">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-moment-img"
                  loading="lazy"
                />
              </div>

              {/* Card Details */}
              <div className="event-moment-body">
                <span className="event-tag-pill">{event.tag}</span>

                <h3 className="event-moment-card-title">{event.title}</h3>

                <p className="event-moment-description">{event.description}</p>

                {/* Footer Row: Date & Learn More */}
                <div className="event-moment-footer">
                  <div className="event-moment-date">
                    <svg
                      className="event-date-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{event.date}</span>
                  </div>

                  <span className="event-learn-more-link">
                    <span>Learn More</span>
                    <svg
                      className="event-diagonal-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Row */}
        <div className="events-pagination-bar" aria-label="Events pagination">
          <button
            type="button"
            className="pagination-nav-btn prev"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label="Previous page"
          >
            Previous
          </button>

          <div className="pagination-numbers">
            <button
              type="button"
              className={`pagination-num-btn ${currentPage === 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(1)}
              aria-current={currentPage === 1 ? 'page' : undefined}
            >
              1
            </button>

            <button
              type="button"
              className={`pagination-num-btn ${currentPage === 2 ? 'active' : ''}`}
              onClick={() => handlePageChange(2)}
              aria-current={currentPage === 2 ? 'page' : undefined}
            >
              2
            </button>

            <span className="pagination-ellipsis" aria-hidden="true">
              ...
            </span>

            <button
              type="button"
              className={`pagination-num-btn ${currentPage === 12 ? 'active' : ''}`}
              onClick={() => handlePageChange(12)}
              aria-current={currentPage === 12 ? 'page' : undefined}
            >
              12
            </button>
          </div>

          <button
            type="button"
            className="pagination-nav-btn next"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>

      {/* Event Details Popup Modal */}
      {selectedEvent && (
        <div
          className="event-modal-overlay"
          onClick={() => setSelectedEvent(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
        >
          <div className="event-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="event-modal-topbar">
              <span className="event-modal-badge">{selectedEvent.tag}</span>
              <button
                type="button"
                className="event-modal-close"
                onClick={() => setSelectedEvent(null)}
                aria-label="Close dialog"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="event-modal-media">
              <img src={selectedEvent.image} alt={selectedEvent.title} className="event-modal-img" />
            </div>

            <div className="event-modal-content">
              <h3 id="event-modal-title" className="event-modal-title">
                {selectedEvent.title}
              </h3>

              <div className="event-modal-meta-grid">
                <div className="modal-meta-item">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{selectedEvent.date}</span>
                </div>

                <div className="modal-meta-item">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{selectedEvent.time}</span>
                </div>

                <div className="modal-meta-item full-row">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{selectedEvent.venue}</span>
                </div>
              </div>

              <p className="event-modal-desc">
                {selectedEvent.description} The SKPD Alumni Association cordially welcomes alumni from all past batches to convene for fellowship, reminisce on formative school memories, and explore collaborative pathways to empower upcoming student generations.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
