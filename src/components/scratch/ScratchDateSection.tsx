import React, { useState, useCallback } from 'react';
import { ScratchCard } from './ScratchCard';
import { ConfettiCanvas } from './ConfettiCanvas';
import { HeaderMotif } from '../preloader/IslamicOrnament';
import './ScratchDateSection.css';

/**
 * Web Audio API Chime Synthesizer
 * Plays a luxury 5-tone ascending celebration chime upon scratch completion.
 */
const playChimeSound = () => {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();

    const playTone = (freq: number, time: number, vol: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 2.0);

      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 800;

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + 2.2);
    };

    const now = ctx.currentTime;
    playTone(523.25, now, 0.08); // C5
    playTone(659.25, now + 0.1, 0.08); // E5
    playTone(783.99, now + 0.2, 0.08); // G5
    playTone(1046.5, now + 0.3, 0.08); // C6
    playTone(1318.51, now + 0.4, 0.08); // E6
  } catch (err) {
    console.warn('Audio chime synthesis skipped or unsupported:', err);
  }
};

export const ScratchDateSection: React.FC = () => {
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false]);
  const [hasCelebrated, setHasCelebrated] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const cardsData = [
    { value: '09', label: 'Day' },
    { value: 'DEC', label: 'Month' },
    { value: '2026', label: 'Year' },
  ];

  const handleReveal = useCallback(
    (cardIndex: number) => {
      setRevealed((prev) => {
        if (prev[cardIndex]) return prev;
        const next = [...prev];
        next[cardIndex] = true;

        // Check if all 3 cards are now revealed
        if (next.every(Boolean) && !hasCelebrated) {
          setHasCelebrated(true);
          setShowConfetti(true);
          playChimeSound();
        }

        return next;
      });
    },
    [hasCelebrated]
  );

  const isAllRevealed = revealed.every(Boolean);

  return (
    <section className="scratch-section-container" id="scratch-date-section">
      {/* 2D Canvas Party Confetti Launcher */}
      <ConfettiCanvas
        active={showConfetti}
        onComplete={() => setShowConfetti(false)}
      />

      {/* Header */}
      <header className="scratch-header">
        <span className="scratch-header-subtitle">Save Our Date</span>
        <h2 className="scratch-header-title">Scratch To Reveal</h2>
        <HeaderMotif />
      </header>

      {/* 3 Scratch Cards Grid */}
      <div className="scratch-cards-grid">
        {cardsData.map((card, idx) => (
          <ScratchCard
            key={card.label}
            value={card.value}
            label={card.label}
            index={idx}
            isRevealed={revealed[idx]}
            onReveal={handleReveal}
          />
        ))}
      </div>

      {/* Revealed Celebration Banner */}
      {isAllRevealed && (
        <div className="scratch-unlocked-banner">
          <span className="unlocked-tag">THE SACRED DATE UNLOCKED</span>
          <div className="gold-divider" style={{ width: '40px', margin: '4px auto' }} />
          <h3 className="unlocked-date-title">09 DEC 2026</h3>
          <span className="unlocked-day-sub">Wednesday</span>
        </div>
      )}
    </section>
  );
};
