import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';
import FooterSection from '../HomePage/FooterSection';
import MembershipFormSection from './MembershipFormSection';
import MembershipBenefitsSection from './MembershipBenefitsSection';
import MembershipLeadershipSection from './MembershipLeadershipSection';
import './MembershipPage.css';
import HeroSection from '../HomePage/HeroSection';

export default function MembershipPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="membership-page-wrapper">
      {/* 1. Header Navigation */}
      <Navbar activePage="membership" />

      <HeroSection />

      {/* 2. Main Membership Content */}
      <main className="membership-main-content">
        {/* Component 1: Multi-Step Membership Registration Form */}
        <MembershipFormSection />

        {/* Component 2: Membership Benefits (Hexagonal Feature Cards) */}
        <MembershipBenefitsSection />

        {/* Component 3: All 11 Committee Members */}
        <MembershipLeadershipSection />
      </main>

      {/* 3. Footer */}
      <FooterSection />
    </div>
  );
}
