/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px'
    },
    colors: {
      'black': '#000',
      'white': '#FFF',
      'light-gray': '#D2D2D2',
      'dark-gray': '#1E1E1E',
      'royal-blue': '#1649FF',
      'link-blue': '#0057FF',
    },
    fontFamily: {
      serif: ['Montserrat', 'serif'],
      sansSerif: ['Poppins','sans-serif'],
    }
  },
  plugins: [],
}