import React, { useState } from 'react';
import { HeaderMotif } from '../preloader/IslamicOrnament';
import './DuaAttendSection.css';

export const DuaAttendSection: React.FC = () => {
  const [hasAttended, setHasAttended] = useState<boolean>(false);
  const [showDua, setShowDua] = useState<boolean>(false);

  return (
    <section className="dua-section-container" id="dua-section">
      <div className="dua-arch-casing">
        {/* Header */}
        <header className="dua-header">
          <span className="dua-header-subtitle">Blessings &amp; Attendance</span>
          <h2 className="dua-header-title">Your Presence, A Beautiful Dua</h2>
          <HeaderMotif />
        </header>

        {/* Interactive Actions Grid */}
        <div className="dua-actions-wrapper">
          {/* Action 1: In Sha Allah, I'll Attend */}
          {!hasAttended ? (
            <button
              className="dua-attend-btn"
              onClick={() => setHasAttended(true)}
              type="button"
              aria-label="Confirm attendance"
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
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span>IN SHA ALLAH, I&apos;LL ATTEND</span>
            </button>
          ) : (
            <div className="dua-attend-confirmed-box">
              <div className="dua-check-icon-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: '20px', height: '20px' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="dua-confirmed-title">Alhamdulillah!</h3>
              <span className="dua-confirmed-sub">We look forward to celebrating with you</span>
            </div>
          )}

          {/* Action 2: Send Dua */}
          {!showDua ? (
            <button
              className="dua-send-btn"
              onClick={() => setShowDua(true)}
              type="button"
              aria-label="Send Dua blessing"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '16px', height: '16px', color: 'var(--color-gold-dark)' }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>SEND DUA</span>
            </button>
          ) : (
            <div className="dua-revealed-card">
              <p className="dua-arabic-text">
                بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
              </p>
              <p className="dua-english-translation">
                &ldquo;May Allah bless you, and shower His blessings upon you, and join you together in goodness.&rdquo;
              </p>
              <div className="gold-divider" style={{ width: '32px', margin: '6px auto var(--space-xs) auto' }} />
              <span className="dua-badge-sent">Your Dua Has Been Received</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
