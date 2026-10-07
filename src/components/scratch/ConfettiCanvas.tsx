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
  wobble: number;
  vWobble: number;
  opacity: number;
  shape: 'ribbon' | 'rect' | 'circle' | 'star';
}

/**
 * High-End Celebratory Confetti Launcher
 * Fires an explosive, royal short burst of champagne gold, metallic luster,
 * pearlescent ivory, and midnight navy particles upward from dual corners,
 * gracefully floating and fading out within 1.8 seconds.
 */
export const ConfettiCanvas: React.FC<ConfettiCanvasProps> = ({ active, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // Regal Wedding Color Palette: Champagne Golds, Metallic Gold, Pearl Ivory & Midnight Navy
    const colors = [
      '#FFDF78', // Vivid Gold
      '#D4AF37', // Metallic Gold
      '#F5E4BD', // Champagne Cream
      '#C5A059', // Antique Gold
      '#0B1630', // Midnight Navy
      '#1B2E5C', // Royal Sapphire
      '#FAF6EE', // Pearl Ivory
      '#E9D29A', // Soft Gold Foil
    ];

    const particles: Particle[] = [];
    const countPerSide = 42; // Perfect density for a luxury, refined burst

    const spawnPopper = (originX: number, originY: number, baseAngleRad: number, spreadRad: number) => {
      for (let i = 0; i < countPerSide; i++) {
        const angle = baseAngleRad - spreadRad / 2 + Math.random() * spreadRad;
        const speed = 15 + Math.random() * 20; // Explosive upward velocity
        const shapes: Particle['shape'][] = ['ribbon', 'rect', 'circle', 'star'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: shape === 'ribbon' ? 12 + Math.random() * 10 : 6 + Math.random() * 6,
          color,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.25,
          wobble: Math.random() * Math.PI * 2,
          vWobble: 0.08 + Math.random() * 0.12,
          opacity: 1,
          shape,
        });
      }
    };

    // Left cannon shoots upward-right
    spawnPopper(width * 0.05, height * 0.88, -Math.PI * 0.34, Math.PI * 0.26);
    // Right cannon shoots upward-left
    spawnPopper(width * 0.95, height * 0.88, -Math.PI * 0.66, Math.PI * 0.26);

    let animationFrameId: number;
    const startTime = Date.now();
    const BURST_DURATION = 1800; // 1.8 seconds max duration for a crisp short burst

    const drawStar = (context: CanvasRenderingContext2D, size: number) => {
      const spikes = 8;
      const step = Math.PI / spikes;
      const rOuter = size;
      const rInner = size * 0.45;
      let rot = (Math.PI / 2) * 3;

      context.beginPath();
      context.moveTo(0, -rOuter);
      for (let i = 0; i < spikes; i++) {
        let x = Math.cos(rot) * rOuter;
        let y = Math.sin(rot) * rOuter;
        context.lineTo(x, y);
        rot += step;
        x = Math.cos(rot) * rInner;
        y = Math.sin(rot) * rInner;
        context.lineTo(x, y);
        rot += step;
      }
      context.lineTo(0, -rOuter);
      context.closePath();
      context.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      let alive = false;
      const elapsed = Date.now() - startTime;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.44; // Gentle gravity
        p.vx *= 0.98; // Air friction
        p.rotation += p.vRot;
        p.wobble += p.vWobble;

        // Flutter oscillation
        p.x += Math.sin(p.wobble) * 1.1;

        // Fade out gracefully in the second half of the burst
        if (elapsed > 900) {
          p.opacity -= 0.038;
        }

        if (p.opacity > 0 && p.y < height + 60) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;

          if (p.shape === 'ribbon') {
            const scaleY = Math.sin(p.wobble);
            ctx.scale(1, scaleY);
            ctx.fillRect(-p.size / 4, -p.size / 2, p.size / 2, p.size * 1.6);
          } else if (p.shape === 'rect') {
            const scaleX = Math.cos(p.wobble);
            ctx.scale(scaleX, 1);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.2);
          } else if (p.shape === 'star') {
            drawStar(ctx, p.size * 0.6);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      }

      if (alive && elapsed < BURST_DURATION) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

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
