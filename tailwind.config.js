const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      white: colors.white,
      black: colors.black,
      purple: colors.purple,
      blue: colors.blue,
    },
    extend: {

    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
      opacity: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
