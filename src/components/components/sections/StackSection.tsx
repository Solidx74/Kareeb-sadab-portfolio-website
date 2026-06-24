import { motion } from 'framer-motion'
import { BentoCard } from '../BentoCard'
import { skillsMatrix, activeVectors } from '@/data/portfolio'

const matrixColumns = [
  {
    title: 'Languages & Runtime',
    items: skillsMatrix.languages,
    accent: 'violet' as const,
    chipClass: 'bg-violet-dim border-violet-glow/20 text-violet-glow',
    titleClass: 'text-violet-glow',
  },
  {
    title: 'Security & Infrastructure',
    items: skillsMatrix.security,
    accent: 'cyan' as const,
    chipClass: 'bg-cyan-dim border-cyan-glow/20 text-cyan-glow',
    titleClass: 'text-cyan-glow',
  },
  {
    title: 'AI / Data Pipeline',
    items: skillsMatrix.aiData,
    accent: 'green' as const,
    chipClass: 'bg-green-dim border-green-glow/20 text-green-glow',
    titleClass: 'text-green-glow',
  },
]

export function StackSection() {
  return (
    <section id="stack" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="section-label mb-2">{"// SYS/03 - TECH ARSENAL"}</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Detection Stack Matrix
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {matrixColumns.map((col) => (
          <BentoCard key={col.title} span="sm" accent={col.accent}>
            <h3 className={`font-display text-sm font-bold mb-4 uppercase tracking-wider ${col.titleClass}`}>
              {col.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {col.items.map((t) => (
                <span
                  key={t}
                  className={`font-mono text-xs px-3 py-1.5 rounded-lg border ${col.chipClass}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </BentoCard>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <BentoCard span="sm" accent="amber">
          <h3 className="font-mono text-[0.65rem] text-amber-glow uppercase tracking-wider mb-3">
            CTF Record - picoCTF 2026
          </h3>
          <div className="font-mono text-sm text-slate-400 space-y-1">
            <p>
              Team: <span className="text-white">CUET Cryptic Knights</span>
            </p>
            <p>
              Rank: <span className="text-cyan-glow">#938 Global</span> - Score: 7,200 pts
            </p>
            <p>Solved: 35 challenges across Crypto, Forensics, Web, RE</p>
          </div>
        </BentoCard>

        <BentoCard span="sm" accent="violet">
          <h3 className="font-mono text-[0.65rem] text-violet-glow uppercase tracking-wider mb-3">
            Certifications
          </h3>
          <ul className="text-sm text-slate-400 space-y-1.5">
            <li>Google - Cybersecurity Professional Certificate</li>
            <li>IBM - Data Science Professional Certificate</li>
            <li>Meta - Frontend Developer Professional Certificate</li>
            <li>DeepLearning.AI - Machine Learning Specialization</li>
          </ul>
        </BentoCard>

        <BentoCard span="sm" accent="green">
          <h3 className="font-mono text-[0.65rem] text-green-glow uppercase tracking-wider mb-3">
            Active Vectors
          </h3>
          <ul className="text-sm text-slate-400 space-y-2">
            {activeVectors.map((v) => (
              <li key={v} className="flex gap-2">
                <span className="text-green-glow shrink-0">-&gt;</span>
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </BentoCard>
      </div>
    </section>
  )
}
