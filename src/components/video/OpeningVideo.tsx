import React, { useRef, useState, useEffect, useCallback } from 'react';
import './OpeningVideo.css';

export interface OpeningVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  entryText?: string;
  onEnded: () => void;
}

export const OpeningVideo: React.FC<OpeningVideoProps> = ({
  videoSrc = '/assets/videos/opening-video.mp4',
  posterSrc,
  entryText = 'TAP TO ENTER',
  onEnded,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isEnding, setIsEnding] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [mountVisible, setMountVisible] = useState<boolean>(false);

  // Trigger smooth fade-in after mount to match preloader transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setMountVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleFinish = useCallback(() => {
    if (isEnding) return;
    setIsEnding(true);
    
    // Smooth 550ms exit transition before notifying parent stage
    const exitTimer = setTimeout(() => {
      onEnded();
    }, 550);

    return () => clearTimeout(exitTimer);
  }, [isEnding, onEnded]);

  // Handle direct user gesture to unlock unmuted HTML5 video & audio playback
  const handleTapToEnter = useCallback(async () => {
    if (hasStarted || isEnding) return;

    setHasStarted(true);
    const videoElem = videoRef.current;

    if (videoElem) {
      try {
        videoElem.muted = false;
        videoElem.volume = 1;
        videoElem.currentTime = 0;
        await videoElem.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Unmuted playback attempt interrupted or muted fallback required:', err);
        try {
          videoElem.muted = true;
          await videoElem.play();
          setIsPlaying(true);
        } catch (mutedErr) {
          console.error('Video playback error:', mutedErr);
          setHasError(true);
        }
      }
    }
  }, [hasStarted, isEnding]);

  // Accessibility keyboard handler on explicit button
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !hasStarted) {
      e.preventDefault();
      handleTapToEnter();
    }
  };

  // Fallback timer when video asset is missing or errors out
  useEffect(() => {
    if (!hasError) return;

    const fallbackTimer = setTimeout(() => {
      handleFinish();
    }, 3500);

    return () => clearTimeout(fallbackTimer);
  }, [hasError, handleFinish]);

  return (
    <div
      className={`opening-video-container ${mountVisible ? 'video-visible' : ''} ${
        isEnding ? 'video-ending' : ''
      }`}
    >
      {/* Skip button available throughout video playback */}
      <div className="video-overlay-controls">
        <button
          className="video-skip-btn"
          onClick={handleFinish}
          aria-label="Skip opening video"
        >
          SKIP &#8594;
        </button>
      </div>

      {!hasError ? (
        <div className="video-viewport-wrapper">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            className={`opening-video-element ${isPlaying ? 'video-playing' : 'video-paused'}`}
            playsInline
            controls={false}
            preload="auto"
            onEnded={handleFinish}
            onError={() => setHasError(true)}
            onPlay={() => setIsPlaying(true)}
          />

          {/* Luxury Entry Overlay before user interacts */}
          {!hasStarted && (
            <div className="video-entry-overlay">
              {/* Refined Header */}
              <div className="entry-header-group">
                <span className="entry-header-subtitle">THE WEDDING CELEBRATION</span>
                <h2 className="entry-header-title">FAWZAN &amp; HUDA</h2>
              </div>

              {/* Central Refined CTA Control sitting below seal */}
              <div className="entry-cta-control">
                <button
                  className="entry-cta-btn"
                  type="button"
                  onClick={handleTapToEnter}
                  onKeyDown={handleKeyDown}
                  aria-label={`${entryText} - start wedding video`}
                >
                  <span className="entry-cta-label">{entryText}</span>
                  <svg
                    className="entry-cta-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Graceful Fallback View when local video asset is missing or pending */
        <div className="video-fallback-card">
          <div className="video-fallback-pulse-ring">
            <svg viewBox="0 0 100 100" style={{ width: '44px', height: '44px' }}>
              <polygon
                points="50,15 85,50 50,85 15,50"
                fill="none"
                stroke="var(--color-gold-base)"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="8" fill="var(--color-gold-base)" />
            </svg>
          </div>

          <h2 className="video-fallback-title">FAWZAN &amp; HUDA</h2>
          <p className="video-fallback-subtitle">Opening Motion Sequence</p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: 'var(--space-md)',
            }}
          >
            Video asset path: <code style={{ color: 'var(--color-gold-light)' }}>{videoSrc}</code>
          </p>

          <button className="video-skip-btn" onClick={handleFinish}>
            CONTINUE TO INVITATION &#8594;
          </button>
        </div>
      )}
    </div>
  );
};


