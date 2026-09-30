import React, { useState, useEffect, useCallback } from 'react';
import { MonogramSeal } from './MonogramSeal';
import { CornerOrnament, HeaderMotif, BackgroundPattern } from './IslamicOrnament';
import './Preloader.css';

export interface PreloaderProps {
  onOpen?: () => void;
  autoPlayDurationMs?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({ onOpen, autoPlayDurationMs = 2400 }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isLeaving, setIsLeaving] = useState<boolean>(false);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate progress using smooth quadratic ease-out curve
      const linearRatio = Math.min(elapsed / autoPlayDurationMs, 1);
      const easeOutRatio = 1 - Math.pow(1 - linearRatio, 2);
      const currentProgress = Math.min(Math.round(easeOutRatio * 100), 100);

      setProgress(currentProgress);

      if (linearRatio < 1) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else {
        setIsReady(true);
      }
    };

    animationFrameId = requestAnimationFrame(animateProgress);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [autoPlayDurationMs]);

  const handleOpenTap = useCallback(() => {
    if (!isReady || isLeaving) return;

    setIsLeaving(true);
    const timer = setTimeout(() => {
      if (onOpen) {
        onOpen();
      }
    }, 450);

    return () => clearTimeout(timer);
  }, [isReady, isLeaving, onOpen]);

  return (
    <div className={`preloader-container ${isLeaving ? 'preloader-leaving' : ''}`}>
      {/* Islamic Ambient Background Lattice Pattern */}
      <BackgroundPattern />

      {/* Islamic Corner Ornaments in Champagne Gold */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Header Section */}
      <header className="preloader-header">
        <span className="preloader-header-subtitle">The Wedding Celebration Of</span>
        <h1 className="preloader-header-title">FAWZAN &amp; HUDA</h1>
        <HeaderMotif />
      </header>

      {/* Center Stage: Interactive Monogram Seal */}
      <main className="preloader-stage">
        <MonogramSeal
          progress={progress}
          isReady={isReady}
          isOpening={isLeaving}
          onTap={handleOpenTap}
        />
      </main>

      {/* Footer Section: Progress indicator transitioning to TAP TO OPEN */}
      <footer className="preloader-footer">
        {!isReady ? (
          <div className="preloader-progress-box">
            <div className="preloader-progress-bar-track">
              <div 
                className="preloader-progress-bar-fill" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <span className="preloader-percentage-num">{progress}%</span>
            <span className="preloader-loading-label">PREPARING INVITATION</span>
          </div>
        ) : (
          <div 
            className="tap-to-open-container"
            onClick={handleOpenTap}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenTap();
              }
            }}
            aria-label="Tap to open wedding invitation"
          >
            <span className="tap-to-open-text">TAP TO OPEN</span>
            <svg 
              className="tap-chevron-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
            <span className="tap-to-open-subtext">Click or tap anywhere on seal</span>
          </div>
        )}
      </footer>
    </div>
  );
};
