"use client";

import React, { useCallback, useRef, useState } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SplashEntry({ onEnter }: { onEnter: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const touchStartY = useRef<number | null>(null);

  const handleEnter = useCallback(() => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(onEnter, 700);
  }, [leaving, onEnter]);

  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  }, []);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      const startY = touchStartY.current;
      const endY = event.changedTouches[0]?.clientY ?? startY;
      touchStartY.current = null;

      if (startY === null || endY === null || startY - endY > 28) {
        handleEnter();
      }
    },
    [handleEnter],
  );

  return (
    <div
      onClick={handleEnter}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: leaving ? "translateY(-100vh)" : "translateY(0)",
        transition: "transform 0.7s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      className="fixed inset-0 z-50 flex h-screen w-full cursor-pointer select-none flex-col items-center justify-center overflow-hidden bg-black px-5"
    >
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.18) 3px)",
        }}
      />

      <h1 className="relative z-20 text-center font-display text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
        KAREEB
        <br />
        <span style={{ color: "#00ff88", textShadow: "0 0 40px #00ff88aa" }}>
          SADAB
        </span>
      </h1>

      <p className="relative z-20 mt-4 max-w-[92vw] text-center font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#5a7a8a] sm:text-xs md:text-sm md:tracking-[0.25em]">
        Security Engineer · AI/ML Developer · Web3 Architect
      </p>

      <div className="relative -mt-2 h-40 w-[32rem] max-w-full">
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-green-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#00ff88"
        />

        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>

      <div className="relative z-20 mt-12 flex animate-blink flex-col items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#2a4050]">
        <span>[ CLICK OR TAP TO ENTER TERMINAL ]</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}
