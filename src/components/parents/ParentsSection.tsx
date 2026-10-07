import React, { useState } from 'react';
import './ParentsSection.css';

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

/**
 * Refined Royal Midnight Navy & Champagne-Gold Islamic Rub el Hizb Medallion
 * Concentric 8-pointed star with deep navy faceted core and gold geometry
 */
export const IslamicMedallion: React.FC<{
  size?: number;
  className?: string;
  navyCore?: boolean;
}> = ({ size = 20, className, navyCore = true }) => (
  <div className={`islamic-medallion ${className || ''}`} style={{ width: size, height: size }} aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="medallionGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E4BD" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#9E7D3B" />
        </linearGradient>
      </defs>
      {/* Outer Interlocking 8-Pointed Star (Rub el Hizb) */}
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        fill={navyCore ? '#0B1630' : '#FFFDF9'}
        stroke="url(#medallionGoldGrad)"
        strokeWidth="0.95"
      />
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        fill="none"
        stroke="url(#medallionGoldGrad)"
        strokeWidth="0.95"
        transform="rotate(45 12 12)"
      />
      {/* Inner Center Pearl Knot */}
      <circle cx="12" cy="12" r="2.3" fill="url(#medallionGoldGrad)" />
      <circle cx="12" cy="12" r="1.1" fill={navyCore ? '#0B1630' : '#FFFDF9'} />
    </svg>
  </div>
);

/**
 * Refined Ornamental Divider with Centered Islamic Geometric Medallion
 */
export const OrnamentalDivider: React.FC<{ className?: string; medallionSize?: number }> = ({
  className,
  medallionSize = 14,
}) => (
  <div className={`parents-ornamental-divider ${className || ''}`} aria-hidden="true">
    <span className="parents-divider-line" />
    <span className="parents-divider-dot" />
    <IslamicMedallion size={medallionSize} className="parents-divider-medallion" />
    <span className="parents-divider-dot" />
    <span className="parents-divider-line" />
  </div>
);

/**
 * Miniature Islamic Pointed Arch Frame SVG for Parent Cards
 * Clean, serene, luxurious warm pearlescent ivory gradient with double gold hairline bevel
 */
const ParentArchFrameSvg: React.FC = () => (
  <svg
    className="parent-arch-svg"
    viewBox="0 0 340 380"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="parentArchGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E4BD" />
        <stop offset="45%" stopColor="#C5A059" />
        <stop offset="100%" stopColor="#9E7D3B" />
      </linearGradient>

      <linearGradient id="parentArchGoldBevel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.85" />
        <stop offset="50%" stopColor="#EAD29A" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#9E7D3B" stopOpacity="0.35" />
      </linearGradient>

      <radialGradient id="parentArchIvoryGrad" cx="50%" cy="28%" r="76%">
        <stop offset="0%" stopColor="#FFFDF8" />
        <stop offset="45%" stopColor="#FAF5EC" />
        <stop offset="80%" stopColor="#F4EADA" />
        <stop offset="100%" stopColor="#ECE0CF" />
      </radialGradient>
    </defs>

    {/* Clean Warm Pearlescent Ivory Base */}
    <path
      d="M 14 366 Q 14 374 24 374 L 316 374 Q 326 374 326 366 L 326 96 C 326 44 225 14 170 8 C 115 14 14 44 14 96 Z"
      fill="url(#parentArchIvoryGrad)"
      stroke="url(#parentArchGoldMain)"
      strokeWidth="1.2"
      vectorEffect="non-scaling-stroke"
    />

    {/* Inner Parallel Islamic Arch Bevel Hairline */}
    <path
      d="M 19 363 Q 19 369 26 369 L 314 369 Q 321 369 321 363 L 321 98 C 321 49 223 20 170 14 C 117 20 19 49 19 98 Z"
      fill="none"
      stroke="url(#parentArchGoldBevel)"
      strokeWidth="0.75"
      vectorEffect="non-scaling-stroke"
    />

    {/* Top Arch Apex Finial Accent */}
    <line
      x1="170"
      y1="2"
      x2="170"
      y2="8"
      stroke="url(#parentArchGoldMain)"
      strokeWidth="0.85"
      vectorEffect="non-scaling-stroke"
    />
    <circle cx="170" cy="8" r="1.5" fill="url(#parentArchGoldMain)" />
  </svg>
);

/**
 * Grandparents Heritage Memorial Plaque Frame SVG
 * Respectful heritage panel styling with subtle corner cartouches and double hairlines
 */
const GrandparentsHeritageFrameSvg: React.FC = () => (
  <svg
    className="grandparents-frame-svg"
    viewBox="0 0 340 180"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="gpGoldMain" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E4BD" />
        <stop offset="45%" stopColor="#C5A059" />
        <stop offset="100%" stopColor="#9E7D3B" />
      </linearGradient>

      <linearGradient id="gpGoldHairline" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#EAD29A" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#9E7D3B" stopOpacity="0.25" />
      </linearGradient>

      <linearGradient id="gpIvoryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF8" />
        <stop offset="45%" stopColor="#FAF5EC" />
        <stop offset="80%" stopColor="#F4EADA" />
        <stop offset="100%" stopColor="#ECE0CF" />
      </linearGradient>
    </defs>

    {/* Clean Parchment Plaque Border */}
    <rect
      x="10"
      y="8"
      width="320"
      height="164"
      rx="16"
      fill="url(#gpIvoryGrad)"
      stroke="url(#gpGoldMain)"
      strokeWidth="1.1"
      vectorEffect="non-scaling-stroke"
    />

    {/* Inner Inset Bevel Hairline */}
    <rect
      x="15"
      y="13"
      width="310"
      height="154"
      rx="12"
      fill="none"
      stroke="url(#gpGoldHairline)"
      strokeWidth="0.75"
      vectorEffect="non-scaling-stroke"
    />

    {/* Four Corner Accents */}
    <circle cx="15" cy="13" r="1.3" fill="url(#gpGoldMain)" />
    <circle cx="325" cy="13" r="1.3" fill="url(#gpGoldMain)" />
    <circle cx="15" cy="167" r="1.3" fill="url(#gpGoldMain)" />
    <circle cx="325" cy="167" r="1.3" fill="url(#gpGoldMain)" />
  </svg>
);

export const ParentsSection: React.FC = () => {
  // Mobile Interactive Touch / Click Animation State
  const [activeCards, setActiveCards] = useState<Record<string, boolean>>({});
  const [ripples, setRipples] = useState<Record<string, Ripple[]>>({});
  const [sparkles, setSparkles] = useState<Record<string, Sparkle[]>>({});

  const handleCardInteraction = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    cardId: 'grandparents' | 'groom' | 'bride'
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let clientX = rect.left + rect.width / 2;
    let clientY = rect.top + rect.height / 2;

    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e && e.clientX > 0) {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Haptic pulse on mobile if available
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(12);
      } catch {
        /* Ignore */
      }
    }

    // Toggle active illuminated state
    setActiveCards((prev) => ({
      ...prev,
      [cardId]: true,
    }));

    // Add golden ripple
    const rippleId = Date.now();
    setRipples((prev) => ({
      ...prev,
      [cardId]: [...(prev[cardId] || []).slice(-1), { id: rippleId, x, y }],
    }));

    // Add floating barakah sparkles
    const newSparkles: Sparkle[] = [
      { id: rippleId + 1, x: x - 20, y: y - 10 },
      { id: rippleId + 2, x: x + 18, y: y - 22 },
      { id: rippleId + 3, x: x, y: y - 34 },
    ];
    setSparkles((prev) => ({
      ...prev,
      [cardId]: [...(prev[cardId] || []).slice(-3), ...newSparkles],
    }));

    // Auto-clean sparkles after animation
    setTimeout(() => {
      setSparkles((prev) => ({
        ...prev,
        [cardId]: (prev[cardId] || []).filter((s) => !newSparkles.some((ns) => ns.id === s.id)),
      }));
    }, 1100);

    // Reset card elevation sheen
    setTimeout(() => {
      setActiveCards((prev) => ({
        ...prev,
        [cardId]: false,
      }));
    }, 1800);
  };

  return (
    <section className="parents-section-container" id="parents-section">
      {/* Seamless Tone-on-Tone Navy Islamic Girih Watermark matching Hero */}
      <div className="parents-watermark" aria-hidden="true" />

      {/* Main Architectural Casing (Direct seamless continuation from Hero, completely clean ivory) */}
      <div className="parents-arch-casing">
        {/* Section Header */}
        <header className="parents-header">
          <span className="parents-header-subtitle">WITH PRAISE TO ALLAH</span>
          <h2 className="parents-header-title">THE BELOVED PARENTS</h2>
          <OrnamentalDivider className="parents-header-divider" medallionSize={15} />
        </header>

        {/* 1. GROOM'S GRANDPARENTS (In Loving Memory Heritage Panel) */}
        <div
          className={`grandparents-card parents-reveal-item ${activeCards['grandparents'] ? 'is-active' : ''}`}
          onClick={(e) => handleCardInteraction(e, 'grandparents')}
          role="button"
          tabIndex={0}
          aria-label="Grandparents of the Groom Memorial Panel. Tap to illuminate."
        >
          <GrandparentsHeritageFrameSvg />

          {/* Liquid Gold Foil Sweep Sheen Overlay */}
          <div className="card-foil-sheen" />

          {/* Golden Ripple Overlay */}
          {(ripples['grandparents'] || []).map((r) => (
            <span key={r.id} className="tap-ripple" style={{ left: r.x, top: r.y }} />
          ))}

          {/* Floating Sparkles */}
          {(sparkles['grandparents'] || []).map((s) => (
            <span key={s.id} className="floating-sparkle" style={{ left: s.x, top: s.y }}>
              ✦
            </span>
          ))}

          <div className="grandparents-card-content">
            <IslamicMedallion size={18} className="grandparents-medallion" />

            <div className="grandparents-tag-wrapper">
              <span className="grandparents-tag">IN LOVING MEMORY &bull; UNDER THE BLESSED LEGACY OF</span>
            </div>

            <OrnamentalDivider className="grandparents-divider" medallionSize={12} />

            <div className="grandparents-names-group">
              <h3 className="grandparent-name">Zainuddin Kadir Kazi</h3>
              <h3 className="grandparent-name">Fatimbi Zainuddin Kazi</h3>
            </div>

            <span className="grandparent-role">
              Marhoom &bull; Beloved Grandparents of the Groom
            </span>

            {/* Respectful Heritage Honor Cartouche */}
            <div className="heritage-honor-cartouche">
              <span className="cartouche-line" />
              <span className="cartouche-emblem">❖</span>
              <span className="cartouche-text">FOREVER REVERED</span>
              <span className="cartouche-emblem">❖</span>
              <span className="cartouche-line" />
            </div>
          </div>
        </div>

        {/* 2 & 3. PARENTS ARCH PANELS */}
        <div className="parents-grid">
          {/* GROOM'S PARENTS PANEL */}
          <div
            className={`parent-card parents-reveal-item ${activeCards['groom'] ? 'is-active' : ''}`}
            onClick={(e) => handleCardInteraction(e, 'groom')}
            role="button"
            tabIndex={0}
            aria-label="Parents of the Groom Panel. Tap to illuminate."
          >
            <ParentArchFrameSvg />

            {/* Liquid Gold Foil Sweep Sheen Overlay */}
            <div className="card-foil-sheen" />

            {/* Golden Ripple Overlay */}
            {(ripples['groom'] || []).map((r) => (
              <span key={r.id} className="tap-ripple" style={{ left: r.x, top: r.y }} />
            ))}

            {/* Floating Sparkles */}
            {(sparkles['groom'] || []).map((s) => (
              <span key={s.id} className="floating-sparkle" style={{ left: s.x, top: s.y }}>
                ✦
              </span>
            ))}

            <div className="parent-card-content">
              {/* 1. Apex Ornament */}
              <IslamicMedallion size={20} className="parent-card-medallion" />

              {/* 2. Section Label with Midnight Navy Accent Banner */}
              <div className="parent-card-header">
                <span className="parent-card-banner">PARENTS OF THE GROOM</span>
              </div>

              {/* 3 & 4. Father Name & Relationship */}
              <div className="parent-person-box">
                <h3 className="parent-person-name">Rafiq Zainuddin Kazi</h3>
                <span className="parent-person-role">FATHER</span>
              </div>

              {/* 5. Refined Divider */}
              <OrnamentalDivider className="parent-inner-divider" medallionSize={12} />

              {/* 6 & 7. Mother Name & Relationship */}
              <div className="parent-person-box">
                <h3 className="parent-person-name">Hajara Rafiq Kazi</h3>
                <span className="parent-person-role">MOTHER</span>
              </div>

              {/* 8. Blessing Quote */}
              <p className="parent-card-blessing">
                &ldquo;May Allah bless both families with barakah.&rdquo;
              </p>

              {/* Embossed Family Heritage Seal Crest */}
              <div className="heritage-seal-wrapper" aria-hidden="true">
                <div className="heritage-seal-rim">
                  <div className="heritage-seal-core">
                    <IslamicMedallion size={14} navyCore={true} className="seal-inner-medallion" />
                  </div>
                </div>
                <span className="heritage-seal-label">KAZI HERITAGE</span>
              </div>
            </div>
          </div>

          {/* CONNECTING ORNAMENT BETWEEN FAMILY GROUPS */}
          <div className="family-groups-connector" aria-hidden="true">
            <OrnamentalDivider className="connector-divider" medallionSize={16} />
          </div>

          {/* BRIDE'S PARENTS PANEL */}
          <div
            className={`parent-card parents-reveal-item ${activeCards['bride'] ? 'is-active' : ''}`}
            onClick={(e) => handleCardInteraction(e, 'bride')}
            role="button"
            tabIndex={0}
            aria-label="Parents of the Bride Panel. Tap to illuminate."
          >
            <ParentArchFrameSvg />

            {/* Liquid Gold Foil Sweep Sheen Overlay */}
            <div className="card-foil-sheen" />

            {/* Golden Ripple Overlay */}
            {(ripples['bride'] || []).map((r) => (
              <span key={r.id} className="tap-ripple" style={{ left: r.x, top: r.y }} />
            ))}

            {/* Floating Sparkles */}
            {(sparkles['bride'] || []).map((s) => (
              <span key={s.id} className="floating-sparkle" style={{ left: s.x, top: s.y }}>
                ✦
              </span>
            ))}

            <div className="parent-card-content">
              {/* 1. Apex Ornament */}
              <IslamicMedallion size={20} className="parent-card-medallion" />

              {/* 2. Section Label with Midnight Navy Accent Banner */}
              <div className="parent-card-header">
                <span className="parent-card-banner">PARENTS OF THE BRIDE</span>
              </div>

              {/* 3 & 4. Father Name & Relationship */}
              <div className="parent-person-box">
                <h3 className="parent-person-name">Hasham Ismail Kazi</h3>
                <span className="parent-person-role">FATHER</span>
              </div>

              {/* 5. Refined Divider */}
              <OrnamentalDivider className="parent-inner-divider" medallionSize={12} />

              {/* 6 & 7. Mother Name & Relationship */}
              <div className="parent-person-box">
                <h3 className="parent-person-name">Seemab Hasham Kazi</h3>
                <span className="parent-person-role">MOTHER</span>
              </div>

              {/* 8. Blessing Quote */}
              <p className="parent-card-blessing">
                &ldquo;May Allah bless both families with barakah.&rdquo;
              </p>

              {/* Embossed Family Heritage Seal Crest */}
              <div className="heritage-seal-wrapper" aria-hidden="true">
                <div className="heritage-seal-rim">
                  <div className="heritage-seal-core">
                    <IslamicMedallion size={14} navyCore={true} className="seal-inner-medallion" />
                  </div>
                </div>
                <span className="heritage-seal-label">KAZI HERITAGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
