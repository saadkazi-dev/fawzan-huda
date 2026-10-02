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
            <stop offset="0%" stopColor="#F5E6BE" />
            <stop offset="35%" stopColor="#C5A059" />
            <stop offset="70%" stopColor="#9E7D3B" />
            <stop offset="100%" stopColor="#E9D29A" />
          </linearGradient>

          <linearGradient id="midnightRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#141C36" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>

          <radialGradient id="sealInnerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="75%" stopColor="#FAF6EE" />
            <stop offset="100%" stopColor="#F3EBDD" />
          </radialGradient>

          <filter id="goldDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0B132B" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* Outer Background Static Ring in Gold */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="rgba(197, 160, 89, 0.22)"
          strokeWidth="3.5"
        />

        {/* Dynamic Animated Loading Progress Arc */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#sealGoldBase)"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transformOrigin: '50% 50%',
            transform: 'rotate(-90deg)',
            transition: 'stroke-dashoffset 0.15s linear',
          }}
        />

        {/* Midnight Navy Primary Accent Ring - Visibly Defined */}
        <circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="#0B132B"
          strokeWidth="1.75"
          opacity="0.75"
        />

        {/* Inner Solid Translucent Ivory Seal Disc */}
        <circle
          cx="100"
          cy="100"
          r="73"
          fill="url(#sealInnerGlow)"
          stroke="url(#sealGoldBase)"
          strokeWidth="1.25"
          filter="url(#goldDropShadow)"
        />

        {/* Midnight Navy Secondary Inner Dashed Ring */}
        <circle
          cx="100"
          cy="100"
          r="68"
          fill="none"
          stroke="#141C36"
          strokeWidth="1"
          strokeDasharray="4 2.5"
          opacity="0.6"
        />

        {/* Rotating 8-Pointed Islamic Geometric Star Ring with Dual Gold & Navy Linework */}
        <g 
          className="rotating-islamic-star"
          style={{
            transformOrigin: '100px 100px',
            opacity: 0.6,
          }}
        >
          <rect x="53" y="53" width="94" height="94" fill="none" stroke="url(#sealGoldBase)" strokeWidth="0.75" transform="rotate(0 100 100)" />
          <rect x="53" y="53" width="94" height="94" fill="none" stroke="#0B132B" strokeWidth="0.85" transform="rotate(45 100 100)" opacity="0.7" />
          <rect x="58" y="58" width="84" height="84" fill="none" stroke="#141C36" strokeWidth="0.6" transform="rotate(22.5 100 100)" opacity="0.5" />
        </g>

        {/* Centered F & H Monogram Typography */}
        <g textAnchor="middle" dominantBaseline="central">
          {/* Subtle Accent Star Crest above Monogram */}
          <path
            d="M 100 55 L 102 59 L 106 59 L 103 61 L 104 65 L 100 63 L 96 65 L 97 61 L 94 59 L 98 59 Z"
            fill="url(#sealGoldBase)"
            opacity="0.95"
          />

          {/* F & H Initials */}
          <text
            x="100"
            y="98"
            className="monogram-text"
            fill="#0B132B"
            style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: '34px',
              fontWeight: 600,
              letterSpacing: '2px',
            }}
          >
            F &amp; H
          </text>

          {/* Subtitle Under Monogram */}
          <text
            x="100"
            y="125"
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
            INVITATION
          </text>

          {/* Bottom Flourish Accent Dot */}
          <circle cx="100" cy="137" r="1.75" fill="url(#sealGoldBase)" />
        </g>
      </svg>
    </div>
  );
};
