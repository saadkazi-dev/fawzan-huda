import React from 'react';
import { IslamicArchFrame } from './IslamicArchFrame';
import { BismillahCalligraphy } from './BismillahCalligraphy';
import './HeroSection.css';

export interface HeroSectionProps {
  onReplay?: () => void;
}

/**
 * Gold Diamond Line Divider Component
 */
export const DiamondDivider: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`hero-diamond-divider ${className || ''}`}>
    <span className="hero-divider-line"></span>
    <span className="hero-diamond-glyph">❖</span>
    <span className="hero-divider-line"></span>
  </div>
);

/**
 * Premium Hero Section Component
 * Architectural Islamic Wedding Invitation with clean structure, seal emblem, WEDDING separator, and TAP TO CONTINUE button.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ onReplay }) => {
  const handleScrollToNext = () => {
    const nextSection = document.querySelector('.parents-section-container') || document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section-container">
      <IslamicArchFrame>
        {/* Top Header: Bismillah Calligraphy & Intro Line */}
        <header className="hero-header">
          <div className="hero-bismillah-wrapper">
            <BismillahCalligraphy />
          </div>

          <span className="hero-intro-text">
            IN THE NAME OF ALLAH, MOST GRACIOUS, MOST MERCIFUL
          </span>

          <DiamondDivider className="hero-divider-top" />
        </header>

        {/* Center Stage: F&H Seal, Couple Names with WEDDING Separator & Invitation Message */}
        <div className="hero-content">
          <div className="hero-monogram-emblem">
            <span className="hero-monogram-initials">F&amp;H</span>
          </div>

          <div className="hero-couple-names">
            <h1 className="hero-name-primary hero-name-fawzan">FAWZAN</h1>
            
            <div className="hero-wedding-separator">
              <span className="hero-flank-line"></span>
              <span className="hero-wedding-text">WEDDING</span>
              <span className="hero-flank-line"></span>
            </div>

            <h1 className="hero-name-primary hero-name-huda">HUDA</h1>
          </div>

          <p className="hero-invitation-copy">
            Together with their families, request the honor of your presence to celebrate their Nikah &amp; Wedding Union.
          </p>
        </div>

        {/* Footer: TAP TO CONTINUE Button & Optional Replay Control */}
        <footer className="hero-footer">
          <button
            className="hero-continue-btn"
            onClick={handleScrollToNext}
            aria-label="Scroll to next section"
          >
            <span className="hero-continue-text">TAP TO CONTINUE</span>
            <span className="hero-continue-arrow">&darr;</span>
          </button>

          {onReplay && (
            <button className="hero-replay-subtle-btn" onClick={onReplay} aria-label="Replay intro video">
              &#8634; Replay Sequence
            </button>
          )}
        </footer>
      </IslamicArchFrame>
    </section>
  );
};






