import React, { useEffect, useState, useMemo } from 'react';
import './FallingPetals.css';

interface PetalConfig {
  id: number;
  colorType: 'white' | 'navy'; // Dual-tone palette: Royal Midnight Navy & Warm White/Ivory
  left: number; // percentage (2% - 96%)
  size: number; // width in px (11px - 22px)
  heightRatio: number; // 1.2 - 1.45
  delay: number; // seconds (0.05 - 1.1s)
  duration: number; // seconds (3.3 - 4.7s)
  swayType: number; // 1, 2, 3, 4
  shapeType: number; // 1, 2, 3
  initialRotation: number; // degrees
  driftDistance: number; // px (-55 to +55)
}

/**
 * Premium Cinematic Falling Petal Entrance Effect
 * Dual-tone Wedding Flower Petals (Royal Midnight Navy & Pure White / Soft Ivory)
 * Cascades naturally from top edge over the Hero section and gently fades out after ~4.8 seconds.
 */
export const FallingPetals: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  // 26 delicate petal particles with balanced Navy Blue & White distribution
  const petals: PetalConfig[] = useMemo(() => {
    const rawPetals: PetalConfig[] = [
      { id: 1, colorType: 'navy', left: 6, size: 18, heightRatio: 1.35, delay: 0.05, duration: 3.8, swayType: 1, shapeType: 1, initialRotation: 15, driftDistance: -40 },
      { id: 2, colorType: 'white', left: 14, size: 12, heightRatio: 1.25, delay: 0.35, duration: 4.2, swayType: 2, shapeType: 2, initialRotation: -25, driftDistance: 45 },
      { id: 3, colorType: 'navy', left: 22, size: 21, heightRatio: 1.4, delay: 0.15, duration: 3.6, swayType: 3, shapeType: 1, initialRotation: 40, driftDistance: -30 },
      { id: 4, colorType: 'white', left: 29, size: 13, heightRatio: 1.3, delay: 0.65, duration: 4.4, swayType: 4, shapeType: 3, initialRotation: -10, driftDistance: 35 },
      { id: 5, colorType: 'navy', left: 37, size: 19, heightRatio: 1.38, delay: 0.2, duration: 3.9, swayType: 1, shapeType: 2, initialRotation: 30, driftDistance: -50 },
      { id: 6, colorType: 'white', left: 45, size: 11, heightRatio: 1.2, delay: 0.8, duration: 4.6, swayType: 2, shapeType: 3, initialRotation: -35, driftDistance: 40 },
      { id: 7, colorType: 'navy', left: 52, size: 22, heightRatio: 1.42, delay: 0.1, duration: 3.5, swayType: 3, shapeType: 1, initialRotation: 20, driftDistance: -35 },
      { id: 8, colorType: 'white', left: 60, size: 14, heightRatio: 1.28, delay: 0.5, duration: 4.1, swayType: 4, shapeType: 2, initialRotation: -15, driftDistance: 50 },
      { id: 9, colorType: 'navy', left: 68, size: 20, heightRatio: 1.36, delay: 0.25, duration: 3.7, swayType: 1, shapeType: 1, initialRotation: 45, driftDistance: -45 },
      { id: 10, colorType: 'white', left: 76, size: 12, heightRatio: 1.22, delay: 0.7, duration: 4.5, swayType: 2, shapeType: 3, initialRotation: -40, driftDistance: 30 },
      { id: 11, colorType: 'navy', left: 84, size: 18, heightRatio: 1.34, delay: 0.18, duration: 3.8, swayType: 3, shapeType: 2, initialRotation: 25, driftDistance: -40 },
      { id: 12, colorType: 'white', left: 92, size: 13, heightRatio: 1.26, delay: 0.45, duration: 4.3, swayType: 4, shapeType: 1, initialRotation: -20, driftDistance: 45 },
      { id: 13, colorType: 'white', left: 10, size: 15, heightRatio: 1.3, delay: 0.9, duration: 4.2, swayType: 2, shapeType: 2, initialRotation: 35, driftDistance: 35 },
      { id: 14, colorType: 'navy', left: 18, size: 17, heightRatio: 1.35, delay: 0.4, duration: 3.9, swayType: 1, shapeType: 1, initialRotation: -30, driftDistance: -45 },
      { id: 15, colorType: 'navy', left: 26, size: 11, heightRatio: 1.2, delay: 1.05, duration: 4.6, swayType: 4, shapeType: 3, initialRotation: 15, driftDistance: 30 },
      { id: 16, colorType: 'white', left: 34, size: 20, heightRatio: 1.4, delay: 0.3, duration: 3.7, swayType: 3, shapeType: 2, initialRotation: -45, driftDistance: -50 },
      { id: 17, colorType: 'navy', left: 42, size: 14, heightRatio: 1.28, delay: 0.85, duration: 4.4, swayType: 2, shapeType: 1, initialRotation: 20, driftDistance: 40 },
      { id: 18, colorType: 'white', left: 50, size: 16, heightRatio: 1.32, delay: 0.55, duration: 4.0, swayType: 1, shapeType: 3, initialRotation: -25, driftDistance: -35 },
      { id: 19, colorType: 'navy', left: 58, size: 12, heightRatio: 1.24, delay: 1.1, duration: 4.5, swayType: 4, shapeType: 2, initialRotation: 40, driftDistance: 45 },
      { id: 20, colorType: 'white', left: 65, size: 19, heightRatio: 1.38, delay: 0.38, duration: 3.8, swayType: 3, shapeType: 1, initialRotation: -15, driftDistance: -40 },
      { id: 21, colorType: 'navy', left: 73, size: 13, heightRatio: 1.26, delay: 0.75, duration: 4.3, swayType: 2, shapeType: 3, initialRotation: 30, driftDistance: 35 },
      { id: 22, colorType: 'white', left: 81, size: 21, heightRatio: 1.42, delay: 0.22, duration: 3.6, swayType: 1, shapeType: 2, initialRotation: -35, driftDistance: -45 },
      { id: 23, colorType: 'navy', left: 88, size: 11, heightRatio: 1.2, delay: 0.95, duration: 4.6, swayType: 4, shapeType: 1, initialRotation: 25, driftDistance: 40 },
      { id: 24, colorType: 'white', left: 4, size: 16, heightRatio: 1.32, delay: 0.6, duration: 4.1, swayType: 3, shapeType: 2, initialRotation: -20, driftDistance: -30 },
      { id: 25, colorType: 'navy', left: 48, size: 15, heightRatio: 1.3, delay: 0.48, duration: 4.0, swayType: 1, shapeType: 1, initialRotation: 18, driftDistance: -38 },
      { id: 26, colorType: 'white', left: 95, size: 17, heightRatio: 1.36, delay: 0.62, duration: 4.2, swayType: 2, shapeType: 3, initialRotation: -28, driftDistance: 42 },
    ];
    return rawPetals;
  }, []);

  // Gracefully clean up all DOM nodes after animation finishes (~5.4s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 5400);

    return () => clearTimeout(timer);
  }, []);

  if (!isActive) return null;

  return (
    <div className="hero-falling-petals-overlay" aria-hidden="true">
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          {/* ================= WHITE & CREAM PETAL GRADIENTS ================= */}
          {/* Pure White / Soft Pearl Gradient */}
          <linearGradient id="petalWhiteGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.97" />
            <stop offset="45%" stopColor="#FAF7F2" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#E9DDC9" stopOpacity="0.84" />
          </linearGradient>

          {/* Soft Cream Rose Gradient */}
          <radialGradient id="petalCreamGrad2" cx="35%" cy="28%" r="72%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.96" />
            <stop offset="60%" stopColor="#F7F1E5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E2CFAC" stopOpacity="0.82" />
          </radialGradient>

          {/* White Jasmine Gradient */}
          <linearGradient id="petalWhiteGrad3" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.97" />
            <stop offset="55%" stopColor="#FAF5EA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#DEC99E" stopOpacity="0.82" />
          </linearGradient>

          {/* ================= ROYAL NAVY BLUE PETAL GRADIENTS ================= */}
          {/* Midnight Velvet Navy Linear */}
          <linearGradient id="petalNavyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A437C" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#15264E" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#0B142B" stopOpacity="0.98" />
          </linearGradient>

          {/* Royal Sapphire Navy Radial */}
          <radialGradient id="petalNavyGrad2" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#304D8C" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#182A55" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#0D1730" stopOpacity="0.98" />
          </radialGradient>

          {/* Deep Imperial Navy Linear */}
          <linearGradient id="petalNavyGrad3" x1="25%" y1="0%" x2="75%" y2="100%">
            <stop offset="0%" stopColor="#263E75" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#132347" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#081024" stopOpacity="0.98" />
          </linearGradient>
        </defs>
      </svg>

      {petals.map((petal) => {
        const height = Math.round(petal.size * petal.heightRatio);
        const isNavy = petal.colorType === 'navy';

        // Select fill gradient based on color type & petal silhouette
        const fillId = isNavy
          ? petal.shapeType === 1
            ? 'url(#petalNavyGrad1)'
            : petal.shapeType === 2
            ? 'url(#petalNavyGrad2)'
            : 'url(#petalNavyGrad3)'
          : petal.shapeType === 1
          ? 'url(#petalWhiteGrad1)'
          : petal.shapeType === 2
          ? 'url(#petalCreamGrad2)'
          : 'url(#petalWhiteGrad3)';

        // Vein stroke styling: subtle champagne gold on navy petals, gentle sand on white petals
        const veinStroke = isNavy ? '#E8D5B0' : '#D1BC95';
        const veinOpacity = isNavy ? '0.45' : '0.32';

        return (
          <div
            key={petal.id}
            className={`falling-petal-particle petal-color-${petal.colorType} sway-type-${petal.swayType}`}
            style={
              {
                left: `${petal.left}%`,
                width: `${petal.size}px`,
                height: `${height}px`,
                animationDelay: `${petal.delay}s`,
                animationDuration: `${petal.duration}s`,
                '--drift-dist': `${petal.driftDistance}px`,
                '--initial-rot': `${petal.initialRotation}deg`,
              } as React.CSSProperties
            }
          >
            <svg
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%', display: 'block' }}
            >
              {petal.shapeType === 1 && (
                /* Natural Curved Rose Petal */
                <g>
                  <path
                    d="M 12 1 C 19 5, 23 14, 19 23 C 15 29, 6 29, 3 22 C 0 14, 5 4, 12 1 Z"
                    fill={fillId}
                  />
                  {/* Delicate Botanical Central Spine */}
                  <path
                    d="M 12 3 Q 12 15 11 25"
                    stroke={veinStroke}
                    strokeWidth="0.55"
                    strokeOpacity={veinOpacity}
                    fill="none"
                  />
                </g>
              )}

              {petal.shapeType === 2 && (
                /* Broad Delicate Camellia Petal */
                <g>
                  <path
                    d="M 13 1 C 21 4, 24 16, 18 24 C 13 30, 4 29, 2 21 C -1 13, 5 4, 13 1 Z"
                    fill={fillId}
                  />
                  <path
                    d="M 13 3 Q 12 14 10 24"
                    stroke={veinStroke}
                    strokeWidth="0.5"
                    strokeOpacity={veinOpacity}
                    fill="none"
                  />
                </g>
              )}

              {petal.shapeType === 3 && (
                /* Slender Jasmine / Blossom Petal */
                <g>
                  <path
                    d="M 11 1 C 17 6, 19 17, 15 24 C 11 29, 4 27, 2 20 C -1 12, 4 4, 11 1 Z"
                    fill={fillId}
                  />
                  <path
                    d="M 11 2 Q 11 14 9 23"
                    stroke={veinStroke}
                    strokeWidth="0.45"
                    strokeOpacity={veinOpacity}
                    fill="none"
                  />
                </g>
              )}
            </svg>
          </div>
        );
      })}
    </div>
  );
};
