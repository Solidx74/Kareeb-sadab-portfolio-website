import { motion } from 'framer-motion'
import { KineticTitle } from '../KineticTitle'
import { BentoCard } from '../BentoCard'
import { MagneticButton } from '../MagneticButton'
import { profile, kpis } from '../../data/portfolio'

const bootLines = [
  { status: 'ok', text: 'KERNEL :: security-matrix v4.2.1 initialized' },
  { status: 'ok', text: 'MODULE :: detection-engine loaded' },
  { status: 'ok', text: 'MODULE :: automation-pipelines loaded' },
  { status: 'ok', text: 'MODULE :: ai-analytics-core loaded' },
  { status: 'addr', text: 'AUTH :: profile MD.KAREEB.SADAB verified' },
  { status: 'ok', text: 'READY :: awaiting operator input ▌' },
]

export function HeroSection() {
  return (
    <section id="command" className="relative pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
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
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=KS&background=8b5cf6&color=fff&size=256`
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
              <div className="flex flex-wrap gap-3 pt-2">
                <MagneticButton href={profile.links.dataScience} variant="cyan">
                  Data Science →
                </MagneticButton>
                <MagneticButton href={profile.links.dataAnalysis} variant="ghost">
                  Data Analysis →
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <BentoCard span="sm" accent={kpi.accent}>
                <div className="text-center flex-1 flex flex-col justify-center">
                  <div
                    className={`font-display text-2xl font-black mb-1 ${
                      kpi.accent === 'cyan'
                        ? 'text-cyan-glow text-glow-cyan'
                        : kpi.accent === 'green'
                          ? 'text-green-glow'
                          : 'text-violet-glow text-glow-violet'
                    }`}
                  >
                    {kpi.value}
                  </div>
                  <div className="font-mono text-[0.58rem] text-slate-500 uppercase tracking-wider">
                    {kpi.label}
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          ))}
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
