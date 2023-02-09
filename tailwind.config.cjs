/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontSize: {
        homePageItems: "14px",
        detailPage: "16px"
      },
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif"
      }
    },
  },
  plugins: [],
}
