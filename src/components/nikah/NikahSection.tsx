import React from 'react';
import { GoogleMapEmbed } from './GoogleMapEmbed';
import { HeaderMotif } from '../preloader/IslamicOrnament';
import './NikahSection.css';

export interface NikahSectionProps {
  mapRedirectUrl?: string;
}

export const NikahSection: React.FC<NikahSectionProps> = ({
  mapRedirectUrl = 'https://maps.app.goo.gl/soKFc7rHiJBTvx8Z9',
}) => {
  return (
    <section className="nikah-section-container" id="nikah-section">
      <div className="nikah-arch-casing">
        {/* Header */}
        <header className="nikah-header">
          <span className="nikah-header-subtitle">Ceremonial Venue</span>
          <h2 className="nikah-header-title">Nikah Details &amp; Location</h2>
          <HeaderMotif />
        </header>

        {/* Location Pin Badge */}
        <div className="nikah-pin-badge">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '22px', height: '22px' }}
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        {/* Venue Title & Full Address */}
        <h3 className="nikah-venue-name">Mazgaon Shafi Masjid</h3>
        <p className="nikah-address-text">
          Barrister Nath Pai Marg, Dockyard, Mumbai &ndash; 400010
        </p>

        {/* Reusable Embedded Google Maps Location Canvas */}
        <GoogleMapEmbed
          lat={18.9687372}
          lng={72.8451277}
          zoom={18}
          placeLabel="Mazgaon Shafi Masjid"
          mapLinkUrl={mapRedirectUrl}
          title="Nikah Venue Google Maps Location"
        />

        {/* Info Highlights List */}
        <div className="nikah-info-grid">
          {/* Time & Schedule */}
          <div className="nikah-info-item">
            <svg
              className="nikah-info-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <span className="nikah-info-label">Date &amp; Schedule</span>
              <span className="nikah-info-value">
                Wednesday, 9 December 2026 &bull; 11:00 AM
              </span>
            </div>
          </div>

          {/* Venue & Location */}
          <div className="nikah-info-item">
            <svg
              className="nikah-info-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <span className="nikah-info-label">Venue &amp; Location</span>
              <span className="nikah-info-value">
                Mazgaon Shafi Masjid, Dockyard, Mumbai &ndash; 400010
              </span>
            </div>
          </div>
        </div>

        {/* Primary Redirect CTA Button */}
        <a
          href={mapRedirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="open-maps-cta-btn"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '16px', height: '16px', color: 'var(--color-gold-light)' }}
          >
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          <span>OPEN IN GOOGLE MAPS</span>
        </a>
      </div>
    </section>
  );
};
