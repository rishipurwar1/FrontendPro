const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    scale: {
      102: "1.02",
    },
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
      boxShadow: {
        primary:
          "0px 15px 25px rgba(148, 163, 184, 0.15), 0px 5px 10px rgba(148, 163, 184, 0.05)",
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
