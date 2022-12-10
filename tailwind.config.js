/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '525px'
      },
      colors: {
        primaryBg: '#121026',
        textColor: '#8c8a95',
        textHover: '#b1147d',
        searchBg: '#19162c',
        textColorSec: '#d0cfd4',
        textHoverSec: '#f1f1f1',
        placeholderColor: '#757380',
        redPointer: '#b1147d',
        menuShadow: '0 0 20px rgba(0,0,0,0.4)',
        menuBg: '#19162c',
        cardBg: '#252041',
      },
    },
  },
  plugins: [],
}