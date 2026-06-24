import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { useMechanicalClick } from '@/hooks/useMechanicalClick'

interface MagneticButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'ghost' | 'cyan'
  type?: 'button' | 'submit'
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const playClick = useMechanicalClick()

  const variants = {
    primary: 'border-violet-glow/50 text-violet-glow hover:bg-violet-glow/10',
    ghost: 'border-white/10 text-slate-400 hover:text-white hover:border-white/20',
    cyan: 'border-cyan-glow/50 text-cyan-glow hover:bg-cyan-dim',
  }

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setOffset({
      x: (e.clientX - cx) * 0.35,
      y: (e.clientY - cy) * 0.35,
    })
  }

  const handleLeave = () => setOffset({ x: 0, y: 0 })

  const handleClick = () => {
    playClick()
    onClick?.()
  }

  const inner = (
    <motion.div
      ref={ref}
      data-magnetic
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`
        inline-flex items-center justify-center gap-2
        font-mono text-[0.68rem] uppercase tracking-[0.18em]
        px-5 py-2.5 rounded-xl border backdrop-blur-sm
        transition-colors duration-300 cursor-none
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={playClick}>
        {inner}
      </a>
    )
  }

  return (
    <button type={type} onClick={handleClick} className="cursor-none">
      {inner}
    </button>
  )
}
