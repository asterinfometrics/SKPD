import React, { useEffect } from 'react';
import Navbar from '../HomePage/Navbar';
import HeroSection from '../HomePage/HeroSection';
import ContactSection from '../HomePage/ContactSection';
import ContactMapSection from './ContactMapSection';
import FooterSection from '../HomePage/FooterSection';
import './ContactPage.css';
import ContactForm from './contactform';
import ContactFaq from './contactFaq';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-wrapper">
      {/* 1. Header Navigation */}
      <Navbar activePage="contact" />

      {/* 2. Top Hero Section */}
      <HeroSection />

      {/* 3. Main Content */}
      <main className="contact-main-content">
        {/* Contact Form Section */}
        <ContactForm />

        {/* 4 Info Columns & Interactive Map Component */}
        <ContactMapSection />

        <ContactFaq />

      </main>

      {/* 4. Shared Footer */}
      <FooterSection />
    </div>
  );
}
