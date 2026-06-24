"use client";

import { CustomCursor } from "@/components/components/CustomCursor";
import { GrainOverlay } from "@/components/components/GrainOverlay";
import { HealthBar } from "@/components/components/HealthBar";
import { MatrixRain } from "@/components/components/MatrixRain";
import { Navbar } from "@/components/components/Navbar";
import { ContactSection } from "@/components/components/sections/ContactSection";
import { HeroSection } from "@/components/components/sections/HeroSection";
import { ProjectsSection } from "@/components/components/sections/ProjectsSection";
import { StackSection } from "@/components/components/sections/StackSection";
import { Web3Section } from "@/components/components/sections/Web3Section";
import { HeroOdyssey } from "@/components/ui/hero-odyssey";

export function PortfolioApp() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <HeroOdyssey />
      </div>

      <div className="relative z-10 min-h-screen">
        <CustomCursor />
        <GrainOverlay />
        <MatrixRain />

        <div
          className="fixed inset-0 pointer-events-none z-[9995]"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(3, 5, 8, 0.75) 100%)",
          }}
          aria-hidden
        />

        <Navbar />
        <HealthBar />

        <main className="relative z-10 pb-8">
          <HeroSection />
          <ProjectsSection />
          <StackSection />
          <Web3Section />
          <ContactSection />
        </main>

        <footer className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] px-6 py-6 font-mono text-[0.58rem] tracking-wider text-slate-600">
          <div>
            <span className="text-violet-glow">SOLIDX74</span>
            {" // MD. KAREEB SADAB - CISO"}
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-glow shadow-[0_0_6px_#00ff88] animate-blink" />
            ALL TERMINALS SECURE
          </div>
          <div>© 2026 // CUET - DHAKA - BD</div>
        </footer>
      </div>
    </>
  );
}
