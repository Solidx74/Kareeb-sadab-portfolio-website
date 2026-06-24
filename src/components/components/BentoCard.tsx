import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion'

interface BentoCardProps {
  children: ReactNode
  className?: string
  span?: 'sm' | 'md' | 'lg' | 'xl'
  accent?: 'violet' | 'cyan' | 'green' | 'amber'
}

const spanClasses = {
  sm: 'col-span-1 row-span-1',
  md: 'col-span-1 md:col-span-2 row-span-1',
  lg: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2',
  xl: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2',
}

const accentGlow = {
  violet: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] bento-edge-violet',
  cyan: 'hover:shadow-[0_0_40px_rgba(0,240,255,0.12)] bento-edge-cyan',
  green: 'hover:shadow-[0_0_40px_rgba(0,255,136,0.12)] bento-edge-green',
  amber: 'hover:shadow-[0_0_40px_rgba(255,184,0,0.12)] bento-edge-amber',
}

export function BentoCard({
  children,
  className = '',
  span = 'sm',
  accent = 'violet',
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 20 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const breatheScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.94, 1.03, 1.03, 0.96])
  const breatheOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.85])

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rotateY.set(x * 12)
    rotateX.set(-y * 12)
  }

  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ scale: breatheScale, opacity: breatheOpacity }}
      className={`${spanClasses[span]} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        className={`
          h-full min-h-[180px] glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6
          flex flex-col ${accentGlow[accent]}
        `}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
