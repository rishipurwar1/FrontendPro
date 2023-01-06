const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "300px",
      xxl: "1536px",
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
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: " rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate( 0.0deg)" },
          "100%": { transform: "rotate( 0.0deg)" },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "50%": {
            transform: "rotate(180deg) scale(1.3)",
          },

          "100%": {
            transform: "rotate(360deg) scale(1)",
          },
        },

        move: {
          "0%": {
            transform: "translate(0)",
          },
          "25%": {
            transform: "translate(-1px,2px)",
          },
          "50%": {
            transform: "translate(-2px,2px)",
          },

          "75%": {
            transform: "translate(2px,2px)",
          },
          "100%": {
            transform: "translate(0)",
          },
        },
      },
      animation: {
        wave: "wave 2.5s ease-in-out infinite",
        rotate: "rotate 0.5s linear 1",
        move: "move 1s linear infinite",
      },
      scale: {
        102: "1.02",
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
