import React from 'react';

interface MonogramSealProps {
  progress: number; // 0 to 100
  isReady: boolean;
  isOpening: boolean;
  onTap: () => void;
}

export const MonogramSeal: React.FC<MonogramSealProps> = ({
  progress,
  isReady,
  isOpening,
  onTap,
}) => {
  const radius = 84;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`monogram-seal-wrapper ${isReady ? 'seal-ready' : 'seal-loading'} ${isOpening ? 'seal-opening' : ''}`}
      onClick={isReady ? onTap : undefined}
      onKeyDown={(e) => {
        if (isReady && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onTap();
        }
      }}
      role={isReady ? 'button' : 'progressbar'}
      aria-label={isReady ? 'Tap to open invitation' : `Loading progress ${Math.round(progress)}%`}
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={isReady ? 0 : -1}
      style={{
        position: 'relative',
        width: '210px',
        height: '210px',
        margin: '0 auto',
        cursor: isReady ? 'pointer' : 'default',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Outer Pulse/Glow Effect when Ready */}
      {isReady && <div className="seal-pulse-ring" />}

      {/* SVG Canvas for Rings and Monogram Seal */}
      <svg
        viewBox="0 0 200 200"
        className="monogram-svg"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
        }}
      >
        <defs>
          <linearGradient id="sealGoldBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3E2B4" />
            <stop offset="35%" stopColor="#C5A059" />
            <stop offset="70%" stopColor="#9E7D3B" />
            <stop offset="100%" stopColor="#E9D29A" />
          </linearGradient>

          <linearGradient id="sealGoldSubtle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.08" />
          </linearGradient>

          <radialGradient id="sealInnerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FAF6EE" />
            <stop offset="75%" stopColor="#F3EBDD" />
            <stop offset="100%" stopColor="#EADECB" />
          </radialGradient>

          <filter id="goldDropShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0B132B" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Outer Background Static Ring */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="rgba(197, 160, 89, 0.18)"
          strokeWidth="3"
        />

        {/* Dynamic Animated Loading Arc */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#sealGoldBase)"
          strokeWidth="3.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transformOrigin: '50% 50%',
            transform: 'rotate(-90deg)',
            transition: 'stroke-dashoffset 0.15s linear',
          }}
        />

        {/* Inner Solid Ivory Seal Disc */}
        <circle
          cx="100"
          cy="100"
          r="74"
          fill="url(#sealInnerGlow)"
          stroke="url(#sealGoldBase)"
          strokeWidth="1"
          filter="url(#goldDropShadow)"
        />

        {/* Subtle Decorative Inner Ring */}
        <circle
          cx="100"
          cy="100"
          r="68"
          fill="none"
          stroke="url(#sealGoldBase)"
          strokeWidth="0.75"
          strokeDasharray="4 2"
          opacity="0.7"
        />

        {/* Rotating 8-Pointed Islamic Geometric Star Ring */}
        <g 
          className="rotating-islamic-star"
          style={{
            transformOrigin: '100px 100px',
            opacity: 0.45,
          }}
        >
          <rect x="52" y="52" width="96" height="96" fill="none" stroke="url(#sealGoldBase)" strokeWidth="0.75" transform="rotate(0 100 100)" />
          <rect x="52" y="52" width="96" height="96" fill="none" stroke="url(#sealGoldBase)" strokeWidth="0.75" transform="rotate(45 100 100)" />
        </g>

        {/* Centered F & H Monogram Typography */}
        <g textAnchor="middle" dominantBaseline="central">
          {/* Subtle Accent Crest above Monogram */}
          <path
            d="M 100 56 L 102 60 L 106 60 L 103 62 L 104 66 L 100 64 L 96 66 L 97 62 L 94 60 L 98 60 Z"
            fill="url(#sealGoldBase)"
            opacity="0.9"
          />

          {/* F & H Initials */}
          <text
            x="100"
            y="100"
            className="monogram-text"
            fill="#0B132B"
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: '34px',
              fontWeight: 600,
              letterSpacing: '2px',
            }}
          >
            F & H
          </text>

          {/* Subtitle Under Monogram */}
          <text
            x="100"
            y="126"
            className="monogram-subtext"
            fill="#856529"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '8px',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            IN VITATION
          </text>

          {/* Bottom Flourish Accent */}
          <circle cx="100" cy="138" r="1.75" fill="url(#sealGoldBase)" />
        </g>
      </svg>
    </div>
  );
};
