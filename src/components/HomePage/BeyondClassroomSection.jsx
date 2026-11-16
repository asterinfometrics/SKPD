import './BeyondClassroomSection.css';

import arcImg1 from '../../assets/arc_img1.webp';
import arcImg2 from '../../assets/arc_img2.webp';
import arcImg3 from '../../assets/arc_img3.webp';
import arcImg4 from '../../assets/arc_img4.webp';
import arcImg5 from '../../assets/arc_img5.webp';
import arcImg6 from '../../assets/arc_img6.webp';
import arcImg7 from '../../assets/arc_img7.webp';
import arcImg8 from '../../assets/arc_img8.webp';
import arcImg9 from '../../assets/arc_img9.webp';

const classroomMemories = [
  {
    id: 1,
    imgSrc: arcImg1,
    alt: 'Students walking up campus steps with backpacks',
    staticIndex: -4,
  },
  {
    id: 2,
    imgSrc: arcImg2,
    alt: 'Students celebrating cultural traditions on campus',
    staticIndex: -3,
  },
  {
    id: 3,
    imgSrc: arcImg3,
    alt: 'Cricket match on campus field',
    staticIndex: -2,
  },
  {
    id: 4,
    imgSrc: arcImg4,
    alt: 'Acoustic guitar session in courtyard with classmates',
    staticIndex: -1,
  },
  {
    id: 5,
    imgSrc: arcImg5,
    alt: 'Students studying together at wooden classroom desks',
    staticIndex: 0,
  },
  {
    id: 6,
    imgSrc: arcImg6,
    alt: 'Students collaborating in science laboratory',
    staticIndex: 1,
  },
  {
    id: 7,
    imgSrc: arcImg7,
    alt: 'Students in uniform talking in campus colonnade',
    staticIndex: 2,
  },
  {
    id: 8,
    imgSrc: arcImg8,
    alt: 'School friends walking shoulder to shoulder',
    staticIndex: 3,
  },
  {
    id: 9,
    imgSrc: arcImg9,
    alt: 'Students strolling together in sunny courtyard',
    staticIndex: 4,
  },
];

export default function BeyondClassroomSection() {
  return (
    <section className="beyond-classroom-section" id="community">
      {/* Arch Carousel of Photos */}
      <div className="beyond-arc-container" aria-hidden="true">
        <div className="beyond-arc-origin">
          {classroomMemories.map((card, idx) => {
            return (
              <div
                key={card.id}
                className={`beyond-arc-card card-slot-${idx}`}
                style={{
                  '--slot-index': idx,
                  '--card-static-angle': `calc(var(--angle-step) * ${card.staticIndex})`,
                  animationDelay: `calc(var(--arc-duration, 28s) / -9 * ${idx})`,
                }}
              >
                <div className="beyond-card-frame">
                  <img
                    src={card.imgSrc}
                    alt={card.alt}
                    className="beyond-card-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>


      </div>

      {/* Center Framed Typography */}
      <div className="beyond-content">
        <div className="beyond-badge">
          <span className="beyond-badge-dot"></span>
          <span className="beyond-badge-text">
            THE PEOPLE WHO MADE IT MATTER
          </span>
        </div>

        <h2 className="beyond-title">
          Beyond the <span className="beyond-highlight">Classroom</span>
        </h2>

        <p className="beyond-subtitle">
          Teachers guided us. Friends shaped us.
          <br />
          Experiences stayed with us.
        </p>
      </div>
    </section>
  );
}
