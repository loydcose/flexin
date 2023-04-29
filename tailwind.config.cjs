/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        orange: "#e76456",
        yellow: "#f09b57",
        "dark-full": "#101010",
        "dark-90": "#4d4c4b",
        "dark-85": "#585656",
        "dark-50": "#9b9b9b",
        "dark-40": "#afafaf",
        "dark-10": "#ebebeb",
      },
    },
  },
  plugins: [],
}
