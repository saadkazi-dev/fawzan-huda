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
      <div className="reception-arch-casing">
        {/* Header */}
        <header className="reception-header">
          <span className="reception-header-subtitle">Celebratory Feast</span>
          <h2 className="reception-header-title">Reception Details &amp; Location</h2>
          <HeaderMotif />
        </header>

        {/* Location Pin Badge */}
        <div className="reception-pin-badge">
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
        <h3 className="reception-venue-name">Sir Elly Kadoorie High School</h3>
        <p className="reception-address-text">
          Shivdas Champsi Road, Opposite Chaitya Temple, Tadwadi, Mazgaon, Mumbai, Maharashtra &ndash; 400010
        </p>

        {/* Reusable Embedded Google Maps Location Canvas */}
        <GoogleMapEmbed
          addressQuery="Sir Elly Kadoorie High School, Shivdas Champsi Road, Opposite Chaitya Temple, Tadwadi, Mazgaon, Mumbai 400010"
          zoom={17}
          mapLinkUrl={mapRedirectUrl}
          title="Reception Venue Google Maps Location"
        />

        {/* Info Highlights List */}
        <div className="reception-info-grid">
          {/* Time & Schedule */}
          <div className="reception-info-item">
            <svg
              className="reception-info-icon"
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
              <span className="reception-info-label">Date &amp; Schedule</span>
              <span className="reception-info-value">
                Wednesday, 9 December 2026 &bull; 7:00 PM &ndash; 11:00 PM
              </span>
            </div>
          </div>

          {/* Venue & Location */}
          <div className="reception-info-item">
            <svg
              className="reception-info-icon"
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
