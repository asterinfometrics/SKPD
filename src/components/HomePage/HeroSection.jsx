import './HeroSection.css';
import heroImage from '../../assets/hero-school 1.webp';
import journeyIcon from '../../assets/buttonarrow.webp';

export default function HeroSection() {
  return (
    <section className="skpd-hero-wrapper" id="home">
      {/* Contained Hero Card with Top Curved Notch */}
      <div className="skpd-hero-card">
        {/* Top Notch SVG Shape blending with white navbar above */}
        <div className="hero-notch-cutout" aria-hidden="true">
          <svg
            viewBox="0 0 180 44"
            preserveAspectRatio="none"
            className="hero-notch-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 0 C 30 0, 42 40, 90 40 C 138 40, 150 0, 180 0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* Hero Card Inner Content */}
        <div className="skpd-hero-inner">
          {/* Centered Heading */}
          <h1 className="skpd-hero-title">
            Where Every <span className="skpd-hero-highlight">Journey Begins</span>
          </h1>

          {/* Subtitle */}
          <p className="skpd-hero-subtitle">
            A community shaped by shared beginnings, lasting friendships, and memories that continue across generations.
          </p>

          {/* Primary CTA Button */}
          <div className="skpd-hero-cta-wrapper">
            <button className="skpd-hero-cta" aria-label="Begin the Journey">
              <span className="cta-icon-badge">
                <img
                  src={journeyIcon}
                  alt=""
                  className="cta-icon-img"
                />
              </span>
              <span className="cta-text">Begin the Journey</span>
            </button>
          </div>
        </div>

        {/* Panoramic Campus Heritage Building Image */}
        <div className="skpd-hero-banner-wrapper">
          <div className="skpd-hero-banner-frame">
            <img
              src={heroImage}
              alt="S.K.P.D. Historic Campus Building"
              className="skpd-hero-banner-img"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
