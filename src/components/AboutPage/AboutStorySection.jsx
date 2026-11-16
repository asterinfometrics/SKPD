import React from 'react';
import './AboutStorySection.css';
import aboutImg from '../../assets/About.webp';

export default function AboutStorySection() {
  return (
    <section className="about-story-section" id="story">
      <div className="about-story-container">
        {/* Left Side: Heritage Photo Frame */}
        <div className="about-story-media">
          <div className="about-story-frame">
            <img
              src={aboutImg}
              alt="SKPD alumni walking down the historic colonnaded campus corridor"
              className="about-story-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Side: Narrative Content */}
        <div className="about-story-content">
          <div className="events-badge">
            <span className="events-badge-dot" aria-hidden="true" />
            <span className="events-badge-text">OUR STORY</span>
          </div>

          <h2 className="about-story-title">Where It All Comes Together</h2>

          <div className="about-story-paragraphs">
            <p className="about-story-p lead">
              What began with a shared school experience has grown into a community that connects generations of alumni.
            </p>
            <p className="about-story-p">
              Through the years, our alumni have taken different paths, built lives in different places, and pursued countless journeys. Yet the connection to the school remains a common thread.
            </p>
            <p className="about-story-p">
              The Alumni Association exists to bring that community closer – creating opportunities to reconnect with old friends, celebrate shared memories, exchange experiences, and contribute to the generations that follow.
            </p>
          </div>

          <div className="about-story-tagline">
            <span className="tagline-part">DIFFERENT JOURNEYS</span>
            <span className="tagline-bullet">•</span>
            <span className="tagline-part">ONE SHARED BEGINNING</span>
          </div>
        </div>
      </div>
    </section>
  );
}

