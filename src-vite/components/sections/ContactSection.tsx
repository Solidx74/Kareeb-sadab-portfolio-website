import { motion } from 'framer-motion'
import { BentoCard } from '../BentoCard'
import { MagneticButton } from '../MagneticButton'
import { socialLinks } from '../../data/portfolio'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="section-label mb-2">// SYS/05 — SECURE UPLINK</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Encrypted Relay Channels
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <BentoCard span="lg" accent="green">
            <div className="font-mono text-green-glow text-sm mb-4">
              C:\&gt; transmit-parameters --mode secure
            </div>
            <form
              action="https://formspree.io/f/xpqeypvd"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-wider block mb-1">
                  &gt; Operator Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-2.5 font-mono text-sm text-slate-300 focus:border-violet-glow/50 focus:outline-none focus:bg-violet-dim/30 transition-all"
                  placeholder="Enter signal name..."
                />
              </div>
              <div>
                <label className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-wider block mb-1">
                  &gt; Relay Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-2.5 font-mono text-sm text-slate-300 focus:border-violet-glow/50 focus:outline-none focus:bg-violet-dim/30 transition-all"
                  placeholder="signal@address.com"
                />
              </div>
              <div>
                <label className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-wider block mb-1">
                  &gt; Signal Parameters
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-2.5 font-mono text-sm text-slate-300 focus:border-violet-glow/50 focus:outline-none focus:bg-violet-dim/30 transition-all resize-y"
                  placeholder="Configure connection payload..."
                />
              </div>
              <MagneticButton type="submit" variant="primary">
                Execute Transmission
              </MagneticButton>
            </form>
          </BentoCard>
        </div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {socialLinks.map((link) => (
            <BentoCard key={link.label} span="sm" accent="violet">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-sm font-bold text-white">{link.label}</h3>
                <span className="font-mono text-[0.55rem] text-cyan-glow border border-cyan-glow/30 px-2 py-0.5 rounded">
                  {link.status}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-4 flex-1">{link.note}</p>
              <MagneticButton href={link.href} variant="cyan">
                Access Link →
              </MagneticButton>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
