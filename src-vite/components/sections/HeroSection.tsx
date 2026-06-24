import { motion } from 'framer-motion'
import { KineticTitle } from '../KineticTitle'
import { BentoCard } from '../BentoCard'
import { profile, kpis, quickLinks } from '../../data/portfolio'
import { useMechanicalClick } from '../../hooks/useMechanicalClick'

const bootLines = [
  { status: 'ok', text: 'KERNEL :: security-matrix v4.2.1 initialized' },
  { status: 'ok', text: 'MODULE :: detection-engine loaded' },
  { status: 'ok', text: 'MODULE :: automation-pipelines loaded' },
  { status: 'ok', text: 'MODULE :: ai-analytics-core loaded' },
  { status: 'addr', text: 'AUTH :: profile MD.KAREEB.SADAB verified' },
  { status: 'ok', text: 'READY :: awaiting operator input ▌' },
]

const kpiStripClass = {
  green: 'kpi-strip-green',
  cyan: 'kpi-strip-cyan',
  violet: 'kpi-strip-violet',
}

const kpiValueClass = {
  green: 'text-green-glow',
  cyan: 'text-cyan-glow text-glow-cyan',
  violet: 'text-violet-glow text-glow-violet',
}

export function HeroSection() {
  const playClick = useMechanicalClick()

  return (
    <section id="command" className="relative pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-12 items-start"
      >
        <div>
          <p className="section-label mb-4">// SYS/01 — OPERATOR PROFILE</p>
          <KineticTitle line1="KAREEB" accent="SADAB" line2="Security Engineer · CISO Command Center" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-6 items-start"
          >
            <div className="relative shrink-0">
              <div className="w-32 h-40 rounded-xl overflow-hidden border border-violet-glow/40 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                <img
                  src={profile.photo}
                  alt="Operator Avatar"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://ui-avatars.com/api/?name=KS&background=8b5cf6&color=fff&size=256'
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-violet-glow/20 to-transparent pointer-events-none" />
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs text-cyan-glow">
                Handle: <strong>{profile.handle}</strong> · {profile.tagline}
              </p>
              <p className="text-slate-400 leading-relaxed max-w-md">{profile.bio}</p>
              <p className="font-mono text-sm text-violet-glow border-l-2 border-violet-glow/50 pl-3">
                {profile.title}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className={`kpi-strip ${kpiStripClass[kpi.accent]}`}
            >
              <div className={`font-display text-2xl font-bold shrink-0 ${kpiValueClass[kpi.accent]}`}>
                {kpi.value}
              </div>
              <div className="font-mono text-[0.62rem] text-slate-500 uppercase tracking-wider leading-snug">
                {kpi.label}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
          >
            <BentoCard span="sm" accent="cyan">
              <div className="font-mono text-[0.62rem] text-cyan-glow uppercase tracking-wider mb-3">
                Quick Links // Relay Channels
              </div>
              <div className="space-y-1.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    data-magnetic
                    onClick={playClick}
                    className="quick-link-row group"
                  >
                    <span className="font-mono text-xs text-slate-300 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    <span className="font-mono text-[0.55rem] text-slate-600 group-hover:text-cyan-glow transition-colors">
                      {link.tag} →
                    </span>
                  </a>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-10"
      >
        <BentoCard span="md" accent="green">
          <div className="font-mono text-[0.65rem] text-slate-500 mb-3 uppercase tracking-wider">
            System Boot Console
          </div>
          <div className="space-y-1.5 font-mono text-[0.68rem]">
            {bootLines.map((line) => (
              <div key={line.text} className="text-slate-500">
                <span className={line.status === 'ok' ? 'text-green-glow' : 'text-cyan-glow'}>
                  [ {line.status === 'ok' ? 'OK' : 'AUTH'} ]
                </span>{' '}
                {line.text}
              </div>
            ))}
          </div>
        </BentoCard>
      </motion.div>
    </section>
  )
}
