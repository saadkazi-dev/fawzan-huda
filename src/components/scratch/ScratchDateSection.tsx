import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ScratchCard } from './ScratchCard';
import { ConfettiCanvas } from './ConfettiCanvas';
import { HeaderMotif } from '../preloader/IslamicOrnament';
import './ScratchDateSection.css';

/**
 * Web Audio API Celebration Chime Synthesizer
 * Plays an ascending celebratory royal chime upon full scratch unlock.
 */
const playChimeSound = () => {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();

    const playTone = (freq: number, time: number, vol: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 2.2);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 2400;

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + 2.4);
    };

    const now = ctx.currentTime;
    playTone(523.25, now, 0.09); // C5
    playTone(659.25, now + 0.12, 0.09); // E5
    playTone(783.99, now + 0.24, 0.1); // G5
    playTone(1046.5, now + 0.36, 0.11); // C6
    playTone(1318.51, now + 0.48, 0.12); // E6
  } catch (err) {
    console.warn('Celebration chime synthesis skipped:', err);
  }
};

// Target Sacred Nikah Date: December 9, 2026, 11:00 AM IST
const WEDDING_TIMESTAMP = new Date('2026-12-09T11:00:00+05:30').getTime();

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): CountdownTime => {
  const diff = Math.max(0, WEDDING_TIMESTAMP - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

export const ScratchDateSection: React.FC = () => {
  const [revealed, setRevealed] = useState<boolean[]>([false, false, false]);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft);

  // Strictly guard confetti triggers: fires ONLY on successful card reveal sequence, max 1 burst
  const confettiBurstCountRef = useRef<number>(0);
  const chimePlayedRef = useRef<boolean>(false);

  const cardsData = [
    { value: '09', label: 'Day' },
    { value: 'DEC', label: 'Month' },
    { value: '2026', label: 'Year' },
  ];

  const isAllRevealed = revealed.every(Boolean);

  const handleReveal = useCallback((cardIndex: number) => {
    setRevealed((prev) => {
      if (prev[cardIndex]) return prev;
      const next = [...prev];
      next[cardIndex] = true;

      const allDone = next.every(Boolean);

      // Trigger celebration ONLY upon complete successful reveal of the date
      if (allDone) {
        if (!chimePlayedRef.current) {
          chimePlayedRef.current = true;
          playChimeSound();
        }
        // One short, premium confetti burst only - never loops or re-triggers
        if (confettiBurstCountRef.current < 1) {
          confettiBurstCountRef.current += 1;
          setShowConfetti(true);
        }
      }

      return next;
    });
  }, []);

  // Live real-time countdown ticker (Runs independently without affecting confetti state)
  useEffect(() => {
    if (!isAllRevealed) return;
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [isAllRevealed]);

  return (
    <section className="scratch-section-container" id="scratch-date-section">
      {/* Seamless Tone-on-Tone Navy Islamic Girih Watermark matching Parents and Hero */}
      <div className="scratch-watermark" aria-hidden="true" />

      {/* Dual-Sided Party Popper Launcher (Short Burst Only) */}
      <ConfettiCanvas
        active={showConfetti}
        onComplete={() => setShowConfetti(false)}
      />

      {/* Architectural Islamic Arch Panel (430px wide, warm ivory, champagne gold framing) */}
      <div className="scratch-arch-casing">
        {/* Section Header */}
        <header className="scratch-header">
          <span className="scratch-header-subtitle">SAVE OUR SACRED DATE</span>
          <h2 className="scratch-header-title">Scratch To Reveal</h2>
          <HeaderMotif />
          <p className="scratch-header-instruction">
            Gently scratch each seal to unveil our wedding date
          </p>
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

        {/* Revealed Celebration Banner & Automatic Live Countdown System */}
        {isAllRevealed && (
          <div className="scratch-unlocked-container">
            <div className="scratch-unlocked-banner">
              <span className="unlocked-tag">THE SACRED DATE REVEALED</span>
              <div className="unlocked-gold-divider" />
              <h3 className="unlocked-date-title">09 DEC 2026</h3>
              <span className="unlocked-day-sub">Wednesday &bull; Mazgaon Shafi Masjid</span>
            </div>

            {/* Live Countdown System */}
            <div className="scratch-countdown-section">
              <div className="countdown-eyebrow-wrapper">
                <span className="countdown-divider-line" />
                <span className="countdown-eyebrow-text">COUNTDOWN TO SACRED NIKAH</span>
                <span className="countdown-divider-line" />
              </div>

              <div className="countdown-grid">
                <div className="countdown-tile">
                  <div className="countdown-num-box">
                    <span className="countdown-num">{String(timeLeft.days).padStart(2, '0')}</span>
                  </div>
                  <span className="countdown-label">DAYS</span>
                </div>

                <span className="countdown-colon">:</span>

                <div className="countdown-tile">
                  <div className="countdown-num-box">
                    <span className="countdown-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                  </div>
                  <span className="countdown-label">HOURS</span>
                </div>

                <span className="countdown-colon">:</span>

                <div className="countdown-tile">
                  <div className="countdown-num-box">
                    <span className="countdown-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  </div>
                  <span className="countdown-label">MINS</span>
                </div>

                <span className="countdown-colon">:</span>

                <div className="countdown-tile countdown-tile-seconds">
                  <div className="countdown-num-box">
                    <span className="countdown-num countdown-num-live">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="countdown-label">SECS</span>
                </div>
              </div>

              <p className="countdown-blessing-text">
                Every moment brings us closer to the blessed union under Allah&rsquo;s grace &amp; barakah.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
