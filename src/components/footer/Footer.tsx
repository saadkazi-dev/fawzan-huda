import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';

/**
 * Premium Islamic Arch Finial & Rosette Crest
 * Symmetrical 8-point Rub-el-Hizb star flanked by intricate arabesque filigree,
 * elevated with champagne gold and subtle midnight-navy precision accents.
 */
const OutroArchCrest: React.FC = () => {
  return (
    <div className="footer-outro-crest" aria-hidden="true">
      <svg
        viewBox="0 0 320 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer-crest-svg"
      >
        <defs>
          <linearGradient id="crestGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
            <stop offset="25%" stopColor="#C5A059" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#F5E4BE" stopOpacity="1" />
            <stop offset="75%" stopColor="#C5A059" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="starGoldFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBF4E4" />
            <stop offset="50%" stopColor="#E0C384" />
            <stop offset="100%" stopColor="#A8823E" />
          </linearGradient>

          <linearGradient id="midnightNavAcc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#141C36" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>

          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Hairline Horizon Wings */}
        <line x1="20" y1="30" x2="115" y2="30" stroke="url(#crestGoldGrad)" strokeWidth="1" />
        <line x1="205" y1="30" x2="300" y2="30" stroke="url(#crestGoldGrad)" strokeWidth="1" />

        {/* Ornamental Diamond Beads on wings with midnight centers */}
        <rect x="55" y="28.5" width="3" height="3" fill="#141C36" stroke="#C5A059" strokeWidth="0.5" transform="rotate(45 56.5 30)" opacity="0.85" />
        <rect x="85" y="28" width="4" height="4" fill="#E9D29A" stroke="#141C36" strokeWidth="0.5" transform="rotate(45 87 30)" />
        <rect x="231" y="28" width="4" height="4" fill="#E9D29A" stroke="#141C36" strokeWidth="0.5" transform="rotate(45 233 30)" />
        <rect x="262" y="28.5" width="3" height="3" fill="#141C36" stroke="#C5A059" strokeWidth="0.5" transform="rotate(45 263.5 30)" opacity="0.85" />

        {/* Symmetrical Arabesque Crest Arches */}
        <path
          d="M 115 30 C 130 30 135 18 145 18 C 150 18 153 22 153 26"
          stroke="#C5A059"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 205 30 C 190 30 185 18 175 18 C 170 18 167 22 167 26"
          stroke="#C5A059"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Lower Mirrored S-curves with subtle midnight shadow stroke */}
        <path
          d="M 125 30 C 135 30 142 38 150 38"
          stroke="#141C36"
          strokeWidth="0.8"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
        <path
          d="M 195 30 C 185 30 178 38 170 38"
          stroke="#141C36"
          strokeWidth="0.8"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />

        {/* Central Rub-el-Hizb (Islamic 8-Point Star Medallion) */}
        <g transform="translate(160, 30)">
          {/* Subtle Outer Midnight Ring */}
          <circle cx="0" cy="0" r="16" stroke="url(#midnightNavAcc)" strokeWidth="0.75" strokeOpacity="0.4" fill="none" />
          
          {/* Interlocking 8-Point Star Squares */}
          <rect
            x="-9"
            y="-9"
            width="18"
            height="18"
            fill="none"
            stroke="url(#starGoldFill)"
            strokeWidth="1.4"
            className="footer-crest-star-sq"
          />
          <rect
            x="-9"
            y="-9"
            width="18"
            height="18"
            fill="none"
            stroke="url(#starGoldFill)"
            strokeWidth="1.4"
            transform="rotate(45)"
            className="footer-crest-star-sq"
          />

          {/* Central Luminous Core with Midnight-Navy Accent Center */}
          <circle cx="0" cy="0" r="3.5" fill="url(#starGoldFill)" filter="url(#goldGlow)" />
          <circle cx="0" cy="0" r="1.5" fill="#0B132B" />

          {/* Cardinal Midnight Dots */}
          <circle cx="0" cy="-12" r="1.1" fill="#141C36" />
          <circle cx="0" cy="12" r="1.1" fill="#141C36" />
          <circle cx="-12" cy="0" r="1.1" fill="#141C36" />
          <circle cx="12" cy="0" r="1.1" fill="#141C36" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Delicate Islamic Arabesque Mid-Divider
 */
const OutroMidDivider: React.FC = () => {
  return (
    <div className="footer-mid-divider" aria-hidden="true">
      <svg
        viewBox="0 0 240 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer-divider-svg"
      >
        <defs>
          <linearGradient id="midDivGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
            <stop offset="35%" stopColor="#C5A059" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#E9D29A" stopOpacity="1" />
            <stop offset="65%" stopColor="#C5A059" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Tapered Baseline Rules */}
        <line x1="15" y1="14" x2="90" y2="14" stroke="url(#midDivGold)" strokeWidth="0.8" />
        <line x1="150" y1="14" x2="225" y2="14" stroke="url(#midDivGold)" strokeWidth="0.8" />

        {/* Center Symmetrical Flourish */}
        <g transform="translate(120, 14)">
          {/* Subtle Arabesque Tendril Wings */}
          <path
            d="M -22 0 C -15 -6 -8 -6 0 -1 C 8 -6 15 -6 22 0"
            stroke="#C5A059"
            strokeWidth="0.9"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M -18 0 C -12 4 -6 4 0 1 C 6 4 12 4 18 0"
            stroke="#141C36"
            strokeWidth="0.75"
            strokeOpacity="0.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Center Diamond Cluster with Midnight Center */}
          <rect x="-4" y="-4" width="8" height="8" fill="#F3E2B4" stroke="#9E7D3B" strokeWidth="0.8" transform="rotate(45)" />
          <circle cx="0" cy="0" r="1.5" fill="#0B132B" />
          <circle cx="-10" cy="0" r="1.2" fill="#141C36" />
          <circle cx="10" cy="0" r="1.2" fill="#141C36" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Corner Arabesque Accents for the Outro Pavilion Frame
 */
const CornerFlourish: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br' }> = ({ position }) => {
  const getTransform = () => {
    switch (position) {
      case 'tr': return 'scale(-1, 1)';
      case 'bl': return 'scale(1, -1)';
      case 'br': return 'scale(-1, -1)';
      default: return 'none';
    }
  };

  return (
    <div className={`footer-corner-bracket footer-corner-${position}`} aria-hidden="true">
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: getTransform() }}
      >
        {/* Primary Gold Outer Contour */}
        <path
          d="M 3 29 L 3 11 C 3 6.5 6.5 3 11 3 L 29 3"
          stroke="#C5A059"
          strokeWidth="1"
          strokeLinecap="round"
          strokeOpacity="0.65"
        />
        {/* Inner Midnight Navy Accent Line */}
        <path
          d="M 6 29 L 6 13 C 6 9 9 6 13 6 L 29 6"
          stroke="#141C36"
          strokeWidth="0.6"
          strokeOpacity="0.3"
          strokeLinecap="round"
        />
        <circle cx="11" cy="11" r="2" fill="#C5A059" fillOpacity="0.8" />
        <circle cx="11" cy="11" r="0.8" fill="#0B132B" />
      </svg>
    </div>
  );
};

export const Footer: React.FC = () => {
  // CRITICAL: Preserve exact contact payload, WhatsApp message & target URLs verbatim
  const whatsappMessage =
    'Hello Saad! I came across this wedding invitation and honestly loved how beautifully it was designed. I’d love to have something similar made for my own occasion. Please let me know whenever you’re available to discuss it.';

  const whatsappUrl = `https://api.whatsapp.com/send?phone=918788940660&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const portfolioUrl = 'https://saadkazi-dev.vercel.app';
  const instagramUrl = 'https://www.instagram.com/saad_kazi0001/';

  // Staggered Entrance Animation Observer
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = footerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`invitation-footer-container ${isVisible ? 'is-in-view' : ''}`}
      aria-label="Wedding Invitation Sign-off & Creator Outro"
    >
      {/* Background Sacred Islamic Ambient Watermark */}
      <div className="footer-sacred-watermark" aria-hidden="true" />

      {/* Main Luxury Architectural Outro Sanctuary Card */}
      <div className="footer-outro-card">
        {/* Subtle Arch Inset Borders & Corner Accents */}
        <div className="footer-card-inner-frame" aria-hidden="true" />
        <CornerFlourish position="tl" />
        <CornerFlourish position="tr" />
        <CornerFlourish position="bl" />
        <CornerFlourish position="br" />

        {/* Top Islamic Arch Finial & Rosette Crest */}
        <OutroArchCrest />

        {/* Sophisticated Editorial Family Sign-off Block */}
        <div className="footer-compliments-section">
          {/* Refined Eyebrow Badge with Midnight Navy & Gold Touch */}
          <div className="footer-compliments-kicker-wrapper">
            <span className="footer-kicker-flourish" aria-hidden="true">❦</span>
            <span className="footer-compliments-eyebrow">
              WITH BEST COMPLIMENTS FROM
            </span>
            <span className="footer-kicker-flourish" aria-hidden="true">❦</span>
          </div>

          <p className="footer-compliments-dedication">
            In Sincere Gratitude &amp; Celebration of Blessings
          </p>

          {/* Locked Exact Family Text with Editorial Display Styling */}
          <h3 className="footer-compliments-family" aria-label="The Kazi and Dadan Family, Relatives and Friends">
            <span className="family-line family-primary">
              THE KAZI AND DADAN FAMILY
            </span>
            <span className="family-ampersand-bridge">
              <span className="family-ampersand-line" aria-hidden="true" />
              <span className="family-ampersand-glyph" aria-hidden="true">&amp;</span>
              <span className="family-ampersand-line" aria-hidden="true" />
            </span>
            <span className="family-line family-secondary">
              RELATIVES &amp; FRIENDS
            </span>
          </h3>
        </div>

        {/* Delicate Champagne Gold Mid-Divider with Navy Accents */}
        <OutroMidDivider />

        {/* Creator Signature Seal Block */}
        <div className="footer-creator-seal">
          <div className="footer-signature-kicker-wrap">
            <span className="footer-kicker-sparkle" aria-hidden="true">✧</span>
            <span className="footer-signature-label">A DIGITAL CREATION BY</span>
            <span className="footer-kicker-sparkle" aria-hidden="true">✧</span>
          </div>

          {/* Existing SAAD KAZI link kept unchanged */}
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-signature-name-link"
            aria-label="Saad Kazi Portfolio - Opens in a new tab"
          >
            <span className="footer-signature-name">SAAD KAZI</span>
            <svg
              className="footer-name-arrow"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="3" y1="13" x2="13" y2="3" />
              <polyline points="5 3 13 3 13 11" />
            </svg>
          </a>

          {/* Replaced old tagline with elegant, accessible clickable text opening exact portfolio URL */}
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-creator-details-link"
            aria-label="Click for My Details - Saad Kazi Portfolio (opens in a new tab)"
          >
            <span>Click for My Details</span>
            <span className="footer-details-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Action Link Pills Bar (WhatsApp & Instagram) */}
        <div className="footer-social-bar" role="group" aria-label="Creator Contact & Social Links">
          {/* WhatsApp Direct Action Link */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-capsule footer-social-whatsapp"
            aria-label="Contact Saad Kazi on WhatsApp for custom wedding invitation inquiries (opens in a new tab)"
          >
            <span className="social-capsule-glow" aria-hidden="true" />
            <div className="social-capsule-icon-wrap" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="social-svg-icon"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div className="social-capsule-text">
              <span className="social-capsule-title">WhatsApp</span>
              <span className="social-capsule-sub">Direct Inquiries</span>
            </div>
          </a>

          {/* Instagram Action Link */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-capsule footer-social-instagram"
            aria-label="Saad Kazi Instagram Profile @saad_kazi0001 (opens in a new tab)"
          >
            <span className="social-capsule-glow" aria-hidden="true" />
            <div className="social-capsule-icon-wrap" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="social-svg-icon"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="social-capsule-text">
              <span className="social-capsule-title">Instagram</span>
              <span className="social-capsule-sub">@saad_kazi0001</span>
            </div>
          </a>
        </div>
      </div>

      {/* Subtle Midnight-Navy Bottom Grounding Accent Bar */}
      <div className="footer-grounding-bar">
        <span className="footer-grounding-ornament" aria-hidden="true">✦</span>
        <span className="footer-grounding-text">
          FAWZAN &amp; HUDA &bull; CELEBRATION OF NIKAH
        </span>
        <span className="footer-grounding-ornament" aria-hidden="true">✦</span>
      </div>
    </footer>
  );
};
