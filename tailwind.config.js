/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1': '#6F259B',
        'color2': '#4F007A',
        'color3': '#CE93FF'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}