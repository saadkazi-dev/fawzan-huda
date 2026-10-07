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
        maxWidth: '430px',
        height: '100%',
        maxHeight: '840px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        margin: '0 auto',
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
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9E7D3B" />
          </linearGradient>

          <linearGradient id="archGoldBevel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#EAD293" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFF8E7" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="archGoldSubtle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#F5E4BD" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#9E7D3B" stopOpacity="0.6" />
          </linearGradient>

          {/* Warm Pearlescent Ivory Interior Gradient with Soft Tonal Variation */}
          <radialGradient id="archIvoryTonalGrad" cx="50%" cy="32%" r="72%">
            <stop offset="0%" stopColor="#FFFDF8" />
            <stop offset="45%" stopColor="#FAF5EC" />
            <stop offset="80%" stopColor="#F4EADA" />
            <stop offset="100%" stopColor="#ECE0CF" />
          </radialGradient>

          {/* Authentic 8-Fold Islamic Girih Architectural Pattern for Midnight Navy (Tone-on-Tone) */}
          <pattern
            id="islamicNavyLattice"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            {/* Corner star quadrants */}
            <circle cx="0" cy="0" r="1" fill="#C5A059" opacity="0.1" />
            <circle cx="48" cy="0" r="1" fill="#C5A059" opacity="0.1" />
            <circle cx="0" cy="48" r="1" fill="#C5A059" opacity="0.1" />
            <circle cx="48" cy="48" r="1" fill="#C5A059" opacity="0.1" />

            {/* Connecting Diagonal Girih Ribs */}
            <line x1="0" y1="0" x2="17" y2="17" stroke="#2B3D66" strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="48" y1="0" x2="31" y2="17" stroke="#2B3D66" strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="0" y1="48" x2="17" y2="31" stroke="#2B3D66" strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="48" y1="48" x2="31" y2="31" stroke="#2B3D66" strokeWidth="0.5" strokeOpacity="0.2" />

            {/* Orthogonal Connecting Struts */}
            <line x1="24" y1="0" x2="24" y2="13" stroke="#C5A059" strokeWidth="0.45" strokeOpacity="0.06" />
            <line x1="24" y1="35" x2="24" y2="48" stroke="#C5A059" strokeWidth="0.45" strokeOpacity="0.06" />
            <line x1="0" y1="24" x2="13" y2="24" stroke="#C5A059" strokeWidth="0.45" strokeOpacity="0.06" />
            <line x1="35" y1="24" x2="48" y2="24" stroke="#C5A059" strokeWidth="0.45" strokeOpacity="0.06" />

            {/* Central 8-Pointed Star Girih Knot */}
            <rect
              x="18"
              y="18"
              width="12"
              height="12"
              fill="none"
              stroke="#C5A059"
              strokeWidth="0.5"
              strokeOpacity="0.08"
            />
            <rect
              x="18"
              y="18"
              width="12"
              height="12"
              fill="none"
              stroke="#C5A059"
              strokeWidth="0.5"
              strokeOpacity="0.08"
              transform="rotate(45 24 24)"
            />
            <circle cx="24" cy="24" r="1.3" fill="#C5A059" opacity="0.1" />
          </pattern>

          {/* EXACT Same Islamic Geometry Applied Inside Ivory Arch in Subtle Warm Cream / Soft Beige (5-8% intensity) */}
          <pattern
            id="archIslamicIvoryPattern"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            {/* Corner star quadrants */}
            <circle cx="0" cy="0" r="1" fill="#C4B399" opacity="0.075" />
            <circle cx="48" cy="0" r="1" fill="#C4B399" opacity="0.075" />
            <circle cx="0" cy="48" r="1" fill="#C4B399" opacity="0.075" />
            <circle cx="48" cy="48" r="1" fill="#C4B399" opacity="0.075" />

            {/* Connecting Diagonal Girih Ribs */}
            <line x1="0" y1="0" x2="17" y2="17" stroke="#C4B399" strokeWidth="0.5" strokeOpacity="0.075" />
            <line x1="48" y1="0" x2="31" y2="17" stroke="#C4B399" strokeWidth="0.5" strokeOpacity="0.075" />
            <line x1="0" y1="48" x2="17" y2="31" stroke="#C4B399" strokeWidth="0.5" strokeOpacity="0.075" />
            <line x1="48" y1="48" x2="31" y2="31" stroke="#C4B399" strokeWidth="0.5" strokeOpacity="0.075" />

            {/* Orthogonal Connecting Struts */}
            <line x1="24" y1="0" x2="24" y2="13" stroke="#C4B399" strokeWidth="0.45" strokeOpacity="0.07" />
            <line x1="24" y1="35" x2="24" y2="48" stroke="#C4B399" strokeWidth="0.45" strokeOpacity="0.07" />
            <line x1="0" y1="24" x2="13" y2="24" stroke="#C4B399" strokeWidth="0.45" strokeOpacity="0.07" />
            <line x1="35" y1="24" x2="48" y2="24" stroke="#C4B399" strokeWidth="0.45" strokeOpacity="0.07" />

            {/* Central 8-Pointed Star Girih Knot */}
            <rect
              x="18"
              y="18"
              width="12"
              height="12"
              fill="none"
              stroke="#C4B399"
              strokeWidth="0.5"
              strokeOpacity="0.075"
            />
            <rect
              x="18"
              y="18"
              width="12"
              height="12"
              fill="none"
              stroke="#C4B399"
              strokeWidth="0.5"
              strokeOpacity="0.075"
              transform="rotate(45 24 24)"
            />
            <circle cx="24" cy="24" r="1.3" fill="#C4B399" opacity="0.075" />
          </pattern>

          {/* Luxury Handmade Invitation Paper Texture Pattern (Laid Lines & Organic Fibers) */}
          <pattern
            id="archPaperFiberPattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            {/* Fine laid paper chain lines */}
            <line x1="0" y1="8" x2="32" y2="8" stroke="#8C6F48" strokeWidth="0.35" strokeOpacity="0.04" />
            <line x1="0" y1="16" x2="32" y2="16" stroke="#8C6F48" strokeWidth="0.35" strokeOpacity="0.03" />
            <line x1="0" y1="24" x2="32" y2="24" stroke="#8C6F48" strokeWidth="0.35" strokeOpacity="0.04" />
            <line x1="0" y1="32" x2="32" y2="32" stroke="#8C6F48" strokeWidth="0.35" strokeOpacity="0.03" />

            {/* Subtle organic handmade fibers and rag flecks */}
            <circle cx="6" cy="12" r="0.6" fill="#7A5F3A" opacity="0.06" />
            <circle cx="21" cy="5" r="0.45" fill="#7A5F3A" opacity="0.05" />
            <circle cx="28" cy="22" r="0.7" fill="#7A5F3A" opacity="0.045" />
            <circle cx="13" cy="27" r="0.5" fill="#7A5F3A" opacity="0.06" />
            <path d="M 8 19 Q 12 20 15 18" stroke="#7A5F3A" strokeWidth="0.35" strokeOpacity="0.045" fill="none" />
            <path d="M 23 11 Q 26 13 29 10" stroke="#7A5F3A" strokeWidth="0.3" strokeOpacity="0.04" fill="none" />
          </pattern>

          {/* Multi-layer Physical Paper Edge Shadow (Soft contact shadow + ambient depth) */}
          <filter id="archCardShadow" x="-10%" y="-8%" width="120%" height="116%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#02040A" floodOpacity="0.4" />
            <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000000" floodOpacity="0.22" />
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#C5A059" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* 1. Midnight Navy Atmospheric Background & Tone-on-Tone Girih Pattern */}
        <rect x="0" y="0" width="360" height="640" fill="#070D1E" />
        <rect x="0" y="0" width="360" height="640" fill="url(#islamicNavyLattice)" />

        {/* 2. Outer Architectural Inset Gold Frame Line */}
        <rect
          x="12"
          y="10"
          width="336"
          height="620"
          rx="10"
          stroke="url(#archGoldSubtle)"
          strokeWidth="0.9"
          fill="none"
        />

        {/* Fine Architectural Corner Notches on Outer Frame */}
        <path
          d="M 12 22 L 22 22 L 22 10 M 348 22 L 338 22 L 338 10 M 12 618 L 22 618 L 22 630 M 348 618 L 338 618 L 338 630"
          stroke="url(#archGoldMain)"
          strokeWidth="0.65"
          strokeOpacity="0.6"
          fill="none"
        />

        {/* 3. Main Architectural Islamic Arch Profile:
            Layer A: Warm pearlescent ivory base with tonal variation and physical shadow */}
        <path
          d="M 24 618 L 24 144 C 24 94 108 52 180 44 C 252 52 336 94 336 144 L 336 618 Z"
          stroke="url(#archGoldMain)"
          strokeWidth="1.3"
          fill="url(#archIvoryTonalGrad)"
          filter="url(#archCardShadow)"
        />

        {/* Layer B: Exact Islamic Girih Geometry in Warm Cream / Soft Beige (Clipped to Arch, 5-8% intensity) */}
        <path
          d="M 24 618 L 24 144 C 24 94 108 52 180 44 C 252 52 336 94 336 144 L 336 618 Z"
          fill="url(#archIslamicIvoryPattern)"
          style={{ mixBlendMode: 'multiply' }}
        />

        {/* Layer C: Luxury handmade paper laid & organic fiber texture overlay */}
        <path
          d="M 24 618 L 24 144 C 24 94 108 52 180 44 C 252 52 336 94 336 144 L 336 618 Z"
          fill="url(#archPaperFiberPattern)"
          style={{ mixBlendMode: 'multiply', opacity: 0.7 }}
        />

        {/* Layer D: Inner Parallel Arch Bevel Hairline */}
        <path
          d="M 28.5 614 L 28.5 146 C 28.5 98 110 57 180 49.5 C 250 57 331.5 98 331.5 146 L 331.5 614 Z"
          stroke="url(#archGoldBevel)"
          strokeWidth="0.75"
          fill="none"
        />

        {/* 4. Top Arch Apex Integrated Keystone Ornament (Finial & Rub el Hizb Medallion) */}
        {/* Central connecting finial axis */}
        <line
          x1="180"
          y1="10"
          x2="180"
          y2="44"
          stroke="url(#archGoldMain)"
          strokeWidth="0.85"
        />

        {/* Top Anchor Point on Outer Frame */}
        <path
          d="M 177 10 L 180 7 L 183 10 L 180 13 Z"
          fill="url(#archGoldMain)"
        />

        {/* Rub el Hizb 8-Pointed Star Keystone centered at y=27 */}
        <g transform="translate(180, 27)">
          {/* Subtle horizontal flanking bracket accents */}
          <line x1="-18" y1="0" x2="-8" y2="0" stroke="url(#archGoldMain)" strokeWidth="0.65" strokeOpacity="0.75" />
          <circle cx="-18" cy="0" r="1" fill="url(#archGoldMain)" />
          <line x1="8" y1="0" x2="18" y2="0" stroke="url(#archGoldMain)" strokeWidth="0.65" strokeOpacity="0.75" />
          <circle cx="18" cy="0" r="1" fill="url(#archGoldMain)" />

          {/* Interlocking 8-Pointed Star */}
          <rect
            x="-5.5"
            y="-5.5"
            width="11"
            height="11"
            fill="#FFFDF8"
            stroke="url(#archGoldMain)"
            strokeWidth="0.85"
          />
          <rect
            x="-5.5"
            y="-5.5"
            width="11"
            height="11"
            fill="none"
            stroke="url(#archGoldMain)"
            strokeWidth="0.85"
            transform="rotate(45)"
          />
          <circle cx="0" cy="0" r="2" fill="url(#archGoldMain)" />
        </g>

        {/* Apex Termination Pearl */}
        <circle cx="180" cy="44" r="1.8" fill="url(#archGoldMain)" />
      </svg>

      {/* Frame Content Container */}
      <div
        className="islamic-arch-content"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
          flex: 1,
          justifyContent: 'center',
          paddingTop: 'clamp(62px, 11.5vh, 88px)',
          paddingBottom: 'clamp(22px, 3.8vh, 34px)',
          paddingLeft: 'clamp(22px, 6vw, 36px)',
          paddingRight: 'clamp(22px, 6vw, 36px)',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    </div>
  );
};
