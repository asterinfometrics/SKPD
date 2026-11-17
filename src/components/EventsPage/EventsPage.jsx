import React, { useEffect } from 'react';
import Navbar from '../HomePage/Navbar';
import HeroSection from '../HomePage/HeroSection';
import EventsMomentsSection from './EventsMomentsSection';
import JoinBannerSection from '../HomePage/JoinBannerSection';
import FooterSection from '../HomePage/FooterSection';
import './EventsPage.css';

export default function EventsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="events-page-wrapper">
      {/* 1. Header Navigation */}
      <Navbar activePage="events" />

      {/* 2. Top Hero Section */}
      <HeroSection />

      {/* 3. Main Content: Moments We've Shared Grid */}
      <main className="events-main-content">
        <EventsMomentsSection />
      </main>

      {/* 4. Join Banner Call-To-Action */}
      <JoinBannerSection />

      {/* 5. Shared Footer */}
      <FooterSection />
    </div>
  );
}
