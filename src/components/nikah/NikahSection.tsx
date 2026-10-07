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
      {/* Background Girih Watermark matching Hero, Parents & Scratch sections */}
      <div className="nikah-watermark" aria-hidden="true" />

      <div className="nikah-arch-casing">
        {/* Header */}
        <header className="nikah-header">
          <span className="nikah-header-subtitle">Ceremonial Venue</span>
          <h2 className="nikah-header-title">Nikah Details &amp; Location</h2>
          <HeaderMotif />
        </header>

        {/* Ceremonial Location Pin Seal */}
        <div className="nikah-seal-wrapper" aria-hidden="true">
          <div className="nikah-seal-outer-rim">
            <div className="nikah-seal-inner-body">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="nikah-seal-pin-svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  stroke="#F5E4BD"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="2.5" fill="#EAD29A" stroke="#0B1630" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>

        {/* Venue Title & Full Address */}
        <h3 className="nikah-venue-name">Mazgaon Shafi Masjid</h3>
        <p className="nikah-address-text">
          Barrister Nath Pai Marg, Dockyard, Mumbai &ndash; 400010
        </p>

        {/* Embedded Google Maps Location Canvas (Untouched functionality & location data) */}
        <div className="nikah-map-frame-wrapper">
          <GoogleMapEmbed
            lat={18.9687372}
            lng={72.8451277}
            zoom={18}
            placeLabel="Mazgaon Shafi Masjid"
            mapLinkUrl={mapRedirectUrl}
            title="Nikah Venue Google Maps Location"
          />
        </div>

        {/* Info Highlights List (Refined mini invitation panels) */}
        <div className="nikah-info-grid">
          {/* Time & Schedule */}
          <div className="nikah-info-item">
            <div className="nikah-info-icon-box" aria-hidden="true">
              <svg
                className="nikah-info-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="nikah-info-content">
              <span className="nikah-info-label">Date &amp; Schedule</span>
              <span className="nikah-info-value">
                Wednesday, 9 December 2026 &bull; 11:00 AM
              </span>
            </div>
          </div>

          {/* Venue & Location */}
          <div className="nikah-info-item">
            <div className="nikah-info-icon-box" aria-hidden="true">
              <svg
                className="nikah-info-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="nikah-info-content">
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
            style={{ width: '15px', height: '15px', color: '#F5E4BD' }}
          >
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
          </svg>
          <span>OPEN IN GOOGLE MAPS</span>
        </a>
      </div>
    </section>
  );
};
