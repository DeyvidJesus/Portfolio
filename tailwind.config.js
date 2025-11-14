/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    fontFamily: {
      sansSerif: ['Poppins', 'sans-serif'],
      serif: ['Montserrat', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    },
    extend: {
      colors: {
        night: '#050c16',
        midnight: '#0a1829',
        aurora: '#1f9d6d',
        neon: '#4affc0',
        charcoal: '#0b1320',
        slate: '#a0b3c5',
        smoke: '#1f2733'
      },
      boxShadow: {
        glow: '0 0 35px rgba(74, 255, 192, 0.2)',
        card: '0 15px 60px -20px rgba(12, 24, 38, 0.8)'
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(31, 157, 109, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(31, 157, 109, 0.08) 1px, transparent 1px)'
      },
      backgroundSize: {
        'grid-pattern': '40px 40px'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease forwards'
      }
    }
  },
  plugins: [],
}
