import React from 'react';
import './GlobalNetworkSection.css';
import globalMap from '../../assets/global_map.webp';
import journeyIcon from '../../assets/buttonarrow.webp';

export default function GlobalNetworkSection() {
  return (
    <section className="global-network-section" id="network">
      <div className="global-network-container">
        <div className="global-network-card">
          <div className="global-network-content">
            <h2 className="global-network-title">
              Wherever <span className="global-highlight">Life Takes You</span>, Stay Connected.
            </h2>
            <p className="global-network-subtitle">
              Our journeys may take us across the world, but the memories,
              friendships, and sense of belonging remain close.
            </p>
            <div className="skpd-hero-cta-wrapper">
              <button className="skpd-hero-cta" aria-label="Begin the Journey">
                <span className="cta-icon-badge">
                  <img
                    src={journeyIcon}
                    alt=""
                    className="cta-icon-img"
                  />
                </span>
                <span className="cta-text">Become a Member</span>
              </button>
            </div>
          </div>

          {/* Dotted Global Map Graphic */}
          <div className="global-map-wrapper" aria-hidden="true">
            <img
              src={globalMap}
              alt="Global map with connected alumni locations"
              className="global-map-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

