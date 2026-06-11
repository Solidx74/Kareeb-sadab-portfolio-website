import { CustomCursor } from './components/CustomCursor'
import { GrainOverlay } from './components/GrainOverlay'
import { MatrixRain } from './components/MatrixRain'
import { Navbar } from './components/Navbar'
import { HealthBar } from './components/HealthBar'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { StackSection } from './components/sections/StackSection'
import { Web3Section } from './components/sections/Web3Section'
import { ContactSection } from './components/sections/ContactSection'

export default function App() {
  return (
    <>
      <CustomCursor />
      <GrainOverlay />
      <MatrixRain />

      {/* Ambient vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[9995]"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(3, 5, 8, 0.75) 100%)',
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

      <footer className="relative z-10 border-t border-white/[0.06] py-6 px-6 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-[0.58rem] text-slate-600 tracking-wider">
        <div>
          <span className="text-violet-glow">SOLIDX74</span> // MD. KAREEB SADAB · CISO
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-glow animate-blink shadow-[0_0_6px_#00ff88]" />
          ALL TERMINALS SECURE
        </div>
        <div>© 2026 // CUET · DHAKA · BD</div>
      </footer>
    </>
  )
}
