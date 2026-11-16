import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import skpdLogo from '../../assets/logo.webp';
import './LoadingEffect.css';

/**
 * Top slim gradient line
 */
export function TopRouteLoader({ active }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) {
      setProgress(100);
      const timer = setTimeout(() => setProgress(0), 200);
      return () => clearTimeout(timer);
    }

    setProgress(25);
    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(90), 220);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active]);

  return (
    <div className={`skpd-top-loader-container ${active ? 'is-loading' : ''}`} aria-hidden="true">
      <div className="skpd-top-loader-bar" style={{ width: `${progress}%` }}>
        <div className="skpd-top-loader-glow" />
      </div>
    </div>
  );
}

/**
 * Unified Logo Loading Effect
 * - Only displays the animated SKPD crest logo with pulse & subtle ring
 * - Shows on initial load AND on route navigation
 */
export default function LoadingEffect() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isInitialDone, setIsInitialDone] = useState(false);
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const [isRouteDone, setIsRouteDone] = useState(false);

  const location = useLocation();
  const isFirstMount = useRef(true);

  // 1. Initial Page Load (Duration ~650ms)
  useEffect(() => {
    const tFinish = setTimeout(() => {
      setIsInitialDone(true);
      setTimeout(() => {
        setIsInitialLoading(false);
      }, 350);
    }, 650);

    return () => clearTimeout(tFinish);
  }, []);

  // 2. Route Navigation Loading (Duration ~420ms)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    setIsRouteLoading(true);
    setIsRouteDone(false);

    const tFinish = setTimeout(() => {
      setIsRouteDone(true);
      setTimeout(() => {
        setIsRouteLoading(false);
      }, 350);
    }, 420);

    return () => clearTimeout(tFinish);
  }, [location.pathname]);

  const showInitial = isInitialLoading;
  const showRoute = isRouteLoading && !isInitialLoading;

  return (
    <>
      {/* Top route progress bar */}
      <TopRouteLoader active={showInitial || showRoute} />

      {/* Initial Page Load Overlay - Logo Only */}
      {showInitial && (
        <div
          className={`skpd-logo-loader-overlay ${isInitialDone ? 'fade-out' : ''}`}
          role="status"
          aria-label="Loading SKPD Alumni Association"
        >
          <div className="skpd-logo-loader-content">
            <div className="skpd-logo-loader-aura" />
            <div className="skpd-logo-loader-spin-ring" />
            <img
              src={skpdLogo}
              alt="SKPD Crest Logo"
              className="skpd-logo-loader-img"
            />
          </div>
        </div>
      )}

      {/* Route Change Overlay - Logo Only */}
      {showRoute && (
        <div
          className={`skpd-logo-loader-overlay route-mode ${isRouteDone ? 'fade-out' : ''}`}
          role="status"
          aria-label="Loading page"
        >
          <div className="skpd-logo-loader-content">
            <div className="skpd-logo-loader-aura" />
            <div className="skpd-logo-loader-spin-ring" />
            <img
              src={skpdLogo}
              alt="SKPD Crest Logo"
              className="skpd-logo-loader-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
