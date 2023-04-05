/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#5651e5",
        secondary: "#709dff",
      },
    },
  },
  plugins: [],
};
