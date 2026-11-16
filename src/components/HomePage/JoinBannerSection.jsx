import './JoinBannerSection.css';
import joinCrowd from '../../assets/join_crowd.webp';
import journeyIcon from '../../assets/buttonarrow.webp';

export default function JoinBannerSection() {
  return (
    <section className="join-banner-section" id="membership">
      <div className="join-banner-container">
        <div className="join-banner-card">
          {/* Text Content */}
          <div className="join-banner-content">
            <h2 className="join-banner-title">
              <span className="join-highlight">Come Back.</span> Connect. Belong.
            </h2>
            <p className="join-banner-subtitle">
              Reconnect with old friends, discover new connections, and stay part
              of the community that brought us together.
            </p>

            <div className="join-banner-cta-wrapper">
              <button className="join-banner-cta" aria-label="Become a Member">
                <span className="join-cta-icon-badge">
                  <img
                    src={journeyIcon}
                    alt=""
                    className="join-cta-icon-img"
                  />
                </span>
                <span className="join-cta-text">Become a Member</span>
              </button>
            </div>
          </div>

          {/* Crowd of Alumni Image at Card Bottom - Uncropped, Full View */}
          <div className="join-banner-crowd-wrapper" aria-hidden="true">
            <img
              src={joinCrowd}
              alt="SKPD alumni gathered together"
              className="join-banner-crowd-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
