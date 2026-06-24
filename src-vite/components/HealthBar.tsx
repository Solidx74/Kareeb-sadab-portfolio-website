import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function HealthBar() {
  const [metrics, setMetrics] = useState({ cpu: 42, mem: 63, net: 240, threat: 'SECURE' })

  useEffect(() => {
    const id = setInterval(() => {
      const cpu = Math.floor(35 + Math.random() * 30)
      const mem = Math.floor(55 + Math.random() * 20)
      const net = Math.floor(140 + Math.random() * 280)
      setMetrics({
        cpu,
        mem,
        net,
        threat: cpu > 60 ? 'SECURE [LOAD]' : 'SECURE',
      })
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="fixed top-14 inset-x-0 z-[999] glass-panel rounded-none border-x-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[0.62rem] tracking-wider">
        {[
          { label: 'CPU', value: `${metrics.cpu}%`, bar: metrics.cpu, color: 'bg-green-glow' },
          { label: 'MEM', value: `${metrics.mem}%`, bar: metrics.mem, color: 'bg-cyan-glow' },
          { label: 'NET INGEST', value: `${metrics.net} pkts/s`, bar: null, color: '' },
          { label: 'THREAT', value: metrics.threat, bar: null, color: 'text-green-glow' },
        ].map((m) => (
          <div key={m.label} className="flex items-center gap-2 text-slate-500">
            <span className="uppercase">{m.label}:</span>
            <span className={`font-bold ${m.color || 'text-cyan-glow'}`}>{m.value}</span>
            {m.bar !== null && (
              <div className="hidden sm:block flex-1 max-w-[80px] h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${m.color} rounded-full`}
                  animate={{ width: `${m.bar}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
