const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#21242D',
        'secondary': '#6C5DD3',
        'button': '#242731',
        'text-primary': '#808191',
        'text-secondary': '#B3B4C4',
        'color-primary': '#EC615B',
        'color-secondary': '#EBA352',
        'color-tertiary': '#7FBA7A',
        'border-primary': 'rgba(228,228,228,0.1)',
        orange: colors.orange,
        teal: colors.teal,
        lightBlue: colors.lightBlue
      },
      fontFamily: {
        'heading': ['Poppins', 'sans serif'],
        'body': ['Inter', 'sans serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
