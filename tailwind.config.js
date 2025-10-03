/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#58a6ff',
        'neon-purple': '#8a3ffc',
        'dark-bg': '#0d1117',
        'dark-card': 'rgba(13, 17, 23, 0.6)',
      },
      animation: {
        'gradient-wave': 'gradientWave 20s ease infinite',
      },
      keyframes: {
        gradientWave: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
