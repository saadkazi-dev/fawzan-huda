import React from 'react';
import { IslamicArchFrame } from './IslamicArchFrame';
import { FallingPetals } from './FallingPetals';
import './HeroSection.css';

export interface HeroSectionProps {
  onReplay?: () => void;
}

/**
 * Premium Hero Section Component
 * Architectural Islamic Wedding Invitation with clean structure:
 * Bismillah Calligraphy -> English Translation -> Subtle Diamond Divider ->
 * F&H Monogram Seal -> FAWZAN -> WEDDING -> HUDA -> Invitation Message -> TAP TO CONTINUE.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ onReplay: _onReplay }) => {
  const handleScrollToNext = () => {
    const nextSection =
      document.querySelector('.parents-section-container') ||
      document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section-container" id="hero-invitation">
      {/* Cinematic Falling Petal Entrance Effect */}
      <FallingPetals />

      <IslamicArchFrame>
        {/* 1. Bismillah Calligraphy, Translation & Subtle Diamond Divider */}
        <header className="hero-bismillah-group">
          <span className="hero-bismillah-arabic" lang="ar" dir="rtl">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>

          <span className="hero-bismillah-translation">
            IN THE NAME OF ALLAH, THE MOST GRACIOUS, THE MOST MERCIFUL
          </span>

          <div className="hero-bismillah-divider" aria-hidden="true">
            <span className="hero-bismillah-divider-line" />
            <span className="hero-bismillah-diamond">❖</span>
            <span className="hero-bismillah-divider-line" />
          </div>
        </header>

        {/* 2. F&H Embossed Monogram Seal */}
        <div className="hero-seal-wrapper" aria-label="Fawzan and Huda Monogram Seal">
          <div className="hero-seal-outer-rim">
            <div className="hero-seal-inner-body">
              <span className="hero-seal-initials">
                F<span className="hero-seal-ampersand">&amp;</span>H
              </span>
            </div>
          </div>
        </div>

        {/* 3. Focal Names Block: FAWZAN, WEDDING Separator & HUDA */}
        <div className="hero-names-block">
          <h1 className="hero-couple-names" aria-label="Fawzan and Huda Wedding">
            <span className="hero-name-primary hero-name-fawzan">FAWZAN</span>

            <span className="hero-wedding-separator" aria-hidden="true">
              <span className="hero-flank-line" />
              <span className="hero-wedding-text">WEDDING</span>
              <span className="hero-flank-line" />
            </span>

            <span className="hero-name-primary hero-name-huda">HUDA</span>
          </h1>

          {/* 4. Invitation Copy */}
          <p className="hero-invitation-copy">
            Together with their families, request the honor of your presence to celebrate their Nikah &amp; Wedding Union.
          </p>
        </div>

        {/* 5. Footer: Refined TAP TO CONTINUE Button */}
        <footer className="hero-footer">
          <button
            className="hero-continue-btn"
            onClick={handleScrollToNext}
            aria-label="Continue to invitation details"
          >
            <span className="hero-continue-text">TAP TO CONTINUE</span>
          </button>
        </footer>
      </IslamicArchFrame>
    </section>
  );
};
