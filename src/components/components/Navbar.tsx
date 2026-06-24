import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navSections } from '@/data/portfolio'

export function Navbar() {
  const [time, setTime] = useState('--:--:-- UTC')
  const [active, setActive] = useState('command')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const h = String(now.getUTCHours()).padStart(2, '0')
      const m = String(now.getUTCMinutes()).padStart(2, '0')
      const s = String(now.getUTCSeconds()).padStart(2, '0')
      setTime(`${h}:${m}:${s} UTC`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const sections = navSections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )
    sections.forEach((s) => observer.observe(s!))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 inset-x-0 z-[1000] glass-panel rounded-none border-x-0 border-t-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-glow animate-blink shadow-[0_0_8px_#00ff88]" />
          <span className="font-mono text-[0.7rem] text-violet-glow tracking-[0.2em] uppercase hidden sm:inline">
            SOLIDX74 // COMMAND
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-magnetic
              className={`
                font-mono text-[0.62rem] uppercase tracking-[0.15em] px-4 py-2 rounded-lg
                transition-all duration-300
                ${active === s.id
                  ? 'text-cyan-glow bg-cyan-dim border border-cyan-glow/20'
                  : 'text-slate-500 hover:text-violet-glow hover:bg-violet-dim'}
              `}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <span className="font-mono text-[0.62rem] text-slate-500 tracking-wider">{time}</span>
      </div>
    </motion.header>
  )
}
