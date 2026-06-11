import { motion } from 'framer-motion'
import { BentoCard } from '../BentoCard'
import { techStack } from '../../data/portfolio'

export function StackSection() {
  return (
    <section id="stack" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="section-label mb-2">// SYS/03 — TECH ARSENAL</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Detection Stack Matrix
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        <BentoCard span="lg" accent="violet">
          <h3 className="font-display text-sm font-bold text-violet-glow mb-4 uppercase tracking-wider">
            Languages & Runtime
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 6).map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded-lg bg-violet-dim border border-violet-glow/20 text-violet-glow"
              >
                {t}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard span="md" accent="cyan">
          <h3 className="font-display text-sm font-bold text-cyan-glow mb-4 uppercase tracking-wider">
            Security & Infra
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Burp Suite', 'Linux', 'Docker', 'Git', 'MongoDB'].map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded-lg bg-cyan-dim border border-cyan-glow/20 text-cyan-glow"
              >
                {t}
              </span>
            ))}
          </div>
        </BentoCard>

        <BentoCard span="md" accent="green">
          <h3 className="font-display text-sm font-bold text-green-glow mb-4 uppercase tracking-wider">
            AI / Data Pipeline
          </h3>
          <div className="flex flex-wrap gap-2">
            {['TensorFlow', 'PyTorch', 'Pandas', 'scikit-learn', 'SQL', 'Tableau'].map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 rounded-lg bg-green-dim border border-green-glow/20 text-green-glow"
              >
                {t}
              </span>
            ))}
          </div>
        </BentoCard>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <BentoCard span="md" accent="amber">
          <h3 className="font-mono text-[0.65rem] text-amber-glow uppercase tracking-wider mb-3">
            CTF Record — picoCTF 2026
          </h3>
          <div className="font-mono text-sm text-slate-400 space-y-1">
            <p>Team: <span className="text-white">CUET Cryptic Knights</span></p>
            <p>Rank: <span className="text-cyan-glow">#938 Global</span> · Score: 7,200 pts</p>
            <p>Solved: 35 challenges across Crypto, Forensics, Web, RE</p>
          </div>
        </BentoCard>

        <BentoCard span="md" accent="violet">
          <h3 className="font-mono text-[0.65rem] text-violet-glow uppercase tracking-wider mb-3">
            Certifications
          </h3>
          <ul className="text-sm text-slate-400 space-y-1.5">
            <li>Google — Cybersecurity Professional Certificate</li>
            <li>IBM — Data Science Professional Certificate</li>
            <li>Meta — Frontend Developer Professional Certificate</li>
            <li>DeepLearning.AI — Machine Learning Specialization</li>
          </ul>
        </BentoCard>
      </div>
    </section>
  )
}
