import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import MemoriesSection from './MemoriesSection';
import BeyondClassroomSection from './BeyondClassroomSection';
import EventsSection from './EventsSection';
import GallerySection from './GallerySection';
import JoinBannerSection from './JoinBannerSection';
import ArticlesSection from './ArticlesSection';
import WhyStayConnectedSection from './WhyStayConnectedSection';
import GlobalNetworkSection from './GlobalNetworkSection';
import AlumniStoriesSection from './AlumniStoriesSection';
import FaqSection from './FaqSection';
import ContactSection from './ContactSection';
import FooterSection from './FooterSection';
import './HomePage.css';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className="home-page-root">
      {/* 1. Header with Center Crest */}
      <Navbar />

      <main className="home-main-content">
        {/* 2. Hero Section: Where Every Journey Begins */}
        <HeroSection />

        {/* 3. About Section: More Than a School. A Lifelong Connection */}
        <AboutSection />

        {/* 4. Memories Section: The Years That Shaped Us */}
        <MemoriesSection />

        {/* 5. Beyond the Classroom (Curved Photo Arch) */}
        <BeyondClassroomSection />

        {/* 6. Events Section: Making New Memories Together */}
        <EventsSection />

        {/* 7. Gallery Section: A Collection of Memories */}
        <GallerySection />

        {/* 8. Join Banner: Come Back. Connect. Belong. */}
        <JoinBannerSection />

        {/* 9. Articles Section: Voices From Our Community */}
        <ArticlesSection />

        {/* 10. Why Stay Connected (01, 02, 03, 04) */}
        <WhyStayConnectedSection />

        {/* 11. Global Network: Wherever Life Takes You, Stay Connected */}
        <GlobalNetworkSection />

        {/* 12. Alumni Stories: The Journey Continues Beyond the Gates */}
        <AlumniStoriesSection />

        {/* 13. FAQ Section: Let's Clear Things Up */}
        <FaqSection />

        {/* 14. Contact Section: Stay Connected With Us */}
        <ContactSection />
      </main>

      {/* 15. Official SKPD Footer */}
      <FooterSection />
    </div>
  );
}
