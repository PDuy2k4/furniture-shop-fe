/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { heigh: '0' },
          '100%': { heigh: '100%' }
        }
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out'
      }
    }
  },
  plugins: []
}
