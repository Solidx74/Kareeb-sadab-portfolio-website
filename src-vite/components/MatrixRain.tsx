import { useEffect, useRef } from 'react'

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const chars = '01ABCDEF$#@%+-/*'
    const fontSize = 16
    let cols = 0
    let drops: number[] = []
    let animId = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      cols = Math.floor(canvas.width / fontSize) + 1
      drops = Array.from({ length: cols }, () => Math.random() * -100)
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 5, 8, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillStyle = 'rgba(139, 92, 246, 0.06)'
        ctx.fillText(text, x, y)
        ctx.fillStyle = 'rgba(0, 240, 255, 0.12)'
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y + fontSize)

        if (y > canvas.height && Math.random() > 0.985) drops[i] = 0
        drops[i]++
      }
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-60"
      aria-hidden
    />
  )
}
