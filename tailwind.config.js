/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: {
          50: "#edf1fc",
          100: "#d3d4e1",
          200: "#b6b8c9",
          300: "#989bb2",
          400: "#7c7f9b",
          500: "#636582",
          600: "#4c4f66",
          700: "#363849",
          800: "#21222e",
          900: "#0a0a16",
        },
        premier: {
          50: "#edf4fd",
          100: "#ced7e5",
          200: "#afbbcf",
          300: "#909fbb",
          400: "#7081a7",
          500: "#57668e",
          600: "#444d6f",
          700: "#303650",
          800: "#2b3147",
          900: "#080d17",
        },
      },
    },
  },
  plugins: [],
};
