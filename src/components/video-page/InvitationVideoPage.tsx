import React, { useState } from 'react';
import { VideoPlayer } from './VideoPlayer';
import './InvitationVideoPage.css';

interface InvitationVideoPageProps {
  onNavigateHome: () => void;
}

export const InvitationVideoPage: React.FC<InvitationVideoPageProps> = ({
  onNavigateHome,
}) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const videoSrc =
    (import.meta.env.VITE_INVITATION_VIDEO_URL as string | undefined)?.trim() ||
    '/videos/wedding-invitation.mp4';
  const downloadFileName = 'Fawzan-and-Huda-Wedding-Invitation.mp4';

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // For relative / same-origin URLs, default browser anchor download works
    if (!videoSrc.startsWith('http://') && !videoSrc.startsWith('https://')) {
      return;
    }

    // For external URLs, attempt blob download to ensure filename is respected
    try {
      e.preventDefault();
      const res = await fetch(videoSrc, { mode: 'cors' });
      if (!res.ok) throw new Error('Blob fetch failed');
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = downloadFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback to navigating/opening the remote URL
      window.open(videoSrc, '_blank');
    }
  };

  const handleShare = async () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareData = {
      title: 'The Wedding Invitation of Fawzan & Huda',
      text: 'Celebrate with us! Watch the wedding invitation video of Fawzan & Huda.',
      url: currentUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err: unknown) {
        if ((err as Error)?.name === 'AbortError') return;
      }
    }

    // Fallback: Copy link to clipboard
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = currentUrl;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setShowToast(true);
      window.setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  const getWhatsAppShareUrl = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const message = `Celebrate with us! Watch the official wedding invitation video of Fawzan & Huda:\n${currentUrl}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="invitation-video-page">
      {/* Top Navigation Bar */}
      <nav className="video-page-top-nav" aria-label="Page navigation">
        <a
          href="/"
          className="back-to-home-link"
          onClick={(e) => {
            e.preventDefault();
            onNavigateHome();
          }}
          aria-label="Back to full wedding invitation website"
        >
          <svg
            className="back-arrow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Main Invitation</span>
        </a>

        <span className="top-nav-badge">Video Card</span>
      </nav>

      {/* Main Islamic Architectural Arch Casing */}
      <div className="video-arch-casing">
        <div className="video-arch-inner-content">
          {/* Header & Typography Section */}
          <header className="video-header-section">
            <div className="video-bismillah-text" aria-label="Bismillahir Rahmanir Raheem">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>

            <span className="video-eyebrow">The Official Video Invitation</span>

            <h1 className="video-couple-title">
              FAWZAN <span className="video-couple-amp">&amp;</span> HUDA
            </h1>

            <p className="video-header-subtext">
              Cordially invite you to celebrate the joyous union of their wedding
            </p>

            <div className="video-ornament-divider" aria-hidden="true">
              <span className="divider-line" />
              <span className="divider-gem" />
              <span className="divider-line" />
            </div>
          </header>

          {/* HTML5 Luxury Video Player */}
          <main className="video-player-wrapper">
            <VideoPlayer src={videoSrc} />
          </main>

          {/* Interactive Actions Section */}
          <section className="video-actions-section" aria-label="Video actions">
            {/* Primary Action: Download Video */}
            <a
              href={videoSrc}
              download={downloadFileName}
              onClick={handleDownload}
              className="action-btn-primary"
              aria-label="Download Invitation Video in original MP4 quality"
            >
              <div className="action-btn-content">
                <div className="action-btn-icon-box" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>
                <div className="action-btn-texts">
                  <span className="action-btn-title">Download Video</span>
                  <span className="action-btn-subtitle">Original Full HD MP4 (1080p)</span>
                </div>
              </div>

              <svg
                className="action-btn-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 10l5 5 5-5" />
              </svg>
            </a>

            {/* Secondary Actions: Native Share & WhatsApp */}
            <div className="secondary-actions-grid">
              <button
                type="button"
                className="action-btn-secondary"
                onClick={handleShare}
                aria-label="Share invitation video"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <span>Share Link</span>
              </button>

              <a
                href={getWhatsAppShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn-secondary action-btn-whatsapp"
                aria-label="Share invitation video on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.077-1.123-.059-.444-.143-.996-.345-1.72-.661-1.503-.655-2.483-2.188-2.558-2.288-.075-.101-.611-.813-.611-1.55 0-.737.386-1.1.523-1.25.137-.149.3-.187.4-.187.1 0 .2 0 .287.005.093.004.218-.035.341.262.126.302.434 1.059.472 1.136.038.077.063.167.013.268-.05.1-.076.162-.15.25-.075.088-.158.196-.226.264-.075.076-.153.158-.066.308.087.15 3.86 1.488 1.144 2.162.368.868.807 1.346 1.107 1.472.3.125.474.11.649-.092.175-.201.75-.875.95-1.175.2-.3.4-.25.675-.15.275.1 1.75.825 2.05.975.3.15.5.225.575.35.075.125.075.725-.069 1.13zM12 2C6.477 2 2 6.477 2 12c0 1.891.523 3.662 1.434 5.176L2 22l4.957-1.399C8.423 21.498 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Back to Wedding Website Action */}
            <a
              href="/"
              className="action-btn-website"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              aria-label="View the full wedding invitation and celebration schedule"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Explore Full Wedding Website</span>
            </a>
          </section>

          {/* Compliments Footer Block */}
          <footer className="video-page-compliments">
            <span className="compliments-eyebrow">With Best Compliments From</span>
            <p className="compliments-family">
              THE KAZI AND DADAN FAMILY, RELATIVES &amp; FRIENDS
            </p>
          </footer>
        </div>
      </div>

      {/* Copy-link Toast Notification */}
      {showToast && (
        <div className="share-toast-notification" role="status" aria-live="polite">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Invitation link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
};
