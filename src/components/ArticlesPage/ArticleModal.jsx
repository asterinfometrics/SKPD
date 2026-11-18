import React, { useEffect } from 'react';
import './ArticleModal.css';

export default function ArticleModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!item) return null;

  const isAlumnus = item.type === 'alumnus';

  return (
    <div className="article-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="article-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Bar */}
        <div className="article-modal-topbar">
          <div className="article-modal-badge">
            <span className="modal-badge-dot" />
            <span className="modal-badge-text">
              {isAlumnus ? 'ALUMNI PROFILE' : (item.category || 'ARTICLE DETAIL')}
            </span>
          </div>
          <button
            type="button"
            className="article-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="article-modal-content">
          <div className="article-modal-media-frame">
            <img
              src={item.image}
              alt={item.title || item.name}
              className="article-modal-media-img"
            />
          </div>

          <div className="article-modal-text-content">
            <h2 className="article-modal-title">
              {item.title || item.name}
            </h2>

            {isAlumnus ? (
              <>
                <p className="article-modal-role-batch">
                  {item.role} {item.batch ? `• ${item.batch}` : ''}
                </p>
                <div className="article-modal-quote-box">
                  <p className="article-modal-quote">"{item.quote}"</p>
                </div>
                <div className="article-modal-bio">
                  <h4 className="article-modal-section-title">Journey & Achievements</h4>
                  <p>
                    {item.bio ||
                      'An inspiring alumnus carrying forward the ethos, rigor, and cultural integrity nurtured at SKPD. From classroom leadership to real-world impact, forging paths of excellence and giving back to the alma mater.'}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="article-modal-meta-row">
                  <span className="modal-meta-item">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {item.time || '3 days ago'}
                  </span>
                  {item.readTime && (
                    <span className="modal-meta-item">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {item.readTime}
                    </span>
                  )}
                </div>

                <div className="article-modal-body-copy">
                  <p className="article-modal-lead">{item.description}</p>
                  <p>
                    From ancient corridors filled with youthful energy to international boardrooms and community milestones, the stories of SKPD alumni continue to inspire future generations. Our shared roots create an unbreakable bond that transcends distance and decades.
                  </p>
                  <p>
                    Whether reminiscing about historic annual sports meets, mentorship from dedicated teachers, or celebrating contemporary breakthroughs, each story highlights the enduring values instilled within our school walls.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
