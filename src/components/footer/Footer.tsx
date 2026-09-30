import React from 'react';
import { HeaderMotif } from '../preloader/IslamicOrnament';
import './Footer.css';

export const Footer: React.FC = () => {
  const whatsappMessage =
    'Hello Saad! I came across this wedding invitation and honestly loved how beautifully it was designed. I’d love to have something similar made for my own occasion. Please let me know whenever you’re available to discuss it.';

  const whatsappUrl = `https://api.whatsapp.com/send?phone=918788940660&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const portfolioUrl = 'https://saadkazi-dev.vercel.app';
  const instagramUrl = 'https://www.instagram.com/saad_kazi0001/';

  return (
    <footer className="invitation-footer-container">
      <div className="footer-content-wrapper">
        {/* Compliments Section from Source Invitation */}
        <div className="footer-compliments-block">
          <span className="footer-compliments-eyebrow">With Best Compliments From</span>
          <h3 className="footer-compliments-family">
            THE KAZI AND DADAN FAMILY, RELATIVES &amp; FRIENDS
          </h3>
        </div>

        {/* Subtle Gold Divider Ornament */}
        <HeaderMotif />

        {/* Creator Signature Block */}
        <div className="footer-signature-block">
          <span className="footer-signature-label">A DIGITAL CREATION BY</span>
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-signature-name-link"
            aria-label="Saad Kazi Portfolio"
          >
            SAAD KAZI
          </a>
        </div>

        {/* Social Icons Bar (WhatsApp & Instagram) */}
        <div className="footer-social-bar">
          {/* WhatsApp Action Link */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon-btn"
            aria-label="Contact Saad Kazi on WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Instagram Action Link */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon-btn"
            aria-label="Saad Kazi Instagram Profile"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
