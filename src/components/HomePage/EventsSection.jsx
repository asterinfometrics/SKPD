import './EventsSection.css';
import event1 from '../../assets/event1.webp';
import event2 from '../../assets/event2.webp';
import event3 from '../../assets/event3.webp';

const eventsData = [
  {
    id: 1,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description:
      'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: '20 Aug 2026',
    image: event1,
    alt: 'Alumni speaker addressing audience from the podium',
  },
  {
    id: 2,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description:
      'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: '20 Aug 2026',
    image: event2,
    alt: 'Distinguished alumni presenting an achievement award',
  },
  {
    id: 3,
    tag: 'Alumni Meet',
    title: 'Alumni Annual Meet 2026',
    description:
      'A day to reconnect with old friends, revisit familiar memories, and create new ones together.',
    date: '20 Aug 2026',
    image: event3,
    alt: 'Group of alumni friends gathered and posing together',
  },
];

export default function EventsSection() {
  return (
    <section className="events-section" id="events">
      <div className="events-container">
        {/* Header Block with Badge and Title */}
        <div className="events-header">
          <div className="events-badge">
            <span className="events-badge-dot" aria-hidden="true" />
            <span className="events-badge-text">EVENTS</span>
          </div>

          <h2 className="events-title">
            Making <span className="events-highlight">New Memories</span> Together
          </h2>
        </div>

        {/* 3 Event Cards Grid */}
        <div className="events-grid">
          {eventsData.map((event) => (
            <article className="event-card" key={event.id}>
              {/* Event Image Card Frame */}
              <div className="event-image-frame">
                <img
                  src={event.image}
                  alt={event.alt}
                  className="event-card-img"
                  loading="lazy"
                />
              </div>

              {/* Event Card Details */}
              <div className="event-card-body">
                <span className="event-category-pill">{event.tag}</span>

                <h3 className="event-card-title">{event.title}</h3>

                <p className="event-card-description">{event.description}</p>

                <div className="event-card-footer">
                  <div className="event-date">
                    <svg
                      className="event-calendar-icon"
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

                  <a href={`#event-${event.id}`} className="event-learn-more">
                    <span>Learn more</span>
                    <svg
                      className="event-arrow-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>s
      </div>
    </section>
  );
}

