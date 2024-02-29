/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8158A3",
        secondary: "#FFC74A",
      },
      fontFamily: {
        roboto: ["Roboto Slab", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
