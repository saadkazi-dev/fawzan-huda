import React from 'react';

export interface GoogleMapEmbedProps {
  addressQuery?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
  placeLabel?: string;
  mapLinkUrl?: string;
  className?: string;
  title?: string;
}

/**
 * Reusable Google Maps Embed Component
 * Renders an interactive Google Map with custom gold framing and direct redirect link.
 */
export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  addressQuery,
  lat,
  lng,
  zoom = 18,
  placeLabel,
  mapLinkUrl = 'https://maps.app.goo.gl/soKFc7rHiJBTvx8Z9',
  className = '',
  title = 'Venue Google Maps Location',
}) => {
  const queryParam = (lat !== undefined && lng !== undefined)
    ? `${lat},${lng}${placeLabel ? `+(${encodeURIComponent(placeLabel)})` : ''}`
    : encodeURIComponent(addressQuery || 'Mazgaon, Mumbai');

  const embedUrl = `https://maps.google.com/maps?q=${queryParam}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`google-map-embed-container ${className}`}>
      {/* Interactive Embedded Google Map */}
      <iframe
        title={title}
        src={embedUrl}
        className="google-map-iframe"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Glassmorphism Floating CTA Badge inside Map Container */}
      <a
        href={mapLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="google-map-overlay-badge"
        aria-label="Open location in Google Maps"
      >
        <svg
          className="map-nav-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
        <span>Open Maps</span>
      </a>
    </div>
  );
};
