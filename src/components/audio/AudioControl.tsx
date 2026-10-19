import React from 'react';
import { useAudio } from '@/context/AudioContext';
import './AudioControl.css';

export const AudioControl: React.FC = () => {
  const { isMuted, isPlaying, toggleMute } = useAudio();

  return (
    <aside className="audio-control-fixed" aria-label="Wedding Background Audio Control">
      <button
        type="button"
        className={`audio-toggle-btn ${isMuted ? 'is-muted' : ''} ${isPlaying && !isMuted ? 'is-playing' : ''}`}
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
        title={isMuted ? 'Unmute wedding music' : 'Mute wedding music'}
      >
        {isMuted ? (
          /* Elegant Muted Speaker with Diagonal Strike */
          <svg
            className="audio-icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.25" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          /* Elegant Unmuted Speaker with Subtle Radiating Sound Waves */
          <svg
            className="audio-icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.3" />
            <path className="sound-wave-bar sound-wave-bar-1" d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path className="sound-wave-bar sound-wave-bar-2" d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        )}
      </button>
    </aside>
  );
};
