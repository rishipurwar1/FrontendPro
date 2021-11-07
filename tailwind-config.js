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
        facebook: "rgba(24, 140, 188)",
        linkedin: "rgba(0, 119, 181)",
        twitter: "rgba(40, 142, 218)",
        discord: "rgba(24, 140, 188)",
        reddit: "rgba(255, 67, 1)",
        link: "rgba(151, 156, 162)",
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
      zIndex: {
        full: "9999",
      },
    },
  },
  variants: {
    extend: {
      gridColumn: ["last"],
    },
  },
  plugins: [],
}
