import React from 'react';
import { GoogleMapEmbed } from '../nikah/GoogleMapEmbed';
import { HeaderMotif } from '../preloader/IslamicOrnament';
import './ReceptionSection.css';

export interface ReceptionSectionProps {
  mapRedirectUrl?: string;
}

export const ReceptionSection: React.FC<ReceptionSectionProps> = ({
  mapRedirectUrl = 'https://maps.app.goo.gl/sfmYSkMYa8c6zWQM9',
}) => {
  return (
    <section className="reception-section-container" id="reception-section">
      {/* Background Girih Watermark matching Hero, Parents, Scratch & Nikah sections */}
      <div className="reception-watermark" aria-hidden="true" />

      {/* Main Architectural Arch Casing Frame */}
      <div className="reception-arch-casing">
        {/* Header: Eyebrow + Heading + Ornament */}
        <header className="reception-header">
          <span className="reception-header-subtitle">Celebratory Feast</span>
          <h2 className="reception-header-title">Reception Details &amp; Location</h2>
          <HeaderMotif />
        </header>

        {/* Ceremonial Location Seal */}
        <div className="reception-seal-wrapper" aria-hidden="true">
          <div className="reception-seal-outer-rim">
            <div className="reception-seal-inner-body">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="reception-seal-pin-svg"
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
        <h3 className="reception-venue-name">Sir Elly Kadoorie High School</h3>
        <p className="reception-address-text">
          Shivdas Champsi Road, Opposite Chaitya Temple, Tadwadi, Mazgaon, Mumbai, Maharashtra &ndash; 400010
        </p>

        {/* Reusable Embedded Google Maps Location Canvas with architectural framing */}
        <div className="reception-map-frame-wrapper">
          <GoogleMapEmbed
            addressQuery="Sir Elly Kadoorie High School, Shivdas Champsi Road, Opposite Chaitya Temple, Tadwadi, Mazgaon, Mumbai 400010"
            zoom={17}
            mapLinkUrl={mapRedirectUrl}
            title="Reception Venue Google Maps Location"
          />
        </div>

        {/* Info Highlights List (Mini invitation panels) */}
        <div className="reception-info-grid">
          {/* Time & Schedule */}
          <div className="reception-info-item">
            <div className="reception-info-icon-box" aria-hidden="true">
              <svg
                className="reception-info-icon"
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
            <div className="reception-info-content">
              <span className="reception-info-label">Date &amp; Schedule</span>
              <span className="reception-info-value">
                Wednesday, 9 December 2026 &bull; 7:00 PM &ndash; 11:00 PM
              </span>
            </div>
          </div>

          {/* Venue & Location */}
          <div className="reception-info-item">
            <div className="reception-info-icon-box" aria-hidden="true">
              <svg
                className="reception-info-icon"
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
            <div className="reception-info-content">
              <span className="reception-info-label">Venue &amp; Location</span>
              <span className="reception-info-value">
                Sir Elly Kadoorie High School, Shivdas Champsi Road, Opp. Chaitya Temple, Tadwadi, Mazgaon, Mumbai &ndash; 400010
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
