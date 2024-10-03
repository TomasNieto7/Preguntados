/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#6F259B',
        'color2': '#190620',
        'color3': '#CE93FF',
        'colorA1': '#6CE6FF',
        'color4': '#FF7BDA',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle , var(--tw-gradient-stops))'

      },
      fontFamily: {
        Queso: ["Bakbak One, sans-serif"],
        bahianita: ['Bahianita', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
        fadeIn: 'fadeIn 0.5s forwards',
        bounce: "bounce 1.5s infinite",
      },
    },
  },
  plugins: [],
}