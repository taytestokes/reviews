const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '440px',
      md: '680px',
      lg: '900px',
      xl: '1080px',
      '2xl': '1236px',
    },
    colors: {
      ...colors,
      gray: colors.gray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
