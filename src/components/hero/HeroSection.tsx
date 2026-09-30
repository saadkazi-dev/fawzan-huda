import React from 'react';
import { IslamicArchFrame } from './IslamicArchFrame';
import { BismillahCalligraphy } from './BismillahCalligraphy';
import './HeroSection.css';

export interface HeroSectionProps {
  onReplay?: () => void;
}

/**
 * Premium Hero Section Component (Phase 04)
 * Static 2D luxury wedding invitation hero header.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ onReplay }) => {
  return (
    <section className="hero-section-container">
      <IslamicArchFrame>
        {/* Header: Bismillah Calligraphy & Intro */}
        <header className="hero-header">
          <div className="hero-bismillah-wrapper">
            <BismillahCalligraphy />
          </div>
          <span className="hero-intro-text">
            In the Name of Allah, Most Gracious, Most Merciful
          </span>
        </header>

        {/* Center Content: Couple Monogram & Editorial Names */}
        <div className="hero-content">
          <div className="hero-monogram-emblem">
            <span className="hero-monogram-initials">F&amp;H</span>
          </div>

          <div className="hero-couple-names">
            <h1 className="hero-name-primary">FAWZAN</h1>
            <span className="hero-ampersand">&amp;</span>
            <h1 className="hero-name-primary">HUDA</h1>
          </div>

          <div className="gold-divider" style={{ margin: 'var(--space-sm) auto' }} />

          <p className="hero-invitation-copy">
            Together with their families, request the honor of your presence to celebrate their Nikah &amp; Wedding Union.
          </p>

          <div className="hero-date-box">
            <span className="hero-date-main">SATURDAY, DEC 12, 2026</span>
            <span className="hero-date-hijri">JUMADA AL-THANI 1448 AH</span>
          </div>
        </div>

        {/* Footer Option */}
        <footer className="hero-footer">
          {onReplay && (
            <button className="hero-replay-btn" onClick={onReplay}>
              &#8634; Replay Sequence
            </button>
          )}
        </footer>
      </IslamicArchFrame>
    </section>
  );
};
