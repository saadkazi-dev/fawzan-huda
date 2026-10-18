import React, { useState, useRef, useEffect } from 'react';
import { VideoPlayer } from '../video-page/VideoPlayer';
import { HeaderMotif } from '../preloader/IslamicOrnament';
import './WeddingFilmSection.css';

export interface WeddingFilmSectionProps {
  onNavigateToVideo?: () => void;
}

export const WeddingFilmSection: React.FC<WeddingFilmSectionProps> = ({
  onNavigateToVideo,
}) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const videoSrc = '/videos/wedding-invitation.mp4';
  const downloadFileName = 'Fawzan-and-Huda-Wedding-Invitation.mp4';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const showNotification = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 3500);
  };

  const handleShare = async () => {
    const videoPageUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/invitation-video`
        : '/invitation-video';

    const shareData = {
      title: 'The Wedding Film of Fawzan & Huda',
      text: 'Watch the official wedding invitation film of Fawzan & Huda!',
      url: videoPageUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err: unknown) {
        if ((err as Error)?.name === 'AbortError') return;
      }
    }

    // Fallback: Copy link
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(videoPageUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = videoPageUrl;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      showNotification('Video invitation link copied to clipboard!');
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  const getWhatsAppShareUrl = () => {
    const videoPageUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/invitation-video`
        : '/invitation-video';
    const message = `Celebrate with us! Watch the official wedding invitation film of Fawzan & Huda:\n${videoPageUrl}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  };

  const handleWatchFullVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigateToVideo) {
      e.preventDefault();
      onNavigateToVideo();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="wedding-film-section"
      className={`wedding-film-section ${isVisible ? 'is-in-view' : ''}`}
      aria-label="Wedding Invitation Film"
    >
      <div className="wedding-film-arch-casing">
        {/* Subtle Decorative Arch Inset */}
        <div className="wedding-film-inner-border" aria-hidden="true" />

        {/* Section Header */}
        <header className="wedding-film-header">
          <div className="wedding-film-kicker">
            <span className="film-kicker-sparkle" aria-hidden="true">✦</span>
            <span className="film-kicker-text">OFFICIAL INVITATION FILM</span>
            <span className="film-kicker-sparkle" aria-hidden="true">✦</span>
          </div>

          <h2 className="wedding-film-title">Wedding Invitation Film</h2>

          <HeaderMotif />

          <p className="wedding-film-subtitle">
            A glimpse into the sacred celebration, joy, and heartfelt prayers of our union
          </p>
        </header>

        {/* 16:9 Landscape Responsive Video Player */}
        <div className="wedding-film-player-container">
          <VideoPlayer
            src={videoSrc}
            showCastButton={true}
            onCastUnavailable={() =>
              showNotification(
                'Cast to TV is not supported on this browser or no compatible TV was detected on Wi-Fi.'
              )
            }
          />
        </div>

        {/* Primary Action: Watch Full Video in Dedicated Experience */}
        <div className="wedding-film-primary-action">
          <a
            href="/invitation-video"
            onClick={handleWatchFullVideo}
            className="film-watch-full-btn"
            aria-label="Watch Full Video on dedicated invitation video page"
          >
            <div className="film-watch-icon-box" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
              </svg>
            </div>
            <div className="film-watch-texts">
              <span className="film-watch-title">Watch Full Video</span>
              <span className="film-watch-sub">High-definition standalone card &amp; TV Cast</span>
            </div>
            <svg
              className="film-watch-arrow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>

        {/* Secondary Actions: Download, Share, WhatsApp */}
        <div className="wedding-film-actions-grid" role="group" aria-label="Film action links">
          {/* Download Video Action */}
          <a
            href={videoSrc}
            download={downloadFileName}
            className="film-action-capsule"
            aria-label="Download wedding invitation video MP4"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download</span>
          </a>

          {/* Share Video Action */}
          <button
            type="button"
            className="film-action-capsule"
            onClick={handleShare}
            aria-label="Share wedding film"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>Share</span>
          </button>

          {/* WhatsApp Share Action */}
          <a
            href={getWhatsAppShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="film-action-capsule film-whatsapp-capsule"
            aria-label="Share wedding film on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.077-1.123-.059-.444-.143-.996-.345-1.72-.661-1.503-.655-2.483-2.188-2.558-2.288-.075-.101-.611-.813-.611-1.55 0-.737.386-1.1.523-1.25.137-.149.3-.187.4-.187.1 0 .2 0 .287.005.093.004.218-.035.341.262.126.302.434 1.059.472 1.136.038.077.063.167.013.268-.05.1-.076.162-.15.25-.075.088-.158.196-.226.264-.075.076-.153.158-.066.308.087.15 3.86 1.488 1.144 2.162.368.868.807 1.346 1.107 1.472.3.125.474.11.649-.092.175-.201.75-.875.95-1.175.2-.3.4-.25.675-.15.275.1 1.75.825 2.05.975.3.15.5.225.575.35.075.125.075.725-.069 1.13zM12 2C6.477 2 2 6.477 2 12c0 1.891.523 3.662 1.434 5.176L2 22l4.957-1.399C8.423 21.498 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Copy-link / Notification Toast */}
      {showToast && (
        <div className="film-toast-notification" role="status" aria-live="polite">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
};
