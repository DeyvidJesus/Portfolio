/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        night: '#0d1f33',
        midnight: '#152c44',
        aurora: '#1f9d6d',
        neon: '#4affc0',
        charcoal: '#1b324a',
        slate: '#c7d6e5',
        smoke: '#23354b',
        sunrise: '#f8b37b',
        coral: '#ff7f6a',
        skyglass: '#e0f2ff',
        blush: '#ffe7f3'
      },
      boxShadow: {
        glow: '0 0 35px rgba(74, 255, 192, 0.2)',
        card: '0 15px 60px -20px rgba(12, 24, 38, 0.8)',
        aurora: '0 20px 45px -25px rgba(31, 157, 109, 0.35)'
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(31, 157, 109, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(31, 157, 109, 0.08) 1px, transparent 1px)',
        'light-hero': 'radial-gradient(circle at 15% 20%, rgba(31, 157, 109, 0.18) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(248, 179, 123, 0.28) 0, transparent 50%), radial-gradient(circle at 50% 90%, rgba(224, 242, 255, 0.55) 0, transparent 55%)',
        'light-layer': 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(224, 242, 255, 0.9) 35%, rgba(255, 231, 243, 0.8) 100%)'
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
