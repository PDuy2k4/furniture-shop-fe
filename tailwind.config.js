/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBg: 'rgb(255, 230, 201)',
        darkRaspberry: 'rgb(127, 38, 91)'
      },
    }
  },
  plugins: []
}
