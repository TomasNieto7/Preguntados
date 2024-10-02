/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1': '#6F259B',
        'color2': '#190620',
        'color3': '#CE93FF',
        'colorA1' : '#6CE6FF',
        'color4' : '#FF7BDA',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle , var(--tw-gradient-stops))'
      
      },
      fontFamily: {
        Queso: ["Bakbak One, sans-serif"]
    },
  },
  },
  plugins: [],
}