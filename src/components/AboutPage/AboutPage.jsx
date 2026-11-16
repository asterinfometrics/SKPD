import React, { useEffect } from 'react';
import Navbar from '../HomePage/Navbar';
import AboutStorySection from './AboutStorySection';
import AboutJourneySection from './AboutJourneySection';
import AboutStatsSection from './AboutStatsSection';
import AboutLeadershipSection from './AboutLeadershipSection';
import JoinBannerSection from '../HomePage/JoinBannerSection';
import FooterSection from '../HomePage/FooterSection';
import './AboutPage.css';
import { HeroSection } from '../HomePage';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* Shared Header Navigation */}
      <Navbar activePage="about" />

      <HeroSection />

      {/* Main Content Sections */}
      <main className="about-main-content">
        {/* Section 1: Our Story - Where It All Comes Together */}
        <AboutStorySection />

        {/* Section 2: Our Journey - A Legacy Built Across Generations */}
        <AboutJourneySection />

        {/* Section 3: By The Numbers - A Legacy Measured in Generations */}
        <AboutStatsSection />

        {/* Section 4: The People - Who Keep the Connection Alive */}
        <AboutLeadershipSection />

        {/* Call to Action Banner */}
        <JoinBannerSection />

      </main>

      {/* Shared Footer */}
      <FooterSection />
    </div>
  );
}

