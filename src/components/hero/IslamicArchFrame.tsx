import React from 'react';

interface IslamicArchFrameProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const IslamicArchFrame: React.FC<IslamicArchFrameProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={`islamic-arch-frame-container ${className || ''}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding:
          'max(clamp(0.6rem, 1.5vh, 1rem), env(safe-area-inset-top, 12px)) max(clamp(0.85rem, 3.5vw, 1.4rem), env(safe-area-inset-right, 14px)) max(clamp(0.4rem, 1vh, 0.75rem), env(safe-area-inset-bottom, 8px)) max(clamp(0.85rem, 3.5vw, 1.4rem), env(safe-area-inset-left, 14px))',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* Architectural Islamic Arch SVG Frame */}
      <svg
        className="arch-frame-svg"
        viewBox="0 0 360 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <defs>
          {/* Metallic Champagne Gold Gradients */}
          <linearGradient id="archGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E8C7" />
            <stop offset="30%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9E7D3B" />
          </linearGradient>

          <linearGradient id="archGoldBevel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#EAD293" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFF8E7" stopOpacity="0.8" />
          </linearGradient>

          {/* Warm Ivory Interior Gradient */}
          <radialGradient id="archIvoryInterior" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="55%" stopColor="#FAF6EE" />
            <stop offset="100%" stopColor="#F4EBDD" />
          </radialGradient>

          {/* Soft Champagne Atmospheric Inner Glow */}
          <filter id="archChampagneGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#C5A059" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* Outer Frame Border Line with Navy Environment Padding */}
        <rect
          x="12"
          y="10"
          width="336"
          height="620"
          rx="12"
          stroke="url(#archGoldMain)"
          strokeWidth="1.2"
          strokeOpacity="0.8"
          fill="none"
        />

        {/* Narrower Architectural Islamic Arch Profile Path with Ivory Fill & Gold Border */}
        <path
          d="M 22 630 L 22 118 C 22 56 114 20 180 10 C 246 20 338 56 338 118 L 338 630 Z"
          stroke="url(#archGoldMain)"
          strokeWidth="2"
          fill="url(#archIvoryInterior)"
          filter="url(#archChampagneGlow)"
        />

        {/* Inner Parallel Arch Bevel Line */}
        <path
          d="M 27 625 L 27 120 C 27 60 116 26 180 17 C 244 26 333 60 333 120 L 333 625 Z"
          stroke="url(#archGoldBevel)"
          strokeWidth="0.85"
          fill="none"
        />

        {/* Top Arch Apex Main Keystone Ornament (Rub el Hizb Medallion) */}
        <g transform="translate(180, 10)">
          <rect x="-6.5" y="-6.5" width="13" height="13" fill="#FFFDF9" stroke="url(#archGoldMain)" strokeWidth="1" transform="rotate(0)" />
          <rect x="-6.5" y="-6.5" width="13" height="13" fill="none" stroke="url(#archGoldMain)" strokeWidth="1" transform="rotate(45)" />
          <circle cx="0" cy="0" r="3" fill="url(#archGoldMain)" />
          <circle cx="0" cy="0" r="1.2" fill="#FFFDF9" />
        </g>
      </svg>

      {/* Frame Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        {children}
      </div>
    </div>
  );
};




