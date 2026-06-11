import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'

interface KineticTitleProps {
  line1: string
  line2: string
  accent: string
}

export function KineticTitle({ line1, line2, accent }: KineticTitleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scrollBlur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 6])
  const scrollYOffset = useTransform(scrollYProgress, [0, 0.5, 1], [0, -8, -24])
  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.94])
  const scrollOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.6])

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const combinedY = useTransform(
    [springY, scrollYOffset],
    ([sy, scy]) => (sy as number) + (scy as number),
  )

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    mouseX.set((e.clientX - cx) * 0.02)
    mouseY.set((e.clientY - cy) * 0.02)
  }

  const handleLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className="relative">
      <motion.h1
        style={{
          x: springX,
          y: combinedY,
          scale: scrollScale,
          opacity: scrollOpacity,
          filter: useTransform(scrollBlur, (b) => `blur(${b}px)`),
        }}
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
      >
        <span className="block text-white text-glow-violet">{line1}</span>
        <motion.span
          className="block text-transparent bg-clip-text mt-1"
          style={{
            backgroundImage: 'linear-gradient(135deg, #8b5cf6 0%, #00f0ff 50%, #8b5cf6 100%)',
            backgroundSize: '200% auto',
          }}
          animate={{ backgroundPosition: ['0% center', '200% center'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          {accent}
        </motion.span>
      </motion.h1>
      <motion.p
        style={{ x: useTransform(springX, (v) => v * 1.5), y: springY }}
        className="mt-4 font-mono text-sm text-cyan-glow/80 tracking-[0.3em] uppercase"
      >
        {line2}
      </motion.p>
    </div>
  )
}
