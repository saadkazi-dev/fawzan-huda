import React from 'react';
import { HeaderMotif } from '../preloader/IslamicOrnament';
import './GuestAccessCard.css';

export interface GuestAccessCardProps {
  onOpenInvitation: () => void;
  onWatchFilm: () => void;
}

export const GuestAccessCard: React.FC<GuestAccessCardProps> = ({
  onOpenInvitation,
  onWatchFilm,
}) => {
  // Verified Authoritative Google Maps Destinations
  const nikahMapUrl = 'https://maps.app.goo.gl/soKFc7rHiJBTvx8Z9';
  const receptionMapUrl = 'https://maps.app.goo.gl/sfmYSkMYa8c6zWQM9';

  return (
    <div className="guest-card-page-container">
      {/* Background Sacred Islamic Geometric Watermark */}
      <div className="guest-card-watermark" aria-hidden="true" />

      {/* Main Luxury Guest Access Card */}
      <main className="guest-access-card" aria-label="Fawzan & Huda Wedding Guest Access Card">
        {/* Decorative Inset Border & Corner Accents */}
        <div className="guest-card-inset-border" aria-hidden="true" />
        <span className="guest-card-corner corner-tl" aria-hidden="true" />
        <span className="guest-card-corner corner-tr" aria-hidden="true" />
        <span className="guest-card-corner corner-bl" aria-hidden="true" />
        <span className="guest-card-corner corner-br" aria-hidden="true" />

        {/* Header Block: Bismillah & VIP Eyebrow */}
        <header className="guest-card-header">
          <div className="guest-bismillah" aria-label="Bismillahir Rahmanir Raheem">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          <div className="guest-eyebrow-badge">
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
            <span className="eyebrow-text">GUEST ACCESS PASS</span>
            <span className="eyebrow-sparkle" aria-hidden="true">✦</span>
          </div>

          <h1 className="guest-couple-title">
            <span className="couple-name">FAWZAN</span>
            <span className="couple-amp">&amp;</span>
            <span className="couple-name">HUDA</span>
          </h1>

          {/* Lineage & Date Details */}
          <div className="guest-family-lineage">
            <p className="lineage-line">
              Son of <strong>Mr. Rafiq</strong> &amp; <strong>Mrs. Hajra Kazi</strong>
            </p>
            <p className="lineage-line">
              Daughter of <strong>Mr. Hasham</strong> &amp; <strong>Mrs. Seemab Kazi</strong>
            </p>
          </div>

          <div className="guest-date-banner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="date-calendar-icon" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="date-text">Wednesday, 09 December 2026</span>
          </div>

          <HeaderMotif />
        </header>

        {/* Schedule & Venue Quick Overview */}
        <section className="guest-schedule-section" aria-label="Ceremony & Reception Details">
          {/* Nikah Overview Pill */}
          <div className="guest-event-card">
            <div className="event-badge-row">
              <span className="event-tag nikah-tag">NIKAH CEREMONY</span>
              <span className="event-time">11:00 AM</span>
            </div>
            <h3 className="event-venue-name">Mazgaon Shafi Masjid</h3>
            <p className="event-venue-address">
              Barrister Nath Pai Marg, Dockyard, Mumbai &ndash; 400010
            </p>
          </div>

          {/* Reception Overview Pill */}
          <div className="guest-event-card">
            <div className="event-badge-row">
              <span className="event-tag reception-tag">RECEPTION</span>
              <span className="event-time">7:00 PM &ndash; 11:00 PM</span>
            </div>
            <h3 className="event-venue-name">Sir Elly Kadoorie High School</h3>
            <p className="event-venue-address">
              Shivdas Champsi Road, Tadwadi, Mazgaon, Mumbai &ndash; 400010
            </p>
          </div>
        </section>

        {/* Exactly Four Primary Actions Grid */}
        <section className="guest-actions-section" aria-label="Quick Actions">
          <h2 className="guest-actions-label">QUICK ACTIONS</h2>

          <div className="guest-actions-grid">
            {/* 1. Nikah Location */}
            <a
              href={nikahMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="guest-action-btn action-map-nikah"
              aria-label="Open Nikah Location in Google Maps (opens in a new tab)"
            >
              <div className="action-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div className="action-text-group">
                <span className="action-heading">Nikah Location</span>
                <span className="action-subtext">Mazgaon Shafi Masjid</span>
              </div>
              <svg className="action-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="13" x2="13" y2="3" />
                <polyline points="5 3 13 3 13 11" />
              </svg>
            </a>

            {/* 2. Reception Location */}
            <a
              href={receptionMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="guest-action-btn action-map-reception"
              aria-label="Open Reception Location in Google Maps (opens in a new tab)"
            >
              <div className="action-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="action-text-group">
                <span className="action-heading">Reception Location</span>
                <span className="action-subtext">Sir Elly Kadoorie High School</span>
              </div>
              <svg className="action-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="13" x2="13" y2="3" />
                <polyline points="5 3 13 3 13 11" />
              </svg>
            </a>

            {/* 3. Open Wedding Invitation */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onOpenInvitation();
              }}
              className="guest-action-btn action-invitation-main"
              aria-label="Open full interactive wedding invitation website"
            >
              <div className="action-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="action-text-group">
                <span className="action-heading">Open Wedding Invitation</span>
                <span className="action-subtext">Interactive Experience &amp; Dua</span>
              </div>
              <svg className="action-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 3 11 8 6 13" />
              </svg>
            </a>

            {/* 4. Watch Wedding Film */}
            <a
              href="/invitation-video"
              onClick={(e) => {
                e.preventDefault();
                onWatchFilm();
              }}
              className="guest-action-btn action-wedding-film"
              aria-label="Watch dedicated wedding invitation video and film"
            >
              <div className="action-icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div className="action-text-group">
                <span className="action-heading">Watch Wedding Film</span>
                <span className="action-subtext">HD Video Player &amp; TV Cast</span>
              </div>
              <svg className="action-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 3 11 8 6 13" />
              </svg>
            </a>
          </div>
        </section>

        {/* Compact Family Sign-Off */}
        <footer className="guest-card-footer">
          <p className="guest-compliments-text">
            WITH BEST COMPLIMENTS FROM<br />
            <strong>THE KAZI AND DADAN FAMILY, RELATIVES &amp; FRIENDS</strong>
          </p>
        </footer>
      </main>
    </div>
  );
};
