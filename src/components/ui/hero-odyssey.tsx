"use client";

import { useEffect, useRef } from "react";

export function HeroOdyssey() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let time = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawGrid = (width: number, height: number, horizon: number) => {
      ctx.save();
      ctx.strokeStyle = "rgba(0, 255, 136, 0.13)";
      ctx.lineWidth = 1;

      for (let i = 0; i < 46; i += 1) {
        const progress = i / 45;
        const y = horizon + Math.pow(progress, 2.15) * (height - horizon + 140);
        ctx.globalAlpha = 0.08 + progress * 0.32;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let i = -18; i <= 18; i += 1) {
        const x = width / 2 + i * 42;
        ctx.globalAlpha = 0.08 + Math.min(0.35, Math.abs(i) / 48);
        ctx.beginPath();
        ctx.moveTo(width / 2, horizon);
        ctx.lineTo(x + i * 48, height);
        ctx.stroke();
      }

      ctx.restore();
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const horizon = height * 0.54;
      time += 0.006;

      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, "#020308");
      bg.addColorStop(0.42, "#06101a");
      bg.addColorStop(1, "#030508");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      const aura = ctx.createRadialGradient(width * 0.5, horizon, 0, width * 0.5, horizon, width * 0.6);
      aura.addColorStop(0, "rgba(0, 255, 136, 0.18)");
      aura.addColorStop(0.35, "rgba(0, 240, 255, 0.08)");
      aura.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = aura;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(0, Math.sin(time * 2) * 6);
      drawGrid(width, height, horizon);
      ctx.restore();

      ctx.save();
      ctx.strokeStyle = "rgba(139, 92, 246, 0.18)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 9; i += 1) {
        const radius = 90 + i * 38 + Math.sin(time * 2 + i) * 6;
        ctx.globalAlpha = 0.16 - i * 0.012;
        ctx.beginPath();
        ctx.ellipse(width / 2, horizon + 8, radius * 1.9, radius * 0.42, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
      for (let i = 0; i < 90; i += 1) {
        const x = (Math.sin(i * 91.7) * 0.5 + 0.5) * width;
        const y = (Math.cos(i * 37.3) * 0.5 + 0.5) * height * 0.45;
        ctx.globalAlpha = 0.25 + Math.sin(time * 11 + i) * 0.15;
        ctx.fillRect(x, y, 1, 1);
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full opacity-80" aria-hidden />;
}
