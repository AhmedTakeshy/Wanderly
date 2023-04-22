/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#73d7ff",
        secondary: "#6D40D7",
        custom_purple: "#5651e5",
      },
    },
  },
  plugins: [],
};
