import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BentoCard } from '../BentoCard'
import { MagneticButton } from '../MagneticButton'
import { auditMatrix } from '../../data/portfolio'

export function Web3Section() {
  const [gasStatus, setGasStatus] = useState<'ok' | 'warn'>('warn')

  useEffect(() => {
    const id = setInterval(() => {
      setGasStatus(Math.random() > 0.5 ? 'ok' : 'warn')
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="web3" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="section-label mb-2">// SYS/04 — WEB3 INFRASTRUCTURE</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Smart Contract Security Matrix
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-4">
        <BentoCard span="lg" accent="violet">
          <h3 className="font-display text-lg font-bold text-white mb-3">
            Harold Health Audit Disclosure
          </h3>
          <div className="grid grid-cols-2 gap-3 font-mono text-[0.7rem] mb-4 p-3 rounded-xl bg-black/30 border border-white/5">
            <div><span className="text-slate-500">TARGET:</span> Harold Health v1.0</div>
            <div><span className="text-slate-500">SEVERITY:</span> <span className="text-red-400">CRITICAL</span></div>
            <div><span className="text-slate-500">VULN:</span> Broken Access Control</div>
            <div><span className="text-slate-500">STATUS:</span> <span className="text-green-glow">MITIGATED</span></div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Authorization flaw isolated in patient-to-provider credential registry. Missing identity
            matching filters permitted cross-entitled account data interception — patched with strict
            owner validation.
          </p>
          <pre className="text-[0.68rem] font-mono p-3 rounded-xl bg-black/40 border border-red-500/20 overflow-x-auto text-slate-400 mb-4">
            <span className="text-violet-glow">require</span>(records[_recordId].owner == msg.sender, <span className="text-amber-glow">"Auth Failed"</span>);
          </pre>
          <MagneticButton
            href="https://medium.com/@kareebsadab/w3d-security-report-c79cc07ca721"
            variant="primary"
          >
            Decrypt Full Report →
          </MagneticButton>
        </BentoCard>

        <BentoCard span="lg" accent="cyan">
          <h3 className="font-mono text-[0.65rem] text-cyan-glow uppercase tracking-wider mb-4">
            Vulnerability Mitigation Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-[0.72rem]">
              <thead>
                <tr className="text-slate-500 border-b border-white/10">
                  <th className="text-left py-2 pr-4">Vector</th>
                  <th className="text-left py-2 pr-4">Mitigation</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {auditMatrix.map((row) => {
                  const status =
                    row.vector === 'Gas Optimization' ? gasStatus : row.status
                  return (
                    <tr key={row.vector} className="border-b border-white/5">
                      <td className="py-2.5 pr-4 text-slate-400">{row.vector}</td>
                      <td className="py-2.5 pr-4 text-slate-500">{row.mitigation}</td>
                      <td
                        className={`py-2.5 font-bold ${
                          status === 'ok' ? 'text-green-glow' : 'text-amber-glow animate-blink'
                        }`}
                      >
                        [ {status === 'ok' ? 'OK' : 'WARN'} ]
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </BentoCard>
      </div>
    </section>
  )
}
