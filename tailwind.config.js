/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#5651e5",
        secondary: "#709dff",
        blue: "#003580",
      },
    },
  },
  plugins: [],
};
