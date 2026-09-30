import React, { useEffect, useRef } from 'react';

interface ConfettiCanvasProps {
  active: boolean;
  onComplete?: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRot: number;
  opacity: number;
  shape: 'rect' | 'circle';
}

/**
 * 2D Canvas Confetti Burst Launcher
 * Fires gold, champagne, ivory, and maroon foil confetti from left & right margins.
 */
export const ConfettiCanvas: React.FC<ConfettiCanvasProps> = ({ active, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const colors = ['#F3E2B4', '#C5A059', '#9E7D3B', '#FAF6EE', '#581825', '#E9D29A'];
    const particles: Particle[] = [];
    const countPerSide = 45;

    // Spawn Left Side Burst
    for (let i = 0; i < countPerSide; i++) {
      const angle = -Math.PI / 4 + (Math.random() * Math.PI) / 4;
      const speed = 12 + Math.random() * 16;
      particles.push({
        x: 0,
        y: height * 0.7,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 6 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        opacity: 1,
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
      });
    }

    // Spawn Right Side Burst
    for (let i = 0; i < countPerSide; i++) {
      const angle = -Math.PI * 0.75 + (Math.random() * Math.PI) / 4;
      const speed = 12 + Math.random() * 16;
      particles.push({
        x: width,
        y: height * 0.7,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 6 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        opacity: 1,
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
      });
    }

    let animationFrameId: number;
    let startTime = Date.now();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let alive = false;
      const elapsed = Date.now() - startTime;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // Gravity
        p.vx *= 0.98; // Drag
        p.rotation += p.vRot;

        if (elapsed > 1800) {
          p.opacity -= 0.025;
        }

        if (p.opacity > 0 && p.y < height + 50) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;

          if (p.shape === 'rect') {
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      }

      if (alive && elapsed < 3500) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
        if (onComplete) onComplete();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};
