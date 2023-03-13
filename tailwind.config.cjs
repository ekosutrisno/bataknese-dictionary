/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#656690",
        base100: "#866ba0",
        baseOrange: "#fc9c42",
        basePurple: "#a65fec",
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
