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
  const lastCoordsRef = useRef<{ x: number; y: number } | null>(null);

  // Initialize and draw metallic scratch foil canvas overlay
  const drawFoil = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    // Deep luxury burgundy-gold metallic gradient foil
    const foilGrad = ctx.createLinearGradient(0, 0, 0, h);
    foilGrad.addColorStop(0, '#3B0014');
    foilGrad.addColorStop(0.5, '#690024');
    foilGrad.addColorStop(1, '#4A0018');

    ctx.fillStyle = foilGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle gold border on canvas
    ctx.strokeStyle = 'rgba(197, 160, 89, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(2, 2, w - 4, h - 4);

    // Embossed Islamic 8-Pointed Star Motif
    ctx.strokeStyle = 'rgba(233, 210, 154, 0.25)';
    ctx.lineWidth = 0.8;
    const cx = w / 2;
    const cy = h / 2 - 8;
    const r = Math.min(w, h) * 0.22;

    ctx.beginPath();
    ctx.rect(cx - r, cy - r, r * 2, r * 2);
    ctx.stroke();

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI / 4);
    ctx.strokeRect(-r, -r, r * 2, r * 2);
    ctx.restore();

    // Embossed Text "SCRATCH"
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = "bold 8px 'Montserrat', sans-serif";

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText('SCRATCH', cx + 0.5, h - 19.5);
    ctx.fillText('TO REVEAL', cx + 0.5, h - 9.5);

    ctx.fillStyle = '#E9D29A';
    ctx.fillText('SCRATCH', cx, h - 20);
    ctx.fillText('TO REVEAL', cx, h - 10);
  }, []);

  useEffect(() => {
    if (isRevealed) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    canvas.width = w;
    canvas.height = h;

    drawFoil(canvas);
  }, [isRevealed, drawFoil]);

  const checkScratchPercentage = useCallback(() => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let clearedPixels = 0;
      for (let i = 3; i < imgData.data.length; i += 4) {
        if (imgData.data[i] === 0) {
          clearedPixels++;
        }
      }
      const percentage = (clearedPixels / (canvas.width * canvas.height)) * 100;
      if (percentage >= 28) {
        onReveal(index);
      }
    } catch (e) {
      console.warn('Canvas check failed:', e);
    }
  }, [isRevealed, index, onReveal]);

  const getCanvasCoords = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isRevealed) return;
    setIsScratching(true);
    const coords = getCanvasCoords(e);
    lastCoordsRef.current = coords;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(coords.x, coords.y, 22, 0, Math.PI * 2);
    ctx.fill();
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isScratching || isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const coords = getCanvasCoords(e);
    const lastCoords = lastCoordsRef.current || coords;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 44;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(lastCoords.x, lastCoords.y);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();

    lastCoordsRef.current = coords;
    checkScratchPercentage();
  };

  const handleEnd = () => {
    setIsScratching(false);
    lastCoordsRef.current = null;
    checkScratchPercentage();
  };

  return (
    <div className="scratch-card-wrapper" ref={containerRef}>
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

      {/* Top Foil Scratch Canvas */}
      {!isRevealed && (
        <canvas
          ref={canvasRef}
          className="scratch-card-canvas"
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        />
      )}
    </div>
  );
};
