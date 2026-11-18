import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';
import HeroSection from '../HomePage/HeroSection';
import ArticlesFeaturedSection from './ArticlesFeaturedSection';
import ArticlesGridSection from './ArticlesGridSection';
import ArticlesStoriesSection from './ArticlesStoriesSection';
import ArticleModal from './ArticleModal';
import FooterSection from '../HomePage/FooterSection';
import './ArticlesPage.css';
import ArticalFaqSection from './ArticalFAQ';

export default function ArticlesPage() {
  const [modalItem, setModalItem] = useState(null);
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
    <div className="articles-page-wrapper">
      {/* 1. Header Navigation */}
      <Navbar activePage="articles" />

      {/* 2. Panoramic Campus Hero */}
      <HeroSection />

      {/* 3. Main Articles Content */}
      <main className="articles-main-content">
        {/* Section 1: Featured Community Voices */}
        <ArticlesFeaturedSection onSelectArticle={(item) => setModalItem(item)} />

        {/* Section 2: Catalog Grid with Filters & Pagination */}
        <ArticlesGridSection onSelectArticle={(item) => setModalItem(item)} />

        {/* Section 3: Alumni Stories Carousel */}
        <ArticlesStoriesSection onSelectAlumnus={(item) => setModalItem(item)} />

        <ArticalFaqSection />
      </main>

      {/* 4. Footer */}
      <FooterSection />

      {/* 5. Detail Modal Popup */}
      {modalItem && (
        <ArticleModal
          item={modalItem}
          onClose={() => setModalItem(null)}
        />
      )}
    </div>
  );
}
