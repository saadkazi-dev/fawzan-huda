import React, { useRef, useEffect, useState, useCallback } from 'react';

export interface ScratchCardProps {
  value: string;
  label: string;
  index: number;
  isRevealed: boolean;
  onReveal: (index: number) => void;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({
  value,
  label,
  index,
  isRevealed,
  onReveal,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isScratching, setIsScratching] = useState<boolean>(false);
  const [isFoilClearing, setIsFoilClearing] = useState<boolean>(false);
  const lastCoordsRef = useRef<{ x: number; y: number } | null>(null);
  const totalDragDistanceRef = useRef<number>(0);
  const hasTriggeredRef = useRef<boolean>(false);
  const strokeSampleCountRef = useRef<number>(0);

  // Initialize and draw royal midnight-navy & metallic gold scratch foil canvas
  const drawFoil = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || canvas.clientWidth || 100;
    const h = rect.height || canvas.clientHeight || 136;

    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);

    ctx.save();
    ctx.scale(dpr, dpr);

    // Royal Midnight Navy Velvet gradient foil matching wedding theme
    const foilGrad = ctx.createLinearGradient(0, 0, 0, h);
    foilGrad.addColorStop(0, '#09132A');
    foilGrad.addColorStop(0.35, '#15254D');
    foilGrad.addColorStop(0.7, '#1C3162');
    foilGrad.addColorStop(1, '#070F22');

    ctx.fillStyle = foilGrad;
    ctx.fillRect(0, 0, w, h);

    // Fine metallic gold dust / starlight flecks
    ctx.fillStyle = 'rgba(234, 210, 154, 0.16)';
    for (let i = 0; i < 32; i++) {
      const rx = (i * 37 + 13) % w;
      const ry = (i * 53 + 7) % h;
      ctx.fillRect(rx, ry, 1.5, 1.5);
    }

    // Outer and Inner Gold Bevel Frames
    ctx.strokeStyle = 'rgba(197, 160, 89, 0.65)';
    ctx.lineWidth = 1;
    ctx.strokeRect(3.5, 3.5, w - 7, h - 7);

    ctx.strokeStyle = 'rgba(233, 210, 154, 0.3)';
    ctx.lineWidth = 0.6;
    ctx.strokeRect(6.5, 6.5, w - 13, h - 13);

    // Embossed Islamic 8-Pointed Star (Rub el Hizb)
    const cx = w / 2;
    const cy = h / 2 - 10;
    const r = Math.min(w, h) * 0.22;

    ctx.strokeStyle = '#EAD29A';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.rect(cx - r, cy - r, r * 2, r * 2);
    ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI / 4);
    ctx.strokeRect(-r, -r, r * 2, r * 2);
    ctx.restore();

    // Center Gold Medallion Pearl
    ctx.fillStyle = '#EAD29A';
    ctx.beginPath();
    ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Embossed Text "SCRATCH TO REVEAL" in Champagne Gold
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = "bold 8px 'Montserrat', sans-serif";

    // Text Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillText('SCRATCH', cx + 0.5, h - 22.5);
    ctx.fillText('TO REVEAL', cx + 0.5, h - 12.5);

    // Text Face
    ctx.fillStyle = '#F5E4BD';
    ctx.fillText('SCRATCH', cx, h - 23);
    ctx.fillText('TO REVEAL', cx, h - 13);

    ctx.restore();
  }, []);

  useEffect(() => {
    if (isRevealed) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    drawFoil(canvas);

    const handleResize = () => {
      if (!isRevealed && !hasTriggeredRef.current && canvasRef.current) {
        drawFoil(canvasRef.current);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isRevealed, drawFoil]);

  const triggerReveal = useCallback(() => {
    if (hasTriggeredRef.current || isRevealed) return;
    hasTriggeredRef.current = true;
    setIsFoilClearing(true);
    // Smooth visual fade of remaining foil before parent commits revealed state
    setTimeout(() => {
      onReveal(index);
    }, 220);
  }, [isRevealed, index, onReveal]);

  const checkScratchPercentage = useCallback(() => {
    if (hasTriggeredRef.current || isRevealed) return;

    // STRICT REQUIREMENT: Tap without dragging must NEVER reveal!
    // Require meaningful drag gesture (> 110px of accumulated drag distance)
    if (totalDragDistanceRef.current < 110) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let clearedPixels = 0;
      let sampled = 0;

      // Sample every 4th pixel (stride = 16 bytes) for 60fps performance
      for (let i = 3; i < data.length; i += 16) {
        sampled++;
        if (data[i] < 32) {
          clearedPixels++;
        }
      }

      const percentage = (clearedPixels / sampled) * 100;
      // Meaningful scratch coverage required: >= 38%
      if (percentage >= 38) {
        triggerReveal();
      }
    } catch (e) {
      console.warn('Canvas check failed:', e);
    }
  }, [isRevealed, triggerReveal]);

  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed || hasTriggeredRef.current) return;
    e.preventDefault();

    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    setIsScratching(true);
    const coords = getCanvasCoords(e);
    lastCoordsRef.current = coords;
    // Tapping without moving generates 0 drag distance and will never reveal the card!
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching || isRevealed || hasTriggeredRef.current) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const coords = getCanvasCoords(e);
    const lastCoords = lastCoordsRef.current || coords;

    const dx = coords.x - lastCoords.x;
    const dy = coords.y - lastCoords.y;
    const dist = Math.hypot(dx, dy);

    // Ignore microscopic noise
    if (dist < 1.5) return;

    totalDragDistanceRef.current += dist;
    strokeSampleCountRef.current += 1;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 36;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(lastCoords.x, lastCoords.y);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    ctx.restore();

    lastCoordsRef.current = coords;

    // Periodically verify scratch coverage as user scratches
    if (strokeSampleCountRef.current % 4 === 0) {
      checkScratchPercentage();
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching) return;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    setIsScratching(false);
    lastCoordsRef.current = null;
    checkScratchPercentage();
  };

  return (
    <div
      className={`scratch-card-wrapper ${isRevealed ? 'is-revealed' : ''} ${
        isFoilClearing ? 'is-clearing' : ''
      }`}
      ref={containerRef}
      role="region"
      aria-label={`${label}: ${isRevealed ? value : 'Scratch to reveal'}`}
    >
      {/* Revealed Bottom Content Layer */}
      <div className="scratch-card-inner">
        <span className="scratch-card-label">{label}</span>
        <span
          className={`scratch-card-value ${
            label.toLowerCase() === 'month' ? 'scratch-value-month' : ''
          }`}
        >
          {value}
        </span>
      </div>

      {/* Top Royal Navy Foil Scratch Canvas (No click/tap reveal - drag only) */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          className="scratch-card-canvas"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        />
      )}
    </div>
  );
};
