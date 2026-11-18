import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';
import HeroSection from '../HomePage/HeroSection';
import ContactMapSection from './ContactMapSection';
import FooterSection from '../HomePage/FooterSection';
import './ContactPage.css';
import ContactForm from './contactform';
import ContactFaq from './contactFaq';

export default function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

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
