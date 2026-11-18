import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MembershipPage from './components/MembershipPage';
import EventsPage from './components/EventsPage';
import ArticlesPage from './components/ArticlesPage/ArticlesPage';
import ContactPage from './components/ContactPage';
import LoadingEffect from './components/Common/LoadingEffect';

function App() {
  return (
    <BrowserRouter>
      <LoadingEffect />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
