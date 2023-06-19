/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "489px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        dark: "black",
        light: "white",
        verified: "#1e8b26",
        pending: "#b04200",
        reclassified: "#505152",
        eab: "#2ba696",
      },
      fontFamily: {
        baloo: ["'Baloo Paaji 2'"],
        sans: ["Helvetica, Helvetica Neue"],
      },
      letterSpacing: {
        widest: ".3em",
      },
      transformOrigin: {
        0: "0%",
        50: "50%",
        100: "100%",
      },
    },
  },
  variants: {
    extend: {
      transformOrigin: ["hover", "focus", "responsive"],
    },
  },
  plugins: [],
};
