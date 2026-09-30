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
        padding: 'var(--space-xl) var(--space-md)',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* Background Arch Vector Frame */}
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
          <linearGradient id="archGoldMain" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E9D29A" />
            <stop offset="35%" stopColor="#C5A059" />
            <stop offset="70%" stopColor="#9E7D3B" />
            <stop offset="100%" stopColor="#C5A059" />
          </linearGradient>

          <linearGradient id="archGoldSubtle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#F3E2B4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Outer Outer Frame Line */}
        <rect
          x="12"
          y="12"
          width="336"
          height="616"
          rx="12"
          stroke="url(#archGoldSubtle)"
          strokeWidth="1"
        />

        {/* Outer Islamic Arch Profile Path */}
        {/* Arch starts at bottom left, goes up, curves into pointed Moorish arch at apex, and goes down to bottom right */}
        <path
          d="M 22 622 L 22 130 C 22 70 120 32 180 20 C 240 32 338 70 338 130 L 338 622 Z"
          stroke="url(#archGoldMain)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Inner Parallel Arch Line */}
        <path
          d="M 28 616 L 28 132 C 28 76 122 40 180 28 C 238 40 332 76 332 132 L 332 616 Z"
          stroke="url(#archGoldMain)"
          strokeWidth="0.75"
          strokeOpacity="0.6"
          fill="none"
        />

        {/* Top Arch Apex Medallion (8-Pointed Star) */}
        <g transform="translate(180, 20)">
          <rect x="-8" y="-8" width="16" height="16" fill="#FAF6EE" stroke="url(#archGoldMain)" strokeWidth="1" transform="rotate(0)" />
          <rect x="-8" y="-8" width="16" height="16" fill="none" stroke="url(#archGoldMain)" strokeWidth="1" transform="rotate(45)" />
          <circle cx="0" cy="0" r="3" fill="url(#archGoldMain)" />
        </g>

        {/* Corner 8-pointed star ornaments */}
        {/* Bottom Left Corner */}
        <g transform="translate(22, 622)">
          <circle cx="0" cy="0" r="4" fill="#FAF6EE" stroke="url(#archGoldMain)" strokeWidth="1" />
        </g>
        {/* Bottom Right Corner */}
        <g transform="translate(338, 622)">
          <circle cx="0" cy="0" r="4" fill="#FAF6EE" stroke="url(#archGoldMain)" strokeWidth="1" />
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
          justifyContent: 'space-between',
        }}
      >
        {children}
      </div>
    </div>
  );
};
