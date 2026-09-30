import React from 'react';

/**
 * Bismillah Calligraphy Vector Component
 * Renders an elegant Arabic Calligraphy SVG in champagne gold.
 */
export const BismillahCalligraphy: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => {
  return (
    <div className={`bismillah-container ${className || ''}`} style={{ width: '220px', margin: '0 auto', ...style }}>
      <svg
        viewBox="0 0 500 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <defs>
          <linearGradient id="bismillahGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9E7D3B" />
            <stop offset="30%" stopColor="#E9D29A" />
            <stop offset="60%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9E7D3B" />
          </linearGradient>
        </defs>

        {/* Bismillah-ir-Rahman-ir-Rahim Arabic Vector Path Calligraphy */}
        <g fill="url(#bismillahGold)">
          {/* Main Calligraphic Curves */}
          <path d="M 460 35 C 440 20 410 20 390 35 C 385 38 380 48 388 52 C 395 55 405 45 415 42 C 430 38 450 42 455 55 C 458 65 448 75 435 78 C 420 82 400 75 390 65 C 382 58 375 62 378 72 C 382 85 405 95 430 92 C 455 88 475 70 472 50 C 470 40 465 37 460 35 Z" />
          <path d="M 360 30 C 350 25 340 32 342 45 C 344 58 355 68 368 62 C 375 58 378 48 372 42 C 368 38 360 40 358 48 C 356 55 365 58 365 52 C 365 48 360 45 358 48" />
          <path d="M 330 25 L 330 85 C 330 88 325 90 322 86 L 322 30 C 322 25 328 22 330 25 Z" />
          <path d="M 310 20 L 310 85 C 310 88 305 90 302 86 L 302 25 C 302 20 308 18 310 20 Z" />
          <path d="M 285 40 C 270 30 250 35 242 50 C 235 65 245 80 262 82 C 275 84 288 75 292 62 C 295 50 288 42 280 45 C 272 48 275 58 280 58 C 285 58 288 52 285 48" />
          <path d="M 230 20 L 230 85 C 230 88 225 90 222 86 L 222 25 C 222 20 228 18 230 20 Z" />
          <path d="M 210 20 L 210 85 C 210 88 205 90 202 86 L 202 25 C 202 20 208 18 210 20 Z" />
          <path d="M 190 35 C 175 25 155 30 148 45 C 140 60 150 78 168 80 C 182 82 195 72 198 58 C 202 45 195 38 186 40" />
          <path d="M 135 25 L 135 85 C 135 88 130 90 127 86 L 127 30 C 127 25 133 22 135 25 Z" />
          <path d="M 115 40 C 100 30 80 35 72 50 C 65 65 75 80 92 82 C 105 84 118 75 122 62 C 125 50 118 42 110 45" />

          {/* Calligraphic Diacritics and Dots */}
          <circle cx="330" cy="15" r="4" />
          <circle cx="310" cy="10" r="4" />
          <circle cx="230" cy="10" r="4" />
          <circle cx="210" cy="10" r="4" />
          <circle cx="135" cy="15" r="4" />
          <circle cx="50" cy="60" r="4" />
          <circle cx="40" cy="72" r="4" />
          
          {/* Subtle Decorative Arch Swash underneath */}
          <path d="M 60 100 C 180 115 320 115 440 100" stroke="url(#bismillahGold)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    </div>
  );
};
