import React, { useRef, useState, useEffect, useCallback } from 'react';
import './OpeningVideo.css';

export interface OpeningVideoProps {
  videoSrc?: string;
  posterSrc?: string;
  onEnded: () => void;
}

export const OpeningVideo: React.FC<OpeningVideoProps> = ({
  videoSrc = '/assets/videos/opening-video.mp4',
  posterSrc,
  onEnded,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isEnding, setIsEnding] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [mountVisible, setMountVisible] = useState<boolean>(false);

  // Trigger smooth fade-in after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMountVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleFinish = useCallback(() => {
    if (isEnding) return;
    setIsEnding(true);
    
    // Smooth 500ms exit transition before notifying parent
    const exitTimer = setTimeout(() => {
      onEnded();
    }, 550);

    return () => clearTimeout(exitTimer);
  }, [isEnding, onEnded]);

  // Attempt video playback on mount (leveraging user gesture that triggered component mount)
  useEffect(() => {
    const videoElem = videoRef.current;
    if (!videoElem) return;

    let isMounted = true;

    const playVideo = async () => {
      try {
        videoElem.currentTime = 0;
        await videoElem.play();
        if (isMounted) {
          setIsPlaying(true);
        }
      } catch (err) {
        console.warn('Playback attempt interrupted or muted fallback required:', err);
        if (isMounted) {
          // If unmuted playback fails, attempt muted playback
          videoElem.muted = true;
          try {
            await videoElem.play();
            if (isMounted) setIsPlaying(true);
          } catch (mutedErr) {
            console.error('Video playback error:', mutedErr);
            if (isMounted) setHasError(true);
          }
        }
      }
    };

    playVideo();

    return () => {
      isMounted = false;
    };
  }, [videoSrc]);

  // Fallback timer when video asset is missing or errors out
  useEffect(() => {
    if (!hasError) return;

    const fallbackTimer = setTimeout(() => {
      handleFinish();
    }, 2500);

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
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          className={`opening-video-element ${isPlaying ? 'video-playing' : ''}`}
          playsInline
          controls={false}
          preload="auto"
          onEnded={handleFinish}
          onError={() => setHasError(true)}
          onPlay={() => setIsPlaying(true)}
        />
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
              color: 'rgba(255, 255, 255, 0.6)',
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
