"use client";

import { useEffect, useRef } from "react";

type SparklesCoreProps = {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  twinkle: number;
};

export function SparklesCore({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  particleColor = "#00ff88",
  className,
}: SparklesCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let particles: Particle[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = rect.width * rect.height;
      const count = Math.max(80, Math.min(900, Math.floor((area / 18000) * particleDensity)));
      particles = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.05 + Math.random() * 0.28;
        return {
          x: rect.width * (0.18 + Math.random() * 0.64),
          y: rect.height * (0.08 + Math.random() * 0.5),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed * 0.45 + 0.08,
          size: minSize + Math.random() * (maxSize - minSize),
          alpha: 0.25 + Math.random() * 0.75,
          twinkle: Math.random() * Math.PI * 2,
        };
      });
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, rect.width, rect.height);
      }

      frame += 0.025;
      ctx.fillStyle = particleColor;
      ctx.shadowColor = particleColor;
      ctx.shadowBlur = 8;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > rect.width || p.y > rect.height) {
          p.x = rect.width * (0.18 + Math.random() * 0.64);
          p.y = rect.height * 0.08;
        }

        const pulse = 0.55 + Math.sin(frame + p.twinkle) * 0.45;
        ctx.globalAlpha = p.alpha * pulse;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [background, maxSize, minSize, particleColor, particleDensity]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
