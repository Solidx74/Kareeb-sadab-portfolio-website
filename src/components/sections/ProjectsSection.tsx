import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BentoCard } from '../BentoCard'
import { MagneticButton } from '../MagneticButton'
import { projects, type ProjectCategory } from '../../data/portfolio'

const filters: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Deployments' },
  { id: 'security', label: 'SOC / Security' },
  { id: 'agents', label: 'AI Agents' },
  { id: 'ml', label: 'ML Models' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'web3', label: 'Web3' },
]

const accentDot = {
  violet: 'bg-violet-glow shadow-[0_0_6px_#8b5cf6]',
  cyan: 'bg-cyan-glow shadow-[0_0_6px_#00f0ff]',
  green: 'bg-green-glow shadow-[0_0_6px_#00ff88]',
  amber: 'bg-amber-glow shadow-[0_0_6px_#ffb800]',
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all')

  const filtered = projects.filter((p) => filter === 'all' || p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="mb-10"
      >
        <p className="section-label mb-2">// SYS/02 — SOC OPERATIONS</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Active Deployments
        </h2>
        <p className="text-slate-500 mt-2 max-w-xl">
          Modular bento grid showcasing security pipelines, AI agents, ML models, and Web3 infrastructure.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.id}
            data-magnetic
            onClick={() => setFilter(f.id)}
            className={`
              font-mono text-[0.62rem] uppercase tracking-wider px-4 py-2 rounded-xl border
              transition-all duration-300
              ${filter === f.id
                ? 'border-violet-glow/50 text-violet-glow bg-violet-dim'
                : 'border-white/10 text-slate-500 hover:border-cyan-glow/30 hover:text-cyan-glow'}
            `}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className={
                project.span === 'xl'
                  ? 'md:col-span-2 lg:col-span-4'
                  : project.span === 'lg'
                    ? 'md:col-span-2 lg:col-span-2 lg:row-span-2'
                    : project.span === 'md'
                      ? 'md:col-span-2'
                      : ''
              }
            >
              <BentoCard span="sm" accent={project.accent || 'violet'}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${accentDot[project.accent || 'violet']}`} />
                  <span className="font-mono text-[0.58rem] text-slate-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="ml-auto font-mono text-[0.55rem] text-amber-glow border border-amber-glow/30 px-2 py-0.5 rounded">
                      FLAGSHIP
                    </span>
                  )}
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.55rem] px-2 py-0.5 rounded border border-white/10 text-slate-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.href && (
                    <MagneticButton href={project.href} variant="primary">
                      Code →
                    </MagneticButton>
                  )}
                  {project.liveHref && (
                    <MagneticButton href={project.liveHref} variant="cyan">
                      Live →
                    </MagneticButton>
                  )}
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
