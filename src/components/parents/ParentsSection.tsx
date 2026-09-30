import React from 'react';
import { HeaderMotif } from '../preloader/IslamicOrnament';
import './ParentsSection.css';

/**
 * 8-Pointed Rub el Hizb Islamic Star Emblem for Family Cards
 */
const RubElHizbEmblem: React.FC = () => (
  <div style={{ width: '28px', height: '28px', color: 'var(--color-gold-base)', marginBottom: '8px' }}>
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
      <path d="M 50 12 L 62 38 L 88 50 L 62 62 L 50 88 L 38 62 L 12 50 L 38 38 Z" fill="currentColor" fillOpacity="0.1" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
    </svg>
  </div>
);

export const ParentsSection: React.FC = () => {
  return (
    <section className="parents-section-container" id="parents-section">
      <div className="parents-watermark" />

      {/* Main Arch Architectural Casing */}
      <div className="parents-arch-casing">
        {/* Section Header */}
        <header className="parents-header">
          <span className="parents-header-subtitle">With Praise To Allah</span>
          <h2 className="parents-header-title">The Beloved Parents</h2>
          <HeaderMotif />
        </header>

        {/* 1. GROOM'S GRANDPARENTS (Sacred Legacy Card) */}
        <div className="grandparents-card parents-reveal-item">
          <div style={{ width: '16px', height: '16px', color: 'var(--color-gold-base)', marginBottom: '4px' }}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.3 2a10 10 0 0 0-1.9.2 10.4 10.4 0 0 1 .4 3c0 5.4-4 9.8-9.2 10.4a10.2 10.2 0 0 0 10.7 8.3 10 10 0 0 0 9.8-10A10 10 0 0 0 12.3 2z" />
            </svg>
          </div>

          <span className="grandparents-tag">UNDER THE BLESSED LEGACY OF</span>
          <div className="gold-divider" style={{ width: '50px', margin: '4px auto 10px auto' }} />

          <h3 className="grandparent-name">Zainuddin Kadir Kazi</h3>
          <h3 className="grandparent-name">Fatimbi Zainuddin Kazi</h3>

          <span className="grandparent-role">
            Marhoom &bull; Beloved Grandparents of the Groom
          </span>
        </div>

        {/* 2 & 3. PARENTS GRID PANELS */}
        <div className="parents-grid">
          
          {/* GROOM'S PARENTS CARD */}
          <div className="parent-card parents-reveal-item">
            <RubElHizbEmblem />

            <span className="parent-card-banner">PARENTS OF THE GROOM</span>

            <div className="parent-person-box">
              <h3 className="parent-person-name">Rafiq Zainuddin Kazi</h3>
              <span className="parent-person-role">Father</span>
            </div>

            <div className="gold-divider" style={{ width: '40px', margin: '8px auto' }} />

            <div className="parent-person-box">
              <h3 className="parent-person-name">Hajara Rafiq Kazi</h3>
              <span className="parent-person-role">Mother</span>
            </div>

            <p className="parent-card-blessing">
              &ldquo;May Allah bless both families with barakah.&rdquo;
            </p>
          </div>

          {/* BRIDE'S PARENTS CARD */}
          <div className="parent-card parents-reveal-item">
            <RubElHizbEmblem />

            <span className="parent-card-banner">PARENTS OF THE BRIDE</span>

            <div className="parent-person-box">
              <h3 className="parent-person-name">Hasham Ismail Kazi</h3>
              <span className="parent-person-role">Father</span>
            </div>

            <div className="gold-divider" style={{ width: '40px', margin: '8px auto' }} />

            <div className="parent-person-box">
              <h3 className="parent-person-name">Seemab Hasham Kazi</h3>
              <span className="parent-person-role">Mother</span>
            </div>

            <p className="parent-card-blessing">
              &ldquo;May Allah bless both families with barakah.&rdquo;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
