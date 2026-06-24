import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('[data-magnetic], a, button'))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [visible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-screen"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          scale: hovering ? 1.8 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.4 }}
      >
        <div
          className="w-3 h-3 rounded-full border border-cyan-glow/80 bg-cyan-glow/20"
          style={{ boxShadow: '0 0 12px rgba(0, 240, 255, 0.6)' }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x - 150,
          y: pos.y - 150,
          opacity: visible ? 0.35 : 0,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        <div
          className="w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          }}
        />
      </motion.div>
    </>
  )
}
