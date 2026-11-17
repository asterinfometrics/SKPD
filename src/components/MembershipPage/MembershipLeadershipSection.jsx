import { useRef, useState, useEffect } from 'react';
import LeaderModal from '../Common/LeaderModal';
import './MembershipLeadershipSection.css';

import leader1 from '../../assets/leader_1.webp';
import leader2 from '../../assets/leader_2.webp';
import leader3 from '../../assets/leader_3.webp';
import leader4 from '../../assets/leader_4.webp';

export const allCommitteeMembers = [
  {
    id: 1,
    name: 'Voora Lakshmi Narasimha Rao',
    role: 'President',
    tenure: 'President, SKPD Alumni Association',
    batch: 'Class of 1974',
    location: 'Chennai, Tamil Nadu',
    bio: 'Hailing from the esteemed Voora family (Son of Late Voora Radhakrishnamurthy), Shri Rao started his career in the pulses trade and promoted the VOORA Group over three decades ago. Under his leadership, the Group has expanded into Civil Construction, Property Development, Solar Energy generation, and Manufacturing Building Materials, successfully mentoring his sons Mr. Pavan Voora and Mr. Suman Voora. At leisure, his passion for music shines through organizing the annual Hindustani music festival "Swamy Haridoss Sangeeth Samaroh" under Viswa Kala Sangama, honoring senior maestros and encouraging emerging artists.',
    quote: 'Our school gave us not just an education, but values that shape lifetimes and bonds that defy time.',
    initiatives: ['VOORA Group Leadership', 'Swamy Haridoss Sangeeth Samaroh', 'Solar Energy & Property Development', 'Alumni Mentorship Fund'],
    email: 'president@skpdalumni.org',
    imgSrc: leader1,
    alt: 'Portrait of Voora Lakshmi Narasimha Rao, President',
  },
  {
    id: 2,
    name: 'A.Sudhakar',
    role: 'Vice President',
    tenure: 'Vice President, Executive Council',
    batch: 'Class of 1979',
    location: 'Chennai, Tamil Nadu',
    bio: 'Actively driving alumni community engagement, strategic reunions, and collaborative educational initiatives between alumni and the current school administration.',
    quote: 'Reconnecting with your roots is the greatest tribute one can offer to their alma mater.',
    initiatives: ['Annual Alumni Gatherings', 'Campus Infrastructure Support', 'Career Guidance Workshops'],
    email: 'sudhakar.vp@skpdalumni.org',
    imgSrc: leader2,
    alt: 'Portrait of A.Sudhakar, Vice President',
  },
  {
    id: 3,
    name: 'P.RadhaKrishna',
    role: 'Vice President',
    tenure: 'Vice President, Executive Council',
    batch: 'Class of 1981',
    location: 'Chennai, Tamil Nadu',
    bio: 'Dedicated to strengthening regional networking, expanding alumni directories, and coordinating collaborative community welfare programs.',
    quote: 'Every alumni achievement is a testament to the foundation laid in our cherished classrooms.',
    initiatives: ['Regional Alumni Hubs', 'Welfare & Relief Funds', 'Batch Coordination'],
    email: 'radhakrishna.vp@skpdalumni.org',
    imgSrc: leader2,
    alt: 'Portrait of P.RadhaKrishna, Vice President',
  },
  {
    id: 4,
    name: 'V.Anjaneyulu',
    role: 'Vice President',
    tenure: 'Vice President, Executive Council',
    batch: 'Class of 1983',
    location: 'Chennai, Tamil Nadu',
    bio: 'Oversees member outreach, digital engagement platforms, and initiatives connecting veteran alumni with recent graduates.',
    quote: 'Generations change, but the spirit of SKPD remains an unbroken chain of brotherhood and service.',
    initiatives: ['Young Alumni Engagement', 'Digital Directory Outreach', 'Sports & Cultural Events'],
    email: 'anjaneyulu.vp@skpdalumni.org',
    imgSrc: leader2,
    alt: 'Portrait of V.Anjaneyulu, Vice President',
  },
  {
    id: 5,
    name: 'Y.Suresh Babu',
    role: 'Secretary',
    tenure: 'General Secretary, Alumni Association',
    batch: 'Class of 1974',
    location: 'Chennai, Tamil Nadu',
    bio: 'Completed his Civil Engineering Degree from the prestigious College of Engineering, Guindy, Chennai in 1979. He initially served as Assistant Engineer in the P.W.D. Chennai Division overseeing construction of Library Buildings across various centers. He subsequently founded S.S. CONSTRUCTIONS, executing numerous residential buildings, shopping complexes, and bungalows, followed by flats under "SWARA BUILDERS" and plot developments under "SWARA REALTORS" in Coimbatore District. He actively serves as a Trustee in "SINGAMSETTY ATEENDROOLOO CHETTY’S CHARITIES" and in "THE ALL INDIA ARYA VYSYA SAMAJAM", Chennai.',
    quote: 'True service is keeping the flame of camaraderie and mutual support glowing year after year.',
    initiatives: ['S.S. Constructions & Swara Builders', 'Singamsetty Ateendrooloo Chetty Charities', 'All India Arya Vysya Samajam', 'Alumni Governance & Records'],
    email: 'secretary@skpdalumni.org',
    imgSrc: leader3,
    alt: 'Portrait of Y.Suresh Babu, Secretary',
  },
  {
    id: 6,
    name: 'V.Ramesh Gupta',
    role: 'Joint Secretary',
    tenure: 'Joint Secretary, Executive Council',
    batch: 'Class of 1990',
    location: 'Chennai, Tamil Nadu',
    bio: 'Coordinates event logistics, membership registration drives, and acts as a bridge between alumni across different decades.',
    quote: 'Coming together is a beginning; keeping together is progress; working together is success.',
    initiatives: ['Membership Enrollment Drives', 'Event Operations', 'Alumni Archival Project'],
    email: 'jointsecretary@skpdalumni.org',
    imgSrc: leader3,
    alt: 'Portrait of V.Ramesh Gupta, Joint Secretary',
  },
  {
    id: 7,
    name: 'Srinivasulu Kanamarlapudi',
    role: 'Treasurer, Alumni Association',
    tenure: 'Treasurer, Alumni Association',
    batch: 'Class of 1986',
    location: 'Chennai, Tamil Nadu',
    bio: 'Overseeing fiscal integrity, financial audits, corpus fund administration, and transparent allocation of contributions for alumni-sponsored school development.',
    quote: 'Transparent stewardship ensures our alma mater will continue to inspire students for centuries to come.',
    initiatives: ['Corpus Fund Oversight', 'Financial Auditing', 'Scholarship Allocation'],
    email: 'treasurer@skpdalumni.org',
    imgSrc: leader4,
    alt: 'Portrait of Srinivasulu Kanamarlapudi, Treasurer',
  },
  {
    id: 8,
    name: 'J.Badrinath',
    role: 'Executive Committee',
    tenure: 'Executive Committee Member',
    batch: 'Class of 1992',
    location: 'Chennai, Tamil Nadu',
    bio: 'Active leader in organizing educational workshops, student career counseling, and spearheading annual campus clean-and-green programs.',
    quote: 'Giving back to where we started is the most fulfilling journey an alumnus can undertake.',
    initiatives: ['Campus Development', 'Career Mentorship', 'Inter-Batch Meets'],
    email: 'badrinath.ec@skpdalumni.org',
    imgSrc: leader4,
    alt: 'Portrait of J.Badrinath, Executive Committee',
  },
  {
    id: 9,
    name: 'V.Venkateswarlu',
    role: 'Executive Committee',
    tenure: 'Executive Committee Member',
    batch: 'Class of 1994',
    location: 'Chennai, Tamil Nadu',
    bio: 'Fosters business and professional synergies among alumni entrepreneurs, organizing knowledge-sharing symposiums.',
    quote: 'The friendships forged in SKPD remain the most reliable pillars throughout our careers.',
    initiatives: ['Entrepreneurs Forum', 'Industry Networking', 'Alumni Talks'],
    email: 'venkateswarlu.ec@skpdalumni.org',
    imgSrc: leader4,
    alt: 'Portrait of V.Venkateswarlu, Executive Committee',
  },
  {
    id: 10,
    name: 'Mukkala Sriramaprasad',
    role: 'Executive Committee',
    tenure: 'Executive Committee Member',
    batch: 'Class of 1973',
    location: 'Chennai, Tamil Nadu',
    bio: 'Born to Smt. Mukkala Ahobaliamma & Mukkala Nammalwar Chetty on 01/04/1957, Mukkala Sriramaprasad completed his schooling at Sri Kanyaka Parameswari Devasthanam School (1972-73) and graduated from Pachaiyappa’s College as a Gold Medalist in English Literature. A dedicated humanitarian, he joined Lions International in 1989, became a Melvin Jones Fellow (1993-94), served as Past President of Lions Club of Fort St. George, and worked extensively for social welfare and the underprivileged. He serves as Trustee across prominent endowments including Mukkala Andalamma Trust, Mukkala Venkata Cunniah Chetty Trust, Singamsetty Ateendrooloo Chetty Charities, Desu Amirthavalli Thayaramma Estate, Kalivi Ramanna Chetty Vysya Dharme Sathram, and Abhaya Hastham Foundation. Committee member of Sri Vasavi Vriddhajana Seva Vasathi Mandiram (Sholinghur) and Donor Family / Committee Member of MNC Vivekananda Senior Secondary School, Kundrathur. Married to Mukkala Shanthi Prasad with two sons, daughters-in-law, and twin grandsons.',
    quote: 'Thanks to Sri Vasavamba Ammavaru for blessing me with the best set of school and classmates.',
    initiatives: ['Melvin Jones Fellow & Lions Club', 'Singamsetty Ateendrooloo Charities', 'MNC Vivekananda Senior Secondary School', 'Elderly Care & Community Welfare'],
    email: 'sriramprasad.ec@skpdalumni.org',
    imgSrc: leader4,
    alt: 'Portrait of Mukkala Sriramaprasad, Executive Committee',
  },
  {
    id: 11,
    name: 'K.Ramesh',
    role: 'Executive Committee',
    tenure: 'Executive Committee Member',
    batch: 'Class of 1997',
    location: 'Chennai, Tamil Nadu',
    bio: 'Drives sports activities, annual cricket tournament, alumni tournaments, and supports extracurricular excellence in the school.',
    quote: 'Sportsmanship, discipline, and unity learned on SKPD grounds remain with us forever.',
    initiatives: ['Annual Cricket Trophy', 'Sports Coaching Support', 'Alumni Fellowship Days'],
    email: 'kramesh.ec@skpdalumni.org',
    imgSrc: leader4,
    alt: 'Portrait of K.Ramesh, Executive Committee',
  },
];

export default function MembershipLeadershipSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (slider) slider.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const getScrollStep = () => {
    if (!sliderRef.current) return 310;
    const card = sliderRef.current.querySelector('.membership-leader-card');
    if (!card) return sliderRef.current.clientWidth;
    const style = window.getComputedStyle(sliderRef.current);
    const gap = parseFloat(style.columnGap || style.gap || '0') || 0;
    return card.offsetWidth + gap;
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth } = sliderRef.current;
      const step = getScrollStep();
      if (scrollLeft <= 10) {
        sliderRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: -step, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const step = getScrollStep();
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: step, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="membership-leadership-section" id="committee">
      <div className="membership-leadership-container">
        {/* Header Row with Title & Arrow Controls */}
        <div className="membership-leadership-header">
          <div className="leadership-header-text">
            <div className="leadership-badge">
              <span className="leadership-badge-dot" aria-hidden="true" />
              <span className="leadership-badge-text">THE PEOPLE</span>
            </div>

            <h2 className="membership-leadership-title">
              <span className="leadership-title-highlight">The People</span> Who Keep the Connection Alive
            </h2>

            <p className="membership-leadership-subtitle">
              Meet the 11 dedicated alumni committee members guiding initiatives, organizing reunions, and serving our community. Click any card to view their complete profile.
            </p>
          </div>

          {/* Navigation Arrows (Default 4 cards, arrow to slide through all 11) */}
          <div className="leadership-arrow-controls">
            <button
              type="button"
              className={`leadership-nav-btn prev-btn ${!canScrollLeft ? 'at-edge' : ''}`}
              onClick={handlePrev}
              aria-label="Previous members"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              className={`leadership-nav-btn next-btn ${!canScrollRight ? 'at-edge' : ''}`}
              onClick={handleNext}
              aria-label="Next members"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slider Track: 4 Visible by default on desktop, slides all 11 */}
        <div className="membership-leadership-carousel" ref={sliderRef} tabIndex="0" aria-label="Committee members carousel">
          {allCommitteeMembers.map((member) => (
            <div
              key={member.id}
              className="membership-leader-card"
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex="0"
              aria-haspopup="dialog"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedMember(member);
                }
              }}
            >
              <span className="leader-card-badge-hint" aria-hidden="true">
                View Profile →
              </span>

              <div className="membership-leader-media">
                <img
                  src={member.imgSrc}
                  alt={member.alt}
                  className="membership-leader-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80';
                  }}
                />
              </div>

              <div className="membership-leader-info">
                <h3 className="membership-leader-name">{member.name}</h3>
                <p className="membership-leader-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Profile Popup Modal */}
      <LeaderModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}
