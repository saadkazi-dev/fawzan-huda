import React from 'react';

/**
 * Islamic Corner & Background Geometric Ornaments
 * Pure SVG vectors styled with champagne gold gradients and luxury aesthetics.
 */

export const CornerOrnament: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scale(-1, 1)';
      case 'bottom-left': return 'scale(1, -1)';
      case 'bottom-right': return 'scale(-1, -1)';
      default: return 'none';
    }
  };

  const getPositionStyles = (): React.CSSProperties => {
    switch (position) {
      case 'top-left': return { top: 12, left: 12 };
      case 'top-right': return { top: 12, right: 12 };
      case 'bottom-left': return { bottom: 12, left: 12 };
      case 'bottom-right': return { bottom: 12, right: 12 };
    }
  };

  return (
    <div 
      className="islamic-corner-ornament" 
      style={{
        position: 'absolute',
        width: '68px',
        height: '68px',
        pointerEvents: 'none',
        zIndex: 2,
        ...getPositionStyles(),
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: getTransform(), width: '100%', height: '100%' }}
      >
        <defs>
          <linearGradient id="goldGradCorner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E9D29A" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9E7D3B" />
          </linearGradient>
          <linearGradient id="midnightCornerAcc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#141C36" />
            <stop offset="100%" stopColor="#0B132B" />
          </linearGradient>
        </defs>

        {/* Outer L-Frame Border in Champagne Gold */}
        <path
          d="M 4 96 L 4 24 Q 4 4 24 4 L 96 4"
          stroke="url(#goldGradCorner)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 10 90 L 10 26 Q 10 10 26 10 L 90 10"
          stroke="url(#midnightCornerAcc)"
          strokeWidth="0.8"
          strokeOpacity="0.5"
          fill="none"
        />

        {/* Islamic Star Element at Corner Focal Point */}
        <g transform="translate(24, 24)">
          {/* 8-pointed Rub el Hizb motif */}
          <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="url(#goldGradCorner)" strokeWidth="1" transform="rotate(0)" />
          <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="url(#goldGradCorner)" strokeWidth="1" transform="rotate(45)" />
          <circle cx="0" cy="0" r="3.5" fill="url(#goldGradCorner)" opacity="0.9" />
        </g>

        {/* Delicate arabesque flourish line */}
        <path
          d="M 24 40 C 24 60 40 76 60 76 M 40 24 C 60 24 76 40 76 60"
          stroke="url(#goldGradCorner)"
          strokeWidth="0.75"
          strokeOpacity="0.4"
          fill="none"
        />
      </svg>
    </div>
  );
};

export const HeaderMotif: React.FC = () => {
  return (
    <div className="islamic-header-motif" style={{ width: '130px', height: '24px', margin: '0 auto', opacity: 0.9 }}>
      <svg viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="headerGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#E9D29A" stopOpacity="1" />
            <stop offset="100%" stopColor="#C5A059" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {/* Horizontal Line with Center Arch Emblem */}
        <line x1="0" y1="16" x2="56" y2="16" stroke="url(#headerGold)" strokeWidth="1" />
        <line x1="104" y1="16" x2="160" y2="16" stroke="url(#headerGold)" strokeWidth="1" />
        
        <circle cx="80" cy="16" r="10" stroke="url(#headerGold)" strokeWidth="1" fill="none" />
        <rect x="73" y="9" width="14" height="14" stroke="#0B132B" strokeWidth="0.75" transform="rotate(45 80 16)" fill="none" opacity="0.7" />
        <circle cx="80" cy="16" r="3" fill="url(#headerGold)" />
      </svg>
    </div>
  );
};

export const BackgroundPattern: React.FC = () => {
  return (
    <div 
      className="islamic-bg-pattern" 
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L40 10 L40 20 L30 30 L20 20 L20 10 Z' fill='none' stroke='%23C5A059' stroke-width='0.8'/%3E%3Cpath d='M30 30 L40 40 L40 50 L30 60 L20 50 L20 40 Z' fill='none' stroke='%23C5A059' stroke-width='0.8'/%3E%3Cpath d='M0 30 L10 40 L20 40 L30 30 L20 20 L10 20 Z' fill='none' stroke='%23C5A059' stroke-width='0.8'/%3E%3Cpath d='M30 30 L40 20 L50 20 L60 30 L50 40 L40 40 Z' fill='none' stroke='%23C5A059' stroke-width='0.8'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        zIndex: 0,
      }}
    />
  );
};

