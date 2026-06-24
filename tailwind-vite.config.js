/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#030508',
        deep: '#070b14',
        violet: {
          glow: '#8b5cf6',
          dim: 'rgba(139, 92, 246, 0.12)',
        },
        cyan: {
          glow: '#00f0ff',
          dim: 'rgba(0, 240, 255, 0.1)',
        },
        green: {
          glow: '#00ff88',
          dim: 'rgba(0, 255, 136, 0.08)',
        },
        amber: {
          glow: '#ffb800',
          dim: 'rgba(255, 184, 0, 0.08)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        grain: 'grain 8s steps(10) infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        blink: 'blink 2.5s ease-in-out infinite',
        shimmerEdge: 'shimmerEdge 3s ease-in-out infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        shimmerEdge: {
          '0%, 100%': { opacity: '0.5', transform: 'scaleY(0.85)' },
          '50%': { opacity: '1', transform: 'scaleY(1)' },
        },
      },
      backdropBlur: {
        glass: '24px',
      },
    },
  },
  plugins: [],
}
