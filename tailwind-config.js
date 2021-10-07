const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#21242D",
        secondary: "#6C5DD3",
        button: "#242731",
        "text-primary": "#808191",
        "text-secondary": "#B3B4C4",
        "color-primary": "#EC615B",
        "color-secondary": "#EBA352",
        "color-tertiary": "#7FBA7A",
        "border-primary": "rgba(228,228,228,0.1)",
        orange: colors.orange,
        teal: colors.teal,
        lightBlue: colors.lightBlue,
      },
      fontFamily: {
        heading: ["Poppins", "sans serif"],
        body: ["Inter", "sans serif"],
      },
      gridTemplateColumns: {
        "layout-desktop": "200px 1fr",
        "layout-tablet": "55px 1fr",
      },
      gridTemplateRows: {
        "layout-desktop": "80px 1fr 80px",
      },
    },
  },
  variants: {
    extend: {
      gridColumn: ["last"],
    },
    animation: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
